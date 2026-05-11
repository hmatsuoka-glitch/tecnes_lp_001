<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<div class="footNav">
	<div class="l-inner footNavInner">
		<div class="navSection">
			<p class="navTtl"><?php esc_html_e( '採用情報', 'tecnes-lp' ); ?></p>
			<ul class="navList">
				<li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>"><?php esc_html_e( '募集要項', 'tecnes-lp' ); ?></a></li>
				<li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>"><?php esc_html_e( '応募方法・選考フロー', 'tecnes-lp' ); ?></a></li>
				<li><a href="<?php echo esc_url( home_url( '/recruitment/#message' ) ); ?>"><?php esc_html_e( '採用担当者メッセージ', 'tecnes-lp' ); ?></a></li>
				<li><a href="<?php echo esc_url( home_url( '/recruitment/#personality' ) ); ?>"><?php esc_html_e( '求める人物像', 'tecnes-lp' ); ?></a></li>
				<li><a href="<?php echo esc_url( home_url( '/recruitment/#faq' ) ); ?>"><?php esc_html_e( 'よくあるご質問', 'tecnes-lp' ); ?></a></li>
			</ul>
		</div>

		<div class="cta">
			<p class="ctaLead">
				<?php esc_html_e( 'ともに新しい未来を築くチームメイトを探しています。', 'tecnes-lp' ); ?><br class="u-sm-min" />
				<?php esc_html_e( 'あなたのご応募をお待ちしています。', 'tecnes-lp' ); ?>
			</p>
			<div class="ctaBtns">
				<a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="btnEntry"><?php esc_html_e( 'エントリーする', 'tecnes-lp' ); ?></a>
				<div class="externalBtns">
					<a href="<?php echo esc_url( 'https://job.mynavi.jp/27/pc/search/corp7' ); ?>" target="_blank" rel="noopener noreferrer" class="btnExternal">
						<?php esc_html_e( 'マイナビからエントリー', 'tecnes-lp' ); ?>
					</a>
					<a href="<?php echo esc_url( 'https://job.career-tasu.jp/corp/00200776' ); ?>" target="_blank" rel="noopener noreferrer" class="btnExternal">
						<?php esc_html_e( 'キャリタスからエントリー', 'tecnes-lp' ); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
