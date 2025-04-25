/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/ApiService.ts

import { HttpClient } from '@/services/httpClient';

type Json = Record<string, any>;

export class ApiService {
  private api: HttpClient;

  constructor(baseUrl?: string) {
    const resolvedBaseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL;

    if (!resolvedBaseUrl || resolvedBaseUrl.trim() === '') {
      throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
    }

    console.log('🔧 Criando cliente HTTP com baseUrl:', resolvedBaseUrl);
    this.api = new HttpClient(resolvedBaseUrl);
  }

  async validateSession(): Promise<Json> {
    console.log('🔍 Iniciando validação de sessão...');
    try {
      const response = await this.api.get<Json>('/chat/session');
      console.log('✅ Sessão validada com sucesso:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('❌ Erro ao validar sessão:', error);
      if (error?.response?.status === 401) {
        return { valid: false };
      }
      throw error;
    }
  }

  async startSession(userId: string): Promise<Json> {
    console.log('🚀 Iniciando nova sessão para usuário:', userId);
    try {
      const response = await this.api.post<Json>('/chat/start-session', { userId });
      console.log('✅ Sessão iniciada com sucesso:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Erro ao iniciar sessão:', error);
      throw error;
    }
  }

  async getUserProfile(): Promise<Json> {
    console.log('👤 Buscando perfil do usuário...');
    try {
      const response = await this.api.get<Json>('/u/p');
      console.log('✅ Perfil obtido com sucesso:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Erro ao obter perfil:', error);
      throw error;
    }
  }

  async listChats(): Promise<Json[]> {
    console.log('📋 Listando chats...');
    try {
      const response = await this.api.get<Json>('/chat/list');
      if (response?.data?.success && Array.isArray(response.data.chats)) {
        console.log('✅ Chats obtidos com sucesso:', response.data.chats);
        return response.data.chats;
      }
      console.log('⚠️ Nenhum chat encontrado');
      return [];
    } catch (error) {
      console.error('❌ Erro ao listar chats:', error);
      throw error;
    }
  }

  async sendMessage(message: string): Promise<Json> {
    console.log('📤 Enviando mensagem:', message);
    try {
      const response = await this.api.post<Json>('/chat/message', { message });
      console.log('✅ Mensagem enviada com sucesso:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Erro ao enviar mensagem:', error);
      throw error;
    }
  }
}
