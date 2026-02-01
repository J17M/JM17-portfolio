import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Juan Monarrez-Gonzalez | Cybersecurity Portfolio',
  description: 'Cybersecurity portfolio showcasing penetration testing skills, SOC analysis experience, and security research.',
  keywords: ['cybersecurity', 'penetration testing', 'security researcher', 'SOC analyst', 'CTF'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}