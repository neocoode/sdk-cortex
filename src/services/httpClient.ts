/* eslint-disable @typescript-eslint/no-explicit-any */


// src/services/HttpClient.ts
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface HttpOptions {
  headers?: Record<string, string>;
  cache?: RequestCache;
}

export interface HttpResponse<T> {
  status: number;
  data: T;
}

export class HttpClient {
  
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private cookies: Record<string, string> = {};

  constructor(baseURL: string, defaultOptions: HttpOptions = {}) {
    this.baseUrl = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(defaultOptions.headers ? defaultOptions.headers : {})
    };
  }

  setToken(token: string | undefined) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    }
  }

  getCookie(name: string): string | undefined {
    return this.cookies[name];
  }

  private async request<T = any>(
    method: HttpMethod,
    url: string,
    data?: any,
    options: HttpOptions = {}
  ): Promise<HttpResponse<T>> {
    try {
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
        credentials: 'include' as const,
      }

      const response = await fetch(fullUrl, dataRequest);
      
      if (!response.ok) {
        const errorBody = await response.text();
        return {
          status: response.status,
          data: {
            error: `HTTP ${response.status}: ${errorBody}`,
            valid: false,
            response: errorBody
          } as T
        };
      }

      const contentType = response.headers.get('content-type') || '';
      let responseData: T;
      
      if (contentType.includes('application/json')) {
        responseData = await response.json() as T;
      } else {
        responseData = await response.text() as unknown as T;
      }

      return {
        status: response.status,
        data: responseData
      };
    } catch (error: any) {
      return {
        status: error.status || 500,
        data: {
          error: error.message || 'Erro desconhecido',
          valid: false,
          response: error.response || null
        } as T
      };
    }
  }

  public get<T = any>(url: string, options?: HttpOptions): Promise<HttpResponse<T>> {
    return this.request<T>('GET', url, undefined, options);
  }

  public post<T = any>(url: string, data?: any, options?: HttpOptions): Promise<HttpResponse<T>> {
    return this.request<T>('POST', url, data, options);
  }

  public put<T = any>(url: string, data?: any, options?: HttpOptions): Promise<HttpResponse<T>> {
    return this.request<T>('PUT', url, data, options);
  }

  public patch<T = any>(url: string, data?: any, options?: HttpOptions): Promise<HttpResponse<T>> {
    return this.request<T>('PATCH', url, data, options);
  }

  public delete<T = any>(url: string, options?: HttpOptions): Promise<HttpResponse<T>> {
    return this.request<T>('DELETE', url, undefined, options);
  }
}
