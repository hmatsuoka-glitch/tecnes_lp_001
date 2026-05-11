<?php
/**
 * front-page.php — index.php と同じ内容を表示するフロントページ用エイリアス
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

locate_template( array( 'index.php' ), true );
