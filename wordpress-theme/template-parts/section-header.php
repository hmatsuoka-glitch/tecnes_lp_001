<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<header class="lHeader" data-header>
	<div class="lHeaderInner">
		<p class="logo">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logoLink">
				<span class="logoImage">
					<img src="<?php echo tecnes_lp_img( 'logo.png' ); ?>" alt="<?php esc_attr_e( '千代田工販株式会社', 'tecnes-lp' ); ?>" width="200" height="50" loading="eager" decoding="async" />
				</span>
				<span class="logoTxt">RECRUIT SITE</span>
			</a>
		</p>

		<?php /* PC ナビ */ ?>
		<ul class="menu">
			<li>
				<a href="<?php echo esc_url( home_url( '/#business' ) ); ?>">
					<span class="menuJpn"><?php esc_html_e( '仕事を知る', 'tecnes-lp' ); ?></span>
				</a>
			</li>
			<li>
				<a href="<?php echo esc_url( home_url( '/people/' ) ); ?>">
					<span class="menuJpn"><?php esc_html_e( '働く社員を知る', 'tecnes-lp' ); ?></span>
				</a>
			</li>
			<li>
				<a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>">
					<span class="menuJpn"><?php esc_html_e( '働く環境を知る', 'tecnes-lp' ); ?></span>
				</a>
			</li>
			<li>
				<a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>">
					<span class="menuJpn"><?php esc_html_e( '採用情報', 'tecnes-lp' ); ?></span>
				</a>
			</li>
		</ul>

		<?php /* PC ボタン群 */ ?>
		<ul class="btn">
			<li class="btnRecruit">
				<a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>"><?php esc_html_e( '募集要項', 'tecnes-lp' ); ?></a>
			</li>
			<li class="btnEntry">
				<span>ENTRY</span>
				<div class="entryBox">
					<ul class="entryBoxList">
						<li>
							<a href="<?php echo esc_url( 'https://job.mynavi.jp/27/pc/search/corp7' ); ?>" target="_blank" rel="noopener noreferrer">
								<img src="<?php echo tecnes_lp_img( 'header_btn_mynavi.png' ); ?>" alt="<?php esc_attr_e( 'マイナビ', 'tecnes-lp' ); ?>" width="200" height="60" loading="lazy" decoding="async" />
							</a>
						</li>
						<li>
							<a href="<?php echo esc_url( 'https://job.career-tasu.jp/corp/00200776' ); ?>" target="_blank" rel="noopener noreferrer">
								<img src="<?php echo tecnes_lp_img( 'header_btn_career-tasu.png' ); ?>" alt="<?php esc_attr_e( 'キャリタス', 'tecnes-lp' ); ?>" width="200" height="60" loading="lazy" decoding="async" />
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>

		<?php /* ハンバーガーボタン（SP） */ ?>
		<p class="btnMenu">
			<a href="#" class="btnMenuLink" data-menu-toggle>
				<span class="btnMenuLine"></span>
				<span class="btnMenuLine"></span>
				<span class="btnMenuLine"></span>
				<span class="btnMenuText">MENU</span>
			</a>
		</p>
	</div>

	<?php get_template_part( 'template-parts/section', 'gnav' ); ?>
</header>
