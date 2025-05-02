/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { HttpClient } from "./httpClient";

type Json = Record<string, any>;

export class ApiService {
  private api: HttpClient;

  constructor(token?: string | null) {
    const resolvedBaseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    if (!resolvedBaseUrl.trim()) {
      throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
    }

    this.api = new HttpClient(resolvedBaseUrl, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  async setToken(token: string): Promise<void> {
    this.api.setToken(token);
  }

  async validateSession(): Promise<Json> {    
    return this.api.get<Json>('/chat/session');
  }

  async startSession(): Promise<Json> {
    return this.api.post<Json>('/chat/start-session', {}, {
      headers: {  },
    });
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

}
