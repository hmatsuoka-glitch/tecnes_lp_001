<?php
/**
 * Template part: 仕事の流れ（Flow）セクション
 *
 * 使い方:
 *   <?php get_template_part( 'template-parts/section-flow' ); ?>
 *
 * 想定アセット:
 *   - 画像: /assets/images/tecnes_work_flow_preview.png
 *   - 画像: /assets/images/flow_txt.png
 *   - CSS : /assets/css/flow.css （functions.php で wp_enqueue_style）
 *
 * 画像 URL は `get_template_directory_uri()` を基準に組み立てています。
 * 子テーマで使う場合は `get_stylesheet_directory_uri()` に置き換えてください。
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$flow_img_url  = esc_url( get_template_directory_uri() . '/assets/images/tecnes_work_flow_preview.png' );
$flow_copy_url = esc_url( get_template_directory_uri() . '/assets/images/flow_txt.png' );
?>
<section id="flow" class="flow">
	<div class="l-inner flow__inner">
		<h2 class="flow__ttl js-animate fadeIn01"><?php esc_html_e( '仕事の流れ', 'tecnes' ); ?></h2>
		<p class="flow__txt">
			<?php esc_html_e( '私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。', 'tecnes' ); ?>
		</p>

		<figure class="flow__img">
			<img
				src="<?php echo $flow_img_url; ?>"
				alt="<?php esc_attr_e( '仕事の流れ図', 'tecnes' ); ?>"
				width="1100"
				height="600"
				loading="lazy"
				decoding="async"
			/>
		</figure>

		<p class="flow__copy">
			<img
				src="<?php echo $flow_copy_url; ?>"
				alt=""
				width="600"
				height="120"
				loading="lazy"
				decoding="async"
			/>
		</p>
	</div>
</section>
