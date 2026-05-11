# TECNES LP — WordPress テーマ

千代田工販株式会社 新卒採用情報ランディングページの WordPress 版テーマ。
Next.js 版（[tecnes-lp-001.vercel.app](https://tecnes-lp-001.vercel.app/)）の
コンポーネント・スタイル・スクリプトを WordPress テンプレート構造に移植したもの。

## ディレクトリ構成

```
wordpress-theme/
├── style.css                        # テーマヘッダ（WordPress 認識用）
├── functions.php                    # アセット enqueue, ヘルパー定義
├── header.php                       # <head> 〜 header
├── footer.php                       # footer 〜 </html>
├── index.php                        # LP ページ本体（全セクションを順に include）
├── front-page.php                   # フロントページ用エイリアス（index.php を呼ぶ）
├── template-parts/
│   ├── section-header.php           # ヘッダ + Gnav 呼び出し
│   ├── section-gnav.php             # グローバルナビ
│   ├── section-main-visual.php      # MV（Splide スライダー）
│   ├── section-read.php             # リードセクション
│   ├── section-business.php         # 事業紹介 + モーダル群
│   ├── section-flow.php             # 仕事の流れ
│   ├── section-about.php            # 数字で見る千代田工販
│   ├── section-discovery.php        # Discovery バナー
│   ├── section-people.php           # 社員紹介（Swiper）
│   ├── section-environment.php      # 制度・環境
│   ├── section-foot-nav.php         # フッタ前 CTA
│   └── section-footer.php           # フッタ
└── assets/
    ├── css/                         # セクション別 + globals.css
    ├── js/app.js                    # 全インタラクティブ JS（vanilla）
    ├── images/                      # 全画像（public/images/ をコピー）
    └── vendor/                      # Splide / Swiper の CSS（JS は CDN）
```

## インストール

1. このディレクトリをそのまま `/wp-content/themes/tecnes-lp/` として配置
   （ディレクトリ名は変更可、`Theme Name` 識別は `style.css` ヘッダ依存）。
2. WordPress 管理画面 →「外観」→「テーマ」から **TECNES LP** を有効化。
3. 管理画面 →「設定」→「表示設定」→ ホームページの表示を「固定ページ」に
   設定するか、もしくは何も設定しなければ `index.php` がそのまま LP として
   表示されます（`front-page.php` 経由）。

## アセットの読み込み

`functions.php` の `tecnes_lp_enqueue_assets()` で以下を enqueue:

- Google Fonts (Noto Sans JP / Poppins)
- ベンダー CSS: Splide / Swiper（`assets/vendor/`）
- グローバル CSS: `assets/css/globals.css`
- セクション CSS: `assets/css/{slug}.css` を全件
- ベンダー JS: Swiper / Splide（CDN, `window.Swiper` / `window.Splide`）
- テーマ JS: `assets/js/app.js`

## JS で実装されているインタラクション (`assets/js/app.js`)

- **ScrollAnimator**: `.js-animate` 要素に `IntersectionObserver` で `.is-animate` を付与
- **Header**: スクロール量で `[data-header]` に `.fixed` を付与
- **SP ハンバーガーメニュー**: `[data-menu-toggle]` で `[data-gnav]` の `.isOpen` と `body.is-menu-open` をトグル
- **MainVisual Splide**: `[data-mv-splide]` をフェードスライダーとして初期化、進捗バーと再生/停止ボタンを連動
- **Business モーダル**: `[data-modal-open]` で開閉、Esc / オーバーレイクリック / prev・next 対応
- **About 数字カウンタ**: `[data-num-display]` を `IntersectionObserver` + `requestAnimationFrame` で count-up
- **People Swiper**: `.js-people-swiper` を Swiper で初期化（768 / 1025 ブレークポイント、nav + pagination）

## 画像参照

PHP テンプレートからは `tecnes_lp_img( 'filename.ext' )` ヘルパーで参照します
（`functions.php` で定義）。子テーマで使う場合は内部の
`get_template_directory_uri()` を `get_stylesheet_directory_uri()` に置き換えてください。

## 翻訳

すべてのユーザ向け日本語文字列は `__()` / `esc_html_e()` / `esc_attr_e()` で
テキストドメイン `tecnes-lp` 付きで出力されています。`languages/` に .po/.mo
を置けば多言語対応可能です。

## 既知の差分・注意点

- Next.js の `next/font` による Google Fonts のセルフホストは外し、CDN で配信。
- Tailwind は使用していません（globals.css に書き下し）。
- Next.js の React state を使った要素は data 属性経由で vanilla JS に置き換えています。
- CSS クラス名は CSS Modules の元の **camelCase をそのまま** グローバルクラス化
  （例: `.businessInner`）。新規 BEM 化はしていないので、Next.js 版との
  視覚的差分はほぼないはずです。
