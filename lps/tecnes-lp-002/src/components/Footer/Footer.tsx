import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.lFooter}>
      <div className={styles.lFooterInner}>
        {/* 右ボックス：サイトマップ */}
        <div className={styles.rightBox}>
          <ul className={styles.menu01}>
            <li className="btnTop">
              <a href="/" className={styles.menuTtl}>TOP</a>
            </li>
            <li>
              <a href="/#business" className={styles.menuTtl}>仕事を知る</a>
              <ul className={styles.subMenu}>
                <li><a href="/#business">OUR BUSINESS 仕事を知る</a></li>
                <li><a href="/#flow">仕事の流れ</a></li>
              </ul>
            </li>
            <li>
              <a href="/people/" className={styles.menuTtl}>働く社員を知る</a>
            </li>
            <li>
              <a href="/culture/" className={styles.menuTtl}>働く環境を知る</a>
              <ul className={styles.subMenu}>
                <li><a href="/culture/">ENVIRONMENT 働く環境を知る</a></li>
              </ul>
            </li>
            <li>
              <a href="/recruitment/" className={styles.menuTtl}>採用情報</a>
              <ul className={styles.subMenu}>
                <li><a href="/recruitment/#requirements">募集要項</a></li>
                <li><a href="/recruitment/#flow">応募方法・選考フロー</a></li>
                <li><a href="/recruitment/#message">採用担当者メッセージ</a></li>
                <li><a href="/recruitment/#personality">求める人物像</a></li>
                <li><a href="/recruitment/#faq">よくあるご質問</a></li>
              </ul>
            </li>
          </ul>
          <ul className={styles.menu02}>
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

        {/* 左ボックス：企業情報 */}
        <div className={styles.leftBox}>
          <p className={styles.footerLogo}>
            <a href="/">
              <img src="/images/logo.png" alt="千代田工販株式会社" />
            </a>
          </p>
          <ul className={styles.list01}>
            <li>
              <span className={styles.itemTtl}>創立</span>
              <span>1947年（昭和22年）2月</span>
            </li>
            <li>
              <span className={styles.itemTtl}>資本金</span>
              <span>200,000,000円</span>
            </li>
          </ul>
          <p className={styles.address}>
            〒104-0031 東京都中央区京橋2-8-7 読売京橋ビル
            <br className="u-sm-max" />
          </p>
          <a
            href="https://maps.app.goo.gl/kyobashi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <span>Googleマップ</span>
          </a>
          <p className={styles.tel}>03-3564-5511</p>
          <ul className={styles.list02}>
            <li>
              <span className={styles.stationIco}>地</span>
              <span>浅草線「宝町駅」より</span>
              <span className={styles.time}>徒歩4分</span>
            </li>
            <li>
              <span className={styles.stationIco}>地</span>
              <span>銀座線「京橋駅」より</span>
              <span className={styles.time}>徒歩4分</span>
            </li>
            <li>
              <span className={styles.stationIco}>地</span>
              <span>東西線「日本橋駅」より</span>
              <span className={styles.time}>徒歩5分</span>
            </li>
          </ul>
          <p className={styles.copyright}>
            © Chiyoda Kohan Co., LTD. All rights reserved.
          </p>
        </div>
      </div>

      {/* 巨大装飾コピー */}
      <p className={styles.footerCopy}>
        <Image src="/images/footer_copy.png" alt="キミの想いが未来をともす" width={1280} height={300} unoptimized style={{ width: '100%', height: 'auto' }} />
      </p>
    </footer>
  );
}
