import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Publed',
  metadataBase: new URL('https://www.publed.io/'),
  description:
    'Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.',
  keywords:
    'Science, Education, Knowledge, DeSci, Web, Web3, SOL, Solana, mint, collection, Knowledge Object, KO, Artifacts, Papers, Scientific Publishing, Publishing',
  openGraph: {
    type: 'website',
    title: 'Blog | Publed',
    description:
      'Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.',
    images: 'hero_publed.png',
    url: 'https://www.publed.io/',
    siteName: 'Publed',
  },
  appleWebApp: {
    title: 'Blog | Publed',
    startupImage: 'logo_twitter.png',
  },
  twitter: {
    title: 'Blog | Publed',
    description:
      'Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.',
    card: 'summary_large_image',
    site: '@publed_official',
    creator: '@publed_official',
    images: 'hero_publed.png',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article>{children}</article>;
}
