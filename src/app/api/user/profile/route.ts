/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('[1/2][account/profile route]: Iniciando processamento da solicitação');
  try {
    const authorization = req.headers.get('Authorization');
    console.log('[2/2][account/profile route]: Authorization header:', authorization);
    
    let token = authorization?.replace('Bearer ', '');
    console.log('[3/2][account/profile route]: Token extraído:', token);

    if (token === '<nil>') {
      console.log('[4/2][account/profile route]: Token é <nil>, definindo como undefined');
      token = undefined;
    }

    if (!token) {
      console.log('[5/2][account/profile route]: Token não encontrado na solicitação');
      return NextResponse.json({
        error: 'Solicitação não autorizada',
        valid: false,
      }, { status: 401 });
    }

    console.log('[6/2][account/profile route]: Iniciando chamada à API Cortex');
    const api = new ApiCortexServiceServer(token);
    const { status, data } = await api.getUserProfile();
    console.log('[7/2][account/profile route]: Resposta da API Cortex:', { status, data });
    
    if (status === 200) {
      console.log('[8/2][account/profile route]: Status diferente de 200, retornando erro');
      return NextResponse.json(data, { status });
    }

    console.log('[9/2][account/profile route]: Retornando erro de autorização');
    return NextResponse.json({
      error: 'Solicitação não autorizada',
      valid: false,
    }, { status: 401 });

  } catch (error: any) {
    console.error('[10/2][account/profile route]: Erro ao processar solicitação:', error);
    return NextResponse.json({
      error: 'Erro ao processar solicitação',
      details: error.message
    }, { status: 500 });
  }
}
