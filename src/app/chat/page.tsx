/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomChat from '@/components/customChat/customChat';
import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';
import { useModal } from '@/contexts/modalContext';
import { WELCOME_CREATIVE } from '@/components/modals/modalNames';

export default function ChatPage() {
  const { onOpen } = useModal();
  const dispatch = useDispatch();

  const router = useRouter();
  const { valid, loading, token  } = useSelector((state: RootState) => state.session);
  const configAllState = useSelector((state: RootState) => state.configAll);

  useEffect(() => {
    dispatch(validateSessionRequest());
  }, []);

  useEffect(() => {
    if ((!loading && !valid) || (!token)) {
        router.push('/splash');
        return;
    }
  }, [loading, valid, router, token]);

  useEffect(() => {
    console.log(configAllState.fields);
    if (!configAllState.fields?.showModalWelcomeCreative) {  
      console.log('open modal');
      onOpen(WELCOME_CREATIVE as React.FC);
    }
  }, [configAllState.fields?.showModalWelcomeCreative]);
  
  return <CustomChat />;
}