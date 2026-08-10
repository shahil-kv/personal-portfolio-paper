import type { Metadata } from 'next';
import '../styles/global.css';
import Header from '@/components/layout/Header';
import {
  Bricolage_Grotesque,
  Newsreader,
  DM_Mono,
  Caveat,
} from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
});

const SITE = 'https://shahilkv.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Shahil KV — Developer, founder, automation builder',
    template: '%s | Shahil KV',
  },
  description:
    'I build automation for businesses drowning in manual work, then film myself doing it — mostly in Malayalam. Projects, videos and how to reach me.',
  keywords: [
    'Shahil KV',
    'Automation builder',
    'Claude Code',
    'MCP',
    'AI agents',
    'Malayalam tech videos',
    'Full stack developer Kerala',
    'Flaro',
  ],
  authors: [{ name: 'Shahil KV', url: 'https://github.com/shahil-kv' }],
  creator: 'Shahil KV',
  publisher: 'Shahil KV',
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/shahilimage.JPG', type: 'image/jpeg' },
    ],
    apple: '/shahilimage.JPG',
  },
  openGraph: {
    title: 'Shahil KV — Developer, founder, automation builder',
    description:
      'Automation, AI agents and the videos about building them. From Kerala.',
    url: SITE,
    siteName: 'shahilkv.in',
    images: [
      {
        url: '/shahilimage.JPG',
        width: 1600,
        height: 1600,
        alt: 'Shahil KV',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahil KV — Developer, founder, automation builder',
    description:
      'Automation, AI agents and the videos about building them. From Kerala.',
    images: ['/shahilimage.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Shahil KV',
      jobTitle: 'Developer, founder and automation builder',
      image: `${SITE}/shahilimage.JPG`,
      url: SITE,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/shahil-kv',
        'https://www.instagram.com/_shahilee/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'shahilkv.in',
      description:
        'Portfolio of Shahil KV — developer, founder and automation builder.',
      publisher: { '@id': `${SITE}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${newsreader.variable} ${dmMono.variable} ${caveat.variable} antialiased`}
      >
        <Header />
        <main className='notebook'>{children}</main>
      </body>
    </html>
  );
}
