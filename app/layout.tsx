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
  title: '採用情報｜株式会社TECNES',
  description: '大阪・東大阪を拠点とする電気工事・通信・電気土木・空調衛生の総合工事会社、株式会社TECNESの採用サイトです。',
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
