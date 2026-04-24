import type { Metadata } from 'next';
import { Noto_Sans_JP, Poppins } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: '新卒採用情報｜千代田工販株式会社',
  description: '千代田工販株式会社の新卒採用情報サイトです。',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="/vendor/splide.min.css" />
        <link rel="stylesheet" href="/vendor/swiper-bundle.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
