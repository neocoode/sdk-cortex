import { NextRequest, NextResponse } from 'next/server';

import { ApiCortexServiceServer } from '../../../../services/apiCortexServiceServer';

export async function POST(req: NextRequest) {
  try {
    const authorization = req.headers.get('Authorization');
    const token = authorization?.replace('Bearer ', '');
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e senha obrigatórios' }, { status: 400 });
    }

    const api = new ApiCortexServiceServer(token);
    const response = await api.login(email, password);

    if (!response) {
      return NextResponse.json({ error: 'Erro ao realizar login' }, { status: 500 });
    }
    
    const res = NextResponse.json({ 
      token: response.token,
      valid: response.valid,
     });

    return res;
  } catch (error) {
    console.error('💥 Erro no login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
