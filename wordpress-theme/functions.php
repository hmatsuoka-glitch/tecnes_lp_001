<?php
/**
 * TECNES LP テーマ functions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'TECNES_LP_VERSION' ) ) {
	define( 'TECNES_LP_VERSION', '1.0.0' );
}

/**
 * テーマセットアップ
 */
function tecnes_lp_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'script', 'style' )
	);
	load_theme_textdomain( 'tecnes-lp', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'tecnes_lp_setup' );

/**
 * スタイル・スクリプトの読み込み
 */
function tecnes_lp_enqueue_assets() {
	$base = get_template_directory_uri();
	$ver  = TECNES_LP_VERSION;

	// Google Fonts
	wp_enqueue_style(
		'tecnes-lp-google-fonts',
		'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap',
		array(),
		null
	);

	// ベンダー CSS
	wp_enqueue_style( 'splide',         $base . '/assets/vendor/splide.min.css',         array(), $ver );
	wp_enqueue_style( 'swiper-bundle',  $base . '/assets/vendor/swiper-bundle.min.css',  array(), $ver );

	// グローバル CSS（テーマ本体）
	wp_enqueue_style( 'tecnes-lp-globals', $base . '/assets/css/globals.css', array(), $ver );

	// セクション別 CSS
	$sections = array(
		'header', 'gnav', 'main-visual', 'read', 'business', 'flow',
		'about', 'discovery', 'people', 'environment', 'foot-nav', 'footer',
	);
	foreach ( $sections as $sec ) {
		wp_enqueue_style( "tecnes-lp-{$sec}", $base . "/assets/css/{$sec}.css", array( 'tecnes-lp-globals' ), $ver );
	}

	// WordPress 本体 style.css（テーマ識別用）
	wp_enqueue_style( 'tecnes-lp-style', get_stylesheet_uri(), array(), $ver );

	// JS（Swiper / Splide / テーマ独自）
	wp_enqueue_script( 'swiper-bundle', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js', array(), '10', true );
	wp_enqueue_script( 'splide',        'https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js', array(), '4', true );
	wp_enqueue_script( 'tecnes-lp-app', $base . '/assets/js/app.js', array( 'swiper-bundle', 'splide' ), $ver, true );
}
add_action( 'wp_enqueue_scripts', 'tecnes_lp_enqueue_assets' );

/**
 * テンプレート内で画像 URL を組み立てるヘルパー
 */
function tecnes_lp_img( $path ) {
	return esc_url( get_template_directory_uri() . '/assets/images/' . ltrim( $path, '/' ) );
}
