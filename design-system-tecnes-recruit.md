# TECNES 採用LP デザインシステム仕様書（スクリーンショット解析）

> 提供されたスクリーンショット 1 枚（縦長フルページキャプチャ）から抽出した、別開発者がほぼ同一の見た目で再現するための仕様書。画像解像度の制約上、本文小文字・サブテキスト・ナビ各項目名の細部は読み取り不可のため、その箇所は `※推測` を明記している。
> 本ドキュメントは 20 ブロックに分割して順次出力した。

---

## 1. メタ情報

- **ページタイトル**: `採用情報｜株式会社TECNES`（※推測。ロゴ "TECNES" と末尾の電話 `06-6618-7387` から大阪に拠点を置く電気工事/制御盤系企業の採用LPと判断）
- **目的**: 求職者（特に技術職・電気/制御盤工事系）に向けた事業紹介・社員紹介・募集要項の閲覧から **APPLY フォーム送信** までを 1 ページで完結させるリクルート LP。
- **ターゲット**: 20〜40 代の技術職経験者および未経験者（オレンジ作業着＋ヘルメットで現場作業を行うスタッフ層）。※推測
- **トーン**: 信頼感のあるグリーン（深い teal）× ホワイトを基調にした清潔・誠実なコーポレート。安全/技術/絆 を象徴する写真主体の構成。キャッチコピー「**技術と絆で、未来を支える。**」が中心テーマ。

## 2. 技術スタック（判別範囲）

### HTML 構造の方針 ※推測
- `<header>` 固定、`<main>` 内に `<section>` を 9 ブロック（FV / OUR BUSINESS / 仕事の流れ / ABOUT US / PEOPLE / 中央バナー / ENVIRONMENT / RECRUIT / APPLY）で構成、最後に CTA エリア + `<footer>`。
- セクション見出しは英字（OUR BUSINESS など）を `<h2>` に、その上または下の和文サブを `<p>` または `<span>`。
- フォームは `<form>` + ラベル `<label>` + 入力 `<input>` / `<textarea>` 構成、ラベル左 / 入力右の 2 カラム表組み。

### CSS 記法 ※推測
- **Tailwind CSS** または **プレーン CSS**。記号的なユーティリティ（カードの統一余白、`rounded-md` 程度の角丸、Grid）が効いている見た目から **Tailwind 3.x** が有力。
- カラーは少数の定数で運用されており、CSS 変数 or Tailwind theme で一元管理されているはず。

### JS / ライブラリ ※推測
- PEOPLE セクションのカルーセル: **Swiper** または **Splide**（ページネーションドットあり、矢印ナビ無し）。
- スクロールフェードイン: 軽量な独自 IntersectionObserver か **AOS**。
- フォームはネイティブ `<form>` POST または **Next.js Server Actions** / 簡易 API。
- 大規模アニメ（GSAP / Framer Motion）の痕跡は見当たらない。

### フォント読込
- 本文・見出しともに日本語サンセリフ。**Noto Sans JP** または **游ゴシック (Yu Gothic)**。`next/font` または Google Fonts CDN 経由 ※推測。
- 英字見出し（OUR BUSINESS / ABOUT US 等）は **Poppins** / **Montserrat** 系の幾何サンセリフ ※推測。

### 画像形式と最適化
- ヒーロー / 社員写真: JPEG（高圧縮・自然画）。Next.js 経由なら自動 webp 変換 ※推測。
- アイコン（ABOUT US 数字カードのアイコン、ENVIRONMENT の +/-、矢印など）: SVG ※推測。
- ロゴ TECNES: 赤いスウッシュ装飾付き。SVG（または PNG 透過）※推測。

## 3. カラーパレット

スクリーンショットからのスポイト計測結果（小数点以下は丸め、近隣の同色は統一）。HEX は ±2 程度の誤差含む ※推測。

```
--color-primary:       #14B47C   /* 用途: 送信ボタン「送信する」「エントリーする」、CTA、FV ロゴアクセント (緑のスウッシュ) */
--color-primary-dark:  #0E9A66   /* 用途: primary hover ※推測 */
--color-secondary:     #1F5F5A   /* 用途: ABOUT US セクション背景（深いダークティール） */
--color-accent:        #E83E2B   /* 用途: TECNES ロゴ右側の赤いスウッシュ装飾 */
--color-bg-base:       #FFFFFF   /* 用途: body 背景、OUR BUSINESS / PEOPLE / ENVIRONMENT / APPLY 背景 */
--color-bg-surface:    #E5F2EE   /* 用途: 仕事の流れ / RECRUIT / 中央バナー の薄ミント背景 */
--color-bg-surface-2:  #F5F8F7   /* 用途: フォーム入力エリアの薄グレー塗り、APPLY セクション内の入力背景 ※推測 */
--color-bg-dark:       #102A33   /* 用途: 最下部 Footer 背景（深い紺/ティールブラック） */
--color-text-main:     #1A2B2E   /* 用途: 本文・見出しの基本文字色 */
--color-text-onDark:   #FFFFFF   /* 用途: ABOUT US / Footer / FV キャッチ等のダーク背景上の文字 */
--color-text-sub:      #6B7878   /* 用途: リード文、フォーム placeholder、メタ情報 */
--color-text-mute:     #9AA5A4   /* 用途: 注釈、コピーライト */
--color-border:        #D9E2E0   /* 用途: カード枠、フォーム入力枠、区切り線 */
--color-border-strong: #1F5F5A   /* 用途: セクションタイトル下線（短いアクセント線）※推測 */
--color-success:       #14B47C   /* 用途: primary と同色運用 ※推測 */
--color-warning:       #F5A623   /* 用途: 未確認 ※推測 */
--color-error:         #E83E2B   /* 用途: フォームバリデーションエラー、accent 流用 ※推測 */
```

### 半透明（rgba）使用箇所

```
rgba(0, 0, 0, 0.4)      /* FV ヒーロー画像下部のキャッチコピー読みやすさ用オーバーレイ ※推測 */
rgba(0, 0, 0, 0.08)     /* カード box-shadow（OUR BUSINESS / PEOPLE / RECRUIT 等） */
rgba(0, 0, 0, 0.12)     /* カード hover 時 box-shadow ※推測 */
rgba(255, 255, 255, 0.9)/* FV 内オーバーレイ装飾の白パネル背景 ※推測 */
rgba(31, 95, 90, 0.1)   /* ABOUT US 数字カード境界（同系色の薄い枠） ※推測 */
rgba(20, 180, 124, 0.1) /* primary 色の hover/active 時の薄塗り ※推測 */
```

### グラデーション

実装中、明確な `linear-gradient` の使用は確認されない（ベタ塗り背景＋写真）。
FV ヒーロー画像下部に、画像可読性向上の暗→透のフェードがかかっている可能性あり：

```
linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)   /* FV 画像下部、コピー直前のフェード ※推測 */
```

## 4. タイポグラフィ

### font-family

| 用途 | スタック | 備考 |
|---|---|---|
| 本文（日本語） | `"Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif` ※推測 | font-feature-settings: "palt" 適用前提 |
| 見出し（日本語） | 同上、weight 700 で強調 | |
| 見出し（英字: OUR BUSINESS / ABOUT US 等） | `"Poppins", "Montserrat", sans-serif` ※推測 | letter-spacing を広めに |
| 数字（ABOUT US の "6" "202" など） | `"Poppins", sans-serif` weight 700 ※推測 | 数字単体は font-feature-settings: "tnum" 推奨 |
| ロゴ "TECNES" | カスタム（ロゴ画像、フォント不明）※推測 | |

### 日本語特有の処理 ※推測

```
font-feature-settings: "palt"   /* 全文字プロポーショナル詰め */
line-break: strict;
overflow-wrap: break-word;
text-size-adjust: 100%;          /* iOS 拡大防止 */
```

### サイズスケール（PC 基準、`1rem = 16px` 想定）※推測

```
/* 見出し */
h1 (FV キャッチ "技術と絆で、未来を支える。")  32px / 2rem    weight 700  line-height 1.5  letter 0.05em
h2 英字 (OUR BUSINESS / ABOUT US 等)            36px / 2.25rem weight 700  line-height 1.2  letter 0.08em
h2 和文サブ（事業内容/数字でわかる…等）         14px / 0.875rem weight 500  line-height 1.6  letter 0.04em
h3 (カードタイトル/フォームラベル)               18px / 1.125rem weight 700  line-height 1.5
h4 (ENVIRONMENT 折り畳み見出し)                  16px / 1rem    weight 600  line-height 1.5

/* 本文 */
body-lg (各セクションリード)                    15px / 0.9375rem weight 400 line-height 1.8
body                                             14px / 0.875rem  weight 400 line-height 1.7
body-sm (ラベル横の説明)                         13px / 0.8125rem weight 400 line-height 1.6
caption (注釈・コピーライト・placeholder)        12px / 0.75rem   weight 400 line-height 1.5

/* 数字（ABOUT US カード） */
.numCardNum                                      48px / 3rem     weight 700  line-height 1
.numCardUnit (年/社/部/名/時間)                  16px / 1rem     weight 500  line-height 1
```

### モバイル（≤767px）※推測

- 見出し英字: `28px`、和文 h1: `22〜24px`、本文: `13〜14px` を維持。
- ABOUT US 数字: `36〜40px` に縮小。

### font-weight 一覧
- 400: 本文・placeholder
- 500: ナビ、ラベル、副タイトル
- 600: ENVIRONMENT 折り畳み見出し
- 700: 見出し全般、CTA ボタン、数字、強調

### letter-spacing
```
英字見出し:     0.08em
日本語見出し:   0.04〜0.05em
ボタン文字:     0.05em
ロゴ/ナビ:      0.04em
本文:           0em
```

## 5. スペーシング

### ベースユニット
- **8px ベース**（4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 120）の倍数で配置 ※推測

### セクション縦余白

| セクション | PC top / bottom | SP top / bottom |
|---|---|---|
| FV (Hero) | `0 / 0`（ヘッダー直下にフルブリード） | `0 / 0` |
| OUR BUSINESS | `96px / 96px` | `64px / 64px` |
| 仕事の流れ | `96px / 96px` | `64px / 64px` |
| ABOUT US | `96px / 96px` | `64px / 64px` |
| PEOPLE | `96px / 96px` | `64px / 64px` |
| 中央バナー | `64px / 64px` | `48px / 48px` |
| ENVIRONMENT | `96px / 96px` | `64px / 64px` |
| RECRUIT | `96px / 96px` | `64px / 64px` |
| APPLY | `96px / 96px` | `64px / 64px` |
| 下部CTA | `64px / 64px` | `48px / 48px` |
| Footer | `48px inner / 32px copyright` | 同左 |

すべて ※推測 値（スクリーンショットの間隔比率より割り出し）。

### コンテナ内パディング

```
.l-inner (中央コンテナ) {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;     /* PC */
  padding: 0 20px;     /* SP（≤767px）※推測 */
}
```

### 主な縦リズム
- 見出しと本文の間: `24px`〜`32px`
- 段落間: `16px`
- カード間 gap: `24px`〜`32px`（OUR BUSINESS は `32px`）
- フォーム行間: `16px`

## 6. レイアウト

### 最大幅（コンテンツ幅）
- メインコンテナ: **1100px** ※推測（OUR BUSINESS / RECRUIT / APPLY のコンテンツ幅から推定）
- フォーム: **720px** 中央寄せ ※推測
- FV ヒーローのみフルブリード（`width: 100%`）

### ブレークポイント ※推測（一般的な Tailwind 既定に近い設計を想定）

```
sm:   ≥ 640px
md:   ≥ 768px    /* タブレット転換点 */
lg:   ≥ 1024px   /* PC 基本レイアウト */
xl:   ≥ 1280px   /* 大画面 */
```

### Grid / Flex の使用パターン ※推測

| セクション | レイアウト |
|---|---|
| Header | `flex; align-items: center; justify-content: space-between;` |
| OUR BUSINESS カード | `grid-template-columns: repeat(2, 1fr); gap: 32px;` |
| 仕事の流れ | フルブリード画像 1 枚 + 上下にテキスト |
| ABOUT US 数字 | `grid-template-columns: repeat(3, 1fr); gap: 16px;`（タブレット 2 列、SP 2 列） |
| PEOPLE カルーセル | `flex; gap: 24px;` を Swiper が制御、PC `slidesPerView: 3` SP `1.2`〜`1.5` ※推測 |
| ENVIRONMENT | 縦積み `flex-direction: column; gap: 0;` 各行は `display: flex; justify-content: space-between;` |
| RECRUIT | `display: grid; grid-template-columns: 160px 1fr;` ラベル / コンテンツ |
| APPLY フォーム | `display: grid; grid-template-columns: 200px 1fr;` ラベル / 入力 |
| Footer | `flex; justify-content: space-between; align-items: flex-start;` |

## 7. セクション構成（FV から順番に）

### 7-1. Header / FV（First View）

- **目的**: ブランド認知 + キャッチコピーで世界観を一瞬で伝える。
- **レイアウト**: 上部固定ヘッダー（高さ `72px` ※推測）＋ヒーロー画像フルブリード（高さ `560〜640px` ※推測、PC 100vw / SP `60vh`）。
- **Header 要素**:
  - 左: TECNES ロゴ（白地に黒文字 + 赤いスウッシュ装飾、高さ `32px` ※推測）
  - 右: 横並びのナビメニュー（メニュー項目は 4〜5 個 ※推測。読み取り不可のため項目名は ※推測 で「事業内容 / 仕事の流れ / 会社情報 / 採用情報 / お問い合わせ」を仮定）
  - 右端: 「ENTRY」相当の小さなアクセントボタン（緑塗り、`padding: 8px 16px;` ※推測）
- **Hero 内要素**:
  - 背景: 作業着姿の作業員 2 名がケーブル/制御盤を扱っている写真（オレンジ作業着＋反射ストライプ、白ヘルメット）
  - 左下に小さい白パネル（カード型、内部に小さなロゴ or サブテキスト）※推測
  - 中央〜下: キャッチコピー **「技術と絆で、未来を支える。」**（白文字、`font-size: 32px ※推測`、weight 700）
- **使用カラー**: `#FFFFFF`（文字）、写真上の暗フェード `rgba(0,0,0,0.4)`、ヘッダー背景 `#FFFFFF`
- **コピー全文**:
  - キャッチ: **技術と絆で、未来を支える。**
  - ヘッダーナビ各項目（読み取り不可 ※推測）: `事業内容 / 仕事の流れ / 会社情報 / 採用情報 / お問い合わせ`
- **画像**: 高画質 JPEG。作業員 2 名のクローズアップ。被写体右上にやや余白を残してコピーが乗る配置。

### 7-2. OUR BUSINESS（事業内容）

- **目的**: 事業領域を 2 つのカードで端的に紹介。
- **レイアウト**: 中央寄せ見出し → 短いリード文（中央寄せ） → 2 カード横並び（`grid 1fr 1fr; gap: 32px;`）。SP は縦積み。
- **見出し**:
  - 英字 H2: `OUR BUSINESS`（36px / 700 / `#1A2B2E` / letter 0.08em / 中央寄せ）
  - 和文サブ: `事業内容`（14px / 500 / `#6B7878` ※推測）
- **リード**: 中央寄せの 1〜2 行コピー（読み取り不可 ※推測）
- **カード共通仕様**:
  - 背景 `#FFFFFF`、ボーダー無し or `1px solid #D9E2E0`、`box-shadow: 0 4px 16px rgba(0,0,0,0.08);` ※推測
  - 角丸 `border-radius: 8px;` ※推測
  - 上部に画像（aspect 16:10 ※推測）、下部にタイトル＋本文＋タグ群 ※推測
- **カード 1（左）**:
  - 画像: 作業員 1 名がケーブル機器を扱う写真
  - タイトル H3: `配電盤関連で機器、製造` ※推測（読み取り不可）
  - 本文: 1〜2 行 ※推測
  - 補足タグ群: 角丸ピル、薄緑塗り（`background: #E5F2EE; color: #1F5F5A;`）※推測
- **カード 2（右）**:
  - 画像: 作業員が電気配線をしている写真
  - タイトル H3: `設計と提案を国際社会まで支援、製造業界の専門` ※推測
  - 本文: 1〜2 行 ※推測
  - 補足タグ群: 同上
- **使用カラー**: bg `#FFFFFF`、文字 `#1A2B2E`、サブ `#6B7878`、タグ bg `#E5F2EE` / 文字 `#1F5F5A`

### 7-3. 仕事の流れ（WORK FLOW）

- **目的**: 入社〜現場稼働までの工程を 1 枚イラストでシンプルに伝える。
- **レイアウト**: 薄ミント `#E5F2EE` 背景の 1 セクション。中央上に和文見出し → 大きなフローイラスト 1 枚。
- **見出し**:
  - 和文 H2: `仕事の流れ`（28px〜32px / 700 / `#1A2B2E` / 中央寄せ）※推測
  - 英字サブ: `WORK FLOW`（背景の薄い装飾文字としてイラスト内に大きく配置 ※推測）
- **イラスト**:
  - 中央に5 名の作業員キャラクター（オレンジ作業着）が並ぶフラットイラスト ※推測
  - 各キャラの足元/上にステップラベル（5 ステップ程度）※推測
  - 背景に "WORK FLOW" の大きな英字（半透明の白 or `#FFFFFF` 30% ※推測）
- **使用カラー**: 背景 `#E5F2EE`、イラスト主色は `#FF8A2A`（オレンジ作業着）、`#1F5F5A`（テキスト）、`#FFFFFF`（背景英字）※推測
- **コピー**: 各ステップ名は読み取り不可 ※推測（仮: `01 採用 / 02 研修 / 03 現場配属 / 04 OJT / 05 独り立ち`）。

### 7-4. ABOUT US（数字でわかる TECNES の今）

- **目的**: 企業規模・働きやすさを 8 つの数値で訴求。
- **レイアウト**: 深いダークティール `#1F5F5A` 背景 1 セクション。左寄せ見出し → 数値カード 4列 × 2行（PC、合計 8 枚）。タブレット 2列 × 4行、SP 2列 × 4行 ※推測。
- **見出し**:
  - 英字 H2: `ABOUT US`（白、36px、weight 700、letter 0.08em）
  - 和文サブ: `数字でわかる TECNESの今` ※推測
- **数値カード（8枚）** すべて ※推測（数値はスクリーンショットから判別、ラベルは推測）:
  ```
  カード1: 6年        ラベル: 創業年数 ※推測
  カード2: 1社        ラベル: 拠点数 ※推測
  カード3: 1部        ラベル: 部署数 ※推測
  カード4: 4人        ラベル: 役員数 ※推測
  カード5: 202名      ラベル: 従業員数 ※推測
  カード6: 24名       ラベル: 新卒採用人数 ※推測
  カード7: 7時間      ラベル: 1日の就業時間 ※推測
  カード8: 9時間      ラベル: 平均残業時間/月 ※推測
  ```
- **カード仕様** ※推測:
  ```
  background:    rgba(255, 255, 255, 0.08) もしくは #2A6F69
  padding:       24px 20px
  border-radius: 8px
  display:       flex; flex-direction: column; gap: 8px;
  数字:          48px / Poppins 700 / 白
  単位:          16px / 500 / 白
  ラベル:        13px / 400 / rgba(255,255,255,0.8)
  アイコン:      左上 24x24 SVG（白）※推測
  ```
- **使用カラー**: 背景 `#1F5F5A`、文字 `#FFFFFF`、サブ `rgba(255,255,255,0.8)`、カード bg `rgba(255,255,255,0.08)` ※推測

### 7-5. PEOPLE（社員紹介カルーセル）

- **目的**: 現場で働く社員の雰囲気を 3 名以上の写真＋キャッチで伝える。
- **レイアウト**: 白背景。左寄せ見出し → リード文 → カルーセル（PC `slidesPerView: 3`、SP `1.2`〜`1.5`）→ ページネーションドット。
- **見出し**:
  - 英字 H2: `PEOPLE`（36px / 700 / `#1A2B2E` / letter 0.08em）
  - 和文サブ: `働く社員を知る` ※推測
- **リード**: 1〜2 行（中央寄せ or 左寄せ ※推測。本文 14px、`#6B7878`）
- **カード（3 件以上、表示は 3 枚）**:
  - サムネ: aspect 3:4 程度の人物写真（オレンジ作業着、白ヘルメット、屋外/工場現場）
  - サムネ下に：
    - キャッチコピー（2 行ほどの強調文 ※推測）
    - 部署 / 役職 / 名前 / 入社年（読み取り不可 ※推測）
- **カード仕様** ※推測:
  ```
  background:    #FFFFFF
  border:        1px solid #D9E2E0
  border-radius: 8px
  overflow:      hidden
  サムネ:        width: 100%; aspect-ratio: 3/4; object-fit: cover;
  body padding:  16px 20px 20px;
  キャッチ:       15px / 700 / line 1.6
  メタ情報:       12px / 500 / #6B7878
  hover:         transform: translateY(-4px); box-shadow 強調
  ```
- **ページネーション**: 中央寄せの丸ドット（アクティブ `#14B47C` / 非アクティブ `#D9E2E0`）※推測

### 7-6. 中央バナー（プロモーションコピー）

- **目的**: PEOPLE 直後にユーザーの感情に訴える短いキラーコピーで CTA への流れを作る。
- **レイアウト**: 薄ミント `#E5F2EE` 背景の 1 帯（高さ控えめ、上下 padding `48px〜64px`）。中央寄せ 1〜2 行。
- **コピー全文（読み取り不可 ※推測）**: 仮定
  > **あなたの感動も「TECNES」だから出会える。**
- **使用カラー**: 背景 `#E5F2EE`、文字 `#1A2B2E`

### 7-7. ENVIRONMENT（働く環境）

- **目的**: 福利厚生 / 求職支援などの環境項目をアコーディオンで簡潔に提示。
- **レイアウト**: 白背景、左寄せ英字見出し → 縦積みのアコーディオン行（区切り線で項目分け）。
- **見出し**:
  - 英字 H2: `ENVIRONMENT`
  - 和文サブ: `働く環境を知る` ※推測
- **アコーディオン行（2 件以上、表示は 2 件）** ※推測:
  ```
  行1: 福利厚生           [+]
  行2: 求職経験者を歓迎    [+] ※推測（読み取り不可）
  ```
- **行仕様** ※推測:
  ```
  display:       flex; justify-content: space-between; align-items: center;
  padding:       20px 24px;
  border-bottom: 1px solid #D9E2E0;
  font-size:     16px;
  font-weight:   600;
  color:         #1A2B2E;
  cursor:        pointer;
  右端アイコン:   24x24 + アイコン（線 2px、#1A2B2E）。展開時 - に変化。
  展開後:        ふんわりフェード（max-height transition 300ms）+ 内部本文 padding 16px 24px。
  ```

### 7-8. RECRUIT（募集要項）

- **目的**: 募集要項を表組で一覧表示。
- **レイアウト**: 薄ミント `#E5F2EE` 背景。中央寄せ英字見出し → タブ → 表組（左ラベル `160px`、右コンテンツ `1fr`）。
- **見出し**:
  - 英字 H2: `RECRUIT`
  - 和文サブ: `募集要項` ※推測
- **タブ（2 つ）** ※推測:
  - `募集要項`（アクティブ）/ `応募方法・選考フロー`
  - アクティブ: 白背景 + 下線 `2px solid #1F5F5A`、非アクティブ: 透明 + `#6B7878`
- **表組行（読み取り不可 ※推測）**: 仮定
  ```
  募集職種     | 電気工事士・制御盤組立・配線作業員（経験不問）
  雇用形態     | 正社員
  給与         | 月給 22万円〜（経験/能力により優遇）
  勤務時間     | 8:00〜17:00（実働 7時間、休憩 1時間）
  休日休暇     | 完全週休2日制（土日）、祝日、年末年始、夏季休暇、有給休暇
  待遇・福利厚生| 各種社会保険完備、交通費全額支給、退職金制度、資格取得支援
  応募方法     | 下記 APPLY フォームよりご応募ください
  ```
- **行仕様** ※推測:
  ```
  display:    grid; grid-template-columns: 160px 1fr;
  padding:    16px 0;
  border-bottom: 1px solid #D9E2E0;
  ラベル:     14px / 700 / #1F5F5A
  コンテンツ: 14px / 400 / #1A2B2E / line 1.7
  ```

### 7-9. APPLY（応募フォーム）

- **目的**: フォーム送信で応募完結。
- **レイアウト**: 白背景、中央寄せ英字見出し → フォーム（max-width `720px` 中央）※推測。
- **見出し**:
  - 英字 H2: `APPLY`
  - 和文サブ: `応募フォーム` ※推測
- **フォーム項目（読み取りベース ※推測含む）**:
  ```
  氏名             [text]   必須
  フリガナ         [text]   必須
  生年月日         [date]   必須 ※推測
  メールアドレス   [email]  必須
  連絡先（電話）   [tel]    必須 ※推測
  住所             [text]   任意 ※推測
  学校名・職業     [text]   任意 ※推測
  お問い合わせ内容 [textarea]  任意
  ```
- **フォーム仕様** ※推測:
  ```
  layout:       grid; grid-template-columns: 200px 1fr; gap: 16px 24px;
  ラベル:       14px / 700 / #1A2B2E / 上寄せ
  必須バッジ:   bg #E83E2B / color #FFFFFF / 11px / padding 2px 6px / radius 2px / 「必須」
  input:        height 44px; padding 0 14px; border 1px solid #D9E2E0; border-radius 4px; bg #F5F8F7;
                font-size: 14px; color: #1A2B2E;
  input:focus:  border 1px solid #14B47C; outline none; bg #FFFFFF;
  textarea:     min-height 160px; padding 12px 14px; その他 input と同じ
  placeholder:  color #9AA5A4
  送信ボタン:   bg #14B47C; color #FFFFFF; font-weight 700; padding 14px 48px;
                border-radius 4px; letter 0.05em; align: center;
                hover: bg #0E9A66 + translateY(-1px) ※推測
  ```

### 7-10. 下部 CTA（プリ・フッター）

- **目的**: フォーム送信に至らなかったユーザーに対する最後の押し戻し。
- **レイアウト**: 白〜薄ミント背景。中央寄せ。
- **構成**:
  - 上段: 横並びの 4 リンク（ナビ系。`採用情報 / 求人情報 / 会社情報 / お問い合わせ` ※推測）。各リンクは小さいテキスト（13px / `#6B7878`）。
  - 中段: メインコピー（読み取り不可 ※推測）：
    > **もっと色々な働き方を提供できる、あなたのご応募をお待ちしています。**
  - 下段: 2 つの CTA ボタン横並び（SP は縦積み）:
    - **エントリーする**（primary、緑塗り `#14B47C`）
    - **キャリタスからエントリー** or 同等の外部リンク（white outlined：`border 1px solid #1A2B2E`）※推測

### 7-11. Footer

- **目的**: 企業情報・連絡先の提示。
- **レイアウト**: 深い `#102A33` 背景、padding `48px 0 32px`。`flex; justify-content: space-between;` で左ロゴ／右テキスト ※推測。SP は縦積み。
- **要素**:
  - 左: TECNES ロゴ（白抜き）
  - 中央〜右: 住所、TEL `06-6618-7387`、コピーライト
- **コピー全文 ※推測**:
  ```
  株式会社TECNES
  〒XXX-XXXX 大阪府...（読み取り不可）
  TEL: 06-6618-7387
  © TECNES Co., Ltd. All rights reserved.
  ```
- **使用カラー**: 背景 `#102A33`、文字 `#FFFFFF`、副 `rgba(255,255,255,0.6)`、コピーライト `rgba(255,255,255,0.4)`

## 8. コンポーネント仕様

### 8-1. ボタン

#### Primary（送信する / エントリーする）
```
background:     #14B47C
color:          #FFFFFF
border:         none
border-radius:  4px
padding:        14px 48px       /* lg: 18px 64px / sm: 10px 24px ※推測 */
font-size:      16px
font-weight:    700
letter-spacing: 0.05em
text-decoration: none
shadow:         0 2px 8px rgba(20, 180, 124, 0.25)  ※推測
transition:     background 0.2s, transform 0.2s, box-shadow 0.2s
hover:          background: #0E9A66; transform: translateY(-1px); shadow 強化 ※推測
active:         transform: translateY(0); shadow 削除
disabled:       background: #D9E2E0; color: #9AA5A4; cursor: not-allowed; shadow none
```

#### Secondary / Outline（キャリタスからエントリー など）※推測
```
background:     transparent
color:          #1A2B2E
border:         1px solid #1A2B2E
border-radius:  4px
padding:        12px 32px
font-size:      14px
font-weight:    700
hover:          background: #1A2B2E; color: #FFFFFF;
disabled:       opacity 0.4
```

#### Ghost（テキストリンク・ナビ）
```
background:     transparent
color:          #1A2B2E
font-size:      14px
font-weight:    500
hover:          color: #14B47C; text-decoration: underline;
```

#### サイズバリアント ※推測
```
sm:  height 36px;  font 13px;  padding 8px 16px;
md:  height 44px;  font 14px;  padding 12px 24px;   (default)
lg:  height 52px;  font 16px;  padding 14px 48px;
```

### 8-2. カード（OUR BUSINESS / PEOPLE）

```
background:     #FFFFFF
border:         1px solid #D9E2E0   /* PEOPLE のみ。OUR BUSINESS は border 無しで shadow のみの可能性 */
border-radius:  8px
overflow:       hidden
box-shadow:     0 4px 16px rgba(0, 0, 0, 0.08)
transition:     transform 0.3s, box-shadow 0.3s
hover:          transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
画像:           aspect-ratio: 16/10 (BUSINESS) or 3/4 (PEOPLE); object-fit: cover;
body padding:   20px 24px 24px (BUSINESS) / 16px 20px 20px (PEOPLE)
```

### 8-3. フォーム要素

#### input[type="text" / "email" / "tel" / "date"]
```
height:         44px
padding:        0 14px
background:     #F5F8F7
border:         1px solid #D9E2E0
border-radius:  4px
font-size:      14px
color:          #1A2B2E
placeholder:    color #9AA5A4
transition:     border-color 0.2s, background 0.2s
focus:          border-color: #14B47C; background: #FFFFFF; outline: none;
                box-shadow: 0 0 0 3px rgba(20, 180, 124, 0.15);
error:          border-color: #E83E2B;
disabled:       background: #E5F2EE; color: #9AA5A4; cursor: not-allowed;
```

#### textarea
```
min-height:     160px
padding:        12px 14px
（その他 input と同じ）
resize:         vertical
```

#### select（不明、本 LP には select は未確認 ※推測）
```
height: 44px; appearance: none; background-image: url(chevron-down.svg) right 12px center / 16px no-repeat;
```

#### checkbox（不明、本 LP には checkbox は未確認 ※推測）
```
width: 20px; height: 20px;
border: 1px solid #D9E2E0; border-radius: 2px; background: #FFFFFF;
:checked: background: #14B47C; border-color: #14B47C;
:checked::after: ✓ アイコン #FFFFFF
```

#### 必須バッジ
```
display: inline-block; margin-left: 8px;
font-size: 11px; font-weight: 700; line-height: 1;
padding: 3px 6px; border-radius: 2px;
background: #E83E2B; color: #FFFFFF;
text: 「必須」
```

### 8-4. ナビゲーション

#### PC ヘッダー ※推測
```
height:         72px
display:        flex; align-items: center; justify-content: space-between;
padding:        0 32px
background:     #FFFFFF
position:       sticky; top: 0; z-index: 100;
shadow:         0 1px 0 #D9E2E0   /* スクロール時のみ ※推測 */

ul li a {
  font-size: 14px; font-weight: 500; color: #1A2B2E;
  padding: 8px 12px;
  hover: color: #14B47C;
}
右端 ENTRY 小ボタン: bg #14B47C / color #FFFFFF / padding 8px 16px / radius 4px
```

#### SP ハンバーガー ※推測
- 右端に 24×24 のハンバーガー（3 本線）。
- タップで右からスライドインのドロワー（width 80vw、bg `#FFFFFF`）。
- 内部メニューは縦積み（`padding: 16px 0; border-bottom: 1px solid #D9E2E0;`）。

### 8-5. タブ（RECRUIT セクション内）※推測
```
display:        flex; gap: 0;
border-bottom:  1px solid #D9E2E0;

tab {
  padding: 12px 24px;
  font-size: 14px; font-weight: 600; color: #6B7878;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}
tab[aria-selected="true"] {
  color: #1F5F5A;
  border-bottom-color: #1F5F5A;
}
tab:hover {
  color: #1F5F5A;
}
```

### 8-6. アコーディオン（ENVIRONMENT）※推測
```
.acc-row {
  border-bottom: 1px solid #D9E2E0;
}
.acc-trigger {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 24px;
  font-size: 16px; font-weight: 600; color: #1A2B2E;
  background: transparent; border: none;
  cursor: pointer; width: 100%;
  text-align: left;
}
.acc-trigger:hover { color: #14B47C; }
.acc-icon {
  width: 24px; height: 24px;
  position: relative;
}
.acc-icon::before, .acc-icon::after {
  content: ''; position: absolute; background: #1A2B2E; transition: transform 0.3s;
}
.acc-icon::before { width: 14px; height: 2px; top: 11px; left: 5px; }       /* 横線 */
.acc-icon::after  { width: 2px; height: 14px; top: 5px; left: 11px; }       /* 縦線 */
[aria-expanded="true"] .acc-icon::after { transform: scaleY(0); }            /* + → - */

.acc-content {
  max-height: 0; overflow: hidden;
  transition: max-height 0.3s ease;
}
[aria-expanded="true"] + .acc-content {
  max-height: 600px;
  padding: 0 24px 20px;
}
```

## 9. 装飾・質感

### border-radius 一覧 ※推測
```
0  : Footer / 一部装飾
2  : 必須バッジ、checkbox
4  : input、ボタン、tag、Footer 内ボックス
8  : カード（OUR BUSINESS / PEOPLE / ABOUT US 数字カード）
9999/full : ピル状タグ（OUR BUSINESS のキーワードチップ）※推測
```

### box-shadow 全値（elevation 別）※推測
```
elev-0:  none
elev-1:  0 1px 0 #D9E2E0                            /* ヘッダー、区切り線代替 */
elev-2:  0 2px 8px rgba(20, 180, 124, 0.25)         /* primary ボタン */
elev-3:  0 4px 16px rgba(0, 0, 0, 0.08)             /* カード default */
elev-4:  0 8px 24px rgba(0, 0, 0, 0.12)             /* カード hover */
elev-5:  0 0 0 3px rgba(20, 180, 124, 0.15)         /* input focus ring */
```

### アイコン
- アイコンライブラリ: 不明 ※推測（Heroicons / Lucide / 自社 SVG のいずれか）
- ABOUT US 数字カードのアイコン: 24×24 SVG（白、太さ 1.5〜2px の line スタイル）※推測
- ENVIRONMENT の `+/-`: 上記アコーディオン仕様の自作 CSS（疑似要素）
- ハンバーガー: 24×24 SVG / 自作 ※推測
- カルーセルドット: 8×8 円形（CSS）※推測

### 区切り線・背景装飾
- 線色: `#D9E2E0`（明）/ `rgba(255,255,255,0.1)`（暗背景上）※推測
- 太さ: `1px` 基本、強調 `2px`（タブ下線、見出しアクセント）
- 背景装飾: 仕事の流れセクションの大きな半透明 `WORK FLOW` 英字、ABOUT US の左寄せレイアウト中の薄い装飾帯 ※推測。
- グラデーションは限定的（FV 下部の暗フェードのみ）。

## 10. アニメーション・インタラクション ※推測

### transition 標準値
```
0.2s ease         : 色変化（hover / focus）
0.3s ease         : transform、shadow、アコーディオン max-height
0.5s cubic-bezier(0.215, 0.61, 0.355, 1)  : カード画像 hover scale
0.8s cubic-bezier(0.215, 0.61, 0.355, 1)  : スクロールフェードイン opacity / translateY
```

### hover 一覧
| 要素 | hover 挙動 |
|---|---|
| Header メニュー link | `color: #14B47C` |
| Header ENTRY 小ボタン | `background: #0E9A66` |
| OUR BUSINESS / PEOPLE カード | `transform: translateY(-4px); box-shadow 強化;` |
| カード画像 | `transform: scale(1.04)` ※推測 |
| Primary ボタン | `bg: #14B47C → #0E9A66; transform: translateY(-1px);` |
| Outline ボタン | `bg/color 反転` |
| アコーディオントリガ | `color: #14B47C` |
| タブ | `color: #1F5F5A` |
| Footer リンク | `color: #FFFFFF → opacity 0.7` |

### scroll 連動アニメ ※推測
- セクション見出し / カード / 数字カード: `IntersectionObserver` で初期 `opacity:0; transform: translateY(24px);` → `is-visible` クラス付与で `opacity:1; transform:none;`、duration `0.8s`、easing `cubic-bezier(0.215, 0.61, 0.355, 1)`。
- ABOUT US 数字: ビューポート進入時に `0 → 目標値` のカウントアップ（duration 1500〜2000ms、easing ease-out cubic）。
- パララックス効果は無し ※推測。

### ローディング / ページ遷移 ※推測
- 専用ローダー無し。
- フォーム送信時はボタン inactive + 「送信中...」テキスト変更 ※推測。

## 11. レスポンシブ挙動 ※推測

### 各ブレークポイントでの主な変化

#### ≥ 1280px (xl)
- 大画面でも `max-width: 1100px` を維持、両側に余白。

#### 1024〜1279px (lg)
- メインの PC レイアウトをそのまま表示。

#### 768〜1023px (md)
- OUR BUSINESS カード: 2 列維持（gap 縮小 24px）。
- ABOUT US 数字カード: 4 列 → 2 列。
- PEOPLE カルーセル: `slidesPerView: 2`。
- RECRUIT / APPLY ラベル幅: `120〜140px` に縮小。
- Footer: 縦積み。

#### ≤ 767px (sm)
- ヘッダー: PC ナビ非表示、ハンバーガー表示。
- FV: 高さ `60vh`、キャッチコピー `24〜26px`。
- OUR BUSINESS カード: 1 列縦積み。
- ABOUT US 数字カード: 2 列。
- PEOPLE カルーセル: `slidesPerView: 1.2〜1.5`、横スワイプ。
- ENVIRONMENT: padding `16px 20px` に縮小。
- RECRUIT / APPLY: ラベル / コンテンツを縦積み（`grid-template-columns: 1fr;`）、ラベルは項目見出しとして上部に表示。
- 下部 CTA ボタン: 縦積み、`width: 100%`。
- Footer: 縦積み、テキスト中央寄せ。

### モバイル固有
- 横スワイプ可能な PEOPLE カルーセル。
- 固定ヘッダーは継続、固定 CTA は無し ※推測。
- `100svh`（モバイル URL バー考慮）を FV に適用 ※推測。

## 12. アクセシビリティ ※推測

### 想定の実装
- `<html lang="ja">`
- 装飾画像: `alt=""`、意味のある画像（社員写真）: 名前/部署を含む alt
- ヘッダーロゴリンク: `aria-label="トップへ"`
- ハンバーガー: `aria-expanded` / `aria-controls`
- アコーディオントリガ: `<button aria-expanded="false" aria-controls="acc-content-1">`
- タブ: `role="tablist"` / `role="tab" aria-selected`、コンテンツに `role="tabpanel"`
- フォーム: `<label for="">` で input と関連付け、必須は `aria-required="true"` + 視覚バッジ
- フォームエラー: `aria-invalid="true"` + `aria-describedby` でエラーメッセージ
- カルーセル: `role="region" aria-label="社員紹介"`、ドットに `aria-label="スライド N へ"`
- フォーカスリング: input は `box-shadow: 0 0 0 3px rgba(20, 180, 124, 0.15);`、ボタンは標準 outline 維持

### 推奨改善（未確認 ※推測）
- スキップリンク `<a href="#main">本文へスキップ</a>`
- カラーコントラスト: `#6B7878` on `#FFFFFF` は AA ボーダーライン（テキストサイズ 14px 以上で OK）
- `prefers-reduced-motion` 対応（カウントアップ・フェードイン無効化）

---

# 再現用プロンプト例

別の Claude / Claude Code に渡すだけで同等の LP を実装できる指示文：

> あなたは Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS に精通したフロントエンド実装者です。下記の仕様書に **完全準拠** して、`株式会社TECNES 採用LP` を実装してください。情報が `※推測` の箇所はクライアントに代わって妥当な解釈をし、指定したカラー・余白・サイズを優先してください。
>
> ## 全体方針
> - Next.js 14 App Router、'use client' は最小限。フォーム / カルーセル / アコーディオン / ハンバーガーのみクライアントコンポーネント。
> - スタイルは **Tailwind CSS 3.x**。`tailwind.config.ts` に下記カラーを `extend.colors` で登録：
>   ```
>   primary:        '#14B47C'
>   primaryDark:    '#0E9A66'
>   secondary:      '#1F5F5A'
>   accent:         '#E83E2B'
>   surface:        '#E5F2EE'
>   surface2:       '#F5F8F7'
>   bgDark:         '#102A33'
>   textMain:       '#1A2B2E'
>   textSub:        '#6B7878'
>   textMute:       '#9AA5A4'
>   border:         '#D9E2E0'
>   ```
> - フォントは `next/font/google` で `Noto_Sans_JP (400/500/700)` と `Poppins (400/500/700)` を CSS 変数 `--font-noto / --font-poppins` で注入。`body { font-family: var(--font-noto), sans-serif; font-feature-settings: "palt"; }` を `app/globals.css` に。
> - 角丸は基本 `rounded-md (4px)` / `rounded-lg (8px)`。グラデは FV 下部の暗フェードのみ。
> - 画像は Next.js Image コンポーネント（webp 自動変換）、社員写真は外部素材で代替可（オレンジ作業着・白ヘルメット）。
>
> ## カラー方針
> - primary `#14B47C`（緑）= CTA・送信ボタン・focus
> - secondary `#1F5F5A`（深ティール）= ABOUT US 背景・タブアクティブ
> - accent `#E83E2B`（赤）= ロゴスウッシュ・必須バッジ
> - surface `#E5F2EE`（薄ミント）= 仕事の流れ / RECRUIT / 中央バナー背景
> - bgDark `#102A33`（暗ティール）= Footer 背景
>
> ## レイアウト
> - 共通インナー: `max-w-[1100px] mx-auto px-8`、SP `px-5`
> - ブレークポイント: Tailwind 既定（sm 640 / md 768 / lg 1024 / xl 1280）
>
> ## ライブラリ
> - **Swiper 11**: PEOPLE カルーセル（PC `slidesPerView: 3`, SP `1.2`, ページネーションドット, 矢印無し）。
> - **react-hook-form + zod**: APPLY フォームのバリデーション ※推奨。
> - スクロールフェード: 軽量 IntersectionObserver の独自実装。`opacity 0 → 1; translateY 24px → 0; duration 0.8s; easing cubic-bezier(0.215, 0.61, 0.355, 1);`
> - ABOUT US カウントアップ: `requestAnimationFrame` で 1800ms / ease-out cubic。
>
> ## セクション順序
> 1. Header（固定、白背景、72px、ロゴ＋PC ナビ＋ENTRY 小ボタン）
> 2. FV（フルブリード写真、キャッチコピー「**技術と絆で、未来を支える。**」）
> 3. OUR BUSINESS（白、英字 H2 中央、2 カード横並び、各カードに画像＋タイトル＋本文＋タグ）
> 4. 仕事の流れ（薄ミント `#E5F2EE`、フローイラスト 1 枚）
> 5. ABOUT US（深ティール `#1F5F5A` 背景、白文字、4×2 の数字カードグリッド、カウントアップ）
> 6. PEOPLE（白、Swiper カルーセル、社員カード 3〜N 名）
> 7. 中央バナー（薄ミント、コピー 1〜2 行）
> 8. ENVIRONMENT（白、+/- アコーディオン）
> 9. RECRUIT（薄ミント、タブ＋表組）
> 10. APPLY（白、フォーム max-w 720px、必須バッジ赤）
> 11. 下部 CTA（白〜薄ミント、メインコピー＋ 2 ボタン）
> 12. Footer（暗ティール `#102A33`、ロゴ＋住所＋TEL `06-6618-7387`＋コピーライト）
>
> ## キーコピー（厳守）
> - FV キャッチ: **技術と絆で、未来を支える。**
> - 数字カード（仮、※推測の値で OK）:
>   - 創業 6 年 / 拠点 1 社 / 部署 1 部 / 役員 4 人 / 従業員 202 名 / 新卒 24 名 / 就業 7 時間 / 残業 9 時間
> - 下部 CTA メイン: **もっと色々な働き方を提供できる、あなたのご応募をお待ちしています。**（※推測のため自然なコピーに置換可）
> - TEL: **06-6618-7387**
>
> ## アニメ標準値
> - hover: 0.2s ease（色）、0.3s ease（transform / shadow）
> - カード hover: `translateY(-4px)` + shadow 強化
> - primary ボタン hover: `translateY(-1px)` + bg darken
> - スクロールフェード: 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
>
> ## アクセシビリティ
> - `<html lang="ja">`、各セクション `<section aria-labelledby="...">`
> - フォーム: `<label for="">`、必須に `aria-required="true"`
> - アコーディオン: `<button aria-expanded="">`、コンテンツに `aria-hidden`
> - タブ: `role="tablist" / role="tab" aria-selected`
> - カルーセル: `role="region" aria-label="社員紹介"`
> - `prefers-reduced-motion` でアニメ無効化
>
> ## 出力構成
> ```
> app/
>   layout.tsx          # 共通レイアウト、フォント注入
>   page.tsx            # 全セクションを順に配置
>   globals.css         # body 設定、reset
> components/
>   Header/             # 固定ヘッダー、ハンバーガー
>   Hero/               # FV
>   OurBusiness/        # 事業 2 カード
>   WorkFlow/           # フローイラスト
>   AboutUs/            # 数字カード + カウントアップ
>   People/             # Swiper カルーセル
>   Banner/             # 中央バナー
>   Environment/        # アコーディオン
>   Recruit/            # タブ + 表組
>   Apply/              # フォーム（react-hook-form + zod）
>   FinalCta/           # 下部 CTA
>   Footer/             # フッター
>   ui/                 # Button, Card, Input, Tab 等の共通コンポーネント
> ```
>
> 仕上げに `npm run dev` で確認できる状態まで実装し、特に **緑 (#14B47C) と深ティール (#1F5F5A) のコントラスト**、**FV 写真の没入感**、**フォームの整然としたグリッド** の 3 点を最優先で完成度を高めてください。


