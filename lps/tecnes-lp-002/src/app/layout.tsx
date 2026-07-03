import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
