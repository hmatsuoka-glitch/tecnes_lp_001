<?php
/**
 * Site header
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="lHeader" id="js-l-header">
    <div class="lHeaderInner">
        <p class="logo">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logoLink">
                <span class="logoImage">
                    <img src="<?php echo tecnes_img( 'logo.png' ); ?>" alt="千代田工販株式会社" width="200" height="50">
                </span>
                <span class="logoTxt">RECRUIT SITE</span>
            </a>
        </p>

        <ul class="menu">
            <li><a href="<?php echo esc_url( home_url( '/#business' ) ); ?>"><span class="menuJpn">仕事を知る</span></a></li>
            <li><a href="<?php echo esc_url( home_url( '/people/' ) ); ?>"><span class="menuJpn">働く社員を知る</span></a></li>
            <li><a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>"><span class="menuJpn">働く環境を知る</span></a></li>
            <li><a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>"><span class="menuJpn">採用情報</span></a></li>
        </ul>

        <ul class="btn">
            <li class="btnRecruit">
                <a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>">募集要項</a>
            </li>
            <li class="btnEntry">
                <span>ENTRY</span>
                <div class="entryBox">
                    <ul class="entryBoxList">
                        <li>
                            <a href="https://job.mynavi.jp/27/pc/search/corp7" target="_blank" rel="noopener noreferrer">
                                <img src="<?php echo tecnes_img( 'header_btn_mynavi.png' ); ?>" alt="マイナビ" width="200" height="60">
                            </a>
                        </li>
                        <li>
                            <a href="https://job.career-tasu.jp/corp/00200776" target="_blank" rel="noopener noreferrer">
                                <img src="<?php echo tecnes_img( 'header_btn_career-tasu.png' ); ?>" alt="キャリタス" width="200" height="60">
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

        <p class="btnMenu">
            <a href="#" class="btnMenuLink" id="js-menu-toggle">
                <span class="btnMenuLine"></span>
                <span class="btnMenuLine"></span>
                <span class="btnMenuLine"></span>
                <span class="btnMenuText">MENU</span>
            </a>
        </p>
    </div>

    <?php get_template_part( 'template-parts/gnav' ); ?>
</header>
