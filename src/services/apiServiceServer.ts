/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpClient } from "./httpClient";

type Json = Record<string, any>;

export class ApiServiceServer {
  private api: HttpClient;

  constructor(token?: string | null) {
    console.log('🔧 Iniciando construção do ApiService');
    const resolvedBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    console.log('🌐 URL base configurada:', resolvedBaseUrl);

    if (!resolvedBaseUrl.trim()) {
      console.error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
      throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
    }

    console.log('🔐 Configurando headers com token:', token ? 'presente' : 'ausente');
    this.api = new HttpClient(`${resolvedBaseUrl}/api`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  async accountAccess(email: string, password: string): Promise<Json> {
    console.log('🔑 Iniciando acesso à conta');
    console.log('📧 Email:', email);
    
    try {
      const response = await this.api.post<Json>('/account/access', { email, password }, {
        headers: {  },
      });

      console.log('🔐 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> response', response);
      // const cookieStore = await cookies();
      // const token = cookieStore.get('loginToken');
      // console.log('🔐 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Token recebido:', token);
      console.log('✅ Acesso à conta realizado com sucesso');
      return response;
    } catch (error) {
      console.error('❌ Erro ao acessar conta:', error);
      throw error;
    }
  }
}
