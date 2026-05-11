<?php
/**
 * TECNES Recruit theme functions
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! defined( 'TECNES_THEME_VERSION' ) ) {
    define( 'TECNES_THEME_VERSION', '1.0.0' );
}

/**
 * Theme setup
 */
function tecnes_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'tecnes-recruit' ),
        'footer'  => __( 'Footer Menu', 'tecnes-recruit' ),
    ) );
}
add_action( 'after_setup_theme', 'tecnes_setup' );

/**
 * Enqueue styles & scripts
 */
function tecnes_enqueue_assets() {
    $theme_uri = get_template_directory_uri();
    $ver       = TECNES_THEME_VERSION;

    // Google Fonts (Noto Sans JP, Poppins)
    wp_enqueue_style(
        'tecnes-google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Vendor CSS
    wp_enqueue_style( 'splide',  $theme_uri . '/assets/vendor/splide.min.css',        array(), $ver );
    wp_enqueue_style( 'swiper',  $theme_uri . '/assets/vendor/swiper-bundle.min.css', array(), $ver );

    // Globals
    wp_enqueue_style( 'tecnes-globals', $theme_uri . '/assets/css/globals.css', array(), $ver );

    // Per-section styles
    $section_styles = array(
        'header'      => 'Header.css',
        'gnav'        => 'Gnav.css',
        'mainvisual'  => 'MainVisual.css',
        'read'        => 'Read.css',
        'business'    => 'Business.css',
        'flow'        => 'Flow.css',
        'about'       => 'About.css',
        'discovery'   => 'Discovery.css',
        'people'      => 'People.css',
        'environment' => 'Environment.css',
        'footnav'     => 'FootNav.css',
        'footer'      => 'Footer.css',
    );
    foreach ( $section_styles as $handle => $file ) {
        wp_enqueue_style( 'tecnes-' . $handle, $theme_uri . '/assets/css/' . $file, array( 'tecnes-globals' ), $ver );
    }

    // Theme stylesheet (style.css header)
    wp_enqueue_style( 'tecnes-theme-style', get_stylesheet_uri(), array(), $ver );

    // Vendor JS via CDN (Splide & Swiper)
    wp_enqueue_script( 'splide', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', array(), '4.1.4', true );
    wp_enqueue_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',              array(), '11.0.0', true );

    // Theme scripts
    wp_enqueue_script( 'tecnes-header',          $theme_uri . '/assets/js/header.js',          array(),                         $ver, true );
    wp_enqueue_script( 'tecnes-mainvisual',      $theme_uri . '/assets/js/mainvisual.js',      array( 'splide' ),               $ver, true );
    wp_enqueue_script( 'tecnes-business-modal',  $theme_uri . '/assets/js/business-modal.js',  array(),                         $ver, true );
    wp_enqueue_script( 'tecnes-people-swiper',   $theme_uri . '/assets/js/people-swiper.js',   array( 'swiper' ),               $ver, true );
    wp_enqueue_script( 'tecnes-about-counter',   $theme_uri . '/assets/js/about-counter.js',   array(),                         $ver, true );
    wp_enqueue_script( 'tecnes-scroll-animator', $theme_uri . '/assets/js/scroll-animator.js', array(),                         $ver, true );
}
add_action( 'wp_enqueue_scripts', 'tecnes_enqueue_assets' );

/**
 * Helper: theme asset URL
 */
function tecnes_asset( $path = '' ) {
    return esc_url( get_template_directory_uri() . '/assets/' . ltrim( $path, '/' ) );
}

/**
 * Helper: image URL inside assets/images
 */
function tecnes_img( $name ) {
    return tecnes_asset( 'images/' . $name );
}
