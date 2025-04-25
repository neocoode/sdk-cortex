// app/layout.tsx
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Providers } from './providers';

import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luma App',
  description: 'Aplicação Luma com Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
