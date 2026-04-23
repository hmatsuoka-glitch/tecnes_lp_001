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
              <a href="#people" className={styles.menuTtl}>働く社員を知る</a>
            </li>
            <li>
              <a href="#environment" className={styles.menuTtl}>働く環境を知る</a>
              <ul className={styles.subMenu}>
                <li><a href="#environment">ENVIRONMENT 働く環境を知る</a></li>
              </ul>
            </li>
            <li>
              <a href="#entry" className={styles.menuTtl}>採用情報</a>
              <ul className={styles.subMenu}>
                <li><a href="#entry">募集要項</a></li>
                <li><a href="#entry">応募方法・選考フロー</a></li>
                <li><a href="#entry">採用担当者メッセージ</a></li>
                <li><a href="#entry">求める人物像</a></li>
                <li><a href="#entry">よくあるご質問</a></li>
              </ul>
            </li>
          </ul>
          <ul className={styles.menu02}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>プライバシーポリシー</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>コーポレートサイト</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 左ボックス：企業情報 */}
        <div className={styles.leftBox}>
          <p className={styles.footerLogo}>
            <a href="/">
              <img src="/images/logo.png" alt="株式会社TECNES" />
            </a>
          </p>
          <ul className={styles.list01}>
            <li>
              <span className={styles.itemTtl}>設立</span>
              <span>1995年（平成7年）</span>
            </li>
            <li>
              <span className={styles.itemTtl}>資本金</span>
              <span>1,000万円</span>
            </li>
          </ul>
          <p className={styles.address}>
            〒577-0063 大阪府東大阪市川俣1-6-10
            <br className="u-sm-max" />
          </p>
          <a
            href="https://maps.app.goo.gl/tecnes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <span>Googleマップ</span>
          </a>
          <p className={styles.tel}>06-6618-7307</p>
          <ul className={styles.list02}>
            <li>
              <span className={styles.stationIco}>JR</span>
              <span>おおさか東線「高井田中央駅」より</span>
              <span className={styles.time}>徒歩圏内</span>
            </li>
            <li>
              <span className={styles.stationIco}>地</span>
              <span>大阪メトロ中央線「高井田駅」より</span>
              <span className={styles.time}>徒歩圏内</span>
            </li>
            <li>
              <span className={styles.stationIco}>近</span>
              <span>近鉄奈良線「河内永和駅」より</span>
              <span className={styles.time}>徒歩圏内</span>
            </li>
          </ul>
          <p className={styles.copyright}>
            © TECNES Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* 巨大装飾コピー */}
      <p className={styles.footerCopy}>技術と絆で、未来を支える。</p>
    </footer>
  );
}
