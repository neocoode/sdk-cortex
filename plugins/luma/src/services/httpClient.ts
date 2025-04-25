/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/HttpClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string, defaultOptions: AxiosRequestConfig = {}) {
    this.client = axios.create({
      baseURL,
      ...defaultOptions,
    });

    // Interceptadores globais (opcional)
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Erro HTTP:', error);
        return Promise.reject(error);
      }
    );
  }

  public get<T = never>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, options);
  }

  public post<T = any>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, options);
  }

  public put<T = any>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, options);
  }

  public delete<T = any>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, options);
  }

  public patch<T = any>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.patch<T>(url, data, options);
  }

  // Getter direto para o AxiosInstance, se necessário
  public instance(): AxiosInstance {
    return this.client;
  }
}
