/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const authorization = req.headers.get('Authorization');
    let token = authorization?.replace('Bearer ', '');

    if (token === '<nil>') {
      token = undefined;
    }

    if (!token) {
      return NextResponse.json({
        error: 'Solicitação não autorizada',
        valid: false,
      }, { status: 401 });
    }

    const { chatId, message } = await req.json();
    const api = new ApiCortexServiceServer(token);
    console.log('[1/2][chat/suggestions route]: Iniciando processamento da solicitação', { chatId, message });
    const { status, data } = await api.getSuggestions({ chatId, message });
    console.log('[2/2][chat/suggestions route]: Resposta da API Cortex:', { status, data });
    
    if (status === 200) {
      return NextResponse.json(data, { status });
    }

    return NextResponse.json({
      error: 'Solicitação não autorizada',
      valid: false,
    }, { status: 401 });

  } catch (error: any) {
    return NextResponse.json({
      error: 'Erro ao processar solicitação',
      details: error.message
    }, { status: 500 });
  }
}
