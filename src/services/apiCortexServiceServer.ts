/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpResponse } from "./httpClient";

type Json = Record<string, any>;

export class ApiCortexServiceServer {
  private api: HttpClient;

  constructor(token?: string | null) {
    const resolvedBaseUrl = process.env.NEXT_PUBLIC_CORTEX_URL || '';
    if (!resolvedBaseUrl.trim()) {
      throw new Error('❌ NEXT_PUBLIC_CORTEX_URL is not defined');
    }
    
    console.log('[ApiCortexServiceServer]: Token recebido:', token);
    this.api = new HttpClient(`${resolvedBaseUrl}`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  async accountAccess(data: { mail: string, pass: string }): Promise<HttpResponse<Json>> {
    return this.api.post<Json>('/account/access', data);
  }

  async accountRegister(data: { name: string, mail: string, phone: string, pass: string }): Promise<HttpResponse<Json>> {
    return this.api.post<Json>('/account/register', data);
  }

  async validateSession(): Promise<HttpResponse<Json>> {
    try {
      return this.api.get<Json>('/account/session');
    } catch (error: any) {
      return {
        status: error.status || 500,
        data: {
          error: error.message || 'Erro desconhecido',
          valid: false,
          response: error.response || null
        }
      };
    }
  }

  async startSession(): Promise<HttpResponse<Json>> {
    try {
      return this.api.post<Json>('/account/start-session');
    } catch (error: any) {
      return {
        status: error.status || 500,
        data: {
          error: error.message || 'Erro desconhecido',
          valid: false,
          response: error.response || null
        }
      };
    }
  }

  async getUserProfile(): Promise<HttpResponse<Json>> {
    return this.api.get<Json>('/user/profile');
  }

  async listChats(): Promise<HttpResponse<Json[]>> {
    const response = await this.api.get<Json>('/chat/list');
    return {
      status: response.status,
      data: Array.isArray(response.data.chats) ? response.data.chats : []
    };
  }

  async sendMessage(chatId: string, message: string): Promise<HttpResponse<Json>> {
    return this.api.post<Json>('/chat/message', { message }, { headers: { chti: chatId } });
  }

  async getSuggestions({ chatId, message }: { chatId: string, message: string }): Promise<HttpResponse<Json>> {
    return this.api.post<Json>('/chat/suggestions', { message }, { headers: { chatId } });
  }

  setToken(token: string | undefined) {
    this.api.setToken(token);
  }
}
