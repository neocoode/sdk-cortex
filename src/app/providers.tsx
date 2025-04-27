'use client';

import { ThemeProvider } from '@/themes/themeContext';
import { Provider } from 'react-redux';
import { store } from '../store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  );
} 