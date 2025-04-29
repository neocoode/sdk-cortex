'use client';

import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SplashPage() {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSessionRequest());
  }, []);

  const { valid, loading } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (!loading && valid) {
      const timer = setTimeout(() => {
        router.push('/chat');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading, valid, router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-100">Bem-vindo</h1>
        <p className="mt-4 text-gray-600 text-2xl">Carregando...</p>
      </div>
    </div>
  );
} 