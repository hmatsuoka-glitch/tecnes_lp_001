<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

$tecnes_lp_people_members = array(
	array(
		'id'    => 1,
		'thumb' => 'people_thumbs01@2x.jpg',
		'catch' => '先輩に支えられ始まった千代田工販での挑戦 次は私が後輩を支える番だ',
		'dept'  => '電機システム部',
		'role'  => '営業職',
		'name'  => 'M.M',
		'year'  => '2017年入社',
	),
	array(
		'id'    => 2,
		'thumb' => 'people_thumbs02@2x.jpg',
		'catch' => '関わるすべての人のベクトルを合わせて 大型プロジェクトに挑む',
		'dept'  => 'プラント産業システム部',
		'role'  => '営業職',
		'name'  => 'Y.T',
		'year'  => '2014年入社',
	),
	array(
		'id'    => 3,
		'thumb' => 'people_thumbs03@2x.jpg',
		'catch' => '顧客利益だけでなく その先にある「社会に良いこと」を追求',
		'dept'  => '環境・機械システム営業部',
		'role'  => '営業職',
		'name'  => 'N.S',
		'year'  => '2017年入社',
	),
	array(
		'id'    => 4,
		'thumb' => 'people_thumbs04@2x.jpg',
		'catch' => '主体性を持って企業と向き合い提案し、感謝される それが私の成長サイクル',
		'dept'  => '新潟支店',
		'role'  => '営業職',
		'name'  => 'O.T',
		'year'  => '2017年入社',
	),
	array(
		'id'    => 5,
		'thumb' => 'people_thumbs05@2x.jpg',
		'catch' => '商社ならではの価値を追求し 幅広い業界へ提案 次は本社でさらなる挑戦へ',
		'dept'  => '九州支店',
		'role'  => '営業職',
		'name'  => 'J.A',
		'year'  => '2019年入社',
	),
	array(
		'id'    => 6,
		'thumb' => 'people_thumbs06@2x.jpg',
		'catch' => '何事も全力で楽しむ 自社製品の海外展開という「未知なる挑戦」も楽しみたい',
		'dept'  => '自動車部品部',
		'role'  => '営業職',
		'name'  => 'W.R',
		'year'  => '2005年入社',
	),
	array(
		'id'    => 7,
		'thumb' => 'people_thumbs07@2x.jpg',
		'catch' => 'UVシステムの営業が切り拓く 「社会インフラ」と「持続可能な未来」への貢献',
		'dept'  => 'UVシステム営業部',
		'role'  => '営業職',
		'name'  => 'E.M',
		'year'  => '2012年入社',
	),
);
?>
<section id="people" class="people">
	<div class="l-inner peopleTop">
		<h2 class="ttl01 js-animate fadeIn01">
			<span class="ttl01En">PEOPLE</span>
			<span class="ttl01Ja"><?php esc_html_e( '働く社員を知る', 'tecnes-lp' ); ?></span>
		</h2>
		<p class="leadTxt"><?php esc_html_e( '千代田工販で新しい自分に出会い、変わらない自分の信念を持って活躍している先輩たち。どんな想いで働いているのか、エピソードを交えてご紹介します。', 'tecnes-lp' ); ?></p>
	</div>

	<div class="mainImg">
		<img src="<?php echo esc_url( tecnes_lp_img( 'people_img01@2x.jpg' ) ); ?>" alt="" width="1280" height="400" loading="lazy" decoding="async" />
	</div>

	<div class="swiperWrap">
		<div class="swiper js-people-swiper">
			<div class="swiper-wrapper">
				<?php foreach ( $tecnes_lp_people_members as $m ) : ?>
					<div class="swiper-slide">
						<div class="card">
							<div class="cardThumb">
								<img src="<?php echo esc_url( tecnes_lp_img( $m['thumb'] ) ); ?>" alt="<?php echo esc_attr( $m['name'] ); ?>" loading="lazy" decoding="async" />
							</div>
							<div class="cardBody">
								<p class="cardCatch"><?php echo esc_html( $m['catch'] ); ?></p>
								<div class="cardMeta">
									<span class="cardDept"><?php echo esc_html( $m['dept'] ); ?>・<?php echo esc_html( $m['role'] ); ?></span>
									<span class="cardName"><?php echo esc_html( $m['name'] ); ?></span>
									<span class="cardYear"><?php echo esc_html( $m['year'] ); ?></span>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>

	<div class="l-inner decorSection">
		<p class="decorCopy">
			<img src="<?php echo esc_url( tecnes_lp_img( 'people_copy.svg' ) ); ?>" alt="<?php esc_attr_e( 'あなたの成長を全力でサポート', 'tecnes-lp' ); ?>" width="400" height="100" loading="lazy" decoding="async" />
		</p>
	</div>
</section>
