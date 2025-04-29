'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomChat from '@/components/customChat/customChat';
import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';

export default function ChatPage() {
  const router = useRouter();

  const dispatch = useDispatch();
  const { valid, loading, token  } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(validateSessionRequest());
  }, []);

  useEffect(() => {
    if ((!loading && !valid) || (!token)) {
        router.push('/splash');
    }
  }, [loading, valid, router, token]);
  
  return <CustomChat />;
}