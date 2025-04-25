// src/services/HttpClient.ts
'use client';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface HttpOptions {
  headers?: Record<string, string>;
  cache?: RequestCache;
}

export class HttpClient {
  
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string, defaultOptions: HttpOptions = {}) {
    this.baseUrl = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(defaultOptions.headers ? defaultOptions.headers : {})
    };
  }

  setToken(token: string) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    }
  }

  private async request<T = any>(
    method: HttpMethod,
    url: string,
    data?: any,
    options: HttpOptions = {}
  ): Promise<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = {
      ...this.defaultHeaders,
      ...(options.headers ? options.headers : {})
    };

    const dataRequest = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
      cache: options.cache || 'no-store',
    }

    const response = await fetch(fullUrl, dataRequest);
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`❌ [${method}] ${url} falhou:`, errorBody);
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return response.json() as Promise<T>;
    }

    // fallback para texto
    return response.text() as unknown as T;
  }

  public get<T = any>(url: string, options?: HttpOptions): Promise<T> {
    return this.request<T>('GET', url, undefined, options);
  }

  public post<T = any>(url: string, data?: any, options?: HttpOptions): Promise<T> {
    return this.request<T>('POST', url, data, options);
  }

  public put<T = any>(url: string, data?: any, options?: HttpOptions): Promise<T> {
    return this.request<T>('PUT', url, data, options);
  }

  public patch<T = any>(url: string, data?: any, options?: HttpOptions): Promise<T> {
    return this.request<T>('PATCH', url, data, options);
  }

  public delete<T = any>(url: string, options?: HttpOptions): Promise<T> {
    return this.request<T>('DELETE', url, undefined, options);
  }
}
