/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const authorization = req.headers.get('Authorization');
    const token = authorization?.replace('Bearer ', '');
    const api = new ApiCortexServiceServer(token);

    if (!token) {
      const response = await api.startSession();
      api.setToken(response.token);
      const recheck = await api.validateSession();

      if (!recheck.valid) {
        return NextResponse.json(recheck, { status: 400 });
      }

      const data = {
        logged: response.logged,
        token: response.token,
        valid: true,
        dateCheck: new Date(),
      };
      return NextResponse.json(data, { status: 200 });
    }

    const recheck = await api.validateSession();
    if (!recheck.valid) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
    }

    const data = {
      logged: recheck.logged,
      token: token,
      valid: true,
      dateCheck: new Date(),
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro ao validar sessão:', error);
    return NextResponse.json({ error: 'Erro ao validar sessão', valid: true }, { status: 400 });
  }
}
