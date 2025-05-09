/* eslint-disable @typescript-eslint/no-explicit-any */

import { FINGERPRINT_KEY, IP_KEY } from "@/vars/devices";
import { HttpClient } from "./httpClient";

type Json = Record<string, any>;

export class ApiServiceServer {
  private api: HttpClient;

  constructor(token?: string | null) {
    const resolvedBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    if (!resolvedBaseUrl.trim()) {
      console.error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
      throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
    }

    const fingerprint = localStorage.getItem(FINGERPRINT_KEY);
    const clientIP = localStorage.getItem(IP_KEY);
    const deviceInfo = btoa(`code:${fingerprint}:${clientIP}:end`);

    this.api = new HttpClient(`${resolvedBaseUrl}/api`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        'X-Device-Info': deviceInfo,
      },
    });
  }

  async accountAccess(data: { mail: string, pass: string }): Promise<Json> {
    try {
      const response = await this.api.post<Json>('/account/access', data, {
        headers: {  },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async accountRegister(data: { name: string, mail: string, phone: string, pass: string }): Promise<Json> {
    try {
      const response = await this.api.post<Json>('/account/register', data, {
        headers: {  },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async validateSession(dateCheck: Date): Promise<Json> {
    try {
      return  await this.api.post<Json>('/account/session', { dateCheck });
    } catch (error) {
      throw error;
    }
  }

  async getSuggestions(data: { chatId: string, message: string }): Promise<Json> {
    return this.api.post<Json>('/chat/suggestions', data);
  }

  async getUserProfile(): Promise<Json> {
    return this.api.get<Json>('/user/profile');
  }

  async sendMessage(data: { chatId: string | null, message: string }): Promise<Json> {
    return this.api.post<Json>('/chat/message', data);
  }
}
