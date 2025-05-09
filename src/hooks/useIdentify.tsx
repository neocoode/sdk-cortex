'use client';

import { configNameSet } from '@/redux/configAll/slice';
import { getClientIP } from '@/utils/deviceUtils';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const FINGERPRINT_KEY = 'dvcfp';

function useIdentify(): string | null {
  const dispatch = useDispatch();
  const [fingerprint, setFingerprint] = useState<string | null>(null);

  useEffect(() => {
    const loadDeviceData = async () => {
      const fp = await fetchFingerprint();     // <- Agora armazena retorno corretamente
      const ip = await getClientIP();

      if (fp) {
        dispatch(configNameSet({ name: 'fingerprint', value: fp }));
        setFingerprint(fp);                    // <- Atualiza o estado
      }

      if (ip) {
        dispatch(configNameSet({ name: 'clientIP', value: ip }));
      }
    };

    loadDeviceData();
  }, [dispatch]);

  const fetchFingerprint = async (): Promise<string | null> => {
    const stored = localStorage.getItem(FINGERPRINT_KEY);
    if (stored) return stored;

    try {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const visitorId = result.visitorId;

      localStorage.setItem(FINGERPRINT_KEY, visitorId);
      return visitorId;
    } catch (error) {
      console.error('Erro ao gerar fingerprint:', error);
      return null;
    }
  };

  return fingerprint;
}

export default useIdentify;
