/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import { ApiCortexServiceServer } from '../../../../services/apiCortexServiceServer';
import { startSessionLocal } from '../../startSessionLocal';

export async function POST(req: NextRequest) {
  try {
    console.log('[accountAccess]: Iniciando processo de autenticação');

    const authorization = req.headers.get('Authorization');
    const token = authorization?.replace('Bearer ', '');
    const { mail, pass } = await req.json();

    console.log('[accountAccess]: Dados recebidos:', { mail, token: token ? 'presente' : 'ausente' });

    if (!mail || !pass) {
      console.log('[accountAccess]: Email ou senha não fornecidos');
      return NextResponse.json({ error: 'Email e senha obrigatórios' }, { status: 400 });
    }

    const api = new ApiCortexServiceServer(token);
    console.log('[accountAccess]: Iniciando chamada à API Cortex');
    const { status, data } = await api.accountAccess({ mail, pass });

    console.log('[accountAccess]: Resposta da API Cortex:', { status, data });

    if (status !== 200) {
      console.log('[accountAccess]: Erro na autenticação:', { status });
      return NextResponse.json({ error: 'Erro ao realizar login' }, { status: status });
    }

    console.log('[accountAccess]: Autenticação bem sucedida');
    console.log('[accountAccess]: Token recebido:', data.token);
    const result: any = await startSessionLocal(data.token);
    if (result?.error) {
      console.log('[accountAccess]: Erro ao validar sessão:', { result });
      return NextResponse.json({
        error: result.error,
        valid: result.valid,
      }, { status: 500 });
    } else {
      console.log('[accountAccess]: Sessão validada com sucesso:', { result });
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error: any) {
    console.error('[accountAccess]: Erro interno:', error.message);
    return NextResponse.json({ error: error.message || 'Erro interno do servidor' }, { status: 500 });
  }
}
