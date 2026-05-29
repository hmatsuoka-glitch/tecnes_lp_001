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
  icons: {
    icon: '/images/tecnes_icon.png',
  },
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

        {/* Google Analytics 4 (G-7KCESC81LT) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7KCESC81LT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7KCESC81LT');
            `,
          }}
        />

        {/* TikTok Pixel (D8CJ8LBC77U7N1D0F10G) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D8CJ8LBC77U7N1D0F10G');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />

        {/* Microsoft Clarity (wykayl2suz) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wykayl2suz");
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
