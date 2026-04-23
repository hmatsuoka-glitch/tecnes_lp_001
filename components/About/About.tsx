'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

interface NumCardProps {
  ico: string;
  label: string;
  targetNum: number;
  unit: string;
  sub?: string;
  prefix?: string;
  suffix?: string;
}

function NumCard({ ico, label, targetNum, unit, sub, prefix, suffix }: NumCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * targetNum));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          io.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [targetNum]);

  return (
    <div ref={cardRef} className={styles.numCard}>
      <span className={styles.numCardIco}>
        <img src={ico} alt="" />
      </span>
      <span className={styles.numCardLabel}>{label}</span>
      <span className={styles.numCardValue}>
        {prefix && <span className={styles.numCardUnit}>{prefix}</span>}
        <span className={styles.numCardNum}>{count}</span>
        <span className={styles.numCardUnit}>{unit}</span>
        {suffix && <span className={styles.numCardUnit}>{suffix}</span>}
      </span>
      {sub && <span className={styles.numCardSub}>{sub}</span>}
    </div>
  );
}

const numCards: NumCardProps[] = [
  { ico: '/images/Gemini_Generated_Image_55qq3c55qq3c55qq.png', label: '創業年数', targetNum: 30, unit: '年', sub: '1995年（平成7年）設立' },
  { ico: '/images/Gemini_Generated_Image_s4eg2ds4eg2ds4eg.png', label: '建設業許可', targetNum: 6, unit: '業種' },
  { ico: '/images/Gemini_Generated_Image_lsjdolsjdolsjdol.png', label: '拠点数', targetNum: 3, unit: '箇所' },
  { ico: '/images/Gemini_Generated_Image_qpv2jrqpv2jrqpv2.png', label: '従業員人数', targetNum: 22, unit: '人' },
  { ico: '/images/Gemini_Generated_Image_zfcwefzfcwefzfcw.png', label: '資本金', targetNum: 1000, unit: '万円' },
  { ico: '/images/Gemini_Generated_Image_ugcc1sugcc1sugcc.png', label: '年間休日', targetNum: 120, unit: '日' },
  { ico: '/images/Gemini_Generated_Image_t4z8v1t4z8v1t4z8.png', label: '就業時間/日', targetNum: 8, unit: '時間' },
  { ico: '/images/Gemini_Generated_Image_y2lsy1y2lsy1y2ls.png', label: '平均残業時間/月', targetNum: 10, unit: '時間' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`l-inner ${styles.aboutInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>ABOUT US</span>
          <span className={styles.ttl01Ja}>TECNESについて</span>
        </h2>

        <p className={styles.subTtl}>数字でわかる TECNESの今</p>
        <p className={styles.note}>※2025年3月時点</p>

        <div className={styles.numGrid}>
          {numCards.map((card) => (
            <NumCard key={card.label} {...card} />
          ))}
        </div>

        <div className={styles.mainImg}>
          <img src="/images/TECNES_007.jpg" alt="ABOUT US" />
        </div>
      </div>
    </section>
  );
}
