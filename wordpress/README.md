# 仕事の流れ（Flow）セクション — WordPress 版

Next.js 版 `components/Flow/Flow.tsx` を WordPress テーマで使えるようにした
テンプレートパーツと CSS です。

## ファイル

```
wordpress/
├── template-parts/
│   └── section-flow.php    # テンプレートパーツ本体
└── assets/
    └── css/
        └── flow.css        # セクション用スタイル
```

## 設置方法

1. `template-parts/section-flow.php` をテーマの `template-parts/` 配下に配置。
2. `assets/css/flow.css` をテーマの `assets/css/` に配置。
3. `public/images/tecnes_work_flow_preview.png` と `public/images/flow_txt.png`
   をテーマの `assets/images/` に配置。
4. `functions.php` で CSS を enqueue。

```php
// functions.php
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'tecnes-flow',
		get_template_directory_uri() . '/assets/css/flow.css',
		array(),
		'1.0.0'
	);
} );
```

5. 表示したいテンプレート（`page.php`, `front-page.php` など）で呼び出し。

```php
<?php get_template_part( 'template-parts/section-flow' ); ?>
```

## レスポンシブ仕様

- PC / タブレット / SP すべて同じ画像を表示
- SP では `width: 100%` で画面幅にフィットさせ、横スクロールは発生しない

子テーマで使う場合は、テンプレート内の `get_template_directory_uri()` を
`get_stylesheet_directory_uri()` に置き換えてください。
