<?php
/**
 * About section – animated count-up cards
 */
$num_cards = array(
    array( 'ico' => 'about_ico01.svg', 'label' => '創業年数',       'target' => 78,  'unit' => '年',     'sub' => '1947年（昭和22年）創立' ),
    array( 'ico' => 'about_ico02.svg', 'label' => '売上高',         'target' => 536, 'unit' => '億円',   'sub' => '' ),
    array( 'ico' => 'about_ico03.svg', 'label' => '拠点数',         'target' => 16,  'unit' => '箇所',   'sub' => '海外拠点3箇所含む' ),
    array( 'ico' => 'about_ico04.svg', 'label' => '従業員人数',     'target' => 350, 'unit' => '人',     'sub' => '' ),
    array( 'ico' => 'about_ico05.svg', 'label' => '平均勤続年数',   'target' => 16,  'unit' => '年',     'sub' => '' ),
    array( 'ico' => 'about_ico06.svg', 'label' => '年間休日',       'target' => 123, 'unit' => '日',     'sub' => '夏季休暇5日間含む' ),
    array( 'ico' => 'about_ico07.svg', 'label' => '就業時間/日',    'target' => 7,   'unit' => '時間45分', 'sub' => '' ),
    array( 'ico' => 'about_ico08.svg', 'label' => '平均残業時間/月', 'target' => 15,  'unit' => '時間',   'sub' => '' ),
);
?>
<section id="about" class="about">
    <div class="l-inner aboutInner">
        <h2 class="ttl01 js-animate fadeIn01">
            <span class="ttl01En">ABOUT US</span>
            <span class="ttl01Ja">千代田工販について</span>
        </h2>

        <p class="subTtl">数字でわかる 千代田工販の今</p>
        <p class="note">※2025年3月時点</p>

        <div class="numGrid">
            <?php foreach ( $num_cards as $card ) : ?>
                <div class="numCard" data-counter-target="<?php echo esc_attr( $card['target'] ); ?>">
                    <span class="numCardIco">
                        <img src="<?php echo tecnes_img( $card['ico'] ); ?>" alt="">
                    </span>
                    <span class="numCardLabel"><?php echo esc_html( $card['label'] ); ?></span>
                    <span class="numCardValue">
                        <span class="numCardNum" data-counter-num>0</span>
                        <span class="numCardUnit"><?php echo esc_html( $card['unit'] ); ?></span>
                    </span>
                    <?php if ( ! empty( $card['sub'] ) ) : ?>
                        <span class="numCardSub"><?php echo esc_html( $card['sub'] ); ?></span>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="mainImg">
            <img src="<?php echo tecnes_img( 'about_img01@2x.jpg' ); ?>" alt="ABOUT US">
        </div>
    </div>
</section>
