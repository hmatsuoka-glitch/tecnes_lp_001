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
              <Image src="/images/tecnes_icon.png" alt="株式会社TECNES" width={200} height={50} unoptimized />
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
            <a href="#people">
              <span className={styles.menuJpn}>働く社員を知る</span>
            </a>
          </li>
          <li>
            <a href="#environment">
              <span className={styles.menuJpn}>働く環境を知る</span>
            </a>
          </li>
          <li>
            <a href="#entry">
              <span className={styles.menuJpn}>採用情報</span>
            </a>
          </li>
        </ul>

        {/* PC ボタン群 */}
        <ul className={styles.btn}>
          <li className={styles.btnRecruit}>
            <a href="#entry">募集要項</a>
          </li>
          <li className={styles.btnLine}>
            <a href="https://lin.ee/Uvv8qpj" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span>LINEで応募</span>
            </a>
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
