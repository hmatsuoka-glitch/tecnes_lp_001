# 千代田工販 新卒採用LP デザインシステム仕様書

> 本書は `/home/user/tecnes_lp_001`（Next.js 14 / App Router 実装）から抽出した、別開発者がピクセル単位で再現するための仕様書である。実装上ハードコーディングされている数値・カラーはコードに準拠し、コードに無い情報のみ `※推測` を付した。

---

## 1. メタ情報

- **ページタイトル**: `新卒採用情報｜千代田工販株式会社`
- **メタディスクリプション**: `千代田工販株式会社の新卒採用情報サイトです。`
- **目的**: 商社（電機機械専門）千代田工販の新卒採用ブランディング兼エントリー導線。
- **ターゲット**: 27卒前後の理系・文系問わない学生（マイナビ・キャリタス導線）。
- **トーン**: 清涼感のあるターコイズ × 紺青のコーポレート系。誠実・社会貢献・"お役立ち" を訴求。落ち着いた明朝感は使わず、Poppins×Noto Sans JP の現代的サンセリフで統一。

---

## 2. 技術スタック

### HTML 構造の方針
- `<header>` / `<main class="l-main">` / `<footer>` のセマンティック構造。
- 各セクションは `<section id="...">` で囲み、ハッシュリンクで内部遷移できる構造（`#read` `#business` `#flow` `#about` `#discovery` `#people` `#environment`）。
- 見出しは `<h1>` MV キャッチコピー画像 1 つ、各セクションは `<h2>`、カード内は `<h3>`。
- 画像は装飾用 `alt=""`、意味のある画像（人物・ロゴ）は具体的な代替テキスト。

### CSS 記法
- **CSS Modules**（`*.module.css`）+ プレーン CSS。Tailwind は依存に含まれるが実コードでは未使用、グローバル `l-inner` 等のレイアウトユーティリティのみ素 CSS で定義。
- `1rem = 10px` 基準（`html { font-size: 62.5%; font-size: 10px; }`）。`375px` 未満は `font-size: 2.66667vw` に切替で完全比例縮小。
- ブレークポイント: `767px` / `1024px` / `1280px` / `1600px`。
- CSS 変数は Splide / Swiper のテーマ色のみ:
  ```
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  --font-noto-sans-jp / --font-poppins (next/font 経由で注入)
  ```

### JS / ライブラリ
- **Next.js 14**（App Router、Server Component + 一部 `'use client'`）
- **React 18**
- **@splidejs/splide 4.1**: MV のフェードスライダー（autoplay 5s, speed 1000ms, fade）
- **swiper 11**: PEOPLE のカルーセル（`slidesPerView: 1.2 / 2.5 / 3.5`）
- **lottie-web 5.12**: 依存にあるが実コード未使用 ※推測：旧バージョン名残
- スクロール連動アニメは独自 `IntersectionObserver`（`components/ScrollAnimator/ScrollAnimator.tsx`、`threshold: 0.15`、`rootMargin: '0px 0px -10% 0px'`）。
- カウントアップアニメ（ABOUT 数字）は `requestAnimationFrame`、easing は `1 - (1-p)^3`、duration `1800ms`、`threshold: 0.3`。

### フォント読込
- `next/font/google` 経由（CDN フェッチでなく Next ビルドにバンドル、`display: swap`）。
  ```
  Noto_Sans_JP   weight: 400, 500, 700, 900   variable: --font-noto-sans-jp
  Poppins        weight: 300, 400, 500, 600, 700   variable: --font-poppins
  ```
- `<html>` タグに両 variable を付与、`body` で `var(--font-noto-sans-jp), "Noto Sans JP", sans-serif` を既定に。

### 画像
- すべて `public/images/` 配下、`@2x.jpg` / `.png` / `.svg`。
- `next.config.js` で `images.unoptimized: true`、`<Image unoptimized />` 全箇所明示。Next の自動 `webp/avif` 変換は無効。
- アイコンは SVG（`about_ico0X.svg`、`flow_img.svg`、`people_copy.svg`）。
- ベンダー CSS は `public/vendor/splide.min.css` / `public/vendor/swiper-bundle.min.css` を `<head>` から `<link rel="stylesheet">` で読込。

---

## 3. カラーパレット

```
--color-primary:        #2BB9B0   /* ターコイズ。READ/ABOUT 背景、CTA、アクセント、TRADING タグ枠 */
--color-secondary:      #1C2C43   /* 紺青。本文・見出し・ENTRYボタン・Footer 背景 */
--color-accent:         #2BB9B0   /* primary と同色、ENV/Flow 等のメイン強調にも使用 */
--color-bg-base:        #FFFFFF   /* body 背景、Header 背景 */
--color-bg-surface:     #D9F2F0   /* ライトターコイズ。Flow / People / FootNav 背景、モーダルキーワード背景 */
--color-bg-dark:        #1C2C43   /* Footer / モーダルオーバーレイ */
--color-text-main:      #1C2C43   /* 本文・見出し（白背景時） */
--color-text-onDark:    #FFFFFF   /* ターコイズ／紺青背景時の文字 */
--color-text-sub:       rgba(28, 44, 67, 0.6)   /* メタ情報、注釈 */
--color-text-mute:      rgba(28, 44, 67, 0.5)   /* スクロールヒント等 */
--color-border:         rgba(28, 44, 67, 0.1)   /* カード枠、リスト区切り線 */
--color-border-onDark:  rgba(255, 255, 255, 0.1)   /* Footer リスト区切り線 */
--color-overlay-dark:   rgba(28, 44, 67, 0.4)   /* DISCOVERY 背景画像オーバーレイ */
--color-overlay-modal:  rgba(28, 44, 67, 0.8)   /* モーダル背面 */
--color-overlay-menu:   rgba(28, 44, 67, 0.5)   /* SP メニューオーバーレイ */
--color-success:        #2BB9B0   /* ※推測：成功状態は未定義、primary を流用 */
--color-warning:        #F5A623   /* ※推測：未定義 */
--color-error:          #E53935   /* ※推測：未定義 */
--swiper-theme:         #007AFF   /* Swiper デフォルト（実際は overrides で 1C2C43 を使用） */
```

### 半透明バリエーション（実コードの全列挙）
```
rgba(255, 255, 255, 0.8)   /* Header 固定時 inner 背景 */
rgba(255, 255, 255, 0.7)   /* Footer 本文 */
rgba(255, 255, 255, 0.6)   /* Footer サブメニュー文字、Footer 駅情報 */
rgba(255, 255, 255, 0.5)   /* Footer mapLink、企業情報ラベル、menu02 */
rgba(255, 255, 255, 0.4)   /* Footer 徒歩時間 */
rgba(255, 255, 255, 0.3)   /* MV プログレストラック、Swiper bullet inactive、Footer 駅丸アイコン */
rgba(255, 255, 255, 0.15)  /* About 数字カード背景、DISCOVERY decorCopy 文字色 */
rgba(255, 255, 255, 0.1)   /* Footer メニュー区切り線 */

rgba(28, 44, 67, 0.8)      /* About note */
rgba(28, 44, 67, 0.7)      /* Gnav サブメニュー文字 */
rgba(28, 44, 67, 0.6)      /* People メタ情報 */
rgba(28, 44, 67, 0.5)      /* Flow スクロールヒント、Gnav 関連 */
rgba(28, 44, 67, 0.3)      /* Swiper bullet inactive */
rgba(28, 44, 67, 0.15)     /* Card hover shadow */
rgba(28, 44, 67, 0.1)      /* 全般のボーダー */

rgba(43, 185, 176, 0.2)    /* Flow scrollbar track */
rgba(0, 0, 0, 0.1)         /* Header entryBox shadow */
```

### グラデーション
- 実装中に `linear-gradient` 利用は **無し**（背景は単色）。MV のテキスト透過オーバーレイ（`mv_screen.png`）が実質的な明度勾配を担う。

---

## 4. タイポグラフィ

### font-family
| 用途 | スタック |
|---|---|
| 本文（日本語） | `var(--font-noto-sans-jp), "Noto Sans JP", sans-serif` |
| 英字数字（見出し EN・数字カウンタ・ロゴテキスト・SCROLL 等） | `var(--font-poppins), Poppins, sans-serif` |
| 数字（電話番号・カウンタ） | Poppins（700） |

### サイズスケール（PC 基準、`1rem = 10px`）

```
/* 見出し */
h1 (MV copy)            画像（mv_copy.png 最大幅 600px）
h2 .ttl01 .en (英字)    5.6rem  =  56px   font-weight: 700  letter-spacing: 0.02em  line-height: 1
h2 .ttl01 .ja (和字)    1.4rem  =  14px   font-weight: 500  letter-spacing: 0.08em  line-height: 1
h2 Flow / Read 単独     2.8〜3.2rem = 28〜32px  font-weight: 500  line-height: 1〜1.5
h3 (カードタイトル)     2.0rem  =  20px   font-weight: 700  line-height: 1.5
h3 (モーダル)           3.2rem  =  32px   font-weight: 700  line-height: 1.4

/* 本文 */
body デフォルト         1.6rem  =  16px   font-weight: 400  line-height: 1.5  font-feature-settings: "palt"
body-lg (FootNav lead)  2.0rem  =  20px   font-weight: 500  line-height: 1.8
body (各セクション lead)1.5rem  =  15px   line-height: 1.8
body (Read 本文)        1.6rem  =  16px   line-height: 2
body-sm                 1.4rem  =  14px   line-height: 1.8
caption                 1.3rem  =  13px
caption-sm              1.2rem  =  12px
micro                   1.1rem  =  11px   /* copyright */
micro-xs                1.0rem  =  10px   /* SCROLL ラベル, MENU ラベル */

/* 数字 */
.numCardNum             5.6rem  =  56px   Poppins 700
.tel (電話)             2.8rem  =  28px   Poppins 700  letter-spacing: 0.05em
```

### モバイル（≤767px）— vw 比例
```
ttl01 .en               9.6vw      (= 36px @375px)
ttl01 .ja               3.2vw      (= 12px @375px)
flow tit                6.93333vw
read tit                5.86667vw
section lead            3.73333vw  (= 14px @375px)
body                    3.73333vw
caption                 3.2vw
caption-sm              2.93333vw
numCardNum              9.6vw
btnEntry text (FootNav) 4.8vw
```

### font-weight 一覧
- 300 / 400 / 500 / 600 / 700 / 900 を Noto Sans JP に。300〜700 を Poppins に登録。
- 実利用は **400（本文）**, **500（メニュー・リード・ボタン）**, **700（数字・見出し EN・カードタイトル・電話）**, **600（モーダル番号）** が中心。

### line-height
- 既定: `1.5`（body）／`1`（見出し EN・SCROLL 等のラベル系）
- 本文長文: `1.8` / `1.9` / `2`
- カードタイトル: `1.4` 〜 `1.6`

### letter-spacing
```
.en (Poppins 見出し)        0.02em
.ja (副題)                  0.08em
SCROLL ラベル               0.2em
ENTRY ボタン                0.05em / 0.1em
ttl01 (Read)                0.12em（PC） / 0.05em（SP）
```

### 日本語特有
- `font-feature-settings: "palt"` を `body` に適用（プロポーショナル詰め）。
- `line-break: strict; overflow-wrap: break-word;` を全要素に適用。
- 改行制御: `<br className="u-sm-min" />`（PC のみ表示）と `<br className="u-sm-max" />`（SP のみ表示）で改行位置を分岐。
- `text-size-adjust: 100%`（iOS 自動拡大防止）。

---

## 5. スペーシング

### ベースユニット
- **`8px` ベース**（`gap: 8px`、`gap: 1.6rem`、padding `2.4rem` など全て 8 の倍数）。一部 `4px`（`gap: 4px 12px`）。
- `1rem = 10px` のため、コードの `1.6rem = 16px = 8×2`、`2.4rem = 24px = 8×3` と一致。

### セクション縦余白
| セクション | PC top / bottom | SP top / bottom |
|---|---|---|
| READ | `20rem` / `12rem` | `42.6667vw` / 0（margin-top -21.3333vw） |
| BUSINESS | `12rem` / `12rem` | `13.3333vw` / `13.3333vw` |
| FLOW | `12rem` / `19.6rem` | `17.3333vw` / `32vw` |
| ABOUT | `12rem` / `20.8rem` | `13.3333vw` / 0 |
| DISCOVERY | `12rem` (inner pt) / `16rem` | `17.3333vw` / `29.3333vw` |
| PEOPLE | `12rem` (top) / `10rem` | `13.3333vw` / `25.8667vw` |
| ENVIRONMENT | `12rem` / `12rem` | `13.3333vw` / `32vw` |
| FOOTNAV | `10rem` / `12rem` | `21.3333vw` / 0 |
| FOOTER | `8rem`（inner top） | `10.6667vw` |

### コンテナ内パディング
```
.l-inner / .l-inner-02 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;     /* PC */
  padding: 0 5.33333vw; /* SP（≤767px） */
}
Header padding-right (PC menu): 40.5996vw
```

### 共通の縦リズム
- 見出しと本文の間: `4rem`〜`6rem`（PC）／`6.4vw`〜`8vw`（SP）
- 段落間: `3.2rem`（Read）、`2rem`〜`2.4rem`（カード内）

---

## 6. レイアウト

### 最大幅
- コンテンツ最大幅: **1200px**（`l-inner`）
- 大画面 1601px 以上は MV のみ `max-width: 1920px` で中央寄せ。
- Header inner 幅は 100%（背景のみ全幅、ロゴ・ボタンは絶対配置）。
- Gnav（SP メニュー）パネル: `width: 540px; max-width: 100%;`（≤1024px は 100%）

### ブレークポイント
```
sm:  ≤ 767px   (.u-sm-min を非表示, .u-sm-max を表示)
md:  ≤ 1024px  (.u-md-min を非表示, .u-md-max を表示)
lg:  ≤ 1280px  (.u-lg-min を非表示, .u-lg-max を表示)
xl:  ≥ 1601px  (MV 大画面センタリング)
```
※ 標準的な「md」「lg」とは閾値が逆転している点に注意（"min/max" は表示制御クラスの命名）。

### Grid / Flex パターン
- **Flex**: Header（横並び＋絶対配置の混合）、Read（左右 2 カラム）、Business cards（2 等分 flex）、FootNav CTA（縦並び）、Footer（左右 2 カラム）。
- **Grid**: ABOUT 数字カード `grid-template-columns: repeat(3, 1fr)` → タブレット `repeat(2, 1fr)` → SP `repeat(2, 1fr)`。ENVIRONMENT も同様の 3→2 列 Grid。
- **Aspect-ratio**:
  - Business カード画像 `4/3`
  - People カードサムネ `3/4`
  - Environment カード画像 `4/3`
  - モーダル画像 `16/9`

### MV
- 高さ: `100vh`（SP は `100svh`）、最小 600px（タブレット 500px）
- 大画面（≥1601px）は `max-width: 1920px` で中央。

---

## 7. セクション構成（FV から順番に全部）

### 7-1. Header（固定ヘッダー）
- **目的**: グローバルナビ＋常時 ENTRY 導線
- **レイアウト**: 高さ `100px`（PC）/ `14.9333vw`（SP）。`position: fixed; z-index: 1000`。スクロール時 `backdrop-filter: blur(10px)` ＆ 背景 `rgba(255,255,255,0.8)`。
- **要素**:
  - 左: ロゴ画像 `logo.png`（200×50）+ "RECRUIT SITE"（Poppins 500 16px）
  - 中央: PC ナビ「仕事を知る／働く社員を知る／働く環境を知る／採用情報」
  - 右: テキストリンク「募集要項」+ 黒ボックス「ENTRY」（hover でドロップダウン：マイナビ・キャリタス画像）
  - SP: ハンバーガー（26×2px の 3 本 line + "MENU" ラベル 10px）→ Gnav パネル
- **使用カラー**: 背景 `#FFFFFF` / 文字 `#1C2C43` / ENTRY 背景 `#1C2C43`（hover `#2BB9B0`）/ menu li hover `opacity: 0.7`
- **コピー**:
  - 「仕事を知る」「働く社員を知る」「働く環境を知る」「採用情報」「募集要項」「ENTRY」「MENU」

### 7-2. MainVisual（FV）
- **目的**: ブランドメッセージ訴求とスライダーによる事業の網羅
- **レイアウト**: 全画面（100vh）。背景に画像スライダー、上に半透明スクリーン、中央下にロゴコピー、下端左に SCROLL（縦書き）、下端右にプログレスバー、最下部に流れる帯テキスト。
- **要素**:
  - スライダー: 4 枚（`mv_slide01-01.png` 〜 `mv_slide04-01.png`）、Splide `type: 'fade'`, `autoplay: true`, `interval: 5000`, `speed: 1000`, `pauseOnHover: false`
  - キャッチコピー画像: `mv_copy.png`（"キミの想いが未来をともす"、最大 600px、SP は `max-width: 80vw`）
  - スクリーンオーバーレイ: `mv_screen.png` 全面 cover
  - 流れる帯: `mv_txt.png`（高さ 60px）が `txtloop02 20s linear infinite` で左流れ
  - SCROLL 縦書き（`writing-mode: vertical-rl`、Poppins 500 10px、`letter-spacing: 0.2em`、白）
  - プログレス: トラック `120×2px rgba(255,255,255,0.3)`、バー `#FFFFFF`、再生/停止トグル（24×24 white）
- **使用カラー**: スライド背景フォールバック `#1C2C43`、文字 `#FFFFFF`
- **コピー（実テキストは画像内）**:
  - メイン: **キミの想いが未来をともす**（mv_copy.png）
  - ループテキスト: mv_txt.png ※推測：同じキャッチを横流ししている

### 7-3. Read（理念訴求）
- **目的**: 企業理念「お役立ち」の訴求
- **レイアウト**: ターコイズ背景の 2 カラム（左テキスト / 右 320×600px の縦ループ画像）。
- **背景**: `#2BB9B0`、padding `20rem 0 12rem`。SP は `padding: 42.6667vw 0 0; margin-top: -21.3333vw;` で MV と部分オーバーラップ。
- **要素**:
  - h2: 28px 500 letter 0.12em 白「私たちは社会と産業の未来のために挑戦し続けます」
  - 段落 4 つ（白、16px、line-height 2）
  - 縦ループ画像（`read_img01@2x.jpg` 2 枚を `imgloop01 30s linear infinite`、片方 `animation-delay: -15s` で連続）
- **コピー全文**:
  > 私たちは社会と産業の未来のために挑戦し続けます
  >
  > 千代田工販はただ商品を売るだけではありません。付加価値を加え、お客さまの課題解決に寄り添いながら社会インフラ整備と産業界の成長に貢献する商社です。
  >
  > 私たちの仕事は、お客さま一人ひとりの要望に応え信頼を創り出すこと。
  >
  > 勇気がいる最初の一歩も、本気で向き合う。どんな難題があっても、創意と工夫で乗り越えていく。そんな想いは、きっと誰かの未来をともす光になるはずです。これが私たちの企業理念である「お役立ち」です。

### 7-4. Business（OUR BUSINESS）
- **目的**: 商社事業 / 製造事業の 2 軸を一望させる
- **レイアウト**: 中央寄せ見出し → リード文 → 2 カード横並び（PC `flex: 1` 等分、`gap: 4rem`）→ SP は縦積み。
- **見出し**: `OUR BUSINESS` (56px 700 #1C2C43) / `仕事を知る` (14px 500)
- **リード**: 「商社のネットワークを活かし、自社製品も販売しています。私たちはお客さまから必要とされるパートナーであり続けるため、クリエイティブな発想で解決策を提案します。」
- **カード 1: TRADING / 商社のしごと**
  - 画像: `trading_img@2x.jpg`（aspect 4/3、hover scale 1.05）
  - h3: 「幅広い領域に精通した／電機機械の専門商社」
  - 本文: 「電気機器や一般産業機械のシステム販売を手掛けています。」
  - カテゴリタグ（ターコイズ枠 6px 12px、`#2BB9B0` 文字、hover で塗り）:
    `エネルギー・電力関連` / `プラント産業・電機関連` / `交通・施設関連` / `環境機械関連` / `情報・通信関連` / `国際事業`
  - MORE 矢印（24×2 線 + 8×8 V 字、左右に 6px バウンス、`arrowSlide 1.2s ease-in-out infinite`）
- **カード 2: MANUFACTURING / モノづくりのしごと**
  - 画像: `manufacturing_img@2x.jpg`
  - h3: 「長年培った信頼と技術力で／自社事業を展開」
  - 本文: 「自社製品として自動車部品や紫外線応用機器を提供しています。」
  - カテゴリ: `自動車部品事業` / `UVシステム事業`
- **モーダル（タグまたは MORE クリックで開く 8 種）**: 後述（コンポーネント仕様）

### 7-5. Flow（仕事の流れ）
- **目的**: ビジネスフロー図示
- **背景**: `#D9F2F0`、padding `12rem 0 19.6rem`
- **見出し（#1C2C43 32px 500）**: 「仕事の流れ」
- **本文（15px line 1.8）**: 「私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。」
- **画像**: `tecnes_work_flow_preview.png` を全幅。SP は横スクロール（`min-width: 160vw`）＋スクロールヒント（`スクロール →`、矢印は 4vw の V 字 + バウンス）。
- **下部装飾コピー画像**: `flow_txt.png`（最大 600px、中央寄せ）

### 7-6. About（数字でわかる）
- **目的**: 企業規模・働きやすさを数値で訴求
- **背景**: `#2BB9B0`、padding `12rem 0 20.8rem`
- **見出し**: `ABOUT US` 56px 700 白 / `千代田工販について` 14px 500 白
- **サブ見出し**: 24px 700 白「数字でわかる 千代田工販の今」
- **注釈**: 13px `rgba(255,255,255,0.8)`「※2025年3月時点」
- **数字グリッド** 3列 ×（実体は8カード）:
  ```
  創業年数        78 年            (1947年（昭和22年）創立)   icon: about_ico01.svg
  売上高          536 億円                                   icon: about_ico02.svg
  拠点数          16 箇所          (海外拠点3箇所含む)        icon: about_ico03.svg
  従業員人数      350 人                                     icon: about_ico04.svg
  平均勤続年数    16 年                                      icon: about_ico05.svg
  年間休日        123 日           (夏季休暇5日間含む)        icon: about_ico06.svg
  就業時間/日     7 時間45分                                  icon: about_ico07.svg
  平均残業時間/月 15 時間                                    icon: about_ico08.svg
  ```
- **カード**: `rgba(255,255,255,0.15)` 背景、padding `4rem 3.2rem`、アイコン 56×56px、数字 56px Poppins 700、単位 20px 500、サブ 13px。
- **メイン画像**: `about_img01@2x.jpg` 全幅、`margin-top: 8rem`

### 7-7. Discovery（CTA エリア）
- **目的**: 事業紹介への導線
- **背景**: `discovery_bg@2x.jpg` を `object-fit: cover`、上に `rgba(28,44,67,0.4)` オーバーレイ
- **構成**: 中央寄せで上から:
  - h2: `DISCOVERY` 56px 白 / `街に広がる千代田工販` 14px 白
  - リード: 「社会のさまざまな領域で活躍している千代田工販の事業についてご紹介します。」
  - CTA ボタン: 「詳細を見る」 padding `18px 48px`、`#2BB9B0` 背景白文字 16px 500、hover 反転（白背景／ターコイズ文字）
  - 装飾コピー: `rgba(255,255,255,0.15)` 56px 700 letter 0.05em「個性と想いが／響き合うことで／わくわくする」

### 7-8. People（社員紹介）
- **目的**: 社員 7 名の声でリアリティ訴求
- **背景**: `#D9F2F0`、padding-top `12rem` / padding-bottom `10rem`
- **見出し**: `PEOPLE` / `働く社員を知る`
- **リード**: 「千代田工販で新しい自分に出会い、変わらない自分の信念を持って活躍している先輩たち。どんな想いで働いているのか、エピソードを交えてご紹介します。」
- **メイン画像**: `people_img01@2x.jpg` 全幅
- **カルーセル（Swiper）**:
  - PC `slidesPerView: 3.5`、md `2.5`、SP `1.2`、`spaceBetween: 40 / 30 / 20`
  - ナビ矢印・ページネーション付き
- **カード（7 件）**:
  ```
  1. M.M  2017年入社 電機システム部・営業職
     「先輩に支えられ始まった千代田工販での挑戦 次は私が後輩を支える番だ」
  2. Y.T  2014年入社 プラント産業システム部・営業職
     「関わるすべての人のベクトルを合わせて 大型プロジェクトに挑む」
  3. N.S  2017年入社 環境・機械システム営業部・営業職
     「顧客利益だけでなく その先にある「社会に良いこと」を追求」
  4. O.T  2017年入社 新潟支店・営業職
     「主体性を持って企業と向き合い提案し、感謝される それが私の成長サイクル」
  5. J.A  2019年入社 九州支店・営業職
     「商社ならではの価値を追求し 幅広い業界へ提案 次は本社でさらなる挑戦へ」
  6. W.R  2005年入社 自動車部品部・営業職
     「何事も全力で楽しむ 自社製品の海外展開という「未知なる挑戦」も楽しみたい」
  7. E.M  2012年入社 UVシステム営業部・営業職
     「UVシステムの営業が切り拓く 「社会インフラ」と「持続可能な未来」への貢献」
  ```
- **カード仕様**: 白背景、サムネ aspect 3/4、本文 padding `2.4rem 2.4rem 3.2rem`、キャッチ 15px 500 line 1.6、メタ縦並び（部署 12px / 名前 14px Poppins 700 / 入社年 12px、すべて `rgba(28,44,67,0.6)`）
- **下部装飾**: `people_copy.svg`「あなたの成長を全力でサポート」最大 500px

### 7-9. Environment（働く環境）
- **目的**: 福利厚生・教育・社風コンテンツ案内
- **背景**: `#FFFFFF`
- **見出し**: `ENVIRONMENT` / `働く環境を知る`
- **リード**: 「みなさんが安心して働くことのできる環境、会社とともに成長できる環境を整えております。」
- **6 枚グリッド**（3列 → 2列）:
  ```
  福利厚生 / 教育制度 / オフィス紹介 / 社員座談会 パパ・ママトーク / 社員座談会 社風トーク / 先輩たちの声
  ```
- 画像 aspect 4/3、hover scale 1.05、ラベル 18px 500（PC）

### 7-10. FootNav（CTA セクション）
- **背景**: `#D9F2F0`、padding `10rem 0 12rem`
- **左カラム — ナビ「採用情報」**:
  - h見出し 18px 700、下線 `2px solid #1C2C43`
  - リスト 5 項目: 募集要項 / 応募方法・選考フロー / 採用担当者メッセージ / 求める人物像 / よくあるご質問
  - 各 link 15px、padding `12px 0`、`border-bottom: 1px solid rgba(28,44,67,0.1)`、hover `#2BB9B0`
- **右カラム — CTA**:
  - リード 20px 500 line 1.8 中央寄せ「ともに新しい未来を築くチームメイトを探しています。あなたのご応募をお待ちしています。」
  - メインボタン「エントリーする」: `#1C2C43` bg、白文字 18px 700、padding `20px 60px`、min-width `360px`、hover `#2BB9B0`
  - 外部ボタン 2 つ「マイナビからエントリー」「キャリタスからエントリー」: `1px solid #1C2C43`、padding `16px 40px`、min-width `300px`、hover 反転

### 7-11. Footer
- **背景**: `#1C2C43`、文字白系
- **左 320px / 右フレックス**（1024px 以下で縦積み、左→右の order 入替）
- **左**: ロゴ（白フィルター）、創立 1947年（昭和22年）2月 / 資本金 200,000,000円、住所「〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル」、Google マップリンク、TEL `03-3564-5511`（28px Poppins 700）、最寄駅 3 件:
  ```
  浅草線「宝町駅」より 徒歩4分
  銀座線「京橋駅」より 徒歩4分
  東西線「日本橋駅」より 徒歩5分
  ```
  各駅マークは 18px 円「地」アイコン
  著作権: `© Chiyoda Kohan Co., LTD. All rights reserved.`
- **右**: サイトマップ（TOP / 仕事を知る + サブ / 働く社員を知る / 働く環境を知る + サブ / 採用情報 + サブ）、別線でプライバシーポリシー・コーポレートサイト
- **巨大装飾コピー**: `footer_copy.png` を全幅で底辺に配置（SP は `padding-bottom: 114.667vw` で底に巨大画像を表示）

---

## 8. コンポーネント仕様

### 8-1. ボタン

#### Primary — ENTRY ボタン（FootNav）
```
background:    #1C2C43
color:         #FFFFFF
font:          18px / 700 Noto Sans JP
letter:        0.1em
padding:       20px 60px
min-width:     360px
border:        none
border-radius: 0
text-decoration: none
transition:    background-color 0.2s
hover:         background: #2BB9B0
SP:            font 4.8vw, padding 5.33vw 10.67vw, width 100%
```

#### Primary — Discovery 「詳細を見る」
```
background:    #2BB9B0
color:         #FFFFFF
font:          16px / 500
letter:        0.05em
padding:       18px 48px
hover:         background: #FFFFFF, color: #2BB9B0
```

#### Primary — Header ENTRY（ドロップダウントリガ）
```
background:    #1C2C43
color:         #FFFFFF
font:          16px / 700 Poppins
letter:        0.05em
width:         130px
height:        100% (= 100px)
hover:         background: #2BB9B0
```

#### Secondary — 外部エントリー（マイナビ／キャリタス）
```
background:    transparent
color:         #1C2C43
border:        1px solid #1C2C43
font:          15px / 500
padding:       16px 40px
min-width:     300px
hover:         background: #1C2C43, color: #FFFFFF
```

#### Secondary — Header「募集要項」テキストリンク
```
font:          14px / 500
color:         #1C2C43
padding:       0 20px / height 100%
hover:         opacity: 0.7
```

#### Tag — Business カードカテゴリ
```
border:        1px solid #2BB9B0
color:         #2BB9B0
font:          12px (PC) / 3.2vw (SP)
padding:       6px 12px
hover:         background #2BB9B0, color #FFFFFF
```

#### Tag — モーダルキーワード
```
background:    #D9F2F0
color:         #1C2C43
font:          13px
padding:       8px 16px
```

#### Disabled state
- モーダル前後ナビ: `opacity: 0.3`、`disabled` 属性付与（コード上は `style={{opacity:...}}` インライン）

### 8-2. カード

#### Business カード
```
border:        1px solid rgba(28,44,67,0.1)
border-radius: 0
overflow:      hidden
transition:    box-shadow 0.3s
hover:         box-shadow: 0 8px 40px rgba(28,44,67,0.15)
画像 aspect:   4/3, hover で scale(1.05) transition 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)
body padding:  4rem 4rem 5rem (PC) / 3rem 3rem 4rem (md) / 5.33vw (SP)
```

#### People カード
```
background:    #FFFFFF
border-radius: 0
overflow:      hidden
画像 aspect:   3/4, hover scale(1.05) transition 0.5s
body padding:  2.4rem 2.4rem 3.2rem
```

#### Environment カード
```
画像 aspect:   4/3, hover scale(1.05) transition 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)
ラベル padding-top: 2rem
```

#### About 数字カード
```
background:    rgba(255,255,255,0.15)
padding:       4rem 3.2rem (PC) / 5.33vw 4vw (SP)
gap:           1.6rem 0
border-radius: 0
```

### 8-3. フォーム要素
- 当 LP には input/select/textarea/checkbox の実装は **無い**（エントリーは外部リンク）。

### 8-4. ナビゲーション

#### PC ヘッダーナビ
- `position: absolute; top: 0; left: 0; width: 100%; height: 100%`
- `display: flex; align-items: center; justify-content: flex-end; gap: 0 10px; padding-right: 40.5996vw`
- 各 link: `padding: 0 12px; height: 100%; flex-direction: column`
- hover: `opacity: 0.7`

#### SP ハンバーガー
```
位置:   absolute, right 2.66667vw, top 50%, transform translateY(-50%)
sizе:   17.0667vw 角
ライン: 26×2px (PC) → SP も 26×2 ※既定値、3 本縦並び gap 6px
opened: line1 → translateY(8px) rotate(45deg)
        line2 → opacity: 0
        line3 → translateY(-8px) rotate(-45deg)
```

#### Gnav（SP メニューパネル）
- 右からスライドイン `transform: translateX(100%) → 0`、`transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)`
- パネル幅 540px（PC）、md 以下 100%
- オーバーレイ `rgba(28,44,67,0.5)`
- 内部: 右ボックス（CONTENTS：TOP / 仕事を知る + サブ / 働く社員を知る / 働く環境を知る + サブ / 採用情報 + サブ + 募集要項ボタン）／左ボックス（ENTRY：マイナビ・キャリタスボタン縦 2 つ）

### 8-5. モーダル（Business 詳細）

```
overlay:       fixed, rgba(28,44,67,0.8), z-index 9000, padding 40px (SP 5.33vw)
box:           background #FFFFFF, max-width 960px, max-height 90vh, overflow-y auto
close button:  44×44 px, top/right 20px, ::before/::after で × 24×2px
画像:          aspect 16/9, object-fit cover
body padding:  4rem 5rem 5rem (PC) / 8vw 5.33vw (SP)
番号ラベル:    12px 600 Poppins, color #2BB9B0, letter 0.1em
タイトル:      32px 700, line 1.4, color #1C2C43
副タイトル:    18px 500, line 1.6, color #2BB9B0
本文:          15px line 1.9, color #1C2C43
キーワードタグ:padding 8px 16px, bg #D9F2F0
ナビ枠:        border-top 1px solid rgba(28,44,67,0.1), padding-top 3.2rem
前後ボタン:    border 1px solid #1C2C43, padding 12px 24px, font 14px 500
              hover: bg #1C2C43, color #FFFFFF, disabled時 opacity 0.3
閉じるボタン:  text-decoration underline, padding 0
ESC キー:      close
オーバーレイ click: close
body overflow: hidden when active
```

### モーダル本文データ（8 件）
```
[商社のしごと #01] エネルギー・電力関連
副題: 電気をつくる、電気をはこぶ
本文: 火力・水力発電や電力流通設備を通じて、安定した電力供給に貢献。カーボンニュートラルを目指し、再生可能エネルギーや次世代エネルギー分野にも注力しています。
キーワード: ＃発電設備 ＃受変電設備 ＃太陽光発電システム

[商社のしごと #02] プラント産業・電機関連
副題: 工場の"つくる・しらべる・はこぶ"
本文: 製造業全般に電力システムから製造機械、物流設備、労働環境の改善まで、工場を動かすために必要な機器やサービスを幅広く提供しています。
キーワード: ＃産業用モータ ＃産業機械 ＃計測・制御システム

[商社のしごと #03] 交通・施設関連
副題: 都市と人びとをつなげる
本文: 電車の駆動システムや照明、空調、電源を供給するための受変電設備などを提供し、駅の自動改札機や端末システムも納入しています。鉄道会社との仕事を通じて安全な交通システムの構築に貢献しています。
キーワード: ＃車両用駆動システム ＃駅務システム ＃鉄道電力システム

[商社のしごと #04] 環境機械関連
副題: "地球に優しい"を実現する
本文: カーボンニュートラルやSDGsを重視し、排水や排ガスの浄化装置、省エネシステムを提供。余剰エネルギーの有効活用など、環境配慮型の事業を展開しています。
キーワード: ＃水処理システム ＃大気処理システム ＃省エネシステム

[商社のしごと #05] 情報・通信関連
副題: 工場をネットワークでつなぐ
本文: DXを活用し、パソコンやセンサーなどの情報機器を組み合わせたシステムで、工場設備の安定稼働や予防保全、生産性向上を支援しています。
キーワード: ＃生産管理システム ＃監視カメラシステム ＃IoTソリューション

[商社のしごと #06] 国際事業
副題: お客さまと世界をむすぶ
本文: 中国や東南アジアを中心に産業機器の輸出や特色ある海外製品を輸入販売。自社製品の紫外線殺菌装置も海外に納入するなど、グローバルに事業を展開中です。
キーワード: ＃製品の輸出入販売 ＃海外向け案件の営業サポート

[モノづくりのしごと #01] 自動車部品事業
副題: トラックやバスの安全と環境をまもる
本文: トラックやバスなどの商用車向けにエアブレーキ配管の加工や排出ガスの無害化を図る浄化システム用の配管を販売。自社で製造拠点を構え、少量多品種生産によりきめ細かいニーズに対応、大手商用車メーカーと直接取引しています。
キーワード: ＃エアブレーキ配管 ＃燃料配管 ＃排出ガス浄化システム用配管

[モノづくりのしごと #02] UVシステム事業
副題: キレイな水で安心・安全をとどける
本文: 飲料水や洗浄水向けの紫外線殺菌装置を設計・販売しています。当社研究開発センターにて試験や研究を重ね、安心・安全な水を提供。約半世紀の実績とノウハウを持つ紫外線技術のリーディングカンパニーです。
キーワード: ＃半導体工場向け ＃食品・飲料工場向け ＃上下水道施設向け
```

### 8-6. FAQ アコーディオン
- 本 LP（トップ）には無し。`#faq` リンクが指す先（`/recruitment/#faq`）に存在する想定。※推測

---

## 9. 装飾・質感

### border-radius
- **基本: `0`（角丸を一切使わない）** — モダンミニマルなコーポレート印象。
- 例外: `border-radius: 50%`（Footer 駅丸アイコン 18×18px、Flow scrollbar `border-radius: 2px`）。

### box-shadow
```
elev-0 (default):       none
elev-1 (Header dropdown): 0 4px 20px rgba(0, 0, 0, 0.1)
elev-2 (Card hover):     0 8px 40px rgba(28, 44, 67, 0.15)
```

### アイコン
- **About**: `about_ico01.svg` 〜 `about_ico08.svg`（PC 56×56px、SP 10.6667vw）。原色のまま表示。
- **矢印 .c-ico-arrow01**: 20×20px、`border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(-45deg)`（→記号）。
- **MORE 矢印（Business カード）**: 24×2px の線 + 8×8px の V 字、`arrowSlide 1.2s ease-in-out infinite` で右に 6px 振動。
- **Flow スクロールヒント矢印**: 4vw 角の V 字、`scrollArrowBounce 1.2s` で 1.5vw 横振動。
- **Footer 駅アイコン**: `rgba(255,255,255,0.3)` の 18px 円に 10px の「地」テキスト。

### 区切り線・背景装飾
- 線色は基本 `rgba(28,44,67,0.1)`（白背景上）／`rgba(255,255,255,0.1)`（紺背景上）
- ボーダー太さ: 1px が基本、強調 2px（FootNav h見出し下線、矢印アイコン）。
- 背景装飾: ループ画像 (Read 縦)、流れる帯テキスト (MV 横)、巨大半透明文字 (Discovery decorCopy)、SVG 装飾コピー (People / Flow)、画像オーバーレイ (Discovery)、グラデーションは無し。

---

## 10. アニメーション・インタラクション

### transition の標準値
- `0.2s`: 色変化（hover）
- `0.3s cubic-bezier(0.215, 0.61, 0.355, 1)`: ヘッダー bg 切替
- `0.4s cubic-bezier(0.215, 0.61, 0.355, 1)`: Gnav 開閉
- `0.5s cubic-bezier(0.215, 0.61, 0.355, 1)`: カード画像 scale
- `1s ease`: フェード
- `1.2s cubic-bezier(0.215, 0.61, 0.355, 1)`: opacity（fadeIn01）
- `1.25s cubic-bezier(0.215, 0.61, 0.355, 1)`: transform（fadeIn01）

### hover 一覧
| 要素 | hover |
|---|---|
| ヘッダー link | `opacity: 0.7` |
| Header ENTRY | bg `#1C2C43 → #2BB9B0` |
| Header dropdown li | `opacity: 0.7` |
| Business カード | shadow 立ち上げ `0 8px 40px rgba(28,44,67,0.15)` + 画像 `scale(1.05)` |
| Business タグ | bg `transparent → #2BB9B0`、文字 `#2BB9B0 → #FFFFFF` |
| People / Environment カード | 画像 `scale(1.05)` |
| Discovery CTA | bg/color 反転 |
| FootNav nav link | color `→ #2BB9B0` |
| FootNav primary | bg `#1C2C43 → #2BB9B0` |
| FootNav secondary | bg/color 反転 |
| Footer link | color `→ #2BB9B0` または `→ #FFFFFF` |
| Modal nav button | bg/color 反転 |

### scroll 連動アニメ（IntersectionObserver）
```js
threshold: 0.15
rootMargin: '0px 0px -10% 0px'
クラス: .js-animate.fadeIn01
  初期: opacity 0; transform translateY(2rem)
  is-animate: opacity 1; transform none
  transition: opacity 1.2s + transform 1.25s, easing cubic-bezier(0.215, 0.61, 0.355, 1)
クラス: .js-animate.fade
  初期: opacity 0
  transition: 1s ease
```

### カウントアップ（About 数字）
- `IntersectionObserver threshold: 0.3`
- duration: 1800ms
- easing: `1 - (1 - p)^3`（ease-out cubic 相当）

### MV スライダー
- Splide `type: 'fade'`、autoplay 5s 間隔、speed 1000ms、`pauseOnHover: false`、`pagination/arrows: false`
- プログレスバー幅 = `rate * 100%`（autoplay:playing イベントで更新）
- トグルボタン `.is-active` クラスで再生/停止アイコン切替

### People カルーセル（Swiper 11）
- `slidesPerView: 1.2 → 2.5 (≥768) → 3.5 (≥1025)`
- `spaceBetween: 20 / 30 / 40`
- pagination clickable、navigation prev/next（color `#1C2C43`）

### keyframes 全列挙
```css
@keyframes bg-gradient {       /* 未利用 */
  0%   { background-position: 0% 0%; }
  50%  { background-position: 25% 50%; }
  75%  { background-position: 50% 100%; }
  100% { background-position: 100% 100%; }
}
@keyframes txtloop {           /* About 横ループ用に定義（使用は限定的） */
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
@keyframes txtloop02 {         /* MV 帯テキスト */
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes imgloop01 {         /* Read 縦ループ */
  0%   { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}
@keyframes imgloop02 {         /* 予備 */
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
@keyframes arrowSlide {        /* Business MORE 矢印 */
  0%, 100% { transform: translateY(-50%) translateX(0); }
  50%      { transform: translateY(-50%) translateX(6px); }
}
@keyframes scrollArrowBounce { /* Flow SP 横スクロールヒント */
  0%, 100% { transform: rotate(45deg) translateX(0); }
  50%      { transform: rotate(45deg) translateX(1.5vw); }
}
```

### ローディング / ページ遷移
- 専用ローダー無し。Splide / Swiper の動的 import で各ライブラリを遅延ロード。
- ハンバーガー開閉時は `body.is-menu-open { overflow: hidden; }` でスクロールロック。
- モーダル開閉時は `document.body.style.overflow = 'hidden'`。

---

## 11. レスポンシブ挙動

### ブレークポイント別の主な変化

#### ≤ 1280px
- 大きな変化は無し。

#### ≤ 1024px
- Header PC menu の右パディング `40.5996vw → 35vw`
- Business cards gap `4rem → 2rem`、cardBody padding `4rem → 3rem`、cardTtl `2rem → 1.8rem`
- About / Environment Grid 3列 → 2列、numCardNum `5.6rem → 4.8rem`
- Footer 左右 2 カラム → 縦積み（leftBox=order1, rightBox=order2）
- Gnav パネル `width: 540px → 100%`

#### ≤ 767px (SP)
- Header 高さ `100px → 14.9333vw`
- PC ナビ・PC ボタン群 → 非表示、ハンバーガー表示
- 全フォントサイズが vw 比例に切替
- Read: 2 カラム → 縦積み、`margin-top: -21.3333vw` で MV と部分オーバーラップ
- Business cards 縦積み `gap: 8vw 0`
- Flow: PC 全幅画像 → 横スクロール（`min-width: 160vw`）
- About: Grid 2 列、padding-bottom 0
- FootNav 外部ボタン: 横並び → 縦並び、両ボタン width 100%
- Footer 縦積み + footerCopy 巨大画像が `padding-bottom: 114.667vw` で底に確保

### モバイル固有の要素
- ハンバーガー → Gnav パネル
- Flow 横スクロール + スクロールヒント
- 改行制御 `<br className="u-sm-min" />` / `<br className="u-sm-max" />`
- `100svh` を MV に使用（モバイル URL バー考慮）
- 固定 CTA は **無し**（Header ENTRY が固定で代替）

---

## 12. アクセシビリティ

### 実装済み
- `<html lang="ja">`
- セマンティック構造（`<header>` `<main>` `<footer>` `<section>` `<nav>` 相当の `<ul>`）
- 装飾画像は `alt=""` 明示（MV、Read、ループテキスト、装飾コピー）
- 意味のある画像は具体的 `alt`（ロゴ "千代田工販株式会社"、社員名、カードラベル）
- ESC キーでモーダル close（`useEffect` keydown listener）
- モーダルオーバーレイクリックで close
- close ボタンに `aria-label="閉じる"`
- 外部リンクに `target="_blank" rel="noopener noreferrer"`
- カウントアップは IntersectionObserver で 1 度限り（再生時の不快感低減）

### 推奨改善（※推測：未実装）
- ハンバーガーボタンに `aria-expanded` / `aria-controls`
- モーダルに `role="dialog"` `aria-modal="true"` `aria-labelledby`
- スライダーに `prefers-reduced-motion` 対応
- フォーカストラップ（Gnav / モーダル内）
- カラーコントラスト: `rgba(255,255,255,0.4)` 等の極薄文字は WCAG AA 未達の可能性 ※推測

### キーボード操作
- 標準 Tab フォーカス可（カスタム outline 無効化は無し）
- モーダルは ESC のみ実装、Tab トラップ無し ※推測

---

# 再現用プロンプト例

別の Claude / Claude Code に渡すだけで同等の LP を実装できる指示文：

> あなたは Next.js 14 (App Router) + React 18 + TypeScript に精通したフロントエンド実装者です。以下の仕様書に **完全準拠** して、`千代田工販 新卒採用LP` を実装してください。
>
> ## 全体方針
> - Next.js 14 App Router、`'use client'` は必要最小限。サーバーコンポーネントを基本に、スライダー・スクロール連動アニメ・モーダル・ハンバーガーのみクライアント。
> - スタイルは **CSS Modules + プレーン CSS**（Tailwind は使わない）。`1rem = 10px`（`html { font-size: 62.5%; font-size: 10px; }`）、`max-width: 374px` で `font-size: 2.66667vw` に切替。
> - フォントは `next/font/google` 経由で `Noto_Sans_JP (400/500/700/900)` と `Poppins (300-700)` を CSS 変数 `--font-noto-sans-jp` / `--font-poppins` で注入。`body { font-family: var(--font-noto-sans-jp), "Noto Sans JP", sans-serif; font-feature-settings: "palt"; }`。
> - 画像は `<Image unoptimized />`、`next.config.js` の `images.unoptimized: true`。
> - 角丸は使わない（border-radius: 0 が基本、円形アイコンと scrollbar のみ例外）。
> - グラデーションも使わない。背景は単色 + 画像のみ。
>
> ## カラー
> - primary `#2BB9B0`（ターコイズ）、secondary `#1C2C43`（紺青）、light surface `#D9F2F0`、white `#FFFFFF`。
> - 文字色は基本 `#1C2C43`、白背景以外では `#FFFFFF`。サブ文字は `rgba(28,44,67,0.6)`、ボーダーは `rgba(28,44,67,0.1)`。
> - その他の半透明値とグラデなし方針は仕様書 §3 に従う。
>
> ## レイアウト
> - 共通インナー: `.l-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; }`、SP は `padding: 0 5.33333vw`。
> - ブレークポイント: 767 / 1024 / 1280 / 1600。
> - 表示制御クラス `.u-sm-min` `.u-sm-max` `.u-md-min` `.u-md-max` `.u-lg-min` `.u-lg-max` を仕様書 §6 通りに実装。
>
> ## ライブラリ
> - `@splidejs/splide@^4.1.4`: MV フェードスライダー (`type: 'fade'`, autoplay 5s, speed 1000ms, pauseOnHover false)。CSS は `public/vendor/splide.min.css` から `<head>` で読み込み。
> - `swiper@^11`: People カルーセル。`slidesPerView: 1.2 / 2.5 (≥768) / 3.5 (≥1025)`、`spaceBetween: 20 / 30 / 40`。CSS は `public/vendor/swiper-bundle.min.css`。
> - スクロールフェードは独自 IntersectionObserver で `.js-animate.fadeIn01` / `.fade` に `is-animate` を付与。
>
> ## セクション
> 1. Header (固定, 100px / 14.9333vw, scrollY > 0 で `backdrop-filter: blur(10px)` & 背景 0.8 透過)
> 2. MainVisual (100vh, Splide フェード 4 枚、中央キャッチコピー画像、SCROLL 縦書き、プログレスバー、底辺の流れる帯テキスト)
> 3. Read (`#2BB9B0` 背景、左テキスト + 右 320×600 縦ループ画像)
> 4. Business (白背景、2 カード横並び、カード hover で shadow + 画像 scale、タグクリックでモーダル 8 種)
> 5. Flow (`#D9F2F0` 背景、PC 全幅 / SP 横スクロール画像 + 装飾コピー画像)
> 6. About (`#2BB9B0` 背景、3列 8 数字カード、IntersectionObserver でカウントアップ 1800ms ease-out cubic)
> 7. Discovery (背景画像 + `rgba(28,44,67,0.4)` オーバーレイ、CTA「詳細を見る」、巨大半透明装飾コピー)
> 8. People (`#D9F2F0` 背景、Swiper 7 名カード、装飾コピー画像)
> 9. Environment (白背景、3 列 6 カード、ラベル下置き)
> 10. FootNav (`#D9F2F0`、採用情報リスト + CTA 1 メイン + 2 外部)
> 11. Footer (`#1C2C43`、左企業情報 / 右サイトマップ、底辺に巨大装飾コピー画像)
>
> ## コピー（厳守）
> 仕様書 §7 に列挙の **全テキストを一字一句そのまま** 使用（社員 7 名、モーダル 8 種、各見出し・リード・本文）。
>
> ## アニメ標準値
> - hover: 0.2s
> - card image scale: 0.5s `cubic-bezier(0.215, 0.61, 0.355, 1)` で `scale(1.05)`
> - fadeIn01: opacity 1.2s + transform 1.25s 同 easing、`translateY(2rem)→0`
> - keyframes: `txtloop / txtloop02 / imgloop01 / arrowSlide / scrollArrowBounce` を §10 通り実装
>
> ## 出力
> ファイル構成: `app/page.tsx` `app/layout.tsx` `app/globals.css` + `components/<Section>/<Section>.tsx` + `components/<Section>/<Section>.module.css`。各コンポーネントを仕様書のセクション粒度で分割すること。実装後、`npm run dev` で動作するレベルで完成させてください。
