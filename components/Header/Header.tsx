'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Gnav from '../Gnav/Gnav';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('is-menu-open');
    } else {
      document.body.classList.remove('is-menu-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.lHeader}${isFixed ? ' ' + styles.fixed : ''}`}>
      <div className={styles.lHeaderInner}>
        <p className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <span className={styles.logoImage}>
              <Image src="/images/logo.png" alt="株式会社TECNES" width={200} height={50} unoptimized />
            </span>
            <span className={styles.logoTxt}>RECRUIT SITE</span>
          </a>
        </p>

        {/* PC ナビ */}
        <ul className={styles.menu}>
          <li>
            <a href="/#business">
              <span className={styles.menuJpn}>仕事を知る</span>
            </a>
          </li>
          <li>
            <a href="/people/">
              <span className={styles.menuJpn}>働く社員を知る</span>
            </a>
          </li>
          <li>
            <a href="/culture/">
              <span className={styles.menuJpn}>働く環境を知る</span>
            </a>
          </li>
          <li>
            <a href="/recruitment/">
              <span className={styles.menuJpn}>採用情報</span>
            </a>
          </li>
        </ul>

        {/* PC ボタン群 */}
        <ul className={styles.btn}>
          <li className={styles.btnRecruit}>
            <a href="/recruitment/#requirements">募集要項</a>
          </li>
          <li className={styles.btnEntry}>
            <span>ENTRY</span>
            <div className={styles.entryBox}>
              <ul className={styles.entryBoxList}>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/header_btn_mynavi.png" alt="マイナビ" width={200} height={60} unoptimized />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/header_btn_career-tasu.png" alt="キャリタス" width={200} height={60} unoptimized />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* ハンバーガーボタン（SP） */}
        <p className={styles.btnMenu}>
          <a href="#" className={styles.btnMenuLink} onClick={toggleMenu}>
            <span className={styles.btnMenuLine}></span>
            <span className={styles.btnMenuLine}></span>
            <span className={styles.btnMenuLine}></span>
            <span className={styles.btnMenuText}>MENU</span>
          </a>
        </p>
      </div>

      <Gnav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
