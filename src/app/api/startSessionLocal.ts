/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { decodeToken } from '@/utils/jwts';


export const startSessionLocal = async (tokenInputString: string | undefined) => {
  const api = new ApiCortexServiceServer(tokenInputString);
  const resultValidateSession = await api.validateSession();

  if (resultValidateSession.status == 200 && resultValidateSession.data.valid) {
    const decodedToken = decodeToken(resultValidateSession.data.token);

    const data = {
      logged: decodedToken?.logged || false,
      token: resultValidateSession.data.token,
      valid: resultValidateSession.data.valid,
      dateCheck: new Date(),
    };
    return data;
  }

  const { status, data: response } = await api.startSession();

  if (status !== 200) {
    return {
      error: 'Erro ao iniciar sessão',
      valid: false,
    };
  }

  console.log('[startSessionLocal]: Token retornado da sessão:', response.token);
  api.setToken(response.token);
  const { status: recheckStatus, data: recheck } = await api.validateSession();

  if (recheckStatus !== 200 || !recheck.valid) {
    return {
      ...recheck,
      error: 'Erro ao validar sessão',
      valid: false,
    };
  }

  console.log('[startSessionLocal]: Sessão validada com sucesso:', { response });

  const decodedToken = decodeToken(response.token);
  console.log('[startSessionLocal]: Token decodificado:', { decodedToken });

  const data = {
    logged: response.logged,
    token: response.token,
    valid: true,
    dateCheck: new Date(),
  };
  return data;
}

