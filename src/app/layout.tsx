import type { Metadata } from 'next';
import '../styles/global.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';

import { Geist, Geist_Mono, Nanum_Pen_Script, DM_Sans } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const nanumPenScript = Nanum_Pen_Script({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400', // Nanum Pen Script only has 400 weight
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shahil.co'),
  title: {
    default: 'Shahil | Full Stack Developer & Product Builder',
    template: '%s | Shahil',
  },
  description:
    'Portfolio of Shahil, a passionate full-stack software engineer and builder crafting web applications, AI automations, and intuitive digital experiences.',
  keywords: [
    'Shahil',
    'Full Stack Developer',
    'Software Engineer',
    'Product Builder',
    'Web Developer',
    'React',
    'Next.js',
    'AI Automations',
    'Flaro AI',
    'Portfolio',
  ],
  authors: [{ name: 'Shahil', url: 'https://github.com/shahil-kv' }],
  creator: 'Shahil',
  publisher: 'Shahil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/shahilimage.JPG', type: 'image/jpeg' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/shahilimage.JPG',
    apple: '/shahilimage.JPG',
  },
  openGraph: {
    title: 'Shahil | Full Stack Developer & Product Builder',
    description:
      'Explore projects, AI automations, and digital products built by Shahil.',
    url: 'https://shahil.co',
    siteName: 'Shahil.co',
    images: [
      {
        url: '/shahilimage.JPG',
        width: 1600,
        height: 1600,
        alt: 'Shahil Logo Avatar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahil | Full Stack Developer & Product Builder',
    description:
      'Explore projects, AI automations, and digital products built by Shahil.',
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
      '@id': 'https://shahil.co/#person',
      name: 'Shahil',
      jobTitle: 'Full Stack Developer & Product Builder',
      image: 'https://shahil.co/shahilimage.JPG',
      url: 'https://shahil.co',
      sameAs: [
        'https://github.com/shahil-kv',
        'https://www.instagram.com/_shahilee/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shahil.co/#website',
      url: 'https://shahil.co',
      name: 'Shahil.co',
      description:
        'Portfolio of Shahil, Full Stack Developer & Product Builder',
      publisher: {
        '@id': 'https://shahil.co/#person',
      },
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
        <link rel='icon' href='/shahilimage.JPG' />
        <link rel='apple-touch-icon' href='/shahilimage.JPG' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`bg-[url("/paper.png")] bg-repeat bg-left-top ${geistSans.variable} ${nanumPenScript.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        <div className='flex min-h-screen w-full flex-col'>
          <Header />
          <main className='flex-grow pt-16 lg:pt-20'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
