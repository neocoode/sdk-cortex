/* eslint-disable @typescript-eslint/no-explicit-any */

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

    this.api = new HttpClient(`${resolvedBaseUrl}/api`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  async accountAccess(email: string, password: string): Promise<Json> {
    try {
      const response = await this.api.post<Json>('/account/access', { email, password }, {
        headers: {  },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async accountRegister(name: string, email: string, phone: string, password: string): Promise<Json> {
    try {
      const response = await this.api.post<Json>('/account/register', { name, email, phone, password }, {
        headers: {  },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async validateSession(dateCheck: Date, SESSION_TIMEOUT_MINUTES: number): Promise<Json> {
    try {
      return  await this.api.post<Json>('/session', { dateCheck, SESSION_TIMEOUT_MINUTES });
    } catch (error) {
      throw error;
    }
  }
}
