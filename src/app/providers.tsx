'use client';

import { SessionProvider } from '@/contexts/sessionContext';
import { ThemeProvider } from '@/themes/themeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';
import { ModalProvider } from '@/contexts/modalContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ModalProvider>
            <SessionProvider>
              {children}
            </SessionProvider>
          </ModalProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
