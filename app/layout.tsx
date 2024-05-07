import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Publed',
  metadataBase: new URL('https://www.publed.io/'),
  description: 'Empower by Knowledge',
  keywords:
    'Science, Education, Knowledge, DeSci, Web, Web3, SOL, Solana, mint, collection, Knowledge Object, KO, Artifacts, Papers, Scientific Publishing, Publishing',
  openGraph: {
    type: 'website',
    title: 'Publed',
    description: 'Empower by Knowledge',
    images: 'hero_publed.png',
    url: 'https://www.publed.io/',
    siteName: 'Publed',
  },
  appleWebApp: {
    title: 'Publed',
    startupImage: 'logo_twitter.png',
  },
  twitter: {
    title: 'Publed',
    description: 'Empower by Knowledge',
    card: 'summary_large_image',
    site: '@publed_official',
    creator: '@publed_official',
    images: 'hero_publed.png',
  },
  // manifest: "./manifest.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
