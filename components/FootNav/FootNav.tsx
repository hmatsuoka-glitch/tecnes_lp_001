import styles from './FootNav.module.css';

export default function FootNav() {
  return (
    <div id="entry" className={styles.footNav}>
      <div className={`l-inner ${styles.footNavInner}`}>
        <div className={styles.navSection}>
          <p className={styles.navTtl}>採用情報</p>
          <ul className={styles.navList}>
            <li><a href="#entry">募集要項</a></li>
            <li><a href="#entry">応募方法・選考フロー</a></li>
            <li><a href="#entry">採用担当者メッセージ</a></li>
            <li><a href="#entry">求める人物像</a></li>
            <li><a href="#entry">よくあるご質問</a></li>
          </ul>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaLead}>
            「技・絆・支」を一緒に体現する仲間を探しています。<br className="u-sm-min" />
            あなたのご応募をお待ちしています。
          </p>
          <div className={styles.ctaBtns}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.btnEntry}>応募フォームへ</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.btnLine}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              公式LINEで問い合わせ
            </a>
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
