import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trillby & Chadwick | Helsinki Fine Dining',
  description:
    'Trillby & Chadwick is a luxury Nordic fine dining restaurant in Helsinki, crafted around seasonal Finnish ingredients and quiet hospitality.',
  keywords: [
    'Helsinki fine dining',
    'Nordic restaurant',
    'Michelin style restaurant Helsinki',
    'Trillby and Chadwick'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
