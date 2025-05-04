/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { NextRequest, NextResponse } from 'next/server';
import { startSessionLocal } from '../startSessionLocal';
import { decodeToken } from '@/utils/jwts';

export async function POST(req: NextRequest) {
  try {
    console.log('[1/8][session route]: Iniciando validação de sessão');
    const authorization = req.headers.get('Authorization');
    let token = authorization?.replace('Bearer ', '');
    console.log('[2/8][session route]: Token recebido:', token ? 'presente' : 'ausente');
    
    console.log('>>>>>>>>> token:', token);
    if (token === '<nil>') {
      token = undefined;
    }

    if (token) {
      const api = new ApiCortexServiceServer(token);
      const { status: validateStatus, data: recheck } = await api.validateSession();
      console.log('[3/8][session route]: Status da validação:', validateStatus);

      if (validateStatus !== 200 || !recheck.valid) {
        console.log('[4/8][session route]: Sessão inválida, iniciando nova sessão');
        const result: any = await startSessionLocal(undefined);

        if (result?.error) {
          console.log('[5/8][session route]: Erro ao iniciar nova sessão:', result.error);
          return NextResponse.json({
            error: result.error,
            valid: result.valid,
          }, { status: 500 });
        } else {
          console.log('[6/8][session route]: Nova sessão iniciada com sucesso');
          return NextResponse.json(result, { status: 200 });
        }
      }

      console.log('[7/8][session route]: Sessão válida, decodificando token');
      console.log('[7/8][session route]: recheck:', recheck);

      const decodedToken = decodeToken(recheck.token);
      const data = {
        logged: decodedToken?.logged || false,
        token: token,
        valid: true,
        dateCheck: new Date(),
      };
      console.log('[8/8][session route]: Retornando dados da sessão');
      return NextResponse.json(data, { status: 200 });
    }

    console.log('[4/8][session route]: Sessão inválida, iniciando nova sessão');
    const result: any = await startSessionLocal(undefined);

    if (result?.error) {
      console.log('[5/8][session route]: Erro ao iniciar nova sessão:', result.error);
      return NextResponse.json({
        error: result.error,
        valid: result.valid,
      }, { status: 500 });
    } else {
      console.log('[6/8][session route]: Nova sessão iniciada com sucesso');
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error: any) {
    console.error('[ERROR][session route]: Erro ao processar sessão:', error.message);
    return NextResponse.json({
      error: 'Erro ao validar sessão',
      valid: false,
      details: error.message
    }, { status: 500 });
  }
}
