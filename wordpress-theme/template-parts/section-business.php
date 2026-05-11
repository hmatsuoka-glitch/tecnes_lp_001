<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

$trading_categories = array(
	array( 'label' => 'エネルギー・電力関連', 'id' => 'trading-01' ),
	array( 'label' => 'プラント産業・電機関連', 'id' => 'trading-02' ),
	array( 'label' => '交通・施設関連', 'id' => 'trading-03' ),
	array( 'label' => '環境機械関連', 'id' => 'trading-04' ),
	array( 'label' => '情報・通信関連', 'id' => 'trading-05' ),
	array( 'label' => '国際事業', 'id' => 'trading-06' ),
);

$manufacturing_categories = array(
	array( 'label' => '自動車部品事業', 'id' => 'mfg-01' ),
	array( 'label' => 'UVシステム事業', 'id' => 'mfg-02' ),
);

$modals = array(
	array(
		'id'       => 'trading-01',
		'num'      => '商社のしごと #01',
		'title'    => 'エネルギー・電力関連',
		'subTitle' => '電気をつくる、電気をはこぶ',
		'body'     => '火力・水力発電や電力流通設備を通じて、安定した電力供給に貢献。カーボンニュートラルを目指し、再生可能エネルギーや次世代エネルギー分野にも注力しています。',
		'keywords' => array( '＃発電設備', '＃受変電設備', '＃太陽光発電システム' ),
		'img'      => 'modal_img01-01@2x.jpg',
	),
	array(
		'id'       => 'trading-02',
		'num'      => '商社のしごと #02',
		'title'    => 'プラント産業・電機関連',
		'subTitle' => '工場の"つくる・しらべる・はこぶ"',
		'body'     => '製造業全般に電力システムから製造機械、物流設備、労働環境の改善まで、工場を動かすために必要な機器やサービスを幅広く提供しています。',
		'keywords' => array( '＃産業用モータ', '＃産業機械', '＃計測・制御システム' ),
		'img'      => 'modal_img01-02@2x.jpg',
	),
	array(
		'id'       => 'trading-03',
		'num'      => '商社のしごと #03',
		'title'    => '交通・施設関連',
		'subTitle' => '都市と人びとをつなげる',
		'body'     => '電車の駆動システムや照明、空調、電源を供給するための受変電設備などを提供し、駅の自動改札機や端末システムも納入しています。鉄道会社との仕事を通じて安全な交通システムの構築に貢献しています。',
		'keywords' => array( '＃車両用駆動システム', '＃駅務システム', '＃鉄道電力システム' ),
		'img'      => 'modal_img01-03@2x.jpg',
	),
	array(
		'id'       => 'trading-04',
		'num'      => '商社のしごと #04',
		'title'    => '環境機械関連',
		'subTitle' => '"地球に優しい"を実現する',
		'body'     => 'カーボンニュートラルやSDGsを重視し、排水や排ガスの浄化装置、省エネシステムを提供。余剰エネルギーの有効活用など、環境配慮型の事業を展開しています。',
		'keywords' => array( '＃水処理システム', '＃大気処理システム', '＃省エネシステム' ),
		'img'      => 'modal_img01-04@2x.jpg',
	),
	array(
		'id'       => 'trading-05',
		'num'      => '商社のしごと #05',
		'title'    => '情報・通信関連',
		'subTitle' => '工場をネットワークでつなぐ',
		'body'     => 'DXを活用し、パソコンやセンサーなどの情報機器を組み合わせたシステムで、工場設備の安定稼働や予防保全、生産性向上を支援しています。',
		'keywords' => array( '＃生産管理システム', '＃監視カメラシステム', '＃IoTソリューション' ),
		'img'      => 'modal_img01-05@2x.jpg',
	),
	array(
		'id'       => 'trading-06',
		'num'      => '商社のしごと #06',
		'title'    => '国際事業',
		'subTitle' => 'お客さまと世界をむすぶ',
		'body'     => '中国や東南アジアを中心に産業機器の輸出や特色ある海外製品を輸入販売。自社製品の紫外線殺菌装置も海外に納入するなど、グローバルに事業を展開中です。',
		'keywords' => array( '＃製品の輸出入販売', '＃海外向け案件の営業サポート' ),
		'img'      => 'modal_img01-06@2x.jpg',
	),
	array(
		'id'       => 'mfg-01',
		'num'      => 'モノづくりのしごと #01',
		'title'    => '自動車部品事業',
		'subTitle' => 'トラックやバスの安全と環境をまもる',
		'body'     => 'トラックやバスなどの商用車向けにエアブレーキ配管の加工や排出ガスの無害化を図る浄化システム用の配管を販売。自社で製造拠点を構え、少量多品種生産によりきめ細かいニーズに対応、大手商用車メーカーと直接取引しています。',
		'keywords' => array( '＃エアブレーキ配管', '＃燃料配管', '＃排出ガス浄化システム用配管' ),
		'img'      => 'modal_img02-01@2x.jpg',
	),
	array(
		'id'       => 'mfg-02',
		'num'      => 'モノづくりのしごと #02',
		'title'    => 'UVシステム事業',
		'subTitle' => 'キレイな水で安心・安全をとどける',
		'body'     => '飲料水や洗浄水向けの紫外線殺菌装置を設計・販売しています。当社研究開発センターにて試験や研究を重ね、安心・安全な水を提供。約半世紀の実績とノウハウを持つ紫外線技術のリーディングカンパニーです。',
		'keywords' => array( '＃半導体工場向け', '＃食品・飲料工場向け', '＃上下水道施設向け' ),
		'img'      => 'modal_img02-02@2x.jpg',
	),
);
$modal_count = count( $modals );
?>
<section id="business" class="business headerShow">
	<div class="l-inner businessInner">
		<h2 class="ttl01 js-animate fade">
			<span class="ttl01En">OUR BUSINESS</span>
			<span class="ttl01Ja"><?php esc_html_e( '仕事を知る', 'tecnes-lp' ); ?></span>
		</h2>

		<p class="leadTxt"><?php esc_html_e( '商社のネットワークを活かし、自社製品も販売しています。私たちはお客さまから必要とされるパートナーであり続けるため、クリエイティブな発想で解決策を提案します。', 'tecnes-lp' ); ?></p>

		<div class="cards">
			<!-- TRADING カード -->
			<div class="card">
				<div class="cardImg">
					<img src="<?php echo tecnes_lp_img( 'trading_img@2x.jpg' ); ?>" alt="TRADING" loading="lazy" decoding="async" />
				</div>
				<div class="cardBody">
					<p class="cardEn">TRADING</p>
					<p class="cardJa"><?php esc_html_e( '商社のしごと', 'tecnes-lp' ); ?></p>
					<h3 class="cardTtl"><?php esc_html_e( '幅広い領域に精通した', 'tecnes-lp' ); ?><br /><?php esc_html_e( '電機機械の専門商社', 'tecnes-lp' ); ?></h3>
					<p class="cardLead"><?php esc_html_e( '電気機器や一般産業機械のシステム販売を手掛けています。', 'tecnes-lp' ); ?></p>
					<ul class="cardCategories">
						<?php foreach ( $trading_categories as $cat ) : ?>
							<li>
								<button type="button" class="cardCategory" data-modal-open="<?php echo esc_attr( $cat['id'] ); ?>"><?php echo esc_html( $cat['label'] ); ?></button>
							</li>
						<?php endforeach; ?>
					</ul>
					<div class="arrowWrap" data-modal-open="trading-01" style="cursor:pointer;">
						<span class="arrowTxt">MORE</span>
						<span class="arrowIco"></span>
					</div>
				</div>
			</div>

			<!-- MANUFACTURING カード -->
			<div class="card">
				<div class="cardImg">
					<img src="<?php echo tecnes_lp_img( 'manufacturing_img@2x.jpg' ); ?>" alt="MANUFACTURING" loading="lazy" decoding="async" />
				</div>
				<div class="cardBody">
					<p class="cardEn">MANUFACTURING</p>
					<p class="cardJa"><?php esc_html_e( 'モノづくりのしごと', 'tecnes-lp' ); ?></p>
					<h3 class="cardTtl"><?php esc_html_e( '長年培った信頼と技術力で', 'tecnes-lp' ); ?><br /><?php esc_html_e( '自社事業を展開', 'tecnes-lp' ); ?></h3>
					<p class="cardLead"><?php esc_html_e( '自社製品として自動車部品や紫外線応用機器を提供しています。', 'tecnes-lp' ); ?></p>
					<ul class="cardCategories">
						<?php foreach ( $manufacturing_categories as $cat ) : ?>
							<li>
								<button type="button" class="cardCategory" data-modal-open="<?php echo esc_attr( $cat['id'] ); ?>"><?php echo esc_html( $cat['label'] ); ?></button>
							</li>
						<?php endforeach; ?>
					</ul>
					<div class="arrowWrap" data-modal-open="mfg-01" style="cursor:pointer;">
						<span class="arrowTxt">MORE</span>
						<span class="arrowIco"></span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- ===== Business Modals ===== -->
	<?php foreach ( $modals as $i => $m ) :
		$prev_id = $i > 0 ? $modals[ $i - 1 ]['id'] : '';
		$next_id = $i < $modal_count - 1 ? $modals[ $i + 1 ]['id'] : '';
	?>
		<div class="modalOverlay" data-modal="<?php echo esc_attr( $m['id'] ); ?>" aria-hidden="true">
			<div class="modalBox">
				<button type="button" class="modalClose" data-modal-close aria-label="<?php esc_attr_e( '閉じる', 'tecnes-lp' ); ?>"></button>
				<div class="modalImg">
					<img src="<?php echo tecnes_lp_img( $m['img'] ); ?>" alt="<?php echo esc_attr( $m['title'] ); ?>" loading="lazy" decoding="async" />
				</div>
				<div class="modalBody">
					<p class="modalNum"><?php echo esc_html( $m['num'] ); ?></p>
					<h3 class="modalTtl"><?php echo esc_html( $m['title'] ); ?></h3>
					<p class="modalSubTtl"><?php echo esc_html( $m['subTitle'] ); ?></p>
					<p class="modalTxt"><?php echo esc_html( $m['body'] ); ?></p>
					<ul class="modalKeywords">
						<?php foreach ( $m['keywords'] as $kw ) : ?>
							<li class="modalKeyword"><?php echo esc_html( $kw ); ?></li>
						<?php endforeach; ?>
					</ul>
					<div class="modalNav">
						<button type="button" class="modalNavBtn" data-modal-prev="<?php echo esc_attr( $prev_id ); ?>"<?php echo $prev_id ? '' : ' disabled style="opacity:0.3;"'; ?>>← <?php esc_html_e( '前の事業', 'tecnes-lp' ); ?></button>
						<button type="button" class="modalNavClose" data-modal-close><?php esc_html_e( '閉じる', 'tecnes-lp' ); ?></button>
						<button type="button" class="modalNavBtn" data-modal-next="<?php echo esc_attr( $next_id ); ?>"<?php echo $next_id ? '' : ' disabled style="opacity:0.3;"'; ?>><?php esc_html_e( '次の事業', 'tecnes-lp' ); ?> →</button>
					</div>
				</div>
			</div>
		</div>
	<?php endforeach; ?>
</section>
