// app/layout.tsx
import type { Metadata } from 'next';
import React, { StrictMode } from 'react';

import { Geist } from 'next/font/google';

import CustomLayout from '@/components/customLayout';
import Toast from '@/components/toast';
import './globals.css';
import { Providers } from './providers';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luma App',
  description: 'Aplicação Luma com Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`h-screen relative ${geist.className} antialiased`} >
        <div id="modal-root" />
        <StrictMode>
          <Providers>
            <CustomLayout>
              {children}
            </CustomLayout>
            <Toast />
          </Providers>
        </StrictMode>
      </body>
    </html>
  );
}
