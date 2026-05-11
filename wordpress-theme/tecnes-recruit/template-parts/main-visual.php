<?php
/**
 * Main Visual hero slider
 */
$slides = array(
    array( 'img1' => 'mv_slide01-01.png' ),
    array( 'img1' => 'mv_slide02-01.png' ),
    array( 'img1' => 'mv_slide03-01.png' ),
    array( 'img1' => 'mv_slide04-01.png' ),
);
?>
<div class="mv">
    <p class="mvScroll"><span class="mvScrollEn">SCROLL</span></p>
    <div class="mvInner">
        <div id="mvSlide01" class="splide mvSlider">
            <div class="splide__track">
                <ul class="splide__list">
                    <?php foreach ( $slides as $slide ) : ?>
                        <li class="splide__slide">
                            <span class="slideBg"></span>
                            <span class="txtWrap">
                                <span class="txtWrapInner">
                                    <img src="<?php echo tecnes_img( 'mv_txt.png' ); ?>" alt="" width="800" height="80">
                                </span>
                                <span class="txtWrapInner">
                                    <img src="<?php echo tecnes_img( 'mv_txt.png' ); ?>" alt="" width="800" height="80">
                                </span>
                            </span>
                            <span class="slideImg">
                                <img src="<?php echo tecnes_img( $slide['img1'] ); ?>" alt="" style="object-fit:cover;width:100%;height:100%;">
                            </span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <p class="mvScreen">
                <img src="<?php echo tecnes_img( 'mv_screen.png' ); ?>" alt="" style="object-fit:cover;width:100%;height:100%;">
            </p>

            <h1 class="mvCopy">
                <img src="<?php echo tecnes_img( 'mv_copy.png' ); ?>" alt="キミの想いが未来をともす" width="600" height="120">
            </h1>

            <div class="progressWrap">
                <div class="progressInner">
                    <button class="splideToggle splide__toggle" id="js-mv-toggle">
                        <span class="splide__toggle__play">▶</span>
                        <span class="splide__toggle__pause">⏸</span>
                    </button>
                    <div class="splideProgress">
                        <div class="splideProgressBar" id="js-mv-progress-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
