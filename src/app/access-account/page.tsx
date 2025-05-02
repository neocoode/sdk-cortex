'use client';

import { LogIn } from '@/redux/account/slice';
import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AccessAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [step, setStep] = useState<'input' | 'password'>('input');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const sessionState = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (sessionState?.logged && sessionState?.token) {
      router.push('/chat');
    }
  }, [sessionState?.logged, sessionState?.token]);

  // Nova regex:
  // - Pelo menos uma letra maiúscula
  // - Pelo menos um dos caracteres @, # ou $
  // - Pelo menos 4 números (não necessariamente seguidos)
  const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$])(?=(?:.*\d){4,}).+$/;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('password');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const api = new ApiServiceServer(sessionState.token);
    const response = await api.accountAccess(email, password);
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> response', response);
    dispatch(LogIn({ email, password }));
  };
  

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError('A senha deve seguir os critérios exigidos.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Que bom que você voltou</h1>
        <form onSubmit={step === 'input' ? handleContinue : handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-green-700 mb-1">
              Endereço de e-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-green-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="nome@exemplo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={step === 'password'}
            />
          </div>

          {step === 'password' && (
            <div>
              <label htmlFor="password" className="block text-sm text-green-700 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-green-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Digite sua senha"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-red-600 text-xs mt-1">{passwordError}</p>
              )}
              <div className="text-xs text-gray-500 mt-2 space-y-1">
                <p>A senha deve conter:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>Conter uma letra maiúscula</li>
                  <li>Caracter especial permitido: @, # ou $</li>
                  <li>Pelo menos 4 números</li>
                </ul>
                <p className="mt-1 text-gray-400">
                  Exemplo: <span className="font-medium text-gray-500">Neo@2024</span>
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded-md py-2 font-medium hover:bg-green-700 transition"
          >
            {step === 'input' ? 'Continuar' : 'Entrar'}
          </button>
        </form>

        <div className="text-center text-sm">
          Não tem uma conta? <a href="#" className="text-green-600 hover:underline">Cadastrar</a>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <span className="flex-1 h-px bg-gray-300" />
          <span>ou</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="text-xs text-center text-green-600 space-x-2 mt-6">
          <a href="#" className="hover:underline">Termos de uso</a>
          <span>|</span>
          <a href="#" className="hover:underline">Política de privacidade</a>
        </div>
      </div>
    </div>
  );
}

export default AccessAccount;
