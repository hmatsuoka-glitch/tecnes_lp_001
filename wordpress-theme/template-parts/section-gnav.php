<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<div class="lGnav" data-gnav>
	<div class="overlay" data-gnav-close></div>
	<div class="lGnavInner">
		<div class="box">
			<div class="rightBox">
				<h2 class="ttl01 u-md-min">
					<span>CONTENTS</span>
				</h2>
				<ul class="list01">
					<li class="btnTop">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="menuTtl">TOP</a>
					</li>
					<li class="w01">
						<a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" class="menuTtl" data-gnav-close><?php esc_html_e( '仕事を知る', 'tecnes-lp' ); ?></a>
						<ul class="subMenu">
							<li><a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" data-gnav-close><?php esc_html_e( 'OUR BUSINESS 仕事を知る', 'tecnes-lp' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/#flow' ) ); ?>" data-gnav-close><?php esc_html_e( '仕事の流れ', 'tecnes-lp' ); ?></a></li>
						</ul>
					</li>
					<li class="w02">
						<a href="<?php echo esc_url( home_url( '/people/' ) ); ?>" class="menuTtl"><?php esc_html_e( '働く社員を知る', 'tecnes-lp' ); ?></a>
					</li>
					<li class="w01">
						<a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>" class="menuTtl"><?php esc_html_e( '働く環境を知る', 'tecnes-lp' ); ?></a>
						<ul class="subMenu">
							<li><a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>"><?php esc_html_e( 'ENVIRONMENT 働く環境を知る', 'tecnes-lp' ); ?></a></li>
						</ul>
					</li>
					<li class="w02">
						<a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="menuTtl"><?php esc_html_e( '採用情報', 'tecnes-lp' ); ?></a>
						<ul class="subMenu">
							<li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>"><?php esc_html_e( '募集要項', 'tecnes-lp' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>"><?php esc_html_e( '応募方法・選考フロー', 'tecnes-lp' ); ?></a></li>
						</ul>
					</li>
				</ul>
				<p class="btn01">
					<a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>" data-gnav-close>
						<span class="txt"><?php esc_html_e( '募集要項', 'tecnes-lp' ); ?></span>
						<span class="ico c-ico c-ico-arrow01"></span>
					</a>
				</p>
			</div>
			<div class="leftBox">
				<h2 class="ttl01">
					<span>ENTRY</span>
				</h2>
				<ul class="list02">
					<li>
						<a href="<?php echo esc_url( 'https://job.mynavi.jp/27/pc/search/corp7' ); ?>" target="_blank" rel="noopener noreferrer">
							<?php esc_html_e( 'マイナビからエントリー', 'tecnes-lp' ); ?>
						</a>
					</li>
					<li>
						<a href="<?php echo esc_url( 'https://job.career-tasu.jp/corp/00200776' ); ?>" target="_blank" rel="noopener noreferrer">
							<?php esc_html_e( 'キャリタスからエントリー', 'tecnes-lp' ); ?>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
