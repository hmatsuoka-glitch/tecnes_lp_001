<?php
/**
 * Site footer
 */
?>
<footer class="lFooter">
    <div class="lFooterInner">
        <div class="rightBox">
            <ul class="menu01">
                <li class="btnTop">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="menuTtl">TOP</a>
                </li>
                <li>
                    <a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" class="menuTtl">仕事を知る</a>
                    <ul class="subMenu">
                        <li><a href="<?php echo esc_url( home_url( '/#business' ) ); ?>">OUR BUSINESS 仕事を知る</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/#flow' ) ); ?>">仕事の流れ</a></li>
                    </ul>
                </li>
                <li>
                    <a href="<?php echo esc_url( home_url( '/people/' ) ); ?>" class="menuTtl">働く社員を知る</a>
                </li>
                <li>
                    <a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>" class="menuTtl">働く環境を知る</a>
                    <ul class="subMenu">
                        <li><a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>">ENVIRONMENT 働く環境を知る</a></li>
                    </ul>
                </li>
                <li>
                    <a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="menuTtl">採用情報</a>
                    <ul class="subMenu">
                        <li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>">募集要項</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>">応募方法・選考フロー</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/recruitment/#message' ) ); ?>">採用担当者メッセージ</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/recruitment/#personality' ) ); ?>">求める人物像</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/recruitment/#faq' ) ); ?>">よくあるご質問</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="menu02">
                <li>
                    <a href="https://www.chiyodakohan.co.jp/privacy.html" target="_blank" rel="noopener noreferrer">
                        <span>プライバシーポリシー</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.chiyodakohan.co.jp/" target="_blank" rel="noopener noreferrer">
                        <span>コーポレートサイト</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="leftBox">
            <p class="footerLogo">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php echo tecnes_img( 'logo.png' ); ?>" alt="千代田工販株式会社">
                </a>
            </p>
            <ul class="list01">
                <li>
                    <span class="itemTtl">創立</span>
                    <span>1947年（昭和22年）2月</span>
                </li>
                <li>
                    <span class="itemTtl">資本金</span>
                    <span>200,000,000円</span>
                </li>
            </ul>
            <p class="address">
                〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル
                <br class="u-sm-max">
            </p>
            <a href="https://maps.app.goo.gl/kyobashi" target="_blank" rel="noopener noreferrer" class="mapLink">
                <span>Googleマップ</span>
            </a>
            <p class="tel">03-3564-5511</p>
            <ul class="list02">
                <li>
                    <span class="stationIco">地</span>
                    <span>浅草線「宝町駅」より</span>
                    <span class="time">徒歩4分</span>
                </li>
                <li>
                    <span class="stationIco">地</span>
                    <span>銀座線「京橋駅」より</span>
                    <span class="time">徒歩4分</span>
                </li>
                <li>
                    <span class="stationIco">地</span>
                    <span>東西線「日本橋駅」より</span>
                    <span class="time">徒歩5分</span>
                </li>
            </ul>
            <p class="copyright">
                &copy; Chiyoda Kohan Co., LTD. All rights reserved.
            </p>
        </div>
    </div>

    <p class="footerCopy">
        <img src="<?php echo tecnes_img( 'footer_copy.png' ); ?>" alt="キミの想いが未来をともす" width="1280" height="300" style="width:100%;height:auto;">
    </p>
</footer>

<?php wp_footer(); ?>
</body>
</html>
