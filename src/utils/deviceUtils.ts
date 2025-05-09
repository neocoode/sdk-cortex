import { FINGERPRINT_KEY, IP_KEY } from '@/vars/devices';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


export async function getFingerprint(): Promise<string | null> {
  const stored = localStorage.getItem(FINGERPRINT_KEY);
  if (stored) return stored;

  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorId = result.visitorId;

    localStorage.setItem(FINGERPRINT_KEY, visitorId);
    return visitorId;
  } catch (err) {
    console.error('Erro ao gerar fingerprint:', err);
    return null;
  }
}

export async function getClientIP(): Promise<string | null> {
  const stored = localStorage.getItem(IP_KEY);
  if (stored) return stored;

  const providers = [
    async () => {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      return data.ip;
    },
    async () => {
      const res = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN'); // opcional: token gratuito
      const data = await res.json();
      return data.ip;
    },
    async () => {
      const res = await fetch('https://ipv4.icanhazip.com/');
      const ip = await res.text();
      return ip.trim();
    },
    async () => {
      const res = await fetch('http://ip-api.com/json/');
      const data = await res.json();
      return data.query;
    }
  ];

  for (const getIp of providers) {
    try {
      const ip = await getIp();
      if (ip) {
        localStorage.setItem(IP_KEY, ip);
        return ip;
      }
    } catch (err) {
      console.warn('🔁 Tentando próximo provedor de IP...');
    }
  }

  console.error('❌ Falha ao obter IP em todos os provedores');
  return null;
}

