<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<footer class="lFooter">
	<div class="lFooterInner">
		<div class="rightBox">
			<ul class="menu01">
				<li class="btnTop">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="menuTtl">TOP</a>
				</li>
				<li>
					<a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" class="menuTtl"><?php esc_html_e( '仕事を知る', 'tecnes-lp' ); ?></a>
					<ul class="subMenu">
						<li><a href="<?php echo esc_url( home_url( '/#business' ) ); ?>"><?php esc_html_e( 'OUR BUSINESS 仕事を知る', 'tecnes-lp' ); ?></a></li>
						<li><a href="<?php echo esc_url( home_url( '/#flow' ) ); ?>"><?php esc_html_e( '仕事の流れ', 'tecnes-lp' ); ?></a></li>
					</ul>
				</li>
				<li>
					<a href="<?php echo esc_url( home_url( '/people/' ) ); ?>" class="menuTtl"><?php esc_html_e( '働く社員を知る', 'tecnes-lp' ); ?></a>
				</li>
				<li>
					<a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>" class="menuTtl"><?php esc_html_e( '働く環境を知る', 'tecnes-lp' ); ?></a>
					<ul class="subMenu">
						<li><a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>"><?php esc_html_e( 'ENVIRONMENT 働く環境を知る', 'tecnes-lp' ); ?></a></li>
					</ul>
				</li>
				<li>
					<a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="menuTtl"><?php esc_html_e( '採用情報', 'tecnes-lp' ); ?></a>
					<ul class="subMenu">
						<li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>"><?php esc_html_e( '募集要項', 'tecnes-lp' ); ?></a></li>
						<li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>"><?php esc_html_e( '応募方法・選考フロー', 'tecnes-lp' ); ?></a></li>
						<li><a href="<?php echo esc_url( home_url( '/recruitment/#message' ) ); ?>"><?php esc_html_e( '採用担当者メッセージ', 'tecnes-lp' ); ?></a></li>
						<li><a href="<?php echo esc_url( home_url( '/recruitment/#personality' ) ); ?>"><?php esc_html_e( '求める人物像', 'tecnes-lp' ); ?></a></li>
						<li><a href="<?php echo esc_url( home_url( '/recruitment/#faq' ) ); ?>"><?php esc_html_e( 'よくあるご質問', 'tecnes-lp' ); ?></a></li>
					</ul>
				</li>
			</ul>
			<ul class="menu02">
				<li>
					<a href="<?php echo esc_url( 'https://www.chiyodakohan.co.jp/privacy.html' ); ?>" target="_blank" rel="noopener noreferrer">
						<span><?php esc_html_e( 'プライバシーポリシー', 'tecnes-lp' ); ?></span>
					</a>
				</li>
				<li>
					<a href="<?php echo esc_url( 'https://www.chiyodakohan.co.jp/' ); ?>" target="_blank" rel="noopener noreferrer">
						<span><?php esc_html_e( 'コーポレートサイト', 'tecnes-lp' ); ?></span>
					</a>
				</li>
			</ul>
		</div>

		<div class="leftBox">
			<p class="footerLogo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img src="<?php echo esc_url( tecnes_lp_img( 'logo.png' ) ); ?>" alt="<?php esc_attr_e( '千代田工販株式会社', 'tecnes-lp' ); ?>" loading="lazy" decoding="async" />
				</a>
			</p>
			<ul class="list01">
				<li>
					<span class="itemTtl"><?php esc_html_e( '創立', 'tecnes-lp' ); ?></span>
					<span><?php esc_html_e( '1947年（昭和22年）2月', 'tecnes-lp' ); ?></span>
				</li>
				<li>
					<span class="itemTtl"><?php esc_html_e( '資本金', 'tecnes-lp' ); ?></span>
					<span><?php esc_html_e( '200,000,000円', 'tecnes-lp' ); ?></span>
				</li>
			</ul>
			<p class="address">
				<?php esc_html_e( '〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル', 'tecnes-lp' ); ?>
				<br class="u-sm-max" />
			</p>
			<a href="<?php echo esc_url( 'https://maps.app.goo.gl/kyobashi' ); ?>" target="_blank" rel="noopener noreferrer" class="mapLink">
				<span><?php esc_html_e( 'Googleマップ', 'tecnes-lp' ); ?></span>
			</a>
			<p class="tel">03-3564-5511</p>
			<ul class="list02">
				<li>
					<span class="stationIco"><?php esc_html_e( '地', 'tecnes-lp' ); ?></span>
					<span><?php esc_html_e( '浅草線「宝町駅」より', 'tecnes-lp' ); ?></span>
					<span class="time"><?php esc_html_e( '徒歩4分', 'tecnes-lp' ); ?></span>
				</li>
				<li>
					<span class="stationIco"><?php esc_html_e( '地', 'tecnes-lp' ); ?></span>
					<span><?php esc_html_e( '銀座線「京橋駅」より', 'tecnes-lp' ); ?></span>
					<span class="time"><?php esc_html_e( '徒歩4分', 'tecnes-lp' ); ?></span>
				</li>
				<li>
					<span class="stationIco"><?php esc_html_e( '地', 'tecnes-lp' ); ?></span>
					<span><?php esc_html_e( '東西線「日本橋駅」より', 'tecnes-lp' ); ?></span>
					<span class="time"><?php esc_html_e( '徒歩5分', 'tecnes-lp' ); ?></span>
				</li>
			</ul>
			<p class="copyright">&copy; Chiyoda Kohan Co., LTD. All rights reserved.</p>
		</div>
	</div>

	<p class="footerCopy">
		<img src="<?php echo esc_url( tecnes_lp_img( 'footer_copy.png' ) ); ?>" alt="<?php esc_attr_e( 'キミの想いが未来をともす', 'tecnes-lp' ); ?>" width="1280" height="300" loading="lazy" decoding="async" />
	</p>
</footer>
