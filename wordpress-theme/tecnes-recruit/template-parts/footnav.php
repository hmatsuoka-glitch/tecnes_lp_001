<?php
/**
 * FootNav (CTA) section above the global footer
 */
?>
<div class="footNav">
    <div class="l-inner footNavInner">
        <div class="navSection">
            <p class="navTtl">採用情報</p>
            <ul class="navList">
                <li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>">募集要項</a></li>
                <li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>">応募方法・選考フロー</a></li>
                <li><a href="<?php echo esc_url( home_url( '/recruitment/#message' ) ); ?>">採用担当者メッセージ</a></li>
                <li><a href="<?php echo esc_url( home_url( '/recruitment/#personality' ) ); ?>">求める人物像</a></li>
                <li><a href="<?php echo esc_url( home_url( '/recruitment/#faq' ) ); ?>">よくあるご質問</a></li>
            </ul>
        </div>

        <div class="cta">
            <p class="ctaLead">
                ともに新しい未来を築くチームメイトを探しています。<br class="u-sm-min">
                あなたのご応募をお待ちしています。
            </p>
            <div class="ctaBtns">
                <a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="btnEntry">エントリーする</a>
                <div class="externalBtns">
                    <a href="https://job.mynavi.jp/27/pc/search/corp7" target="_blank" rel="noopener noreferrer" class="btnExternal">マイナビからエントリー</a>
                    <a href="https://job.career-tasu.jp/corp/00200776" target="_blank" rel="noopener noreferrer" class="btnExternal">キャリタスからエントリー</a>
                </div>
            </div>
        </div>
    </div>
</div>
