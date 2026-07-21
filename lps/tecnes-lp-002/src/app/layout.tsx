import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "【元野球部へ】次の本気を、この現場で。｜TECNES 採用",
  description:
    "甲子園は終わっても、お前の全力はまだ終わっていない。元野球部・体育会系のためのTECNES採用サイト。未経験・学歴不問。班（チーム）で挑む電気設備の技術者。努力が資格・給与・キャリアに直結する。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        {/* JS有効時のみ .js-anim を付与（スクロールアニメの初期非表示はこのクラス配下でのみ有効。
            no-js環境では全コンテンツが最初から表示される） */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-anim');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
