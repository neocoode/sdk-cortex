/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomChat from '@/components/customChat/customChat';
import { validateSessionRequest } from '@/redux/session/slice';
import { RootState } from '@/store';

export default function ChatPage() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { token, dateCheck } = useSelector((state: RootState) => state.session);
  const configAllState = useSelector((state: RootState) => state.configAll);

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    setIsLoading(true);
    console.log('>>>>> view > chat > isLoading', isLoading);
    const dataValue = {
      token: token || null,
      dateCheck: dateCheck || new Date(),
      SESSION_TIMEOUT_MINUTES: configAllState.fields?.SESSION_TIMEOUT_MINUTES || 1,
    };
    dispatch(validateSessionRequest(dataValue));
  }, []);

  useEffect(() => {
    // if (!configAllState.fields?.showModalWelcomeCreative) {
    //   onOpen(WELCOME_CREATIVE as React.FC);
    // }
  }, [configAllState.fields?.showModalWelcomeCreative]);

  return <CustomChat />;
}