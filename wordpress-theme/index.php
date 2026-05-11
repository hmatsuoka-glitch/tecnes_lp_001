<?php
/**
 * index.php — 全セクションを1ページにまとめた LP テンプレート
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<main class="l-main">
	<?php get_template_part( 'template-parts/section', 'main-visual' ); ?>
	<?php get_template_part( 'template-parts/section', 'read' ); ?>
	<?php get_template_part( 'template-parts/section', 'business' ); ?>
	<?php get_template_part( 'template-parts/section', 'flow' ); ?>
	<?php get_template_part( 'template-parts/section', 'about' ); ?>
	<?php get_template_part( 'template-parts/section', 'discovery' ); ?>
	<?php get_template_part( 'template-parts/section', 'people' ); ?>
	<?php get_template_part( 'template-parts/section', 'environment' ); ?>
	<?php get_template_part( 'template-parts/section', 'foot-nav' ); ?>
</main>

<?php
get_footer();
