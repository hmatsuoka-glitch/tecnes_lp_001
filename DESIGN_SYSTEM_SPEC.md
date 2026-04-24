# 千代田工販株式会社 新卒採用LP デザインシステム仕様書

本ドキュメントは、Next.js 14 + CSS Modulesで構築された新卒採用LP（`千代田工販株式会社`）を、別の開発者が完全に同じ見た目・構成で再現できるレベルで言語化した仕様書である。対象リポジトリ内の `app/`・`components/` 配下のコードを読解し、数値・コピーは原文から抽出している。推測に依拠した箇所には必ず `※推測` と付記している。

---

## 1. メタ情報

- **ページタイトル**: 新卒採用情報｜千代田工販株式会社
- **description**: 千代田工販株式会社の新卒採用情報サイトです。
- **目的**: 電機機械の専門商社・千代田工販株式会社の新卒学生を対象とした採用ブランディング＆エントリー誘導。事業内容（商社／製造）、社員紹介、働く環境、数字で見る会社情報を1ページで俯瞰できるリクルートLP。
- **ターゲット**: 2027年卒を中心とした新卒就活生（理系・文系問わず技術専門商社に関心のある層）。
- **全体のトーン**: 企業理念「お役立ち」を体現する、誠実さと挑戦心を感じさせるコーポレート調。ネイビー（信頼）× ターコイズ（躍動）のツートーンを軸に、写真（実社員）・数字・アニメーションで「実在する会社の熱量」を伝える明るめBtoB調。余白を広く取り、日本語＋英字見出しを対にしたモダンコーポレート表現。

## 2. 技術スタック

### HTML構造の方針
- Next.js 14 (App Router) を採用。`app/layout.tsx` がルートレイアウト、`app/page.tsx` がLPトップ。
- セマンティックタグを厳密に使用：`<header>`（ページヘッダ）／`<main class="l-main">`／`<section id="...">`（各セクション）／`<footer>`。
- 見出しは `<h1>` がFV（メインビジュアル内のキャッチコピー画像）にのみ1つ、以降は `<h2>` がセクション見出し、`<h3>` がカード内見出しの階層構造。
- 反復要素は `<ul><li>`（ナビ／カテゴリータグ／数字カード）。

### CSS記法
- **CSS Modules（プレーンCSS）を主採用**。各コンポーネント配下に `XXX.module.css` を配置（例：`components/Business/Business.module.css`）。
- **Tailwind CSS 3.4** も併用しているが、実装上は `l-inner` / `u-sm-min` / `u-sm-max` など**グローバルクラス**（`app/globals.css`）として使用。Tailwindのユーティリティクラスはほぼ使われていない（`tailwind.config.ts` の `theme.extend` は空）。
- **1rem = 10px 化**：`html { font-size: 62.5%; }` を `app/globals.css` で宣言し、以降の寸法を `rem` で記述。
- CSS変数：`--swiper-theme-color: #007aff` / `--swiper-navigation-size: 44px` / `--font-noto-sans-jp` / `--font-poppins`（フォント変数はNext.js `next/font/google` が自動発行）。
- ブレークポイント判定：`@media screen and (max-width: 767px)`（SP） / `1024px`（タブレット） / `1280px`（小型PC）／ `min-width: 1601px`（大画面） ※推測: 一般的なブレークポイント命名とは名称は異なる。

### JS / ライブラリ
```
"next":             "^14.2.0"
"react":            "^18.3.0"
"react-dom":        "^18.3.0"
"@splidejs/splide": "^4.1.4"  // MVスライダー（fade / autoplay 5s）
"swiper":           "^11.0.0" // People セクションのカルーセル
"lottie-web":       "^5.12.2" // 依存には存在。実装での用途は未確認（※推測: MORE ボタン等の矢印を Lottie で置き換え予定）
```
- スクロール連動アニメーションは **IntersectionObserver を自前ラップ**（`components/ScrollAnimator/ScrollAnimator.tsx`・`hooks/useScrollAnimation.ts`）。`.js-animate.fadeIn01` に対して `.is-animate` を付与する。
- Splide/Swiper の CSS は `public/vendor/splide.min.css` / `public/vendor/swiper-bundle.min.css` を `app/layout.tsx` の `<head>` で静的 `<link>` する。

### フォント読込方法
- Next.js `next/font/google` を使用（`app/layout.tsx`）。
  ```tsx
  const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400','500','700','900'], display: 'swap', variable: '--font-noto-sans-jp' });
  const poppins    = Poppins    ({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-poppins' });
  ```
- `<html>` に `notoSansJP.variable` と `poppins.variable` を付与し、CSS 側で `var(--font-noto-sans-jp)` / `var(--font-poppins)` として参照。

### 画像形式と最適化方針
- `next.config.js` で `images: { unoptimized: true }` を指定しており、**Next.js 画像最適化をあえて無効化**している（静的書き出し／CDN 前提と推測 ※推測）。
- `public/images/` に以下の形式で格納：
  - `.png`（ロゴ・装飾コピー・MVスライド素材・ボタン画像）
  - `.jpg`（`TECNES_001.jpg` 〜 `TECNES_009.jpg`、社員写真・事業写真、`@2x.jpg` 命名の Retina 画像）
  - `.svg`（`about_ico01` 〜 `about_ico09` の数字カード用アイコン、`flow_img.svg`、`people_cat.svg`、`people_copy.svg`）
- `@2x.jpg` のレイヤは `width=auto` で CSS 上縮小配信。webp / avif は未使用。
- `<Image>` 使用箇所はすべて `unoptimized` 属性付き（`next.config.js` の方針と一致）。装飾画像は `<img>` 直書きもあり。

## 3. カラーパレット

コード上ではすべて `rgb()` / `rgba()` で記述されているため、下記に HEX 換算で抽出する（変換式: `rgb(28,44,67)` → `#1C2C43`）。

```css
/* ========== Brand core ========== */
--color-primary:       #1C2C43;  /* rgb(28, 44, 67)   テキスト基本色・見出し・Entryボタン背景・Footer背景 */
--color-accent:        #2BB9B0;  /* rgb(43, 185, 176) アクセント：CTA、リンクhover、Readセクション背景、Aboutセクション背景、カテゴリータグ枠、数字EN、Entryボタンhover */
--color-accent-light:  #D9F2F0;  /* rgb(217, 242, 240) 背景ペール：Flow・People・FootNavの背景、モーダル内キーワードタグ背景 */

/* ========== Neutral ========== */
--color-bg-base:       #FFFFFF;  /* rgb(255, 255, 255) 全体背景（body）、Header背景、Business背景、Environment背景、モーダル本体、People カード背景 */
--color-bg-surface:    #FFFFFF;  /* カード表面・モーダル表面（同上） */
--color-text-main:     #1C2C43;  /* 本文・見出し（Primaryと同値） */
--color-text-on-dark:  #FFFFFF;  /* ダーク背景上の白文字（Read/About/Discovery/FootNav Entry/Footer 全般） */

/* ========== Border / Divider ========== */
--color-border:            rgba(28, 44, 67, 0.1);   /* カード枠線、FootNav ナビリストの下罫線、モーダル navigation 上罫線 */
--color-border-on-dark:    rgba(255, 255, 255, 0.1);/* Footer メニュー下罫線 */
--color-border-accent:     #2BB9B0;                 /* カテゴリータグ枠線、モーダル ナビボタン枠（hoverで塗潰し） */

/* ========== Overlay ========== */
--overlay-hero-dark:   rgba(28, 44, 67, 0.4);  /* Discovery セクション背景画像の上に重ねる暗幕 */
--overlay-modal:       rgba(28, 44, 67, 0.8);  /* Business モーダルのオーバーレイ */
--overlay-gnav:        rgba(28, 44, 67, 0.5);  /* ハンバーガーメニュー（Gnav）背面のオーバーレイ */
--text-on-dark-70:     rgba(255, 255, 255, 0.7); /* Footer 住所・創立項目本体 */
--text-on-dark-60:     rgba(255, 255, 255, 0.6); /* Footer ステーションラベル・サブメニュー */
--text-on-dark-50:     rgba(255, 255, 255, 0.5); /* Footer 補助ラベル（itemTtl・mapLink・menu02） */
--text-on-dark-40:     rgba(255, 255, 255, 0.4); /* Footer 徒歩分表示 */
--text-on-dark-30:     rgba(255, 255, 255, 0.3); /* Footer copyright */
--text-on-dark-15:     rgba(255, 255, 255, 0.15);/* Discovery decorCopy（ゴースト装飾文字） */
--text-on-light-70:    rgba(28, 44, 67, 0.7);   /* Gnav subMenu（ライト背景上） */
--text-on-light-60:    rgba(28, 44, 67, 0.6);   /* People カード meta（所属・入社年） */
--text-on-light-50:    rgba(28, 44, 67, 0.5);   /* scrollHint 色 */
--text-on-light-30:    rgba(28, 44, 67, 0.3);   /* Swiper pagination 非アクティブ */

--surface-on-dark-15:  rgba(255, 255, 255, 0.15);/* About 数字カード背景（半透明白） */
--surface-on-dark-30:  rgba(255, 255, 255, 0.3); /* Footer 駅アイコン背景円、MV プログレスバー溝 */
--scrollbar-track:     rgba(43, 185, 176, 0.2);  /* Flow 横スクロールバー track */

/* ========== Utility ========== */
--color-shadow-card:   rgba(28, 44, 67, 0.15); /* Business カード hover 影（外側・下方向 40px） */
--color-shadow-entry:  rgba(0, 0, 0, 0.1);     /* Header Entry ドロップダウンの影 */
--color-swiper-theme:  #007AFF;                /* Swiper デフォルトテーマ（`:root` 変数。本LP では navigation 色を primary で上書きするため事実上未使用） */

/* ========== Status（※推測: 本LPには存在しない。通常のデザインシステム互換用に追加） ========== */
--color-success:       #2BB9B0;  /* ※推測：brand accent と同値で代用 */
--color-warning:       #F5A623;  /* ※推測：未定義。一般的な警告色 */
--color-error:         #D0021B;  /* ※推測：未定義。一般的なエラー色 */
```

### グラデーション
- **使用箇所なし**。背景は単色のみで構成されている。`@keyframes bg-gradient` の定義は `app/globals.css` に残存しているが、セレクタから参照されていない（※推測: 以前の実装の名残）。

### 半透明の主な使用例
- `rgba(28, 44, 67, 0.4)`：Discovery 背景画像の上に乗せる暗幕オーバーレイ。
- `rgba(28, 44, 67, 0.8)`：Business モーダルオーバーレイ（全画面）。
- `rgba(255, 255, 255, 0.15)`：About 数字カードの白透過背景（ターコイズ地の上）。
- `rgba(255, 255, 255, 0.3)`：MV プログレスバー（未再生部）、Footer 駅アイコン。
- `rgba(43, 185, 176, 0.2)`：Flow 横スクロールバーのトラック。

## 4. タイポグラフィ

### font-family

```css
/* 日本語本文・和文見出し（全般デフォルト） */
font-family: var(--font-noto-sans-jp), "Noto Sans JP", sans-serif;

/* 英数字見出し・数字・ラベル（ロゴ右 "RECRUIT SITE"・SCROLL・EN見出し・数字カウンター・ENTRY・電話番号など） */
font-family: var(--font-poppins), Poppins, sans-serif;
```

- **日本語専用フェイス分離なし**（Noto Sans JP のみ）。
- **数字・英字**は基本的に Poppins を当てる。例外として Discovery `decorCopy`（装飾ゴースト文字）は意図的に Noto Sans JP を指定。

### サイズスケール

ルートは `html { font-size: 62.5% }` → `1rem = 10px`。下表は CSS で記述される `rem` 値を px / rem / 推奨トークン名で整理したもの。

| ロール | px | rem | 実装例 | letter-spacing | line-height |
|---|---|---|---|---|---|
| **FV キャッチ h1** | 画像（`mv_copy.png`） | — | MainVisual | — | — |
| **セクション見出し EN（h2-en）** | 56px | 5.6rem | `.ttl01En` (Business/About/Discovery/People/Environment) | 0.02em | 1 |
| **セクション見出し JA（h2-ja）** | 14px | 1.4rem | `.ttl01Ja` | 0.08em | 1 |
| **FVダイレクト見出し h2（和文）** | 28px | 2.8rem | Read `.ttl` | 0.12em | 1.5 |
| **カード h3** | 20px | 2.0rem | Business `.cardTtl` | — | 1.5 |
| **モーダル h3** | 32px | 3.2rem | `.modalTtl` | — | 1.4 |
| **サブ見出し** | 24px | 2.4rem | About `.subTtl` / Gnav `.ttl01 span` | 0.05em(Gnav) | 1.4 |
| **セクション小見出し** | 32px | 3.2rem | Flow `.flowTtl01` | — | 1 |
| **セクションサブ小見出し** | 18px | 1.8rem | FootNav `.navTtl` / Environment `.cardLabel` / modalSubTtl | — | 1.4–1.6 |
| **CTA本文** | 20px | 2.0rem | FootNav `.ctaLead` | — | 1.8 |
| **body-lg**（リード） | 15px | 1.5rem | `.leadTxt` / モーダル本文 / Footer FooterNav の nav a / People `.cardCatch` | — | 1.8–1.9 |
| **body**（本文） | 16px | 1.6rem | `body` 既定値、Read `.txt`、CTA ボタン文字 | — | 1.5 / 2 |
| **body-sm** | 14px | 1.4rem | セクション見出し JA／カテゴリータグ／ナビボタン／Entry ボタン文字／Header メニュー | — | 1 |
| **caption** | 13px | 1.3rem | About `.note` / `.numCardSub` / Footer `.list01`・`.address`・`.list02` / Gnav subMenu / モーダルキーワード | — | 1.5–1.6 |
| **micro** | 12px | 1.2rem | `.cardEn`・`.cardCategory`・`.arrowTxt`・`.modalNum`・`.stationIco`テキスト | 0.05–0.10em | 1 |
| **mini** | 11px | 1.1rem | Footer `.copyright` | 0.05em | — |
| **hair** | 10px | 1.0rem | MV `.mvScrollEn` / ハンバーガー `MENU` ラベル | 0.05–0.2em | 1 |
| **数字カウンター** | 56px | 5.6rem | About `.numCardNum` | — | 1 |
| **電話番号** | 28px | 2.8rem | Footer `.tel` | 0.05em | — |
| **Discovery装飾** | 56px | 5.6rem | `.decorCopy`（白15%アルファ） | 0.05em | 1.4 |

### font-weight

| トークン | 数値 | 用途 |
|---|---|---|
| Regular | 400 | 本文 / Read 本文 |
| Medium | 500 | 見出し・Read h2・ラベル類・Business リード文 |
| SemiBold | 600 | `.cardEn`・`.modalNum` |
| Bold | 700 | `.ttl01En`・`.numCardNum`・`.navTtl`・`.btnEntry`・`.footer .tel`・`.decorCopy`・カード h3 |
| Black | 900 | Noto Sans JP でのみ読み込み済み（実コード上の出現は確認されず ※推測: 将来拡張用） |

### line-height

```
base body:  1.5
long-read:  1.8  /* leadTxt / body-lg / ctaLead / environment cardLabel */
jp-long:    1.9  /* modalTxt / People cardCatch */
dense heading: 1  /* EN見出し / 数字 / ラベル */
heading-jp: 1.5  /* Read ttl / cardTtl / 見出しH3 */
heading-modal: 1.4  /* modalTtl / decorCopy / subTtl */
```

### letter-spacing

```
見出しEN       : 0.02em
見出しJA       : 0.08em
Read 見出し    : 0.12em
CTA・ボタン   : 0.05em（Entryボタン・tel・gnav・footer entry）
Entryボタン（巨大）: 0.1em（FootNav `.btnEntry`）
SCROLL         : 0.2em
Poppins 補助ラベル: 0.1em（`.cardEn` など）
```

### 日本語特有の処理
- `body { font-feature-settings: "palt"; }` で**プロポーショナルメトリクス**を有効化し、和文ツメ組み。
- `*, ::before, ::after { line-break: strict; overflow-wrap: break-word; }` で禁則処理を厳密化＋単語単位改行を許可。
- `<br class="u-sm-min">`（＝SPでは非表示） / `<br class="u-sm-max">`（＝PCでは非表示）で**改行位置を出し分け**（原文コピーに多数）。
- `text-size-adjust: 100%` で iOS のフォント自動拡大抑制。

## 5. スペーシング

### ベースユニット
- **8px を基準**（2×4px の 8px グリッド）とみなせるが、実装上は `rem`（= 10px 単位）で記述される箇所が多いため、**4px / 8px / 10px 混在**。
- SP は `vw` ベース。基礎単位は「**4px = 1.06667vw（375px 幅基準）**」。実際 `5.33333vw ≒ 20px`、`2.66667vw ≒ 10px`、`1.33333vw ≒ 5px` の換算で記述される。

### セクション縦余白

| セクション | PC（padding-top / bottom） | タブレット | SP |
|---|---|---|---|
| Business | `12rem / 12rem` (120/120px) | `10rem / 10rem` | `13.3333vw / 13.3333vw` |
| Read | `20rem / 12rem` (200/120px) | `16rem / 10rem` | `42.6667vw / 0`（上に marginTop `-21.3333vw`でMVへ食込む） |
| Flow | `12rem / 19.6rem` | `10rem / 16rem` | `17.3333vw / 32vw` |
| About | `12rem / 20.8rem` | — | `13.3333vw / 0` |
| Discovery | `12rem / 16rem` | `12rem / 12rem` | `17.3333vw / 29.3333vw` |
| People | `12rem (top) / 10rem (bottom)` | `10rem / 8rem` | `13.3333vw / 25.8667vw` |
| Environment | `12rem / 12rem` | `10rem / 10rem` | `13.3333vw / 32vw` |
| FootNav | `10rem / 12rem` | `8rem / 10rem` | `21.3333vw / 0` |
| Footer | `8rem (top) / 6rem (bottom)` | — | `10.6667vw / 0` + `padding-bottom: 114.667vw`（巨大footer_copy画像分） |

### コンテナ内パディング（`.l-inner` / `.l-inner-02`）

```css
.l-inner, .l-inner-02 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;   /* PC */
}
@media (max-width: 767px) {
  .l-inner, .l-inner-02 { padding: 0 5.33333vw; }  /* ≒ 20px / 375px端末 */
}
```

### 代表的な内側余白（padding 系）

| パターン | PC | SP |
|---|---|---|
| Header 高さ | 100px | 14.9333vw（≒56px） |
| ハンバーガーボタン | 100×100px | 17.0667vw 正方形（≒64px） |
| Business カード内側 | `4rem 4rem 5rem`（40/40/50px） | `5.33333vw` 全辺（≒20px） |
| モーダル本体 | `4rem 5rem 5rem`（40/50/50px） | `8vw 5.33333vw` |
| カテゴリータグ | `6px 12px`（縦/横） | `1.6vw 3.2vw` |
| 数字カード | `4rem 3.2rem` | `5.33333vw 4vw` |
| FootNav Entryボタン | `20px 60px` | `5.33333vw 10.6667vw` |
| Discovery CTA | `18px 48px` | `4.8vw 10.6667vw` |
| モーダル nav ボタン | `12px 24px` | `3.2vw 5.33333vw` |

### 代表的な gap / margin

| トークン | PC | SP |
|---|---|---|
| セクション内コンテンツ間 gap | `6rem`（60px） | `8vw`（≒30px） |
| 見出しブロック内 gap | `8px` 縦 | 同上 |
| 2カードレイアウト gap | `4rem` 横 | `8vw` 縦 |
| 3カラムグリッド gap | `4rem 4rem` | `5.33333vw` |
| 数字カード縦内 gap | `1.6rem` | `3.2vw` |
| FootNav 外部ボタン間 | `2rem` | `4vw` |

## 6. レイアウト

### 最大幅

```css
.l-inner, .l-inner-02 { max-width: 1200px; }         /* セクションコンテナ */
.lFooterInner         { max-width: 1200px; padding: 8rem 4rem 6rem; }
.modalBox             { max-width: 960px;  max-height: 90vh; }
.mvCopy img           { max-width: 600px;  }
.flowCopy img         { max-width: 600px;  }
.flowTxt01            { max-width: 700px;  }
.people .leadTxt      { max-width: 700px;  }
.people .decorCopy    { max-width: 500px;  }
.lGnavInner           { width: 540px; max-width: 100%; }  /* SP はみ出ない */
.mv @min-width:1601px { max-width: 1920px; margin:0 auto; } /* 大画面のMVだけ上限 */
```

### ブレークポイント

```css
/* ブレークポイント（実装で使用されているメディアクエリの閾値） */
SP   : max-width  767px   /* モバイル */
MD   : min-width  768px   /* タブレット以上 */
MD-L : max-width 1024px   /* タブレット縦〜小型ラップトップ */
LG   : min-width 1025px   /* PC */
LG-L : max-width 1280px   /* 中型PCまで */
XL   : min-width 1281px   /* 大型PC */
2XL  : min-width 1601px   /* 1920px級ディスプレイ。MV のみ max-width を 1920px に固定 */
```

- `u-sm-min` / `u-sm-max`：767px 境界で出し分け（`-min` は SP 以下で非表示、`-max` は PC で非表示）。
- `u-md-min` / `u-md-max`：1024px 境界。
- `u-lg-min` / `u-lg-max`：1280px 境界。

### Grid / Flex の使用パターン

- **Flex 基本**：`Header .lHeaderInner`（logo 左、menu 中央寄せ右、btn 絶対配置右端）、各セクションの「左右 2 カラム」（Read の左テキスト／右画像）。
- **Grid**：
  - About 数字カード：`grid-template-columns: repeat(3, 1fr)` → タブレット以下で `repeat(2, 1fr)`。
  - Environment：`repeat(3, 1fr)` → タブレット以下で `repeat(2, 1fr)`。
  - SP では Business cards は flex-column、People は Swiper で可変 slidesPerView（1.2 / 2.5 / 3.5）。
- **位置決め**：Header はすべて `position: absolute` 子要素＋固定位置 `position: fixed; top:0; left:0; z-index:1000`。モーダル・Gnav は `position: fixed` 全画面。
- **aspect-ratio**：Business カード画像 `4/3`、モーダル画像 `16/9`、People カードサムネ `3/4`、Environment カード画像 `4/3`。

### z-index レイヤ

```
Header (.lHeader)           : 1000
Gnav   (.lGnav)             :  999
Modal  (.modalOverlay)      : 9000   /* モーダルは最前面 */
Header 内 Entry dropdown    :  100
FV コピー・scroll・progress :   10
FV スクリーンオーバーレイ   :    8
FV txtWrap（下部流れ文字）  :    5
FV slideImg                 :    2
Discovery 内コンテンツ      :    1
Discovery 背景画像          :    0
```

## 7. セクション構成（ページ上から順）

### 7-0. Header（固定ヘッダー）
- **目的**: 全ページ共通のグローバルナビ＋ブランドロゴ＋エントリー導線。
- **レイアウト**: 左端にロゴ（幅 377px）、中央付近に PC ナビ（右寄せ：`padding-right: 40.5996vw` で幅を調整）、右端に「募集要項」テキストリンク＋「ENTRY」塗りボタン（ホバーでキャリタス／マイナビを一覧表示するドロップダウン）。SP では中央ナビ非表示、右端にハンバーガー（17.0667vw 正方形）。
- **使用カラー**: 背景 白／スクロール後 `rgba(255,255,255,0.8)` + `backdrop-filter: blur(10px)`。文字は `#1C2C43`。Entry ボタン塗りは `#1C2C43`、hover で `#2BB9B0` に切替。
- **含まれる要素**: ロゴ画像 `logo.png` + "RECRUIT SITE" テキスト、「仕事を知る／働く社員を知る／働く環境を知る／採用情報」の4項目ナビ、「募集要項」テキストリンク、「ENTRY」ドロップダウン（内部：マイナビ／キャリタス外部リンク）、ハンバーガーボタン（3本線 → `body.is-menu-open` で X 化）。
- **コピー**:
  - `RECRUIT SITE`
  - `仕事を知る` / `働く社員を知る` / `働く環境を知る` / `採用情報`
  - `募集要項`
  - `ENTRY`
  - `MENU`（ハンバーガー下のテキスト）

### 7-1. MainVisual（FV／ファーストビュー）
- **目的**: ブランドコピー「キミの想いが未来をともす」を提示し、LPに引き込む。
- **レイアウト**: 画面全高（`height: 100vh; min-height: 600px;`、SP は `100svh`）。背景に写真が Splide で **5秒間隔・フェード遷移・1000msスピード**で切替。下部に流れる大きなテキスト画像（`mv_txt.png` を `txtloop02` アニメで横スクロール）、中央下寄りに h1 キャッチ画像 `mv_copy.png`、右下に再生/一時停止トグル＋プログレスバー（120×2px 白、未再生部は白30%）、左下に縦書き `SCROLL` ラベル。中央前面に `mv_screen.png`（スクリーン風オーバーレイ）。
- **カラー**: slide 背景 `#1C2C43`、SCROLL・プログレス = 白 / 白30%。
- **スライド画像（4枚）**:
  - `mv_slide01-01.png` + `mv_slide01-02.png`
  - `mv_slide02-01.png` + `mv_slide02-02.png`
  - `mv_slide03-01.png` + `mv_slide03-02.png`
  - `mv_slide04-01.png` + `mv_slide04-02.png`
- **装飾画像**: `mv_txt.png`（巨大流れ文字 / 2回並べて無限ループ）、`mv_screen.png`（中央オーバーレイ）、`mv_copy.png`（h1 画像テキスト）。
- **コピー**:
  - h1（画像内）: `キミの想いが未来をともす`
  - `SCROLL`（縦書き、白、letter-spacing 0.2em、10px）
- **再生制御**: `splide__toggle` ボタンで autoplay 一時停止／再開。初期 `.is-active`（再生中）。

### 7-2. Read（イントロ／企業理念）
- **目的**: 企業理念「お役立ち」を伝え、サイト全体のトーンを提示。
- **レイアウト**: ターコイズ一色背景（`#2BB9B0`）。2 カラム：左 = 見出し＋本文 4 段落／右 = 幅 320×600px の縦型画像枠内で `read_img01@2x.jpg` が `imgloop01` で**縦に無限ループ**スクロール（30s linear、2 枚を `animation-delay: -15s` でずらして継ぎ目なし）。SP では右ブロックが下段に回り、幅 100% × 64vw。
- **カラー**: 背景 `#2BB9B0`、見出し / 本文 = 白。
- **コピー（原文そのまま）**:
  - 見出し（h2）: `私たちは社会と産業の未来のために挑戦し続けます`
  - 本文1: `千代田工販はただ商品を売るだけではありません。付加価値を加え、お客さまの課題解決に寄り添いながら社会インフラ整備と産業界の成長に貢献する商社です。`
  - 本文2: `私たちの仕事は、お客さま一人ひとりの要望に応え信頼を創り出すこと。`
  - 本文3: `勇気がいる最初の一歩も、本気で向き合う。どんな難題があっても、創意と工夫で乗り越えていく。そんな想いは、きっと誰かの未来をともす光になるはずです。これが私たちの企業理念である「お役立ち」です。`
  - ※改行は `<br class="u-sm-min" />` により PC のみ有効。
- **画像**: `read_img01@2x.jpg`（右側縦ループ）。

### 7-3. Business（OUR BUSINESS / 仕事を知る）
- **目的**: 事業内容を「商社／製造」の 2 カードで提示し、各カテゴリからモーダルで詳細を読めるようにする。
- **アンカー**: `#business`。
- **レイアウト**: `h2` を中央揃え（`.ttl01En` + `.ttl01Ja`）、リード文中央、直下に 2 カード横並び（SP は縦積み）。各カードは上：画像（`aspect-ratio: 4/3`）／下：カード本体（`padding: 4rem 4rem 5rem`）。本体内は EN ラベル → JA 小見出し → h3（太字）→ リード → カテゴリタグ群（枠線型）→ 右下 `MORE` + 矢印アイコン。
- **カラー**: 背景 白、カード枠 `rgba(28,44,67,0.1)`、hover 影 `0 8px 40px rgba(28,44,67,0.15)`、カード画像は hover で `scale(1.05)`（0.5s cubic-bezier(0.215, 0.61, 0.355, 1)）。EN ラベル・タグ枠線 = `#2BB9B0`、タグ hover は `bg: #2BB9B0 / text: #fff` 反転。
- **見出しコピー**:
  - EN: `OUR BUSINESS`
  - JA: `仕事を知る`
  - リード: `商社のネットワークを活かし、自社製品も販売しています。私たちはお客さまから必要とされるパートナーであり続けるため、クリエイティブな発想で解決策を提案します。`

#### 7-3a. TRADING カード
- 画像: `trading_img@2x.jpg`
- EN: `TRADING`
- JA: `商社のしごと`
- h3: `幅広い領域に精通した電機機械の専門商社`
- リード: `電気機器や一般産業機械のシステム販売を手掛けています。`
- カテゴリタグ（6件、全部モーダルトリガ）:
  - `エネルギー・電力関連`（id:`trading-01`）
  - `プラント産業・電機関連`（`trading-02`）
  - `交通・施設関連`（`trading-03`）
  - `環境機械関連`（`trading-04`）
  - `情報・通信関連`（`trading-05`）
  - `国際事業`（`trading-06`）
- 右下リンク: `MORE`（クリックで `trading-01` を開く）

#### 7-3b. MANUFACTURING カード
- 画像: `manufacturing_img@2x.jpg`
- EN: `MANUFACTURING`
- JA: `モノづくりのしごと`
- h3: `長年培った信頼と技術力で自社事業を展開`
- リード: `自社製品として自動車部品や紫外線応用機器を提供しています。`
- カテゴリタグ:
  - `自動車部品事業`（`mfg-01`）
  - `UVシステム事業`（`mfg-02`）
- 右下リンク: `MORE`（`mfg-01` を開く）

#### 7-3c. Business モーダル（8件）
共通レイアウト：`modalOverlay` (`rgba(28,44,67,0.8)` + padding 40px) → `modalBox`（白・最大960×90vh）。上部に画像（`16/9`）、本体 `padding: 4rem 5rem 5rem`。

| ID | num | title | subTitle | body | keywords | img |
|---|---|---|---|---|---|---|
| trading-01 | 商社のしごと #01 | エネルギー・電力関連 | 電気をつくる、電気をはこぶ | 火力・水力発電や電力流通設備を通じて、安定した電力供給に貢献。カーボンニュートラルを目指し、再生可能エネルギーや次世代エネルギー分野にも注力しています。 | ＃発電設備 / ＃受変電設備 / ＃太陽光発電システム | modal_img01-01@2x.jpg |
| trading-02 | 商社のしごと #02 | プラント産業・電機関連 | 工場の"つくる・しらべる・はこぶ" | 製造業全般に電力システムから製造機械、物流設備、労働環境の改善まで、工場を動かすために必要な機器やサービスを幅広く提供しています。 | ＃産業用モータ / ＃産業機械 / ＃計測・制御システム | modal_img01-02@2x.jpg |
| trading-03 | 商社のしごと #03 | 交通・施設関連 | 都市と人びとをつなげる | 電車の駆動システムや照明、空調、電源を供給するための受変電設備などを提供し、駅の自動改札機や端末システムも納入しています。鉄道会社との仕事を通じて安全な交通システムの構築に貢献しています。 | ＃車両用駆動システム / ＃駅務システム / ＃鉄道電力システム | modal_img01-03@2x.jpg |
| trading-04 | 商社のしごと #04 | 環境機械関連 | "地球に優しい"を実現する | カーボンニュートラルやSDGsを重視し、排水や排ガスの浄化装置、省エネシステムを提供。余剰エネルギーの有効活用など、環境配慮型の事業を展開しています。 | ＃水処理システム / ＃大気処理システム / ＃省エネシステム | modal_img01-04@2x.jpg |
| trading-05 | 商社のしごと #05 | 情報・通信関連 | 工場をネットワークでつなぐ | DXを活用し、パソコンやセンサーなどの情報機器を組み合わせたシステムで、工場設備の安定稼働や予防保全、生産性向上を支援しています。 | ＃生産管理システム / ＃監視カメラシステム / ＃IoTソリューション | modal_img01-05@2x.jpg |
| trading-06 | 商社のしごと #06 | 国際事業 | お客さまと世界をむすぶ | 中国や東南アジアを中心に産業機器の輸出や特色ある海外製品を輸入販売。自社製品の紫外線殺菌装置も海外に納入するなど、グローバルに事業を展開中です。 | ＃製品の輸出入販売 / ＃海外向け案件の営業サポート | modal_img01-06@2x.jpg |
| mfg-01 | モノづくりのしごと #01 | 自動車部品事業 | トラックやバスの安全と環境をまもる | トラックやバスなどの商用車向けにエアブレーキ配管の加工や排出ガスの無害化を図る浄化システム用の配管を販売。自社で製造拠点を構え、少量多品種生産によりきめ細かいニーズに対応、大手商用車メーカーと直接取引しています。 | ＃エアブレーキ配管 / ＃燃料配管 / ＃排出ガス浄化システム用配管 | modal_img02-01@2x.jpg |
| mfg-02 | モノづくりのしごと #02 | UVシステム事業 | キレイな水で安心・安全をとどける | 飲料水や洗浄水向けの紫外線殺菌装置を設計・販売しています。当社研究開発センターにて試験や研究を重ね、安心・安全な水を提供。約半世紀の実績とノウハウを持つ紫外線技術のリーディングカンパニーです。 | ＃半導体工場向け / ＃食品・飲料工場向け / ＃上下水道施設向け | modal_img02-02@2x.jpg |

モーダル下部は 3 要素で構成：`← 前の事業` / `閉じる` (下線リンク) / `次の事業 →`。先頭・末尾は透過 0.3 で非活性表示。

### 7-4. Flow（仕事の流れ）
- **アンカー**: `#flow`。
- **目的**: 商流・業務フローを俯瞰する1枚画像で説明。
- **レイアウト**: 淡ターコイズ背景 `#D9F2F0`、見出しは `h2.flowTtl01`（32px・ウェイト500・line-height 1）左寄せ、下にリード文（最大幅700px）、下段に 1100×600 のフロー図画像 `tecnes_work_flow_preview.png`。SP では PC 画像を隠し、横スクロール可能な `flowImgScroll` に切替（`min-width: 160vw` でオーバーフロー）。スクロール開始前に「`スクロール ▶`」ヒントを表示（0.5em ボーダーの斜め矢印を `scrollArrowBounce` で左右1.2sに揺らす）。最下部に装飾コピー画像 `flow_txt.png`（最大600px 中央配置）。
- **コピー**:
  - h2: `仕事の流れ`
  - リード: `私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。`
  - SP補助: `スクロール`
- **画像**: `tecnes_work_flow_preview.png`（本体フロー図）、`flow_txt.png`（装飾テキスト画像 600px）、`flow_img.svg`（存在。用途未特定 ※推測: 別ビューで使用）。

### 7-5. About（ABOUT US / 数字で見る千代田工販）
- **アンカー**: `#about`。
- **目的**: 会社規模・働く条件を数字で可視化（信頼醸成）。
- **レイアウト**: ターコイズ `#2BB9B0` 背景。左寄せの `.ttl01En` + `.ttl01Ja`、その下にサブ見出し `数字でわかる 千代田工販の今`（24px 太字 白）、注釈 `※2025年3月時点`（13px 白80%）。下に **3カラム × 3行の数字カードグリッド**（タブレット・SP で 2 カラム）。カード背景は `rgba(255,255,255,0.15)`、padding `4rem 3.2rem`、アイコン（56×56px）→ ラベル → 数字 → 単位 → サブテキスト（任意）の縦配列。**数字は IntersectionObserver でビュー入場時に 1800ms / easeOutCubic でカウントアップ**（`setCount(Math.round(eased * targetNum))`）。最下段に `about_img01@2x.jpg` を全幅表示。
- **カラー**: 背景 `#2BB9B0`、文字 全て白。数字本体は Poppins 700 / 5.6rem（SP は 9.6vw）、単位は Noto Sans JP 500 / 2rem。
- **コピー**:
  - EN: `ABOUT US`
  - JA: `千代田工販について`
  - サブ見出し: `数字でわかる 千代田工販の今`
  - 注釈: `※2025年3月時点`
- **数字カード（8枚）**:
  | アイコン | ラベル | 数値 | 単位 | サブ |
  |---|---|---|---|---|
  | about_ico01.svg | 創業年数 | 78 | 年 | 1947年（昭和22年）創立 |
  | about_ico02.svg | 売上高 | 536 | 億円 | — |
  | about_ico03.svg | 拠点数 | 16 | 箇所 | 海外拠点3箇所含む |
  | about_ico04.svg | 従業員人数 | 350 | 人 | — |
  | about_ico05.svg | 平均勤続年数 | 16 | 年 | — |
  | about_ico06.svg | 年間休日 | 123 | 日 | 夏季休暇5日間含む |
  | about_ico07.svg | 就業時間/日 | 7 | 時間45分 | — |
  | about_ico08.svg | 平均残業時間/月 | 15 | 時間 | — |
- **下部画像**: `about_img01@2x.jpg`（全幅）。

### 7-6. Discovery（DISCOVERY / 街に広がる千代田工販）
- **アンカー**: `#discovery`。
- **目的**: 仕事紹介（Business セクション）への再誘導 CTA。フォトグラフィックに雰囲気を作る装飾セクション。
- **レイアウト**: 背景画像 `discovery_bg@2x.jpg` を `fill + object-fit:cover` で敷き、その上に `rgba(28,44,67,0.4)` の暗幕オーバーレイ。内部は中央揃え：`.ttl01En` + `.ttl01Ja` → リード → CTA → ゴースト装飾コピー。
- **カラー**: 背景画像＋暗幕。テキスト＝白。CTA は塗り `#2BB9B0`、hover で 白地 / 文字ターコイズに反転。装飾コピーは `rgba(255,255,255,0.15)`（56px 太字）。
- **コピー**:
  - EN: `DISCOVERY`
  - JA: `街に広がる千代田工販`
  - リード: `社会のさまざまな領域で活躍している千代田工販の事業についてご紹介します。`
  - CTA: `詳細を見る`（リンク先: `/#business`）
  - ゴースト装飾（改行あり・3行）: `個性と想いが`／`響き合うことで`／`わくわくする`

### 7-7. People（PEOPLE / 働く社員を知る）
- **アンカー**: `#people`。
- **目的**: 社員インタビューへのカルーセル導線で「人」の側面を訴求。
- **レイアウト**: 背景 `#D9F2F0`。
  - 上部：`.peopleTop`（l-inner 内）：左寄せ `.ttl01En` + `.ttl01Ja`、リード（最大幅 700px）。
  - 中段：`.mainImg`（全幅の `people_img01@2x.jpg`、1280×400 相当）。
  - 下段：**Swiper カルーセル**。`slidesPerView: 1.2 (SP) / 2.5 (MD) / 3.5 (LG)`、`spaceBetween: 20 / 30 / 40`。ページネーション（クリック可能ドット）＋prev/next 矢印。
  - カードは `aspect-ratio: 3/4` のサムネ → `padding: 2.4rem 2.4rem 3.2rem` の本体。本体内は `cardCatch`（15px 500 line-height1.6）→ meta（部署・職種・氏名・入社年）。
  - 下部：`.decorSection` に `people_copy.svg`（装飾コピー画像、最大幅 500px、中央揃え）。
- **カラー**: 背景 ペールターコイズ、カード背景 白、文字 primary、meta は primary 60% 透過、氏名は Poppins 700。
- **見出しコピー**:
  - EN: `PEOPLE`
  - JA: `働く社員を知る`
  - リード: `千代田工販で新しい自分に出会い、変わらない自分の信念を持って活躍している先輩たち。どんな想いで働いているのか、エピソードを交えてご紹介します。`
- **社員カード（7名）**:
  | # | 画像 | キャッチ | 部署・職種 | 氏名 | 入社年 |
  |---|---|---|---|---|---|
  | 1 | people_thumbs01@2x.jpg | 先輩に支えられ始まった千代田工販での挑戦 次は私が後輩を支える番だ | 電機システム部・営業職 | M.M | 2017年入社 |
  | 2 | people_thumbs02@2x.jpg | 関わるすべての人のベクトルを合わせて 大型プロジェクトに挑む | プラント産業システム部・営業職 | Y.T | 2014年入社 |
  | 3 | people_thumbs03@2x.jpg | 顧客利益だけでなく その先にある「社会に良いこと」を追求 | 環境・機械システム営業部・営業職 | N.S | 2017年入社 |
  | 4 | people_thumbs04@2x.jpg | 主体性を持って企業と向き合い提案し、感謝される それが私の成長サイクル | 新潟支店・営業職 | O.T | 2017年入社 |
  | 5 | people_thumbs05@2x.jpg | 商社ならではの価値を追求し 幅広い業界へ提案 次は本社でさらなる挑戦へ | 九州支店・営業職 | J.A | 2019年入社 |
  | 6 | people_thumbs06@2x.jpg | 何事も全力で楽しむ 自社製品の海外展開という「未知なる挑戦」も楽しみたい | 自動車部品部・営業職 | W.R | 2005年入社 |
  | 7 | people_thumbs07@2x.jpg | UVシステムの営業が切り拓く 「社会インフラ」と「持続可能な未来」への貢献 | UVシステム営業部・営業職 | E.M | 2012年入社 |
- **装飾画像**: `people_copy.svg`（alt: `あなたの成長を全力でサポート`）。
- **Swiper コントロール色**: prev/next 矢印 `color: #1C2C43`、page dot 非アクティブ透過 0.3。

### 7-8. Environment（ENVIRONMENT / 働く環境を知る）
- **アンカー**: `#environment`。
- **目的**: 制度・オフィス・社員座談会へのカテゴリ導線。
- **レイアウト**: 白背景、左寄せ見出し、リード、3カラム × 2 行のカードグリッド（タブレット・SP は 2 カラム）。
  - カード：`aspect-ratio: 4/3` の画像 → 下に 18px 500 ラベル（padding-top 2rem）。
  - hover: 画像が 0.5s で `scale(1.05)`。
- **コピー**:
  - EN: `ENVIRONMENT`
  - JA: `働く環境を知る`
  - リード: `みなさんが安心して働くことのできる環境、会社とともに成長できる環境を整えております。`
- **カード 6 枚**:
  | # | 画像 | ラベル |
  |---|---|---|
  | 1 | environment_img01@2x.jpg | 福利厚生 |
  | 2 | environment_img02@2x.jpg | 教育制度 |
  | 3 | environment_img03@2x.jpg | オフィス紹介 |
  | 4 | environment_img04@2x.jpg | 社員座談会 パパ・ママトーク |
  | 5 | environment_img05@2x.jpg | 社員座談会 社風トーク |
  | 6 | environment_img06@2x.jpg | 先輩たちの声 |

### 7-9. FootNav（フッター直前の採用情報 + CTA ブロック）
- **目的**: 採用ページへのアンカーリンク集＋最終エントリー CTA。
- **レイアウト**: 背景 `#D9F2F0`。`.navSection`：`navTtl`（18px 太字 + 下線 2px primary）→ `navList`（a は `padding: 12px 0` + `border-bottom 1px rgba(primary, 0.1)`、hover で文字色 accent）。下段 `.cta` は中央揃え、`ctaLead` → Entry ボタン → 外部ボタン（マイナビ／キャリタス）。
- **カラー**: 背景 ペールターコイズ、テキスト primary、Entry ボタン：塗 primary・白文字（hover で accent）、外部ボタン：枠線 primary・文字 primary（hover で塗 primary・文字 白）。
- **コピー**:
  - 見出し: `採用情報`
  - ナビ:
    - `募集要項`
    - `応募方法・選考フロー`
    - `採用担当者メッセージ`
    - `求める人物像`
    - `よくあるご質問`
  - ctaLead: `ともに新しい未来を築くチームメイトを探しています。あなたのご応募をお待ちしています。`（PC のみ1行目で改行）
  - ボタン1: `エントリーする`
  - ボタン2: `マイナビからエントリー`（外部 https://job.mynavi.jp/27/pc/search/corp7）
  - ボタン3: `キャリタスからエントリー`（外部 https://job.career-tasu.jp/corp/00200776）

### 7-10. Footer
- **目的**: 全グローバルナビ＋企業情報＋巨大装飾コピー画像。
- **レイアウト**: 背景 `#1C2C43`（濃紺）。`.lFooterInner`（max-width 1200px、padding `8rem 4rem 6rem`）内で 2 カラム：
  - **右ボックス**（flex:1）：サイトマップ `menu01`。5 項目（TOP／仕事を知る／働く社員を知る／働く環境を知る／採用情報）を `border-bottom 1px rgba(255,255,255,0.1)` で区切り、各親項目 15px 500、サブメニュー 13px 白60%（`padding: 6px 0 6px 16px`）。下に `menu02`（プライバシーポリシー／コーポレートサイト、12px 白50%）。
  - **左ボックス**（width 320px、タブレット以下は横→縦順序入替で上段に来る）：
    - ロゴ `logo.png`（width: 160px、`filter: brightness(0) invert(1)` で白抜き化）。
    - `list01`：2 項目テーブル（`itemTtl` 白50% + 本体 白70%）:
      - `創立`：`1947年（昭和22年）2月`
      - `資本金`：`200,000,000円`
    - `address`：`〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル`
    - `mapLink`：`Googleマップ`
    - `tel`：`03-3564-5511`（Poppins 700 28px、文字色 白、letter-spacing 0.05em）
    - `list02`：駅情報（3件）。`stationIco`（18×18px 半透明白円 + 白文字 "地"）＋ 路線案内 ＋ 徒歩分（右寄せ）:
      - `浅草線「宝町駅」より` 徒歩4分
      - `銀座線「京橋駅」より` 徒歩4分
      - `東西線「日本橋駅」より` 徒歩5分
    - `copyright`：`© Chiyoda Kohan Co., LTD. All rights reserved.`（11px 白30%）
- **巨大装飾コピー**：`footer_copy.png`（alt: `キミの想いが未来をともす`）を `.footerCopy` に全幅で配置。SP は親に `padding-bottom: 114.667vw` を足して下スペースを確保する（画像ダウンロード領域 ※推測）。
- **カラー**: 背景 primary、文字はすべて白とその透過バリエーション。

## 8. コンポーネント仕様

### 8-1. ボタン

本 LP はボタンクラスを**局所 CSS Module** 内に定義しており、共通プリミティブは存在しない。以下は実装を統合し、再利用可能な仕様に整理したもの。

#### Primary（Entry / 濃紺塗り）
- 実装例: `FootNav.btnEntry`、`Header.btnEntry > span`、`Gnav.list02 li a`
- 用途: 最優先 CTA（エントリー）
- サイズ別:
  - **LG**：padding `20px 60px`、font 18px 700、min-width 360px（FootNav）
  - **MD**：padding `14px 16px`、font 14px 500（Gnav）
  - **SM（Header Entry）**：width 130px 固定 × height 100%、font 16px 700 Poppins、letter-spacing 0.05em
- `background: #1C2C43`、`color: #FFFFFF`、`border: none`、`border-radius: 0`（**角丸なし**）。
- **hover**：`background-color` → `#2BB9B0`（transition: 0.2s）。
- **active / disabled**: コード未定義（※推測: `:disabled { opacity: 0.3 }` をモーダル nav ボタンで採用）。

#### Secondary（ターコイズ塗り）
- 実装例: `Discovery.ctaBtn`
- 用途: セクション内 CTA（詳細を見る）
- padding `18px 48px`、font 16px 500、letter-spacing 0.05em。
- `background: #2BB9B0`、`color: #FFFFFF`、`border-radius: 0`。
- **hover**：`background: #FFFFFF`、`color: #2BB9B0`（反転、0.2s）。

#### Outline（枠線型）
- 実装例: `FootNav.btnExternal`、`BusinessModal.modalNavBtn`、`Gnav.btn01 a`
- padding:
  - FootNav 外部: `16px 40px`、font 15px 500、min-width 300px
  - Modal nav: `12px 24px`、font 14px 500
  - Gnav 募集要項: `14px 24px`、font 14px 500、アイコン矢印併設
- `background: transparent`、`color: #1C2C43`、`border: 1px solid #1C2C43`、`border-radius: 0`。
- **hover**：`background: #1C2C43`、`color: #FFFFFF`（反転、0.2s）。
- **disabled**（モーダル前後ナビ）: `opacity: 0.3`、クリック反応は `disabled` 属性で抑止。

#### Chip（カテゴリタグ、Business）
- 実装例: `Business.cardCategory`
- padding `6px 12px`、font 12px、line-height 1、`border: 1px solid #2BB9B0`、`color: #2BB9B0`、`border-radius: 0`。
- **hover**：`background: #2BB9B0` / `color: #fff`。

#### Ghost（下線テキスト）
- 実装例: `BusinessModal.modalNavClose`（`閉じる`）
- `background: transparent`、`border: none`、font 14px 500、color primary、`text-decoration: underline`、padding 0。

#### Icon-only（ハンバーガー）
- 実装例: `Header.btnMenu`
- PC では非表示。SP で `width: 17.0667vw; height: 17.0667vw;` 正方形、3 本線（width 26px × height 2px × color primary × gap 6px）。
- **状態切替**：`body.is-menu-open` 時に 1本目 `translateY(8px) rotate(45deg)`、2本目 `opacity:0`、3本目 `translateY(-8px) rotate(-45deg)` で X 化。

#### 共通仕様
- **角丸**：ほぼ全ボタンで `border-radius: 0`（シャープ）。例外はリファレンスなし。
- **影**：通常ボタンに影なし。カード（後述）のみ hover 時に影。
- **transition**：`background-color 0.2s` / `color 0.2s` 固定。

### 8-2. カード

#### Business カード（事業紹介）
- ラッパ: `flex:1`、`border: 1px solid rgba(28,44,67,0.1)`、`overflow: hidden`、`cursor: pointer`、`transition: box-shadow 0.3s`。
- **hover**：`box-shadow: 0 8px 40px rgba(28,44,67,0.15)`、内画像 `transform: scale(1.05)` (0.5s cubic-bezier(0.215, 0.61, 0.355, 1))。
- 画像: `aspect-ratio: 4/3`。
- 本体 padding: `4rem 4rem 5rem`（PC） / `5.33333vw` 全辺（SP）。
- 見出し構造: EN ラベル（12px 600 Poppins accent）→ JA 小見出し（13px 500 primary）→ h3 本見出し（20px 700 primary line-height1.5）→ リード（14px primary line-height1.8）→ タグ群 → 右下 MORE。

#### People カード（社員）
- 背景: 白、`overflow:hidden`、`border-radius: 0`。
- サムネ `aspect-ratio: 3/4`、hover で `scale(1.05)`（0.5s）。
- 本体 padding `2.4rem 2.4rem 3.2rem`。
- キャッチ 15px 500 line-height 1.6、meta 12px primary60%、氏名 Poppins 700 14px。

#### Environment カード
- 枠なし・影なし。画像 `aspect-ratio: 4/3` を上に、下に 18px 500 のラベルのみ（padding-top 2rem）。
- hover で画像のみ `scale(1.05)`（0.5s）。

#### About 数字カード
- 背景 `rgba(255,255,255,0.15)`（半透明白、ターコイズ地に溶ける）、padding `4rem 3.2rem`、縦 Flex、gap `1.6rem`。角丸なし。

### 8-3. モーダル（Business）

```
Overlay  : position: fixed; inset: 0; background: rgba(28,44,67,0.8);
           z-index: 9000; padding: 40px; display:flex; align-items:center; justify-content:center;
           overflow-y: auto;
Box      : background: #FFFFFF; width:100%; max-width: 960px; max-height: 90vh; overflow-y: auto;
Close    : top:20px right:20px, 44×44px。疑似要素 ::before / ::after で 24×2px の交差ラインを rotate(±45deg) で × 作成。
Img      : aspect-ratio: 16/9; object-fit: cover;
Body     : padding: 4rem 5rem 5rem;
Num      : 12px 600 Poppins accent、letter-spacing 0.1em
Ttl      : 32px 700 primary line-height 1.4
SubTtl   : 18px 500 accent line-height 1.6
Txt      : 15px primary line-height 1.9
Keyword  : padding 8px 16px、bg #D9F2F0、font 13px primary
Nav      : border-top 1px rgba(primary, 0.1); padding-top 3.2rem
```
- ESC キーで close、外側クリック（overlay 直下）でも close。open 中 `document.body.style.overflow = 'hidden'` で背面スクロール停止。

### 8-4. フォーム要素
- 本 LP は入力フォームを**持たない**（外部サイトへエントリー誘導するのみ）。`input` / `select` / `textarea` / `checkbox` のスタイル定義は存在しない。
- ※推測：将来 `/recruitment/` 配下でフォームが必要になった場合は、border 1px primary / radius 0 / padding 12px 16px / placeholder primary50% で `Outline` ボタンと揃えると統一感が出る。

### 8-5. ナビゲーション

#### PC Header Nav（`.menu`）
- `position: absolute; top:0; left:0; width:100%; height:100%;`、`display:flex; justify-content:flex-end; gap: 0 10px; padding-right: 40.5996vw`。
- 各 `<a>` は高さ 100%、縦中央、padding `0 12px`、font 14px 500 primary、hover で `opacity: 0.7`。

#### SP ハンバーガー展開（`Gnav`）
- ラッパ `position: fixed; inset:0; z-index:999; opacity:0; visibility:hidden;` → `.isOpen` 付与で `opacity:1; visibility:visible;`（0.4s cubic-bezier）。
- オーバーレイ `rgba(28,44,67,0.5)`（クリックで閉じる）。
- 本体 `540px × 100%` 右ドロワ（SP は 100% 幅）、白、`padding: 100px 50px 60px`、初期 `translateX(100%)` → open 時 `translateX(0)`（0.4s cubic-bezier）。
- 内部は `CONTENTS` 見出し＋メニューリスト + 下部に `募集要項` 枠線ボタン、さらに `ENTRY` 見出し + 2 つの塗 Entry リンク。
- メニュー項目：TOP / 仕事を知る（子：OUR BUSINESS・仕事の流れ） / 働く社員を知る / 働く環境を知る（子：ENVIRONMENT） / 採用情報（子：募集要項・応募方法・選考フロー）。

### 8-6. FAQ アコーディオン等
- 本 LP の `page.tsx` には FAQ ブロックは存在しない（`/recruitment/#faq` に遷移する前提）。アコーディオン UI は未実装。

## 9. 装飾・質感

### border-radius（全値）
```
0       : ほぼ全てのボタン・カード・モーダル・入力枠（直角主義）
2px     : Flow 横スクロールバー track / thumb
50%     : Footer 駅アイコン（18px 円）
```
- 角丸を**ほぼ全く使わない**のが本LPのデザイン言語。ソリッドで信頼感のあるコーポレート調を強調。

### box-shadow（elevation レベル別）
```
elevation-0 : none                                /* 既定 */
elevation-1 : 0 4px 20px rgba(0, 0, 0, 0.1)       /* Header Entry ドロップダウン */
elevation-2 : 0 8px 40px rgba(28, 44, 67, 0.15)   /* Business カード hover */
```

### アイコン
- **使用ライブラリ**：無し（すべて **SVG 直書き or CSS 擬似要素**）。
- **SVG**：`about_ico01.svg` 〜 `about_ico08.svg`（About 数字カード 用、56×56px、black 1bit の図形）、`flow_img.svg`、`people_cat.svg`、`people_cat02.svg`、`people_copy.svg`。
- **CSS 矢印**：
  - `.c-ico-arrow01`（グローバル）：`width:20px; height:20px; border-right:2px solid currentColor; border-bottom:2px solid currentColor; transform: rotate(-45deg);`
  - Business MORE アイコン：`arrowIco` 40×40px。`::before`（24×2px 横棒）と `::after`（8×8px 斜め矢尻）が `arrowSlide` で 1.2s ease-in-out 左右に揺れる。
  - Flow SP スクロールヒント：`scrollHintArrow` 4vw 正方形、`border-top/right 0.5vw` で斜め矢尻 → `scrollArrowBounce` で 1.2s 揺れ。
- **ハンバーガー 3 本線**：`width:26px; height:2px; background: primary; gap: 6px 0;`、open 時に X 化。
- **Swiper prev/next / pagination**：swiper-bundle 既定アイコンを `color: #1C2C43` で上書き。

### 区切り線 / 背景装飾
- **区切り線**：
  - `1px solid rgba(28,44,67,0.1)` → Business カード枠、FootNav nav リスト下線、モーダル nav 上線、Gnav list01 下線。
  - `1px solid rgba(255,255,255,0.1)` → Footer `.menu01 > li` 下線。
  - `2px solid #1C2C43` → FootNav `.navTtl` 下線（見出しの強調）。
- **背景装飾**:
  - Read セクション：右に幅 320px × 高さ 600px の縦ループ画像（同一画像を 2 枚重ねて継ぎ目なく循環）。
  - MV：下部に `mv_txt.png` を `txtloop02` で 20s linear 横流し。
  - About：潜在的に `txtloop` アニメの横流しテキストループが定義済み（50s linear / delay -25s で 2 枚ループ）。
  - Footer 最下部：`footer_copy.png` 全幅装飾（Zoom 表示）。
  - Discovery：画像全面 + 暗幕 + ゴースト装飾コピー `rgba(255,255,255,0.15)`。
- **ぼかし**：Header の `.lHeader.fixed` のみ `backdrop-filter: blur(10px)` + `rgba(255,255,255,0.8)`。他セクションにブラー使用なし。
- **幾何学図形**：明示的な装飾（円・ドットパターン等）は無し。

## 10. アニメーション・インタラクション

### hover 時の挙動（要素別）
| 要素 | hover 効果 | duration / easing |
|---|---|---|
| Header nav `<a>` | `opacity: 0.7` | 0.2s (既定 ease) |
| Header `.btnRecruit a` | 同上 | 0.2s |
| Header `.btnEntry > span` | `background-color` → `#2BB9B0` | 0.2s |
| Header Entry dropdown | `.entryBox { opacity/visibility 0→1 }` | 0.2s |
| Entry 各リンク画像 | `opacity: 0.7` | 0.2s |
| Business カード | `box-shadow: 0 8px 40px rgba(28,44,67,0.15)` | 0.3s |
| Business カード内画像 | `transform: scale(1.05)` | 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) |
| Business `.cardCategory`（tag） | bg/text 反転 accent | 0.2s |
| Discovery CTA | bg/text 反転 | 0.2s |
| FootNav Entry ボタン | bg primary → accent | 0.2s |
| FootNav 外部ボタン | 塗潰し反転 | 0.2s |
| FootNav nav a | `color: accent` | 0.2s |
| Footer サイトマップ各 a | `color: accent` | 0.2s |
| Footer `menu02 li a` | `color: #fff` | 0.2s |
| People カードサムネ | `scale(1.05)` | 0.5s (既定 ease) |
| Environment カード画像 | `scale(1.05)` | 0.5s cubic-bezier |
| Modal nav ボタン | 塗潰し反転 | 0.2s |
| Gnav list01 a / sub a | `color: accent` | 0.2s |
| Gnav `btn01` 募集要項 | 塗潰し反転 | 0.2s |
| Gnav `list02` Entry | bg primary → accent | 0.2s |

### スクロール連動アニメーション
- **IntersectionObserver 全体制御**（`ScrollAnimator.tsx`）：`document.querySelectorAll('.js-animate')` を監視。`threshold: 0.15`、`rootMargin: '0px 0px -10% 0px'`。可視化後 `.is-animate` を付与し、`unobserve` する（1回きり）。
- 付与されるスタイル：
  ```css
  .js-animate.fadeIn01 {
    opacity: 0;
    transform: translateY(2rem); /* 20px 下から */
    transition: opacity 1.2s cubic-bezier(0.215, 0.61, 0.355, 1),
                transform 1.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .js-animate.fadeIn01.is-animate { opacity: 1; transform: none; }

  .js-animate.fade { opacity: 0; transition: opacity 1s ease; }
  .js-animate.fade.is-animate { opacity: 1; }
  ```
- 利用箇所：`Read` 見出し・本文、`Flow` 見出し、`About/People/Environment/Discovery/Business` の `.ttl01` などに `js-animate fadeIn01`（Business の見出しは `fade`）。

### keyframe 定義（globals.css）
```css
@keyframes bg-gradient { 0%{bg-position:0% 0%} 50%{25% 50%} 75%{50% 100%} 100%{100% 100%} }
@keyframes txtloop    { 0%→100%  translateX(100%)   → translateX(-100%)  }
@keyframes txtloop02  { 0%→100%  translateX(0%)     → translateX(-50%)   }
@keyframes imgloop01  { 0%→100%  translateY(100%)   → translateY(-100%)  }
@keyframes imgloop02  { 0%→100%  translateX(100%)   → translateX(-100%)  }
/* 以下はセクションローカル */
@keyframes arrowSlide       { 0%,100%: translateX(0) / 50%: translateX(6px) }
@keyframes scrollArrowBounce{ 0%,100%: rotate(45deg) translateX(0) / 50%: +1.5vw }
```
使用場所：
- MV 下部テキスト流れ: `txtloop02` 20s linear infinite。
- Read 右縦ループ画像: `imgloop01` 30s linear infinite、2枚目は `-15s` delay。
- About 横流れテキスト: `txtloop` 50s linear infinite、2枚目 `-25s` delay（※推測: 現状セレクタからの参照は無いが keyframe は維持）。
- Business MORE 矢印: `arrowSlide` 1.2s ease-in-out infinite。
- Flow SP スクロール矢印: `scrollArrowBounce` 1.2s ease-in-out infinite。

### transition の標準値
```
ease-out-cubic : cubic-bezier(0.215, 0.61, 0.355, 1)   /* FV スクロール / Header / Gnav / カード画像 / 見出しfade */
ease           : (既定)                                /* スライダー pagination など swiper 内部 */
duration-short : 0.2s  /* ボタンhover */
duration-mid   : 0.3s  /* box-shadow hover / Header 切替 */
duration-long  : 0.4s  /* Gnav スライド */
duration-image : 0.5s  /* 画像 scale hover */
duration-reveal: 1.0–1.25s  /* fadeIn01 / fade */
```

### MV Splide 設定
```js
type: 'fade', rewind: true, autoplay: true,
interval: 5000, speed: 1000,
pauseOnHover: false, pagination: false, arrows: false
```
- `autoplay:playing` コールバックで `rate * 100%` を progress-bar の width に反映（10ms linear）。
- トグルボタンクリックで `pause` / `play` 切替。

### People Swiper 設定
```js
slidesPerView: 1.2, spaceBetween: 20,
breakpoints: {
  768 : { slidesPerView: 2.5, spaceBetween: 30 },
  1025: { slidesPerView: 3.5, spaceBetween: 40 },
}
pagination: clickable true (.swiper-pagination),
navigation: .swiper-button-prev / .swiper-button-next
```

### About 数字カードカウントアップ
- IntersectionObserver（`threshold: 0.3`）。可視化後に 1800ms の requestAnimationFrame ループで `easeOutCubic`（`1 - (1 - t)^3`）によって 0 → targetNum。到達後はカードごとに `unobserve`。

### ローディング / ページ遷移
- ローディングスクリーン無し。Next.js App Router のデフォルト遷移。

## 11. レスポンシブ挙動

設計基準は **375px（iPhone 標準）** 〜 **1920px（フル HD）**。Tailwind の `sm/md/lg` 命名とは**異なる**（独自定義）。

### 各ブレークポイントでの主な変化

#### `max-width: 1280px`（LG-L）
- 大画面専用指定なし。`u-lg-min` / `u-lg-max` クラスで要素出し分けのみ。

#### `max-width: 1024px`（MD-L / タブレット）
- Header nav の `padding-right: 35vw`（PC は 40.5996vw）。
- Business: セクション padding 縮小（12rem → 10rem）、カード gap `4rem → 2rem`、cardBody padding `4rem → 3rem`、cardTtl `20px → 18px`。
- About: 数字グリッド `repeat(3,1fr) → repeat(2,1fr)`、gap `4rem → 3rem`、数字 56px → 48px。
- Environment: グリッド `repeat(3) → repeat(2)`、gap `4rem → 3rem`。
- Discovery: padding-bottom `16rem → 12rem`、decorCopy `56px → 40px`。
- People: peopleTop padding-top `12rem → 10rem`、people padding-bottom `10rem → 8rem`。
- Footer: inner が `flex-column`、左右ボックス順序入替（`leftBox: order 1` / `rightBox: order 2`）、leftBox width 100%。
- FootNav: padding `10rem / 12rem → 8rem / 10rem`。
- Gnav: `box` を縦積み、leftBox 幅 100%、lGnavInner width 100%。
- MV: min-height `600px → 500px`。
- Flow: padding `12rem / 19.6rem → 10rem / 16rem`。

#### `max-width: 767px`（SP）
- **Header**：nav / btn を非表示、ハンバーガー表示（17.0667vw 正方形）。header 高さ 14.9333vw、ロゴ幅 70.6667vw、ロゴ画像 40vw。
- **MV**：`padding-top: 14.9333vw`、`height: 100svh`、inner に `margin-left: 10.6667vw`（右寄せレイアウト）、mvCopy 画像 max-width 80vw、progressbar / scroll ラベルが 8vw の距離に。
- **Read**：padding を `42.6667vw 0 0` に、上に `margin-top: -21.3333vw` で前セクション（MV）に重ねる。2 カラムを縦積み、右の画像枠幅 100% × 高さ 64vw。本文 font 3.73333vw line-height 1.8。
- **Business**：カード 2 枚を縦積み（gap 8vw）、cardBody padding 5.33333vw、cardTtl 5.33333vw、cardEn 3.2vw、タグ font 3.2vw / padding 1.6vw 3.2vw。
- **Flow**：PC 画像非表示、`flowImgScroll` 表示。内画像は `min-width: 160vw` で横にはみ出し、横スクロール。ヒント `スクロール ▶` 表示。
- **About**：padding-bottom 0、数字 9.6vw 巨大、ラベル 3.2vw、アイコン 10.6667vw。
- **Discovery**：decorCopy 7.46667vw（line-height 1.6）。
- **People**：Swiper が 1.2 枚表示（余剰を見せる演出）、カード catch 3.73333vw、meta 3.2vw。
- **Environment**：2 カラム・gap 5.33333vw、label 4.26667vw。
- **FootNav**：btnEntry は幅 100%（`min-width: 0`）、外部ボタンは `flex-column` / 全幅。
- **Footer**：inner `display:block`、padding `10.6667vw 5.33333vw 0`、ロゴ 42.6667vw、tel 7.46667vw、copyright 2.93333vw。下端 `padding-bottom: 114.667vw` で footer_copy 装飾領域を確保。
- **Gnav**：padding `25.3333vw 10.6667vw 16vw`、CONTENTS 見出し 6.4vw、list01 a 4.26667vw。

#### `min-width: 1601px`（XL+）
- MV のみ `max-width: 1920px; margin: 0 auto;` で巨大ディスプレイで中央寄せ帯レイアウト化。

### モバイル固有の要素
- **固定 CTA バーは無し**（スクロール追従するエントリーボタン等は未実装）。
- **ハンバーガーメニュー**：右上・正方形ボタン → 右からスライドインドロワ（540px / SP は全幅）。
- **横スクロール領域**：Flow セクションの業務フロー画像のみ（SP限定）。
- **Swiper スワイプ**：People カルーセル（SP では 1.2 枚表示）。
- **vw 基調の寸法**：SP では `rem` ではなく `vw` 単位に切替（375px 端末でピクセルグリッドに揃うよう `1.33333vw` 刻み）。
- **`html { font-size: 2.66667vw }`**：`max-width: 374px` 以下ではルートフォントサイズを `vw` 基準に落としさらにスケール（極小端末対応）。

## 12. アクセシビリティ

### alt 属性
- ロゴ：`alt="千代田工販株式会社"`。
- FV キャッチ：`alt="キミの想いが未来をともす"`（画像テキストの代替）。
- ヘッダーのエントリー外部リンク画像：`alt="マイナビ"` / `alt="キャリタス"`。
- People 装飾コピー SVG：`alt="あなたの成長を全力でサポート"`。
- Flow フロー図：`alt="仕事の流れ図"`。
- People カードサムネ：`alt={m.name}`（`M.M` 等イニシャル）。Environment カード：`alt={card.label}`。
- **装飾画像**（MV txt/screen/mvCopy、Read ループ画像、Footer copy、Environment 個別画像は label のみ）は `alt=""`（空）で明示的にスキップ。

### aria-label / role
- Business モーダル close ボタン：`aria-label="閉じる"`。
- それ以外に aria-label / role は**明示的な付与なし**（※推測: 改善余地あり。ハンバーガー・Swiper 矢印・モーダル内 navigation ボタンは `aria-label` を追加するのが望ましい）。

### キーボード操作
- モーダル：`window.keydown` で `Escape` により閉じる。Tab フォーカストラップは未実装（※推測: 要改善）。
- Splide / Swiper：各ライブラリ既定のキーボードサポート（矢印キー）は設定項目で明示的に有効化されていない（※推測: Splide は `keyboard: 'global'` 等を追加推奨）。
- ハンバーガー：`<a href="#">` をクリック可能要素として採用しており `preventDefault` 併用。`<button>` への変更が望ましい（※推測）。

### 色コントラスト
- 本文 `#1C2C43` on `#FFFFFF` → コントラスト比 12.4:1（AAA）
- 本文 `#FFFFFF` on `#2BB9B0` → 約 2.6:1（AA ならず、**要注意**。見出し大サイズであれば 3:1 をクリア）
- 白 on 濃紺 `#1C2C43` → 14:1（AAA）
- 白70% on 濃紺 → 約 10:1（AAA）
- 白30% on 濃紺（copyright）→ 約 4.2:1（AA ギリギリ）

### セマンティクス
- `<header>` / `<main class="l-main">` / `<section id="...">` / `<footer>` を適切に使用。
- 見出し階層：`h1`（FV画像）→ `h2`（各セクション）→ `h3`（カード・モーダル内）で統一。
- `<ul>` / `<li>` で反復要素を適切にマーク。

### その他
- `body.is-menu-open { overflow: hidden }` でメニュー展開中のスクロール固定。
- モーダル表示中 `document.body.style.overflow = 'hidden'` で同様に固定。
- フォーカスリング：未カスタム（ブラウザ既定）。

---

## 再現用プロンプト例

本仕様書を別の Claude / Claude Code に渡すだけで、同等の LP を実装するためのプロンプトテンプレート。

```text
あなたはフロントエンドの実装に精通したシニアエンジニアです。
以下の仕様書に沿って、千代田工販株式会社 新卒採用LPを Next.js 14 (App Router) + CSS Modules で
ピクセル単位で再現してください。デザインの厳密性を最優先とし、勝手な解釈は禁止です。

---

## 【前提】プロジェクト構成
- Next.js 14 App Router（`app/` ディレクトリ）
- 画像最適化は無効化（`next.config.js` で `images: { unoptimized: true }`）
- フォントは `next/font/google` で Noto Sans JP（400/500/700/900）と Poppins（300/400/500/600/700）を読込
- ルート `html { font-size: 62.5% }` で 1rem = 10px 化
- Tailwind CSS 3.4 は読み込むがユーティリティはほぼ使わず、`app/globals.css` 内のグローバルクラス
  （`.l-inner` / `.l-main` / `.u-sm-min` / `.u-sm-max` / `.c-ttl-01` / `.js-animate` 等）のみ使用
- 各セクションは `components/<Name>/<Name>.tsx` + `<Name>.module.css` のペアで実装
- スライダー：`@splidejs/splide` v4（MV）と `swiper` v11（People）
- CSS は `public/vendor/splide.min.css` / `public/vendor/swiper-bundle.min.css` を layout の `<head>` に直リンク
- スクロール連動は IntersectionObserver を自前ラップした `ScrollAnimator` コンポーネント

## 【カラー】
以下3色＋白＋アルファバリエーションのみで組み立ててください。グラデーション・角丸は原則禁止。
- Primary Navy : #1C2C43（本文・見出し・エントリーボタン塗・フッター背景）
- Accent Teal  : #2BB9B0（アクセント：CTA・Read背景・About背景・ターコイズタグ枠）
- Teal Light   : #D9F2F0（Flow・People・FootNav・モーダルキーワードタグ背景）
- 白           : #FFFFFF
- アルファ：白 0.08–0.7 / primary 0.1–0.8 を適宜（詳細は仕様書3参照）
- `border-radius: 0` を既定とし、Footer 駅アイコンのみ `50%`（18px 円）
- 影：通常 none。ドロップダウンに `0 4px 20px rgba(0,0,0,0.1)`、カード hover に `0 8px 40px rgba(28,44,67,0.15)` の2段階のみ

## 【タイポグラフィ】
- 本文（`body`）: Noto Sans JP, font-size 1.6rem, weight 400, line-height 1.5, font-feature-settings "palt", color #1C2C43
- セクション見出し: `.ttl01En` 5.6rem Poppins 700 letter-spacing 0.02em line-height 1
                   + `.ttl01Ja` 1.4rem Noto Sans JP 500 letter-spacing 0.08em line-height 1
- Read の見出しのみ 2.8rem Noto Sans JP 500 line-height 1.5 letter-spacing 0.12em
- 数字カウンター・電話番号・EN ラベル類はすべて Poppins
- SP は vw 基調（4px ≒ 1.06667vw）。見出し EN は 9.6vw、JA は 3.2vw、本文は 3.73333vw

## 【レイアウト】
- コンテンツ幅：`.l-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; }`（SP: 0 5.33333vw）
- ブレークポイント：SP ≤ 767px、MD ≤ 1024px、LG ≤ 1280px、XL ≥ 1601px
- セクション縦余白は PC 12rem / SP 13.3333vw を基本とし、各セクション個別に微調整（仕様書5）

## 【ページ構造】
`app/page.tsx` は以下の順で配置：
  Header → main.l-main { MainVisual → Read → Business → Flow → About → Discovery → People → Environment → FootNav } → Footer → ScrollAnimator

各セクションのアンカー・背景色・コピー本文は仕様書7を参照し、原文を一字も改変せずに使用すること。
特に以下の長文コピーは厳密に再現：
- Read の3段落（企業理念「お役立ち」）
- Business の TRADING / MANUFACTURING カードのキャッチと小見出し
- Business モーダル8件の num / title / subTitle / body / keywords
- People 社員7名のキャッチ・部署・氏名・入社年
- Footer の住所「〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル」/ 電話「03-3564-5511」/ copyright

## 【コンポーネント実装要件】
1. **Header**（`position: fixed; top:0; z-index:1000;` / 高さ 100px）
   - 下スクロール（scrollY > 0）で `.fixed` を付与 → `rgba(255,255,255,0.8) + backdrop-filter: blur(10px)`
   - PC ナビは絶対配置で `padding-right: 40.5996vw`
   - ENTRY ボタン（130px × 100%）は hover でターコイズに切替、ホバー時にドロップダウン（幅200px、影 elevation-1）を表示
   - SP はハンバーガー（17.0667vw 正方形、3 本線 + MENU ラベル）。`body.is-menu-open` で X 化アニメ

2. **MainVisual**（100vh / SP 100svh）
   - Splide fade / autoplay 5s / speed 1s / pauseOnHover:false / pagination/arrows:false
   - `autoplay:playing` のコールバックで progress-bar の width を `rate*100%` に更新
   - カスタムトグルボタン（▶/⏸）で `autoplay.pause()` / `.play()`
   - 下部に `mv_txt.png` を2枚並べ `txtloop02` 20s linear で横流し
   - 左下に縦書き `SCROLL`、右下にプログレスバー（120×2px）

3. **Business モーダル**
   - Overlay `rgba(28,44,67,0.8)` 全画面、Box 最大960×90vh
   - ESC キーで閉じる、外側クリック（target === currentTarget）で閉じる
   - 前後ナビで `document.dispatchEvent(new CustomEvent('openModal', { detail: nextId }))`
   - 開いている間 `document.body.style.overflow = 'hidden'`

4. **About 数字カウントアップ**
   - IntersectionObserver threshold 0.3
   - 1800ms / easeOutCubic `(1 - (1-t)^3)` で 0 → targetNum を `Math.round` でレンダ
   - 各カードは unobserve で1回限り

5. **People Swiper**
   - slidesPerView: 1.2 / 2.5（≥768） / 3.5（≥1025）
   - spaceBetween: 20 / 30 / 40
   - ページネーション clickable、navigation prev/next 両方有効

6. **ScrollAnimator**
   - `.js-animate` 全てを IntersectionObserver（threshold 0.15、rootMargin '0px 0px -10% 0px'）で監視
   - 可視化で `.is-animate` 付与 → `.fadeIn01`（opacity 0+translateY20px → 0/none、1.2–1.25s cubic-bezier(0.215, 0.61, 0.355, 1)）または `.fade`（opacity 0 → 1、1s ease）

## 【アニメーション標準値】
- hover duration: 0.2s（ボタンの bg/color 切替）
- カード画像 scale(1.05): 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)
- Header 高さ/背景切替: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
- Gnav スライドイン: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)
- fadeIn01 reveal: 1.2s / 1.25s cubic-bezier(0.215, 0.61, 0.355, 1)
- 無限ループアニメ: txtloop02 20s / imgloop01 30s / txtloop 50s（全て linear infinite）

## 【制約事項】
- 仕様書にない要素・色・装飾は追加しない
- 角丸・グラデーション・フレキシブルなシャドウ表現は禁止
- 画像は `public/images/` に仕様書7で列挙したファイル名で配置（無い場合はダミー画像を同名で作成）
- aria-label / キーボード対応は現実装通りの最小限（モーダル close と ESC のみ）
- 全てのコピーは原文を一字一句改変せず反映すること

## 【成果物】
- `app/layout.tsx` `app/page.tsx` `app/globals.css`
- `components/{Header, MainVisual, Read, Business, Flow, About, Discovery, People, Environment, FootNav, Footer, Gnav, ScrollAnimator}/` 配下の .tsx と .module.css
- `hooks/useScrollAnimation.ts`
- `public/images/` `public/vendor/`
- `package.json` / `next.config.js` / `tailwind.config.ts` / `postcss.config.js` / `tsconfig.json`

完成後、SP（375px）/ タブレット（1024px）/ PC（1440px）/ XL（1920px）の4ブレークポイントで
視差を確認し、MV スライダーの autoplay・プログレスバー・About カウントアップ・Business モーダルの
前後遷移・Gnav のスライドインが仕様通り動くことを検証してください。
```

---

> 本仕様書は `tecnes_lp_001` リポジトリ（branch: `claude/design-system-spec-BLlqs`）の実装を静的解析して生成。推測箇所は `※推測` を明示。数値・コピーは原文を参照している。
