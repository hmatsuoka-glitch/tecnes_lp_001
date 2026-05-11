<?php
/**
 * Global navigation drawer (SP)
 */
?>
<div class="lGnav" id="js-gnav">
    <div class="overlay" data-gnav-close></div>
    <div class="lGnavInner">
        <div class="box">
            <div class="rightBox">
                <h2 class="ttl01 u-md-min"><span>CONTENTS</span></h2>
                <ul class="list01">
                    <li class="btnTop">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="menuTtl">TOP</a>
                    </li>
                    <li class="w01">
                        <a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" class="menuTtl" data-gnav-close>仕事を知る</a>
                        <ul class="subMenu">
                            <li><a href="<?php echo esc_url( home_url( '/#business' ) ); ?>" data-gnav-close>OUR BUSINESS 仕事を知る</a></li>
                            <li><a href="<?php echo esc_url( home_url( '/#flow' ) ); ?>" data-gnav-close>仕事の流れ</a></li>
                        </ul>
                    </li>
                    <li class="w02">
                        <a href="<?php echo esc_url( home_url( '/people/' ) ); ?>" class="menuTtl">働く社員を知る</a>
                    </li>
                    <li class="w01">
                        <a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>" class="menuTtl">働く環境を知る</a>
                        <ul class="subMenu">
                            <li><a href="<?php echo esc_url( home_url( '/culture/' ) ); ?>">ENVIRONMENT 働く環境を知る</a></li>
                        </ul>
                    </li>
                    <li class="w02">
                        <a href="<?php echo esc_url( home_url( '/recruitment/' ) ); ?>" class="menuTtl">採用情報</a>
                        <ul class="subMenu">
                            <li><a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>">募集要項</a></li>
                            <li><a href="<?php echo esc_url( home_url( '/recruitment/#flow' ) ); ?>">応募方法・選考フロー</a></li>
                        </ul>
                    </li>
                </ul>
                <p class="btn01">
                    <a href="<?php echo esc_url( home_url( '/recruitment/#requirements' ) ); ?>" data-gnav-close>
                        <span class="txt">募集要項</span>
                        <span class="ico c-ico c-ico-arrow01"></span>
                    </a>
                </p>
            </div>
            <div class="leftBox">
                <h2 class="ttl01"><span>ENTRY</span></h2>
                <ul class="list02">
                    <li>
                        <a href="https://job.mynavi.jp/27/pc/search/corp7" target="_blank" rel="noopener noreferrer">マイナビからエントリー</a>
                    </li>
                    <li>
                        <a href="https://job.career-tasu.jp/corp/00200776" target="_blank" rel="noopener noreferrer">キャリタスからエントリー</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
