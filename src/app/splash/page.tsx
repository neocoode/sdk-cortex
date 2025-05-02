'use client';

import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SplashPage() {
  const router = useRouter();
  const { valid, loading, token, dateCheck } = useSelector((state: RootState) => state.session);
  const configAllState = useSelector((state: RootState) => state.configAll);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('view > splash > token', token);
    const dataValue = {
      token: token || null,
      dateCheck: dateCheck || new Date(),
      SESSION_TIMEOUT_MINUTES: configAllState.fields?.SESSION_TIMEOUT_MINUTES || 1,
    };
    dispatch(validateSessionRequest(dataValue));
  }, []);


  useEffect(() => {
    if (!loading && valid && token) {
      const timer = setTimeout(() => {
        router.push('/chat');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading, valid, token, router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-100">Bem-vindo</h1>
        <p className="mt-4 text-gray-600 text-2xl">Carregando...</p>
      </div>
    </div>
  );
} 