<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<section id="flow" class="flow">
	<div class="l-inner flowInner">
		<h2 class="flowTtl01 js-animate fadeIn01"><?php esc_html_e( '仕事の流れ', 'tecnes-lp' ); ?></h2>
		<p class="flowTxt01"><?php esc_html_e( '私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。', 'tecnes-lp' ); ?></p>

		<figure class="flowImg">
			<img src="<?php echo tecnes_lp_img( 'tecnes_work_flow_preview.png' ); ?>" alt="<?php esc_attr_e( '仕事の流れ図', 'tecnes-lp' ); ?>" width="1100" height="600" loading="lazy" decoding="async" />
		</figure>

		<p class="flowCopy">
			<img src="<?php echo tecnes_lp_img( 'flow_txt.png' ); ?>" alt="" width="600" height="120" loading="lazy" decoding="async" />
		</p>
	</div>
</section>
