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
  { ico: '/images/about_ico01.svg', label: '創業年数', targetNum: 78, unit: '年', sub: '1947年（昭和22年）創立' },
  { ico: '/images/about_ico02.svg', label: '売上高', targetNum: 536, unit: '億円' },
  { ico: '/images/about_ico03.svg', label: '拠点数', targetNum: 16, unit: '箇所', sub: '海外拠点3箇所含む' },
  { ico: '/images/about_ico04.svg', label: '従業員人数', targetNum: 350, unit: '人' },
  { ico: '/images/about_ico05.svg', label: '平均勤続年数', targetNum: 16, unit: '年' },
  { ico: '/images/about_ico06.svg', label: '年間休日', targetNum: 123, unit: '日', sub: '夏季休暇5日間含む' },
  { ico: '/images/about_ico07.svg', label: '就業時間/日', targetNum: 7, unit: '時間45分' },
  { ico: '/images/about_ico08.svg', label: '平均残業時間/月', targetNum: 15, unit: '時間' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`l-inner ${styles.aboutInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>ABOUT US</span>
          <span className={styles.ttl01Ja}>千代田工販について</span>
        </h2>

        <p className={styles.subTtl}>数字でわかる 千代田工販の今</p>
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
