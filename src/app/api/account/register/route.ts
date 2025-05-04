import { NextRequest, NextResponse } from 'next/server';

import { ApiCortexServiceServer } from '../../../../services/apiCortexServiceServer';

export async function POST(req: NextRequest) {
  try {
    const authorization = req.headers.get('Authorization');
    const token = authorization?.replace('Bearer ', '');
    const { name, mail, phone, pass } = await req.json();

    console.log('[route:account:register] 🔍 Iniciando registro de usuário');
    console.log('[route:account:register] 🔍 Nome:', name);
    console.log('[route:account:register] 🔍 Email:', mail);
    console.log('[route:account:register] 🔍 Telefone:', phone);
    console.log('[route:account:register] 🔍 Senha:', pass);

    if (!name || !mail || !phone || !pass) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const api = new ApiCortexServiceServer(token);
    const { status, data } = await api.accountRegister({ name, mail, phone, pass });

    if (status !== 200) {
      return NextResponse.json({ error: 'Erro ao realizar login' }, { status: status });
    }
    
    const res = NextResponse.json({ 
      token: data.token,
      valid: data.valid,
     });

    return res;
  } catch (error) {
    console.error('💥 Erro no login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
