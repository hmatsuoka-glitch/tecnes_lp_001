'use client';
import styles from './Gnav.module.css';

interface GnavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gnav({ isOpen, onClose }: GnavProps) {
  return (
    <div className={`${styles.lGnav}${isOpen ? ' ' + styles.isOpen : ''}`}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.lGnavInner}>
        <div className={styles.box}>
          <div className={styles.rightBox}>
            <h2 className={`${styles.ttl01} u-md-min`}>
              <span>CONTENTS</span>
            </h2>
            <ul className={styles.list01}>
              <li className={styles.btnTop}>
                <a href="/" className={styles.menuTtl}>TOP</a>
              </li>
              <li className={styles.w01}>
                <a href="/#business" className={styles.menuTtl} onClick={onClose}>仕事を知る</a>
                <ul className={styles.subMenu}>
                  <li><a href="/#business" onClick={onClose}>OUR BUSINESS 仕事を知る</a></li>
                  <li><a href="/#flow" onClick={onClose}>仕事の流れ</a></li>
                </ul>
              </li>
              <li className={styles.w02}>
                <a href="/people/" className={styles.menuTtl}>働く社員を知る</a>
              </li>
              <li className={styles.w01}>
                <a href="/culture/" className={styles.menuTtl}>働く環境を知る</a>
                <ul className={styles.subMenu}>
                  <li><a href="/culture/">ENVIRONMENT 働く環境を知る</a></li>
                </ul>
              </li>
              <li className={styles.w02}>
                <a href="/recruitment/" className={styles.menuTtl}>採用情報</a>
                <ul className={styles.subMenu}>
                  <li><a href="/recruitment/#requirements">募集要項</a></li>
                  <li><a href="/recruitment/#flow">応募方法・選考フロー</a></li>
                </ul>
              </li>
            </ul>
            <p className={styles.btn01}>
              <a href="/recruitment/#requirements" onClick={onClose}>
                <span className="txt">募集要項</span>
                <span className="ico c-ico c-ico-arrow01"></span>
              </a>
            </p>
          </div>
          <div className={styles.leftBox}>
            <h2 className={styles.ttl01}>
              <span>ENTRY</span>
            </h2>
            <ul className={styles.list02}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  マイナビからエントリー
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  キャリタスからエントリー
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
