<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

$tecnes_mv_slides = array(
	array( 'img1' => 'mv_slide01-01.png', 'img2' => 'mv_slide01-02.png' ),
	array( 'img1' => 'mv_slide02-01.png', 'img2' => 'mv_slide02-02.png' ),
	array( 'img1' => 'mv_slide03-01.png', 'img2' => 'mv_slide03-02.png' ),
	array( 'img1' => 'mv_slide04-01.png', 'img2' => 'mv_slide04-02.png' ),
);
?>
<div class="mv">
	<p class="mvScroll">
		<span class="mvScrollEn">SCROLL</span>
	</p>
	<div class="mvInner">
		<div id="mvSlide01" class="splide mvSlider" data-mv-splide>
			<div class="splide__track">
				<ul class="splide__list">
					<?php foreach ( $tecnes_mv_slides as $tecnes_slide ) : ?>
						<li class="splide__slide">
							<span class="slideBg"></span>
							<span class="txtWrap">
								<span class="txtWrapInner">
									<img src="<?php echo tecnes_lp_img( 'mv_txt.png' ); ?>" alt="" width="800" height="80" loading="lazy" decoding="async" />
								</span>
								<span class="txtWrapInner">
									<img src="<?php echo tecnes_lp_img( 'mv_txt.png' ); ?>" alt="" width="800" height="80" loading="lazy" decoding="async" />
								</span>
							</span>
							<span class="slideImg">
								<img src="<?php echo tecnes_lp_img( $tecnes_slide['img1'] ); ?>" alt="" loading="lazy" decoding="async" />
							</span>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

			<p class="mvScreen">
				<img src="<?php echo tecnes_lp_img( 'mv_screen.png' ); ?>" alt="" loading="lazy" decoding="async" />
			</p>

			<h1 class="mvCopy">
				<img src="<?php echo tecnes_lp_img( 'mv_copy.png' ); ?>" alt="<?php esc_attr_e( 'キミの想いが未来をともす', 'tecnes-lp' ); ?>" width="600" height="120" loading="eager" decoding="async" />
			</h1>

			<div class="progressWrap">
				<div class="progressInner">
					<button class="splideToggle splide__toggle" data-mv-toggle type="button">
						<span class="splide__toggle__play">&#9654;</span>
						<span class="splide__toggle__pause">&#9208;</span>
					</button>
					<div class="splideProgress">
						<div class="splideProgressBar" data-mv-progress></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
