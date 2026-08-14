import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'AA Auction Actions',
  description: 'AI-powered auction arbitrage operations console',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
