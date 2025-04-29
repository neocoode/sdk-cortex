'use client';

import { RootState } from '@/store';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IPlan, ISessionContextType, ISessionProviderProps, IUser } from './types';

const SessionContext = createContext<ISessionContextType | undefined>(undefined);

export function SessionProvider({ children }: ISessionProviderProps) {
  const [plan, setPlan] = useState<IPlan>({} as IPlan);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const sessionState = useSelector((state: RootState) => state.session);
  const profileState = useSelector((state: RootState) => state.profile);
  const configAllState = useSelector((state: RootState) => state.configAll);

  useEffect(() => {
    setPlan({
      id: configAllState.fields.plan,
      name: configAllState.fields.planName
    });
  }, [configAllState]);

  useEffect(() => {
     setUser({
      id: profileState?.id,
      name: profileState?.name,
      email: profileState?.email,
      avatar: profileState?.avatar
    });
  }, [profileState]);

  useEffect(() => {
    setIsLoggedIn(!!sessionState.userId);
  }, [sessionState]);

  return (
    <SessionContext.Provider value={{ plan, user, isLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 