import styles from './FootNav.module.css';

export default function FootNav() {
  return (
    <div className={styles.footNav}>
      <div className={`l-inner ${styles.footNavInner}`}>
        <div className={styles.navSection}>
          <p className={styles.navTtl}>採用情報</p>
          <ul className={styles.navList}>
            <li><a href="/recruitment/#requirements">募集要項</a></li>
            <li><a href="/recruitment/#flow">応募方法・選考フロー</a></li>
            <li><a href="/recruitment/#message">採用担当者メッセージ</a></li>
            <li><a href="/recruitment/#personality">求める人物像</a></li>
            <li><a href="/recruitment/#faq">よくあるご質問</a></li>
          </ul>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaLead}>
            「技・絆・支」を一緒に体現する仲間を探しています。<br className="u-sm-min" />
            あなたのご応募をお待ちしています。
          </p>
          <div className={styles.ctaBtns}>
            <a href="/recruitment/" className={styles.btnEntry}>エントリーする</a>
            <div className={styles.externalBtns}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnExternal}
              >
                マイナビからエントリー
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnExternal}
              >
                キャリタスからエントリー
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
