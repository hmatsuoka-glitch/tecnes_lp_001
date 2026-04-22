'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './MainVisual.module.css';

const slides = [
  { id: 1, img1: '/images/TECNES_001.jpg', img2: '/images/TECNES_001.jpg' },
  { id: 2, img1: '/images/TECNES_002.jpg', img2: '/images/TECNES_002.jpg' },
  { id: 3, img1: '/images/TECNES_003.jpg', img2: '/images/TECNES_003.jpg' },
  { id: 4, img1: '/images/TECNES_004.jpg', img2: '/images/TECNES_004.jpg' },
];

export default function MainVisual() {
  const splideRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let splideInstance: import('@splidejs/splide').default | null = null;

    const init = async () => {
      const { default: Splide } = await import('@splidejs/splide');
      // CSS loaded via public/vendor/splide.css in layout

      if (!splideRef.current) return;

      splideInstance = new Splide(splideRef.current, {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
      });

      // プログレスバー更新
      splideInstance.on('autoplay:playing', (rate: number) => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${rate * 100}%`;
        }
      });

      splideInstance.on('autoplay:play', () => {
        if (toggleRef.current) {
          toggleRef.current.classList.add('is-active');
        }
      });

      splideInstance.on('autoplay:pause', () => {
        if (toggleRef.current) {
          toggleRef.current.classList.remove('is-active');
        }
      });

      splideInstance.mount();

      // トグルボタン
      if (toggleRef.current) {
        toggleRef.current.classList.add('is-active');
        toggleRef.current.addEventListener('click', () => {
          if (splideInstance) {
            const autoplay = splideInstance.Components.Autoplay;
            if (toggleRef.current?.classList.contains('is-active')) {
              autoplay.pause();
            } else {
              autoplay.play();
            }
          }
        });
      }
    };

    init();

    return () => {
      splideInstance?.destroy();
    };
  }, []);

  return (
    <div className={styles.mv}>
      <p className={styles.mvScroll}>
        <span className={styles.mvScrollEn}>SCROLL</span>
      </p>
      <div className={styles.mvInner}>
        <div
          id="mvSlide01"
          ref={splideRef}
          className={`splide ${styles.mvSlider}`}
        >
          <div className="splide__track">
            <ul className="splide__list">
              {slides.map((slide) => (
                <li key={slide.id} className="splide__slide">
                  <span className={styles.slideBg}></span>
                  <span className={styles.txtWrap}>
                    <span className={styles.txtWrapInner}>
                      <Image src="/images/mv_txt.png" alt="" width={800} height={80} unoptimized />
                    </span>
                    <span className={styles.txtWrapInner}>
                      <Image src="/images/mv_txt.png" alt="" width={800} height={80} unoptimized />
                    </span>
                  </span>
                  <span className={styles.slideImg}>
                    <Image src={slide.img1} alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.mvScreen}>
            <Image src="/images/mv_screen.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
          </p>

          <h1 className={styles.mvCopy}>技術と絆で、未来を支える。</h1>

          <div className={styles.progressWrap}>
            <div className={styles.progressInner}>
              <button ref={toggleRef} className={`${styles.splideToggle} splide__toggle`}>
                <span className="splide__toggle__play">▶</span>
                <span className="splide__toggle__pause">⏸</span>
              </button>
              <div className={styles.splideProgress}>
                <div ref={progressBarRef} className={styles.splideProgressBar}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
