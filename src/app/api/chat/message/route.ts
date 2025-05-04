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
    const { status, data } = await api.sendMessage({ chatId, message });

    if (status == 200) {
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
