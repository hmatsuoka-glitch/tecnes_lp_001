# 千代田工販 新卒採用LP デザインシステム仕様書

> 解析対象: 本リポジトリ `/` の Next.js 実装（`app/page.tsx` をエントリとする1ページ構成）。
> 推測で補った値には `※推測` を付与しています。

---

## 1. メタ情報

| 項目 | 内容 |
| --- | --- |
| ページタイトル | `新卒採用情報｜千代田工販株式会社` |
| meta description | `千代田工販株式会社の新卒採用情報サイトです。` |
| 目的 | 新卒学生の採用エントリー誘導（マイナビ／キャリタス／自社募集要項への送客） |
| ターゲット | 大学生／大学院生（27卒想定 ※マイナビURLが `/27/` のため） |
| 全体のトーン | 信頼感のある企業ネイビー（#1C2C43）と、親しみ・成長を象徴するティール（#2BB9B0）を主役にした、誠実で爽やかなBtoB商社の採用ブランディング。装飾は控えめで、写真と数字（実績）で語るドキュメンタリー寄りのトーン。 |

---

## 2. 技術スタック

### フレームワーク・ライブラリ
```
Next.js          14.2 (App Router, /app ディレクトリ)
React            18.3
TypeScript       5.4
Tailwind CSS     3.4   (ただしユーティリティ生成は最小・配色拡張なし)
Splide.js        4.1.4 (メインビジュアル fade スライダー)
Swiper           11.0  (PEOPLE 社員カードカルーセル)
lottie-web       5.12  (※package には含まれるが現コードでは未使用 ※推測)
```

### HTML構造の方針
- `<header>`, `<main class="l-main">`, `<section id="...">`, `<footer>` のセマンティック構造。
- 各セクションは `<section id="business|flow|about|discovery|people|environment">` でアンカーリンク対応。
- 見出しは `h1` を MV キャッチコピー（画像）に1つだけ使用、各セクションに `h2`、カード内に `h3`。
- リスト類は `<ul>/<li>` で構造化。`<picture>/<source>` で WebP 切替を想定 ※推測。

### CSS記法
- **CSS Modules**（`*.module.css`）をコンポーネント単位で採用。
- グローバルスタイルは `app/globals.css` のみ（リセット + 共通レイアウト + キーフレーム）。
- **rem 基準を 10px 化**（`html { font-size: 62.5%; font-size: 10px; }`）→ 仕様内の `1.6rem = 16px` 換算。
- スマホ（〜374px）は `font-size: 2.66667vw` でフルードスケーリング。
- Tailwind は導入されているが本LPではほぼ使用なし（`extend: {}` のまま、CSS Modules で完結） ※意図的に最小構成。
- CSS変数は Swiper 用 (`--swiper-theme-color: #007aff`, `--swiper-navigation-size: 44px`) と Next.js Font の `--font-noto-sans-jp` / `--font-poppins` のみ。デザイントークン用CSS変数は未定義。

### JavaScript / インタラクション
- スクロール連動フェードイン: `IntersectionObserver`（`components/ScrollAnimator/ScrollAnimator.tsx` および `hooks/useScrollAnimation.ts`、`threshold: 0.15, rootMargin: '0px 0px -10% 0px'`）。
- 数字カウントアップ: `IntersectionObserver` + `requestAnimationFrame` イージング `1 - (1 - p)³`、`duration: 1800ms`（About セクション）。
- ヘッダー fixed 切替: `window.scrollY > 0` で `.fixed` 付与、`backdrop-filter: blur(10px)` を付加。
- ハンバーガー: `body.is-menu-open` クラスで `overflow: hidden` 制御。
- モーダル: `useState` + `Escape` キーで閉じる。前後ナビゲーションは `CustomEvent('openModal')` で再オープン。

### フォント読込方法
- `next/font/google` で `Noto_Sans_JP` (400/500/700/900) と `Poppins` (300/400/500/600/700) を `display: 'swap'` でセルフホスト。
- CSS変数 `--font-noto-sans-jp` / `--font-poppins` を `<html>` に付与し、各 `font-family` から参照。

### 画像・最適化方針
- 配置先 `public/images/`。
- 形式: 主に **JPG**（写真）と **PNG**（コピー画像・ロゴ）、**SVG**（アイコン群 `about_ico*.svg`）。WebP/AVIF は不使用。
- `next/image` を使用するが `unoptimized` を全箇所で指定 → Next の最適化を意図的に無効化（外部CDN/Vercel依存を避ける構成 ※推測）。
- `@2x.jpg` 命名は Retina 想定の元素材。`<picture><source srcSet="..."/></picture>` でWebP差替えを将来的に想定 ※推測。

### サードパーティCSS
- `public/vendor/splide.min.css`
- `public/vendor/swiper-bundle.min.css`
（`<head>` に直接 `<link>` 読込）

---

## 3. カラーパレット

実装内に CSS 変数化されたトークンは存在しないため、`rgb()/rgba()` 直値から HEX を再計算しました。

### コアカラー
```css
--color-primary:        #2BB9B0;  /* rgb(43,185,176)  ティール／CTA hover、アクセント、リンクhover、カテゴリTag枠 */
--color-secondary:      #1C2C43;  /* rgb(28,44,67)    ネイビー／本文・見出し・ENTRYボタン背景・モーダル背景・Footer背景 */
--color-accent:         #2BB9B0;  /* primary と同色（ティール）。MORE矢印 hover、アクセント記号 */
--color-bg-base:        #FFFFFF;  /* rgb(255,255,255) ページ基本背景・カード背景・ヘッダー背景 */
--color-bg-surface:     #D9F2F0;  /* rgb(217,242,240) Flow / People / FootNav の淡ティール背景、モーダル keyword pill 背景 */
--color-bg-dark:        #1C2C43;  /* ネイビー：READ/About 反転背景、Footer */
--color-bg-dark-strong: #2BB9B0;  /* ティール：READ / About のキー背景 */
--color-text-main:      #1C2C43;  /* 本文の基本色（白背景時） */
--color-text-on-dark:   #FFFFFF;  /* ダーク背景上のテキスト */
--color-text-sub:       rgba(28,44,67,0.6);  /* メタ情報、社員カードの所属表示など */
--color-text-muted:     rgba(28,44,67,0.5);  /* 注釈、Flow scroll hint */
--color-border:         rgba(28,44,67,0.1);  /* カードボーダー、ナビ仕切り線 */
--color-border-on-dark: rgba(255,255,255,0.1); /* Footer 内仕切り線 */
--color-overlay-dark:   rgba(28,44,67,0.5);   /* Gnav オーバーレイ */
--color-overlay-modal:  rgba(28,44,67,0.8);   /* Business モーダル背景 */
--color-overlay-image:  rgba(28,44,67,0.4);   /* Discovery 背景画像オーバーレイ */
--color-shadow:         rgba(28,44,67,0.15);  /* カード hover シャドウ */
--color-shadow-soft:    rgba(0,0,0,0.1);      /* ENTRY ドロップダウン */
--color-success:        #2BB9B0;  /* ※推測：本LP内に成功色の用例なし → primary を流用 */
--color-warning:        #E0A82E;  /* ※推測：本LP内に未使用 */
--color-error:          #D04A4A;  /* ※推測：本LP内に未使用 */
```

### 半透明バリエーション（実装で使用されている rgba 一覧）
```css
rgba(255,255,255,0.15);  /* About 数字カードの白半透明背景 */
rgba(255,255,255,0.3);   /* MV プログレスバー track、Footer 駅アイコン背景 */
rgba(255,255,255,0.4);   /* Footer 徒歩時間 */
rgba(255,255,255,0.5);   /* Footer メニュー02、項目見出し */
rgba(255,255,255,0.6);   /* Footer サブメニュー、駅情報 */
rgba(255,255,255,0.7);   /* Footer 住所、企業情報 */
rgba(255,255,255,0.8);   /* Header.fixed 背景、About note */
rgba(255,255,255,0.3);   /* copyright */
rgba(28,44,67,0.1);      /* 罫線・カードボーダー */
rgba(28,44,67,0.4);      /* Discovery 背景オーバーレイ */
rgba(28,44,67,0.5);      /* Gnav オーバーレイ／Flow scroll hint */
rgba(28,44,67,0.6);      /* People カード dept */
rgba(28,44,67,0.7);      /* Gnav サブメニュー */
rgba(28,44,67,0.8);      /* Modal オーバーレイ */
rgba(43,185,176,0.2);    /* Flow スクロールバー track */
```

### グラデーション
```css
/* 実装内に linear-gradient / radial-gradient の使用は検出されませんでした。 */
/* @keyframes bg-gradient のみ定義あり（bg-position アニメ用、background-image は未指定） */
```
※ 仮にティール×ネイビーのアクセントグラデを用意するなら下記を推奨 ※推測:
```css
background: linear-gradient(135deg, #1C2C43 0%, #2BB9B0 100%);
```

### Swiper / Splide デフォルト残存値
```css
--swiper-theme-color: #007AFF;    /* Swiper bundle 既定（本LPでは Pagination/Nav の色をネイビーに上書き） */
--swiper-navigation-size: 44px;
```

---

## 4. タイポグラフィ

### ルート設定（重要）
```css
html { font-size: 62.5%; font-size: 10px; }   /* 1rem = 10px */
@media (max-width: 374px) { html { font-size: 2.66667vw; } }
body {
  font-family: var(--font-noto-sans-jp), "Noto Sans JP", sans-serif;
  font-size: 1.6rem;            /* = 16px */
  font-weight: 400;
  line-height: 1.5;             /* （body 末尾で line-height:1 に上書き） */
  font-feature-settings: "palt"; /* プロポーショナルメトリクス（日本語ツメ） */
  color: rgb(28,44,67);
}
```

### font-family
```css
/* 本文・日本語 */
--font-body: var(--font-noto-sans-jp), "Noto Sans JP", sans-serif;
/* 英字・数字 */
--font-en:   var(--font-poppins),     "Poppins",     sans-serif;
```
- 数字（カウントアップ・電話番号・名前イニシャル）も Poppins。
- 日本語見出しは Noto Sans JP の `weight: 500/700`。

### サイズスケール（PC基準 / SP基準）
| 用途 | PC `rem` | PC `px` | SP（`vw`） | 参考SP `px`@375 |
| --- | ---: | ---: | ---: | ---: |
| h1 (MV キャッチコピー) | （画像） | max-w 600px | max-w 80vw | - |
| h2 英大見出し `.ttl01En` | `5.6rem` | `56px` | `9.6vw` | `36px` |
| h2 日本語サブ `.ttl01Ja` | `1.4rem` | `14px` | `3.2vw` | `12px` |
| h2 日本語 (Read/Flow) | `2.8rem` / `3.2rem` | `28-32px` | `5.86vw` / `6.93vw` | `22-26px` |
| h3 カード見出し | `2.0rem` | `20px` | `5.33vw` | `20px` |
| h3 モーダル見出し | `3.2rem` | `32px` | `6.4vw` | `24px` |
| サブ見出し（About 数字）| `2.4rem` | `24px` | `5.33vw` | `20px` |
| FootNav CTA リード | `2.0rem` | `20px` | `4.26vw` | `16px` |
| body-lg | `1.8rem` | `18px` | `4.26vw` | `16px` |
| body | `1.6rem` | `16px` | `3.73vw` | `14px` |
| body-md（リード文） | `1.5rem` | `15px` | `3.73vw` | `14px` |
| body-sm | `1.4rem` | `14px` | `3.46vw` | `13px` |
| caption | `1.3rem` | `13px` | `3.2vw` | `12px` |
| 注釈 / micro | `1.2rem` | `12px` | `3.2vw` | `12px` |
| 極小（MV SCROLL, copyright） | `1.0rem` / `1.1rem` | `10-11px` | `2.66vw` / `2.93vw` | `10-11px` |
| 数字カウントアップ | `5.6rem` | `56px` | `9.6vw` | `36px` |
| 電話番号 (Footer) | `2.8rem` | `28px` | `7.46vw` | `28px` |
| Discovery 装飾コピー | `5.6rem` (TB `4rem`) | `56/40px` | `7.46vw` | `28px` |

### font-weight
```css
--fw-light:    300;  /* Poppins のみ読込 */
--fw-regular:  400;  /* body, txt */
--fw-medium:   500;  /* メニュー、見出しサブ、リード、ボタン */
--fw-semibold: 600;  /* Poppins カード EN ラベル、modalNum */
--fw-bold:     700;  /* h2 EN, h3, ENTRY, 数字, subTtl */
--fw-black:    900;  /* Noto Sans JP のみ読込（明示使用なし） */
```

### line-height
```css
1     /* 見出し EN, ボタン内テキスト, 数字 */
1.4   /* h3 modal, decorCopy, cardLabel */
1.5   /* body 既定, READ ttl, cardTtl */
1.6   /* About subTtl 行間, モーダル subTtl, address */
1.8   /* leadTxt 群（リード文） */
1.9   /* People leadTxt, Modal txt */
2     /* Read txt 本文（最も広い） */
```

### letter-spacing
```css
0.02em;  /* h2 EN（Poppins） */
0.05em;  /* ENTRY ボタン、SCROLL 系、decorCopy */
0.08em;  /* h2 Ja サブ */
0.1em;   /* card EN ラベル、modalNum、btnEntry FootNav */
0.12em;  /* Read 大見出し */
0.2em;   /* MV SCROLL 縦書き */
```

### 日本語特有の処理
```css
font-feature-settings: "palt";   /* body 全体に適用：日本語のプロポーショナル詰め */
overflow-wrap: break-word;        /* 全要素 */
line-break: strict;               /* 行頭禁則を厳格化 */
text-size-adjust: 100%;           /* iOS Safari の自動拡大抑止 */
```
- 改行制御は `<br className="u-sm-min" />` (PC のみ表示) と `<br className="u-sm-max" />` (SP のみ表示) で出し分け。

---

## 5. スペーシング

### ベースユニット
- **4px グリッド**を基本（`0.4rem` 刻み）。
- ただし運用上は **8px 刻み**（`0.8rem` / `1.6rem` / `2.4rem` / `3.2rem` / `4rem` / `6rem` / `8rem` / `12rem`）が頻出。
- SP は `vw` 比率（375px 基準）：`2.66vw=10px`, `4vw=15px`, `5.33vw=20px`, `8vw=30px`, `10.66vw=40px`, `13.33vw=50px`。

### セクション間 / セクション内 縦余白
| セクション | PC `padding` | TB（〜1024）| SP（〜767） |
| --- | --- | --- | --- |
| `<header>` | height `100px` | 同左 | height `14.93vw` |
| Read | `20rem 0 12rem` | `16rem 0 10rem` | `42.66vw 0 0` (上にネガティブmargin `-21.33vw`) |
| Business | `12rem 0 12rem` | `10rem 0 10rem` | `13.33vw 0 13.33vw` |
| Flow | `12rem 0 19.6rem` | `10rem 0 16rem` | `17.33vw 0 32vw` |
| About | `12rem 0 20.8rem` | 同左 | `13.33vw 0 0` |
| Discovery | 上 `12rem` / 下 `16rem` | 下 `12rem` | 上 `17.33vw` / 下 `29.33vw` |
| People | 上 `12rem` / 下 `10rem` | 上 `10rem` / 下 `8rem` | 上 `13.33vw` / 下 `25.86vw` |
| Environment | `12rem 0 12rem` | `10rem 0 10rem` | `13.33vw 0 32vw` |
| FootNav | `10rem 0 12rem` | `8rem 0 10rem` | `21.33vw 0 0` |
| Footer | `8rem 4rem 6rem` (内側) | flex 縦並び `gap 4rem` | `10.66vw 5.33vw 0` |

### 見出し直下の余白
```
h2 → サブテキスト       : margin-bottom 4rem (PC) / 6.4vw (SP)
リード文 → メインコンテンツ : margin-bottom 6rem (PC) / 8vw (SP)
ttl01 内 EN→Ja gap     : 8px
カード内テキスト要素間   : 1.2rem〜2rem
```

### コンテナ内パディング
```
.l-inner / .l-inner-02 : padding 0 40px (PC) / 0 5.33333vw (SP)
カード本体 .cardBody    : 4rem 4rem 5rem (PC) / 5.33vw (SP)
モーダル .modalBody     : 4rem 5rem 5rem (PC) / 8vw 5.33vw (SP)
About 数字カード        : 4rem 3.2rem (PC) / 5.33vw 4vw (SP)
ボタン (CTA Discovery)  : 18px 48px
ボタン (FootNav Entry)  : 20px 60px
ボタン (FootNav Ext)    : 16px 40px
Pillタグ (cardCategory) : 6px 12px (PC) / 1.6vw 3.2vw (SP)
```

---

## 6. レイアウト

### 最大幅・コンテナ
```css
.l-inner, .l-inner-02 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
@media (max-width: 767px) {
  .l-inner, .l-inner-02 { padding: 0 5.33333vw; }
}
.lFooterInner { max-width: 1200px; padding: 8rem 4rem 6rem; }
.mvCopy img    { max-width: 600px; }
.mv (≧1601px) { max-width: 1920px; margin: 0 auto; }
.lGnavInner    { width: 540px; max-width: 100%; }   /* PC ドロワー幅 */
.modalBox      { max-width: 960px; max-height: 90vh; }
.flowTxt01, .peopleLeadTxt { max-width: 700px; }
.decorCopy(People)         { max-width: 500px; }
.btnEntry(FootNav)         { min-width: 360px; }
.btnExternal(FootNav)      { min-width: 300px; }
```

### ブレークポイント
```css
/* mobile-first ではなく、max-width 指定の "PC-first 上書き" 方式 */
SP   : ≦ 767px        (.u-sm-min を非表示)
TB   : 768〜1024px    (.u-md-min を非表示。PC ナビは表示維持)
LG   : 1025〜1280px
XL   : 1281〜1600px
2XL  : ≧ 1601px        (MV を 1920px に閉じる)
```
ユーティリティクラス（globals.css）:
```css
.u-sm-min  { display:none !important; }  /* ≦767  : PC専用要素を SP で隠す */
.u-sm-max  { display:none !important; }  /* ≧768  : SP専用要素を PC で隠す */
.u-md-min  { display:none !important; }  /* ≦1024 */
.u-md-max  { display:none !important; }  /* ≧1025 */
.u-lg-min  { display:none !important; }  /* ≦1280 */
.u-lg-max  { display:none !important; }  /* ≧1281 */
```

### Grid / Flex の使用パターン
| パターン | 使用箇所 |
| --- | --- |
| `display:flex; align-items:center;` | Header, Card meta, Btn 群 |
| `display:flex; flex-direction:column;` | Section 内縦積み, Footer leftBox |
| `display:flex; gap:0 4rem;` 2カラム | Read（テキスト＋ループ画像）、Business カード2枚、Footer |
| `display:grid; grid-template-columns:repeat(3,1fr); gap:4rem 4rem;` | About 数字カード、Environment カード |
| `display:grid; … repeat(2,1fr);` | TB / SP 2カラム |
| `position:absolute` レイヤリング | MV 内（背景・画像・コピー・プログレス）、Discovery 背景 |

---

## 7. セクション構成（FV から順番に全部）

`app/page.tsx` のレンダリング順は以下:
`Header → main(MainVisual → Read → Business → Flow → About → Discovery → People → Environment → FootNav) → Footer → ScrollAnimator`

### 7-1. Header（`<header class="lHeader">`）

- **目的**: グローバルナビゲーション、エントリー導線への常時アクセス。
- **レイアウト**: 横一列。`position: fixed; top: 0; width: 100%; height: 100px;`。スクロールで `.fixed` 付加 → `backdrop-filter: blur(10px)`、背景 `rgba(255,255,255,0.8)`。
- **構成要素**:
  1. ロゴ（`/images/logo.png` w200×h50） + 隣に英字 `RECRUIT SITE`
  2. PCナビ `<ul>`（4項目）
  3. 募集要項テキストリンク
  4. ENTRY ドロップダウンボタン（hover で マイナビ／キャリタス画像リンクが下に展開）
  5. SP用ハンバーガーボタン（線3本 + テキスト「MENU」）
- **使用カラー**: 文字 `#1C2C43`, ENTRY 背景 `#1C2C43` / hover `#2BB9B0`, ハンバーガー線 `#1C2C43`。

#### コピー全文
```
ロゴ右テキスト  : RECRUIT SITE
ナビ            : 仕事を知る / 働く社員を知る / 働く環境を知る / 採用情報
ボタン          : 募集要項 / ENTRY
ハンバーガー    : MENU
```

#### Gnav（ハンバーガー展開後の右ドロワー）
- 幅 `540px`（PC） / 全幅（〜1024px）。`transform: translateX(100%)` → `translateX(0)` でスライドイン（`0.4s cubic-bezier(0.215,0.61,0.355,1)`）。
- 構成:
  - `<h2>CONTENTS</h2>`（PC のみ） + メニューリスト（罫線 `1px solid rgba(28,44,67,0.1)`）
    - `TOP` / `仕事を知る`（サブ:`OUR BUSINESS 仕事を知る` / `仕事の流れ`）/ `働く社員を知る` / `働く環境を知る`（サブ:`ENVIRONMENT 働く環境を知る`）/ `採用情報`（サブ:`募集要項` / `応募方法・選考フロー`）
  - 募集要項ボタン（枠線スタイル、矢印 `c-ico-arrow01`）
  - `<h2>ENTRY</h2>` + ボタン2本：`マイナビからエントリー` / `キャリタスからエントリー`
- 背面オーバーレイ: `rgba(28,44,67,0.5)`、クリックで閉じる。
- 開閉時 `body.is-menu-open { overflow:hidden; }`、ハンバーガー線が ×（45°）にトランスフォーム。

### 7-2. MainVisual（FV）

- **目的**: ブランドメッセージを写真スライド+巨大コピーで提示し、スクロールを誘発。
- **レイアウト**: `width:100%; height:100vh; min-height:600px; overflow:hidden;`（SP は `100svh`、上に `padding-top: 14.93vw`、`mvInner` を `margin-left:10.66vw`）。
- **要素レイヤ**（z-index 順）:
  1. `.slideBg` 背景ベタ `#1C2C43` (z=auto)
  2. `.slideImg` フルカバー写真 (z=2)
  3. `.txtWrap` 下端を流れる英字コピー画像（`mv_txt.png`）2連結 → `txtloop02 20s linear infinite` で右→左に流れる (z=5)
  4. `.mvScreen` 全画面オーバーレイPNG (z=8, pointer-events:none)
  5. `.mvCopy` キャッチコピー画像 `mv_copy.png` (z=10、`bottom:10rem; left:50%; transform:translateX(-50%);`)
  6. 左下: `.mvScroll`（縦書き `writing-mode:vertical-rl`「SCROLL」白`#FFF`、letter-spacing 0.2em）
  7. 右下: プログレスバー（幅 `120px × 2px`、track `rgba(255,255,255,0.3)`、bar `#FFF`）+ 再生/一時停止トグルボタン (▶/⏸)
- **スライダー**: Splide `type:'fade', autoplay:true, interval:5000, speed:1000, pauseOnHover:false, pagination:false, arrows:false`。
- スライド画像4枚（`mv_slide01-01.png` 〜 `mv_slide04-01.png`、`-02` は未使用 ※推測）。
- **使用カラー**: 文字すべて `#FFFFFF`、ベース `#1C2C43`。

#### コピー全文
```
キャッチコピー (h1, 画像 alt)  : 「キミの想いが未来をともす」
左下                            : SCROLL
ループテキスト                  : (mv_txt.png 内、コピー画像のため alt="" )
```

### 7-3. Read（リードメッセージ）

- **目的**: 企業理念「お役立ち」を伝えるイントロ。
- **レイアウト**: 2カラム（左:本文 / 右:縦ループ画像）。`gap:0 60px`。
  - 左 `.leftBox`: 縦並び `gap: 3.2rem 0`。
  - 右 `.rightBox`: `width:320px; height:600px; overflow:hidden;`（TB:240×480、SP:100% × 64vw）。
- **背景**: `#2BB9B0`（ティール）一面。`padding:20rem 0 12rem;`。SP では上に `margin-top: -21.33vw` で前のセクションに食い込ませる。
- **画像**: `read_img01@2x.jpg` を 2要素（`.image01`/`.image02`）で縦に積み、`imgloop01 30s linear infinite` で下→上にエンドレスループ（`.image02` は `animation-delay: -15s`）。
- **使用カラー**: 文字 `#FFFFFF`、背景 `#2BB9B0`。

#### コピー全文
```
h2 (.ttl):
  私たちは社会と産業の
  未来のために挑戦し続けます

p (.txt) ①:
  千代田工販はただ商品を売るだけではありません。
  付加価値を加え、お客さまの課題解決に寄り添いながら
  社会インフラ整備と産業界の成長に貢献する商社です。

p (.txt) ②:
  私たちの仕事は、お客さま一人ひとりの要望に応え
  信頼を創り出すこと。

p (.txt) ③:
  勇気がいる最初の一歩も、本気で向き合う。
  どんな難題があっても、創意と工夫で乗り越えていく。
  そんな想いは、きっと誰かの未来をともす光になるはずです。
  これが私たちの企業理念である「お役立ち」です。
```

### 7-4. Business（OUR BUSINESS / 仕事を知る）

- **目的**: 商社業務（TRADING）と自社製品事業（MANUFACTURING）の2軸を提示。
- **レイアウト**: 中央寄せ大見出し → 中央寄せリード → 2カラムカード。SP は縦積み。
- **背景**: `#FFFFFF`、`padding:12rem 0 12rem`。
- **見出し** (`.ttl01`): 中央寄せ縦積み。EN `OUR BUSINESS` (Poppins 56px / 700 / `#1C2C43`) + JA `仕事を知る` (14px / 500)。
- **カード** (`.card`): 1px ボーダー `rgba(28,44,67,0.1)`、hover で `box-shadow: 0 8px 40px rgba(28,44,67,0.15)`、内部画像 `transform:scale(1.05)` (0.5s)。
  - 画像: `aspect-ratio: 4/3`
  - 本文ブロック: padding `4rem 4rem 5rem`
  - EN ラベル (Poppins 12px / 600 / `#2BB9B0`) → JA サブラベル (13px / 500) → h3 (20px / 700) → リード文 (14px / 1.8) → カテゴリーTagリスト → MORE 矢印
  - カテゴリー Tag: `padding:6px 12px; border:1px solid #2BB9B0; color:#2BB9B0; font-size:1.2rem;` クリックでモーダル開閉。hover 反転。
- MORE 矢印: テキスト `MORE` + 自前 CSS で 24×2px 横棒 + 8×8px 矢印頭。`@keyframes arrowSlide 1.2s` で右に揺れる。
- **モーダル**: 全画面オーバーレイ `rgba(28,44,67,0.8)`、ボックス `max-width:960px; max-height:90vh;`。Escape で閉じる、`← 前の事業 / 閉じる / 次の事業 →` ナビあり。

#### コピー全文（カード）
```
[TRADING カード]
  EN     : TRADING
  JA     : 商社のしごと
  h3     : 幅広い領域に精通した
           電機機械の専門商社
  lead   : 電気機器や一般産業機械のシステム販売を手掛けています。
  cats   : エネルギー・電力関連 / プラント産業・電機関連 / 交通・施設関連 /
           環境機械関連 / 情報・通信関連 / 国際事業
  arrow  : MORE

[MANUFACTURING カード]
  EN     : MANUFACTURING
  JA     : モノづくりのしごと
  h3     : 長年培った信頼と技術力で
           自社事業を展開
  lead   : 自社製品として自動車部品や紫外線応用機器を提供しています。
  cats   : 自動車部品事業 / UVシステム事業
  arrow  : MORE

[セクションリード文]
商社のネットワークを活かし、自社製品も販売しています。私たちはお客さまから必要とされるパートナーであり続けるため、クリエイティブな発想で解決策を提案します。
```

#### モーダル内コピー全文（8件）
```
[trading-01] 商社のしごと #01
  Title    : エネルギー・電力関連
  SubTitle : 電気をつくる、電気をはこぶ
  Body     : 火力・水力発電や電力流通設備を通じて、安定した電力供給に貢献。カーボンニュートラルを目指し、再生可能エネルギーや次世代エネルギー分野にも注力しています。
  Keywords : ＃発電設備 / ＃受変電設備 / ＃太陽光発電システム

[trading-02] 商社のしごと #02
  Title    : プラント産業・電機関連
  SubTitle : 工場の"つくる・しらべる・はこぶ"
  Body     : 製造業全般に電力システムから製造機械、物流設備、労働環境の改善まで、工場を動かすために必要な機器やサービスを幅広く提供しています。
  Keywords : ＃産業用モータ / ＃産業機械 / ＃計測・制御システム

[trading-03] 商社のしごと #03
  Title    : 交通・施設関連
  SubTitle : 都市と人びとをつなげる
  Body     : 電車の駆動システムや照明、空調、電源を供給するための受変電設備などを提供し、駅の自動改札機や端末システムも納入しています。鉄道会社との仕事を通じて安全な交通システムの構築に貢献しています。
  Keywords : ＃車両用駆動システム / ＃駅務システム / ＃鉄道電力システム

[trading-04] 商社のしごと #04
  Title    : 環境機械関連
  SubTitle : "地球に優しい"を実現する
  Body     : カーボンニュートラルやSDGsを重視し、排水や排ガスの浄化装置、省エネシステムを提供。余剰エネルギーの有効活用など、環境配慮型の事業を展開しています。
  Keywords : ＃水処理システム / ＃大気処理システム / ＃省エネシステム

[trading-05] 商社のしごと #05
  Title    : 情報・通信関連
  SubTitle : 工場をネットワークでつなぐ
  Body     : DXを活用し、パソコンやセンサーなどの情報機器を組み合わせたシステムで、工場設備の安定稼働や予防保全、生産性向上を支援しています。
  Keywords : ＃生産管理システム / ＃監視カメラシステム / ＃IoTソリューション

[trading-06] 商社のしごと #06
  Title    : 国際事業
  SubTitle : お客さまと世界をむすぶ
  Body     : 中国や東南アジアを中心に産業機器の輸出や特色ある海外製品を輸入販売。自社製品の紫外線殺菌装置も海外に納入するなど、グローバルに事業を展開中です。
  Keywords : ＃製品の輸出入販売 / ＃海外向け案件の営業サポート

[mfg-01] モノづくりのしごと #01
  Title    : 自動車部品事業
  SubTitle : トラックやバスの安全と環境をまもる
  Body     : トラックやバスなどの商用車向けにエアブレーキ配管の加工や排出ガスの無害化を図る浄化システム用の配管を販売。自社で製造拠点を構え、少量多品種生産によりきめ細かいニーズに対応、大手商用車メーカーと直接取引しています。
  Keywords : ＃エアブレーキ配管 / ＃燃料配管 / ＃排出ガス浄化システム用配管

[mfg-02] モノづくりのしごと #02
  Title    : UVシステム事業
  SubTitle : キレイな水で安心・安全をとどける
  Body     : 飲料水や洗浄水向けの紫外線殺菌装置を設計・販売しています。当社研究開発センターにて試験や研究を重ね、安心・安全な水を提供。約半世紀の実績とノウハウを持つ紫外線技術のリーディングカンパニーです。
  Keywords : ＃半導体工場向け / ＃食品・飲料工場向け / ＃上下水道施設向け
```

### 7-5. Flow（仕事の流れ）

- **目的**: 商社×メーカーとしての業務フロー図を1枚絵で説明。
- **背景**: `#D9F2F0`（淡ティール）、`padding:12rem 0 19.6rem`。
- **見出し**: 左寄せ `<h2 class="flowTtl01">仕事の流れ</h2>`（32px / 500 / `#1C2C43`）。
- **構成**:
  1. h2
  2. 説明文 `max-width: 700px`
  3. PC: フロー図（`tecnes_work_flow_preview.png` 1100×600）を全幅表示
  4. SP: 横スクロールラッパー `.flowImgScroll`（`min-width:160vw` で意図的に画面幅を超えさせる）+ 「スクロール →」のヒント矢印（45° 回転 + `scrollArrowBounce 1.2s`）
  5. フッターコピー画像 `flow_txt.png`（中央寄せ、max-w 600px）
- スクロールバー: `scrollbar-color: #2BB9B0 rgba(43,185,176,0.2)`、Webkit用 `4px height`、bg `rgba(43,185,176,0.2)`、thumb `#2BB9B0`、`border-radius:2px`。

#### コピー全文
```
h2  : 仕事の流れ
p   : 私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。
SP scroll hint : スクロール →
flow_txt.png   : (画像内文言。alt="" のため代替テキスト未指定)
```

### 7-6. About（ABOUT US / 千代田工販について）

- **目的**: 数値で会社規模・働き方を可視化（カウントアップで印象付け）。
- **背景**: `#2BB9B0`（ティール）。`padding:12rem 0 20.8rem`（SP 下 0）。`overflow:hidden`。
- **見出し**: 左寄せ。EN `ABOUT US` (Poppins 56px / 700 / `#FFF`) + JA `千代田工販について` (14px / 500 / `#FFF`)。
- **サブ見出し**: `数字でわかる 千代田工販の今` (24px / 700 / `#FFF`)
- **注記**: `※2025年3月時点` (13px / `rgba(255,255,255,0.8)`)
- **数字グリッド**: PC 3カラム × 3行（最後の段は2枠分の空き）、TB/SP 2カラム。`gap: 4rem 4rem`。
- **数字カード** (`.numCard`):
  - 背景 `rgba(255,255,255,0.15)` / padding `4rem 3.2rem`
  - 上から: SVGアイコン (56×56px) → ラベル (14px / 500) → 数字 (Poppins 56px / 700) + 単位 (20px / 500) → サブ注記 (13px / rgba(.8))
  - 数字は IntersectionObserver で初回のみ `0 → targetNum` に 1.8s で `easeOutCubic`。
- 画像: 末尾に `about_img01@2x.jpg` 全幅。

#### コピー全文（数字カード8件）
```
1) 創業年数        : 78年       sub: 1947年（昭和22年）創立
2) 売上高          : 536億円
3) 拠点数          : 16箇所     sub: 海外拠点3箇所含む
4) 従業員人数      : 350人
5) 平均勤続年数    : 16年
6) 年間休日        : 123日      sub: 夏季休暇5日間含む
7) 就業時間/日     : 7時間45分
8) 平均残業時間/月 : 15時間
```

### 7-7. Discovery（街に広がる千代田工販）

- **目的**: 写真背景に大型コピー＋CTAボタンで Business セクションへ送客。
- **背景**: 全面に `discovery_bg@2x.jpg` を `object-fit:cover` 配置 + `::after` で `rgba(28,44,67,0.4)` の暗幕オーバーレイ。
- **レイアウト**: 中央寄せ縦積み（`text-align:center; padding-top:12rem;`）。下 `padding-bottom:16rem`（SP 29.33vw）。
- **構成**:
  1. h2 中央寄せ（EN `DISCOVERY` 56px Poppins / `#FFF` + JA `街に広がる千代田工販` 14px / `#FFF`）
  2. リード文 (15px / 1.8 / `#FFF`)
  3. CTAボタン `詳細を見る`（背景 `#2BB9B0` / 文字 `#FFF` / padding `18px 48px`）→ hover で背景 `#FFF` 文字 `#2BB9B0`
  4. 装飾コピー（半透明大文字、`#FFF` の 15% alpha） — Noto Sans JP 56px / 700 / line-height 1.4 / letter-spacing 0.05em。

#### コピー全文
```
h2 EN  : DISCOVERY
h2 JA  : 街に広がる千代田工販
lead   : 社会のさまざまな領域で活躍している千代田工販の事業についてご紹介します。
CTA    : 詳細を見る
decor  : 個性と想いが
         響き合うことで
         わくわくする
```

### 7-8. People（PEOPLE / 働く社員を知る）

- **目的**: 社員インタビュー一覧をカルーセル提示。
- **背景**: `#D9F2F0`（淡ティール）。`padding-top: 12rem; padding-bottom: 10rem`。
- **構成**:
  1. h2 左寄せ（EN `PEOPLE` 56px Poppins / `#1C2C43` + JA `働く社員を知る` 14px / 500）
  2. リード文 `max-width:700px`（15px / 1.9 / `#1C2C43`）
  3. メイン画像 `people_img01@2x.jpg` 全幅 1280×400
  4. **Swiper カルーセル**: `slidesPerView: 1.2 (SP) / 2.5 (≥768) / 3.5 (≥1025)`、`spaceBetween: 20/30/40`、Pagination 有(クリック可) / Navigation 有。
  5. `decorSection` に装飾コピー画像 `people_copy.svg`（max-w 500px、中央寄せ）
- **カード** (`.card`): 背景 `#FFF`。サムネ `aspect-ratio:3/4`、hover で `transform:scale(1.05)`。本文 padding `2.4rem 2.4rem 3.2rem`。
  - `cardCatch` 15px / 500 / line-height 1.6 / `#1C2C43`
  - meta: dept (12px / `rgba(28,44,67,0.6)`) → name (Poppins 14px / 700) → year (12px / rgba)
- Swiper オーバーライド: `pagination-bullet` color `#1C2C43`(opacity 0.3 → active 1)、矢印 `#1C2C43`。

#### コピー全文（社員データ7件）
```
1) 部署 : 電機システム部・営業職           name: M.M  year: 2017年入社
   catch: 先輩に支えられ始まった千代田工販での挑戦 次は私が後輩を支える番だ

2) 部署 : プラント産業システム部・営業職   name: Y.T  year: 2014年入社
   catch: 関わるすべての人のベクトルを合わせて 大型プロジェクトに挑む

3) 部署 : 環境・機械システム営業部・営業職 name: N.S  year: 2017年入社
   catch: 顧客利益だけでなく その先にある「社会に良いこと」を追求

4) 部署 : 新潟支店・営業職                 name: O.T  year: 2017年入社
   catch: 主体性を持って企業と向き合い提案し、感謝される それが私の成長サイクル

5) 部署 : 九州支店・営業職                 name: J.A  year: 2019年入社
   catch: 商社ならではの価値を追求し 幅広い業界へ提案 次は本社でさらなる挑戦へ

6) 部署 : 自動車部品部・営業職             name: W.R  year: 2005年入社
   catch: 何事も全力で楽しむ 自社製品の海外展開という「未知なる挑戦」も楽しみたい

7) 部署 : UVシステム営業部・営業職         name: E.M  year: 2012年入社
   catch: UVシステムの営業が切り拓く 「社会インフラ」と「持続可能な未来」への貢献

[セクションリード]
千代田工販で新しい自分に出会い、変わらない自分の信念を持って活躍している先輩たち。どんな想いで働いているのか、エピソードを交えてご紹介します。

[装飾コピー画像 alt]
あなたの成長を全力でサポート
```

### 7-9. Environment（ENVIRONMENT / 働く環境を知る）

- **目的**: 制度・環境のサブカテゴリを6枚カードで一覧。
- **背景**: `#FFFFFF`、`padding:12rem 0 12rem`（SP 下 32vw）。
- **構成**:
  1. h2 左寄せ（EN `ENVIRONMENT` 56px Poppins / `#1C2C43` + JA `働く環境を知る` 14px / 500）
  2. リード文（15px / 1.8）
  3. グリッド: PC 3カラム、TB/SP 2カラム、`gap:4rem 4rem`
- **カード** (`.card`): 画像 `aspect-ratio:4/3` + 下にラベル (18px / 500 / `#1C2C43`)。hover で画像 `scale(1.05)`。

#### コピー全文（カード6件）
```
1) 福利厚生           img: environment_img01@2x.jpg
2) 教育制度           img: environment_img02@2x.jpg
3) オフィス紹介       img: environment_img03@2x.jpg
4) 社員座談会 パパ・ママトーク  img: environment_img04@2x.jpg
5) 社員座談会 社風トーク         img: environment_img05@2x.jpg
6) 先輩たちの声       img: environment_img06@2x.jpg

[セクションリード]
みなさんが安心して働くことのできる環境、会社とともに成長できる環境を整えております。
```

### 7-10. FootNav（採用情報リンク + 最終CTA）

- **目的**: 採用関連ページへの一覧リンク + エントリーCTA。
- **背景**: `#D9F2F0`、`padding:10rem 0 12rem`（SP 上 21.33vw / 下 0）。
- **構成**:
  1. ナビ見出し `採用情報`（18px / 700 / `#1C2C43`）下に 2px ボーダー
  2. リスト5項目（`1.5rem` テキスト、各 `1px solid rgba(28,44,67,0.1)` 罫線、hover 文字色 `#2BB9B0`）
  3. CTAエリア（中央寄せ、`padding-top:8rem`）
     - リード文（20px / 500 / line-height 1.8）
     - メインボタン `エントリーする`（背景 `#1C2C43` / 白文字 / `padding:20px 60px` / `min-width:360px` / hover で背景 `#2BB9B0`）
     - 下に2連の枠線ボタン（マイナビ／キャリタス、横並び `gap:2rem` → SP 縦積み）

#### コピー全文
```
ナビTtl  : 採用情報
ナビList :
  - 募集要項
  - 応募方法・選考フロー
  - 採用担当者メッセージ
  - 求める人物像
  - よくあるご質問

CTAリード:
  ともに新しい未来を築くチームメイトを探しています。
  あなたのご応募をお待ちしています。

メインボタン   : エントリーする
外部ボタン1    : マイナビからエントリー
外部ボタン2    : キャリタスからエントリー
```

### 7-11. Footer

- **目的**: 企業情報・サイトマップ・著作権表記。
- **背景**: `#1C2C43`、文字白系、`padding-bottom: 114.667vw`（SP のみ巨大コピー画像のための余白） / PC は `padding:0`。
- **レイアウト**: 内側 `max-width:1200px; padding:8rem 4rem 6rem;`。
  - PC: 横2カラム（左:企業情報 320px / 右:サイトマップ flex:1）。`gap:0 6rem`。
  - TB（〜1024px）: 縦積み（左:企業情報 → 右:サイトマップ の順序入替: leftBox order:1, rightBox order:2）。
- **企業情報ブロック (leftBox)**:
  - ロゴ画像 (160px) を `filter: brightness(0) invert(1)` で白塗り
  - 創立 / 資本金 を 2行リスト（13px / `rgba(255,255,255,0.7)` / 項目見出し `rgba(255,255,255,0.5)`）
  - 住所 13px / `rgba(255,255,255,0.7)`
  - Googleマップリンク（小ボタン風）
  - 電話番号 28px / Poppins 700 / `#FFF` / letter-spacing 0.05em
  - 駅情報リスト（円形「地」アイコン 18×18 / `border-radius:50%` / `rgba(255,255,255,0.3)` 背景）
  - copyright 11px / `rgba(255,255,255,0.3)`
- **サイトマップブロック (rightBox)**:
  - menu01: 各 `<li>` 下に 1px `rgba(255,255,255,0.1)` 罫線、`menuTtl` 15px / 500 / `#FFF` (hover `#2BB9B0`)、`subMenu` 13px / `rgba(255,255,255,0.6)` インデント `padding-left:16px`
  - menu02: プライバシーポリシー / コーポレートサイト（12px / `rgba(255,255,255,0.5)`）
- **巨大コピー**: `footer_copy.png` を全幅 `<p class="footerCopy">` で配置（SP では `padding-bottom:114.667vw` で固定領域確保）。

#### コピー全文
```
[企業情報]
ロゴ alt    : 千代田工販株式会社
創立        : 1947年（昭和22年）2月
資本金      : 200,000,000円
住所        : 〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル
mapLink     : Googleマップ
TEL         : 03-3564-5511
駅          : 浅草線「宝町駅」より 徒歩4分
              銀座線「京橋駅」より 徒歩4分
              東西線「日本橋駅」より 徒歩5分
copyright   : © Chiyoda Kohan Co., LTD. All rights reserved.

[サイトマップ menu01]
TOP
仕事を知る
  ├ OUR BUSINESS 仕事を知る
  └ 仕事の流れ
働く社員を知る
働く環境を知る
  └ ENVIRONMENT 働く環境を知る
採用情報
  ├ 募集要項
  ├ 応募方法・選考フロー
  ├ 採用担当者メッセージ
  ├ 求める人物像
  └ よくあるご質問

[menu02]
プライバシーポリシー  / コーポレートサイト

[巨大コピー画像 alt]
キミの想いが未来をともす
```

---

## 8. コンポーネント仕様

### 8-1. ボタン

| Variant | 用途 | 既定 | hover | size | 角丸 | shadow |
| --- | --- | --- | --- | --- | --- | --- |
| **primary-dark** (`btnEntry` Header) | ENTRY ヘッダー | bg `#1C2C43` / text `#FFF` / 16px / 700 / Poppins / `padding: 0 / width:130px` (height:100%) / `letter-spacing:0.05em` | bg `#2BB9B0` | h:100px | 0 | なし |
| **primary-cta** (`btnEntry` FootNav) | エントリー大型 | bg `#1C2C43` / text `#FFF` / 18px / 700 / `padding:20px 60px` / `min-width:360px` / `letter-spacing:0.1em` | bg `#2BB9B0` | – | 0 | なし |
| **primary-teal** (Discovery `ctaBtn`) | セクション内 CTA | bg `#2BB9B0` / text `#FFF` / 16px / 500 / `padding:18px 48px` / `letter-spacing:0.05em` | bg `#FFF` / text `#2BB9B0` | – | 0 | なし |
| **secondary-outline** (FootNav `btnExternal`, Gnav `btn01`) | 外部リンク／補助 | 背景透過 / text `#1C2C43` / `border:1px solid #1C2C43` / 14〜15px / 500 / `padding:14-16px 24-40px` | bg `#1C2C43` / text `#FFF` | – | 0 | なし |
| **ghost-link** (Modal nav close, BtnRecruit) | テキストリンク | `#1C2C43` / 14px / 500 / 透過 | opacity 0.7 もしくは下線 | – | – | – |
| **pill-tag** (`cardCategory`) | カテゴリ Tag | `border:1px solid #2BB9B0` / text `#2BB9B0` / 12px / `padding:6px 12px` | bg `#2BB9B0` / text `#FFF` | – | 0 | – |
| **icon-only** (modalClose) | × 閉じる | 44×44 / `::before/::after` で 24×2px 線を ±45° | – | – | – | – |
| **toggle-play** (MV) | 再生/一時停止 | 24×24 / 透過 / 白 ▶/⏸ | – | – | – | – |

#### 共通遷移
```css
transition: background-color 0.2s, color 0.2s;       /* 多数 */
transition: opacity 0.2s;                             /* opacity hover */
transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1); /* lHeader */
```

#### disabled
- Modal の前後ナビボタンは `disabled` 時 `opacity: 0.3`（インラインスタイル）。

### 8-2. カード

| 種別 | aspect | padding | border | hover image | hover shadow |
| --- | --- | --- | --- | --- | --- |
| Business カード | image 4:3 | `4rem 4rem 5rem` (SP `5.33vw`) | `1px solid rgba(28,44,67,0.1)` | `scale(1.05)` 0.5s easing | `0 8px 40px rgba(28,44,67,0.15)` |
| Environment カード | image 4:3 | label `padding-top:2rem` | なし | `scale(1.05)` 0.5s | なし |
| People カード | image 3:4 | body `2.4rem 2.4rem 3.2rem` | なし（白背景のみ） | `scale(1.05)` 0.5s linear | なし |
| About 数字カード | – | `4rem 3.2rem` | なし | – | – |

### 8-3. フォーム要素
- 本LP内に `<input>/<select>/<textarea>/<checkbox>` の使用なし（エントリーは外部サイト遷移）。
- 仮に追加する場合の推奨スタイル ※推測:
```css
input, select, textarea {
  width:100%; padding:14px 16px;
  border:1px solid rgba(28,44,67,0.2);
  background:#FFF; color:#1C2C43; font-size:1.5rem;
  transition: border-color .2s;
}
input:focus { border-color:#2BB9B0; outline:none; box-shadow:0 0 0 3px rgba(43,185,176,0.2); }
```

### 8-4. ナビゲーション
- **PC ヘッダーナビ**: `<ul>` を `position:absolute; right:0; padding-right:40.6vw` で右寄せ＋ENTRYボタンエリアを避ける配置。各 `<li><a>` は flex column / 中央寄せ / `padding: 0 12px` / hover で `opacity:0.7`。
- **PC ENTRY ドロップダウン**: hover で 200px のメニューを下に出現（`position:absolute; top:100%; right:0;`、box-shadow `0 4px 20px rgba(0,0,0,0.1)`、`opacity` `0→1` / `visibility` で表示制御）。
- **SP ハンバーガー → 右ドロワー Gnav**: 詳細は §7-1。
- **フッターサイトマップ**: `<ul>` を 1px の半透明仕切り線で区切る。サブメニューはインデント表現。

### 8-5. モーダル（Business モーダル）
```
オーバーレイ : position:fixed; inset:0; bg rgba(28,44,67,0.8); padding:40px; overflow-y:auto; z:9000;
ボックス     : bg #FFF; max-width:960px; max-height:90vh; overflow-y:auto;
閉じるボタン : 44×44 / 右上20px / × 線2本
画像エリア   : aspect-ratio 16/9
本文         : padding 4rem 5rem 5rem;
  - num     : 12px / Poppins 600 / #2BB9B0
  - title   : 32px / 700 / #1C2C43
  - subTtl  : 18px / 500 / #2BB9B0
  - body    : 15px / line-height 1.9
  - keyword : pill: bg #D9F2F0, text #1C2C43, padding 8px 16px, 13px
  - nav     : 上罫線 1px rgba(28,44,67,0.1) / padding-top 3.2rem
キーボード   : Escape で閉じる、矢印 ←→ で前後ナビは未実装 ※推測
```

### 8-6. 反復UI: 共通見出し `.c-ttl-01` / `.ttl01`
```
構造        : <h2><span class="en">EN</span><span class="ja">JA</span></h2>
align       : Business と Discovery は中央寄せ、その他は左寄せ
EN          : 5.6rem / Poppins 700 / letter-spacing 0.02em / line-height 1
JA          : 1.4rem / Noto Sans JP 500 / letter-spacing 0.08em
gap         : 8px (縦)
margin-bot  : 4rem (PC) / 6.4vw (SP)（Business のみ 6rem / 8vw）
SP          : EN 9.6vw / JA 3.2vw
```

### 8-7. 矢印アイコン `.c-ico-arrow01`
```css
.c-ico.c-ico-arrow01 {
  display:inline-block;
  width:20px; height:20px;
  border-right:2px solid currentColor;
  border-bottom:2px solid currentColor;
  transform: rotate(-45deg);
}
```

---

## 9. 装飾・質感

### border-radius
```
0    /* 既定。本LPはほぼ角丸を使用しないシャープなデザイン */
2px  /* Flow スクロールバー thumb / track */
50%  /* Footer 駅情報の円形「地」アイコン (18×18) */
```
※ ボタン・カード・モーダル・タグは全て `border-radius: 0`。

### box-shadow
```
0 8px 40px rgba(28,44,67,0.15);   /* Business カード hover (elevation 2) */
0 4px 20px rgba(0,0,0,0.1);        /* Header ENTRY ドロップダウン (elevation 1) */
```
推奨 elevation スケール ※推測:
```
e0: none
e1: 0 4px 20px rgba(0,0,0,0.1)
e2: 0 8px 40px rgba(28,44,67,0.15)
e3: 0 12px 60px rgba(28,44,67,0.25)
```

### backdrop-filter
```
backdrop-filter: blur(10px);   /* スクロール時 Header (.fixed) */
```

### アイコン
- フォントアイコンライブラリは未使用。
- 矢印・×・ハンバーガーはすべて **CSS 擬似要素 + border 1辺**で自作。
- セクションアイコン（数字カード）: SVG（`/images/about_ico01〜09.svg`、56×56px、線色は SVG 内の currentColor を踏襲 ※推測）。
- Splide / Swiper の矢印・ページネーションは vendor デフォルトを `#1C2C43` で上書き。

### 区切り線
```
border-bottom: 1px solid rgba(28,44,67,0.1);    /* Gnav, FootNav リスト */
border-bottom: 2px solid #1C2C43;                /* FootNav 採用情報見出し直下 */
border-top:    1px solid rgba(28,44,67,0.1);    /* モーダル nav 上 */
border-bottom: 1px solid rgba(255,255,255,0.1); /* Footer メニュー罫線 */
```

### 背景装飾
- グラフィック（ドット・幾何学）は不使用。
- 大型装飾文字（Discovery `decorCopy`、巨大なフッターコピー画像）が"装飾性"を担う。
- READ / About は単色ティール `#2BB9B0` ベタ背景＋白文字でコントラストを稼ぐ構成。

---

## 10. アニメーション・インタラクション

### 共通 easing
```
cubic-bezier(0.215, 0.61, 0.355, 1)   /* "easeOutCubic" 系。fadeIn01, l-header transition, カード画像 hover */
ease                                    /* fade（汎用）*/
linear                                  /* テキスト/画像のループ系 */
ease-in-out                            /* arrow / scrollHint バウンス */
```

### duration（実装値）
```
0.2s  → ボタン hover, opacity 切替
0.3s  → ハンバーガー線、Header.fixed 切替
0.4s  → Gnav オーバーレイ表示・スライドイン
0.5s  → カード画像 scale(1.05)
1.0s  → fade（汎用）/ Splide speed
1.2s  → arrowSlide（MORE 矢印）, scrollArrowBounce
1.2s / 1.25s → fadeIn01 (opacity / transform)
1.8s  → 数字カウントアップ (easeOutCubic)
20s   → MV テキストループ (txtloop02)
30s   → READ 画像縦ループ (imgloop01)
50s   → About 横テキストループ (txtloop)
```

### keyframes 一覧（globals.css）
```css
@keyframes bg-gradient   { 0%/50%/75%/100% で background-position を 0% → 100% にずらす }
@keyframes txtloop       { translateX(100%) → translateX(-100%); }
@keyframes txtloop02     { translateX(0%)   → translateX(-50%); }
@keyframes imgloop01     { translateY(100%) → translateY(-100%); }
@keyframes imgloop02     { translateX(100%) → translateX(-100%); }
/* コンポーネント側 */
@keyframes arrowSlide        { 0%,100%: translateY(-50%) translateX(0); 50%: +6px; }
@keyframes scrollArrowBounce { 0%,100%: rotate(45deg) translateX(0);   50%: +1.5vw; }
```

### scroll 連動
- `.js-animate` 要素に `IntersectionObserver(threshold:0.15, rootMargin:'0px 0px -10% 0px')` で `is-animate` を付与（`ScrollAnimator.tsx`）。
- バリエーション:
  - `.fadeIn01`: 初期 `opacity:0; transform:translateY(2rem);` → `opacity:1; transform:none;`（1.2s/1.25s easeOutCubic）
  - `.fade`: `opacity 0 → 1`（1s ease）
- 数字カウントアップ: `threshold:0.3`、`duration:1800ms`、`easeOutCubic`、初回のみ実行（`unobserve`）。

### hover まとめ
| 要素 | 効果 |
| --- | --- |
| ヘッダーナビ a | `opacity: 0.7` |
| ヘッダー ENTRY | bg `#1C2C43 → #2BB9B0` |
| ENTRY ドロップダウン親 | hover で子メニュー `opacity:0→1, visibility` |
| Header MENU 線 | menu-open 時 ±45° 回転 / 中央線 opacity:0 |
| Business カード | shadow + 内画像 `scale(1.05)` |
| Pill タグ | bg/color 反転 |
| MORE 矢印 | `arrowSlide 1.2s` 常時アニメーション |
| Discovery CTA | bg/color 反転 |
| FootNav エントリー | bg `#1C2C43 → #2BB9B0` |
| Footer リンク | color → `#FFF` または `#2BB9B0` |
| People カード画像 | `scale(1.05)` 0.5s |

### ローディング / ページ遷移
- `next/font` の `display:'swap'` のみ。明示的なページローダー・遷移アニメは未実装。

---

## 11. レスポンシブ挙動

### 各ブレークポイントでの主な変化
| BP | 主な変化 |
| --- | --- |
| ≦ 374px | `html { font-size: 2.66667vw; }` でフルードスケールに切替 |
| ≦ 767px (SP) | ヘッダーが `14.93vw` に縮小、PC ナビ・ENTRY 非表示、ハンバーガー表示。MV は `100svh`、`mvInner` を `margin-left:10.66vw`。Read は2カラム→1カラム + 画像が下に。Business / Environment が縦積みグリッド or 1カラム。About グリッドが 2カラム。Footer 縦積み。Flow 図は横スクロール。FootNav の外部ボタンは縦並び。文字は ほぼ `vw` 指定。 |
| 768〜1024px (TB) | PC ナビ表示維持。Header.menu の右パディング `35vw`。Read 右画像 240×480。Business カード gap 縮小、見出し 18px。About / Environment グリッド 2カラム。Footer 縦積み (leftBox first, rightBox second)。 |
| 1025〜1280px (LG) | デフォルト PC レイアウト。 |
| 1281px+ (XL) | 同上。`.l-inner max-width:1200px` 中央寄せ。 |
| ≧ 1601px | `.mv` を `max-width:1920px` に閉じる（左右に余白が出る）。 |

### モバイル固有要素
- **ハンバーガー → 右ドロワー Gnav**: 全画面オーバーレイ。
- **Flow 図の横スクロール**: `min-width:160vw` の画像 + スクロールヒント矢印（`scrollArrowBounce`）。
- **Footer 巨大コピー画像**: SP では `padding-bottom: 114.667vw` で表示領域確保。
- **スワイプ**: People セクションの Swiper は SP で `slidesPerView:1.2` のチラ見せ表示（次カードを示唆）。
- **固定CTA**: SP 専用の固定追従ボタンは未実装 ※実装するなら下端追従の `position:fixed` を推奨 ※推測。

### `vw` 換算早見表（375px 想定）
```
2.66vw ≈ 10px   3.2vw ≈ 12px   3.46vw ≈ 13px   3.73vw ≈ 14px
4vw    ≈ 15px   4.26vw ≈ 16px   4.8vw ≈ 18px    5.33vw ≈ 20px
6.4vw  ≈ 24px   7.46vw ≈ 28px   8vw   ≈ 30px    9.6vw  ≈ 36px
10.66vw≈ 40px  13.33vw≈ 50px  17.33vw≈ 65px   21.33vw ≈ 80px
25.86vw≈ 97px  29.33vw≈ 110px 32vw  ≈ 120px   42.66vw ≈ 160px
```

---

## 12. アクセシビリティ

### 言語・ビューポート
```html
<html lang="ja">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
```

### alt 属性
- ロゴ: `alt="千代田工販株式会社"`
- メインコピー画像: `alt="キミの想いが未来をともす"`
- 装飾画像: `alt=""`（MV 内のループ英字、`mvScreen`、`flow_txt.png` など）
- 写真コピー画像（People `decorCopy`）: `alt="あなたの成長を全力でサポート"`
- カードのサムネ: `alt="{カード名/社員名}"`
- 外部リンク: `target="_blank" rel="noopener noreferrer"` を全箇所付与

### aria / role
- 閉じるボタン: `<button aria-label="閉じる">`
- それ以外の `aria-*` / `role` は明示なし（h2/section の意味論で代替） — 補強推奨ポイント:
  - メイン navi に `<nav aria-label="グローバルメニュー">` を付与 ※推測
  - ハンバーガーに `aria-expanded` / `aria-controls` を付与 ※推測
  - モーダルに `role="dialog" aria-modal="true" aria-labelledby` を付与 ※推測
  - スライダーに `aria-roledescription="carousel"` ※推測

### キーボード操作
- ヘッダー・カードリンクは `<a>` / `<button>` を使用しているためタブ移動可。
- モーダルは Escape で閉じる実装あり（Tab トラップは未実装 ※推測）。
- ハンバーガーは `<a href="#" onClick>` 実装 — `<button>` への置換が望ましい ※推測。
- フォーカスリングは `outline` を明示的に消していないため、ブラウザ既定が適用される。

### コントラスト比（WCAG AA 想定の参考値）
- `#1C2C43` on `#FFFFFF` → 13.5 : 1 ✅
- `#FFFFFF` on `#1C2C43` → 13.5 : 1 ✅
- `#FFFFFF` on `#2BB9B0` → 2.6 : 1 ⚠️（大文字 18pt+ もしくは 14pt bold で AA）
- `#1C2C43` on `#D9F2F0` → 11.7 : 1 ✅
- `#2BB9B0` on `#FFFFFF` → 2.6 : 1 ⚠️（同上）

→ `#2BB9B0` をテキスト色として用いる箇所（Business カード EN ラベル / モーダル subTtl）は **必ず 14px 以上 + 太字** で運用。

---

## 13. 再現用プロンプト例

下記をそのまま別の Claude / Claude Code に渡せば、本仕様書に沿った LP を再構築できます。

````text
あなたは Next.js 14 + React 18 + TypeScript に精通したフロントエンド実装者です。
添付の DESIGN_SYSTEM_SPEC.md を完全な仕様書として、以下の制約に従って 1 ページ完結の
ランディングページを新規実装してください。

# 必須スタック
- Next.js 14 (App Router, /app)
- React 18 / TypeScript 5
- CSS Modules（コンポーネント単位）。Tailwind は導入のみ・ユーティリティ未使用。
- next/font/google で Noto Sans JP (400/500/700/900) と Poppins (300/400/500/600/700) をセルフホスト
- Splide.js v4（MV）/ Swiper v11（社員カルーセル）
- 画像は public/images に配置、next/image は unoptimized で利用

# グローバル設定
- html { font-size: 62.5%; font-size: 10px; } / @media (max-width:374px) { 2.66667vw }
- body: Noto Sans JP, font-size:1.6rem, line-height:1.5, color:#1C2C43, font-feature-settings:"palt"
- .l-inner: max-width:1200px; margin:0 auto; padding:0 40px (SP 5.33vw)
- u-sm-min / u-sm-max / u-md-min / u-md-max / u-lg-min / u-lg-max の表示切替ユーティリティを定義

# カラートークン
primary  #2BB9B0  / secondary #1C2C43 / surface #D9F2F0 / base #FFFFFF
text 主 #1C2C43 / 文字 sub rgba(28,44,67,0.6) / border rgba(28,44,67,0.1)

# 主要タイポ
- h2 .ttl01 = EN(Poppins 5.6rem/700, letter-spacing 0.02em) + JA(1.4rem/500, letter-spacing 0.08em) を縦積み gap:8px
- 数字（カウントアップ）= Poppins 5.6rem/700
- body 1.6rem / line-height 1.5–2.0、リード 1.5rem/1.8

# 構成セクション（順番厳守）
1. Header (fixed h:100px, スクロールで backdrop-filter:blur(10px))
2. MainVisual (Splide fade, h:100vh, キャッチ画像 mv_copy.png, 縦書き SCROLL, プログレスバー)
3. Read (ティール背景, 2カラム + 右に縦エンドレスループ画像 imgloop01 30s)
4. Business (h2中央寄せ + リード + 2カードグリッド + クリックで全画面モーダル前後ナビ付)
5. Flow (淡ティール背景, PCは全幅画像/SPは横スクロール)
6. About (ティール背景, 数字8カード+IntersectionObserver でカウントアップ 1.8s easeOutCubic)
7. Discovery (写真背景 + 暗幕 rgba(28,44,67,0.4), CTAボタン + 半透明大型コピー)
8. People (淡ティール, 全幅写真 + Swiper slidesPerView:1.2/2.5/3.5)
9. Environment (白背景, 6枚カード 4:3, hover scale)
10. FootNav (淡ティール, 採用情報リスト + エントリーCTA + 外部2ボタン)
11. Footer (#1C2C43, 2カラム → TB縦積み, 巨大コピー画像で締め)

# アニメーション
- ScrollAnimator.tsx で .js-animate に IntersectionObserver(threshold:0.15)
  - .fadeIn01 = opacity 0→1 + translateY(2rem)→0、easeOutCubic 1.2s/1.25s
  - .fade    = opacity 0→1, ease 1s
- カード hover で内画像 transform:scale(1.05) 0.5s
- MORE 矢印 arrowSlide 1.2s 常時バウンス
- MV テキスト txtloop02 20s linear infinite

# コピー
DESIGN_SYSTEM_SPEC.md の「§7 セクション構成」のコピー全文をそのまま使用すること。
改行位置（<br className="u-sm-min" />）も再現する。

# モーダル
Business セクションの 8 件のモーダルは、id / num / title / subTitle / body / keywords / img を
1 つの配列として `BusinessModal.tsx` に保持。Escape キー / オーバーレイクリックで閉じる。
前後ナビは CustomEvent('openModal') で再オープン。

# レスポンシブ
- 767px 以下：PCナビ非表示、ハンバーガー表示、ほぼすべてのサイズを vw 化
- 1024px 以下：Footer 縦積み、Environment / About グリッドを 2カラム
- 1601px 以上：MV を max-width:1920px に閉じる

# アクセシビリティ
- <html lang="ja"> / viewport meta
- 装飾画像は alt=""、コピー画像はテキストを alt に
- Modal の閉じるボタンに aria-label="閉じる"
- 外部リンクは target=_blank rel="noopener noreferrer"

# 完了条件
- npm run dev で起動して全セクションが視覚的に再現できること
- 仕様書の数値・テキストと差異がないこと
- TypeScript エラーゼロ
````

---

> 仕様書バージョン: 1.0 ／ 解析対象コミット: `claude/design-system-spec-ZR7rc` ブランチ HEAD
> ※印付きの項目は実装コードに明記がないため、合理的推論で補完しています。

