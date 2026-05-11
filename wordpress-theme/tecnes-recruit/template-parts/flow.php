<?php
/**
 * Flow section
 */
$flow_img = tecnes_img( 'tecnes_work_flow_preview.png' );
?>
<section id="flow" class="flow">
    <div class="l-inner flowInner">
        <h2 class="flowTtl01 js-animate fadeIn01">仕事の流れ</h2>
        <p class="flowTxt01">
            私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。
        </p>

        <figure class="flowImg">
            <img src="<?php echo esc_url( $flow_img ); ?>" alt="仕事の流れ図" width="1100" height="600">
        </figure>

        <div class="flowImgScroll">
            <p class="scrollHint">
                <span>スクロール</span>
                <span class="scrollHintArrow"></span>
            </p>
            <div class="flowImgScrollInner">
                <img src="<?php echo esc_url( $flow_img ); ?>" alt="仕事の流れ図">
            </div>
        </div>

        <p class="flowCopy">
            <img src="<?php echo tecnes_img( 'flow_txt.png' ); ?>" alt="" width="600" height="120">
        </p>
    </div>
</section>
