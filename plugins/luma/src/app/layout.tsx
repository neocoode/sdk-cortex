// app/layout.tsx
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Providers } from './providers';

import './globals.css';
import Toast from '@/components/toast';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luma App',
  description: 'Aplicação Luma com Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`h-screen relative ${geist.className} antialiased`} >
        <Providers>
          {children}
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
