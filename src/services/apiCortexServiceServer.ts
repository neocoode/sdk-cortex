/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "./httpClient";

type Json = Record<string, any>;

export class ApiCortexServiceServer {
  private api: HttpClient;

  constructor(token?: string | null) {
    const resolvedBaseUrl = process.env.NEXT_PUBLIC_CORTEX_URL || '';
    if (!resolvedBaseUrl.trim()) {
      throw new Error('❌ NEXT_PUBLIC_CORTEX_URL is not defined');
    }

    this.api = new HttpClient(`${resolvedBaseUrl}`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  async accountAccess(email: string, password: string): Promise<Json> {
    return this.api.post<Json>('/account/access', { email, password });
  }

  async accountRegister(name: string, email: string, phone: string, password: string): Promise<Json> {
    return this.api.post<Json>('/account/register', { name, email, phone, password });
  }

  async validateSession(): Promise<Json> {
    return this.api.get<Json>('/chat/session');
  }

  async startSession(): Promise<Json> {
    return this.api.post<Json>('/chat/start-session');
  }

  async getUserProfile(): Promise<Json> {
    return this.api.get<Json>('/u/p');
  }

  async listChats(): Promise<Json[]> {
    const data = await this.api.get<Json>('/chat/list');
    return Array.isArray(data.chats) ? data.chats : [];
  }

  async sendMessage(chatId: string, message: string): Promise<Json> {
    return this.api.post<Json>('/chat/message', { message }, { headers: { chti: chatId } });
  }

  async getSuggestions(chatId: string, message: string): Promise<Json> {
    return this.api.post<Json>('/chat/suggestions', { message }, { headers: { chti: chatId } });
  }

  setToken(token: string) {
    this.api.setToken(token);
  }
}
