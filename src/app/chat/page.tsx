/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomChat from '@/components/customChat/customChat';
import { useModal } from '@/contexts/modalContext';
import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';

export default function ChatPage() {
  const { onOpen } = useModal();
  const dispatch = useDispatch();

  const router = useRouter();
  const { valid, loading, token, dateCheck } = useSelector((state: RootState) => state.session);
  const configAllState = useSelector((state: RootState) => state.configAll);

  useEffect(() => {
    console.log('view > chat > token', token);
    const dataValue = {
      token: token || null,
      dateCheck: dateCheck || new Date(),
      SESSION_TIMEOUT_MINUTES: configAllState.fields?.SESSION_TIMEOUT_MINUTES || 1,
    };
    dispatch(validateSessionRequest(dataValue));
  }, []);

  useEffect(() => {
    if ((!loading && !valid) || (!token)) {
      router.push('/splash');
      return;
    }
  }, [loading, valid, router, token]);

  useEffect(() => {
    // if (!configAllState.fields?.showModalWelcomeCreative) {
    //   onOpen(WELCOME_CREATIVE as React.FC);
    // }
  }, [configAllState.fields?.showModalWelcomeCreative]);

  return <CustomChat />;
}