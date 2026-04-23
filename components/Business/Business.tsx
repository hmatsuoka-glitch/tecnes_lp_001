'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Business.module.css';
import BusinessModal, { tradingModals, manufacturingModals } from './BusinessModal';

const tradingCategories = [
  { label: '電気工事', id: 'trading-01' },
  { label: '通信工事', id: 'trading-02' },
  { label: '電気土木工事', id: 'trading-03' },
  { label: '消防施設工事', id: 'trading-04' },
  { label: '太陽光・省エネ', id: 'trading-05' },
  { label: '官公庁・公共工事', id: 'trading-06' },
];

const manufacturingCategories = [
  { label: '空調設備工事', id: 'mfg-01' },
  { label: '衛生設備工事', id: 'mfg-02' },
];

export default function Business() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail;
      setActiveModal(id);
    };
    document.addEventListener('openModal', handler);
    return () => document.removeEventListener('openModal', handler);
  }, []);

  return (
    <section id="business" className={`${styles.business} headerShow`}>
      <div className={`l-inner ${styles.businessInner}`}>
        <h2 className={`${styles.ttl01} js-animate fade`}>
          <span className={styles.ttl01En}>OUR BUSINESS</span>
          <span className={styles.ttl01Ja}>仕事を知る</span>
        </h2>

        <p className={styles.leadTxt}>
          電気・通信・空調衛生の幅広い工事を手がけ、社会インフラを支えています。安全・品質・スピードを追求し、お客さまの信頼に応え続けます。
        </p>

        <div className={styles.cards}>
          {/* TRADING カード */}
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/TECNES_008.jpg" alt="TRADING" />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardEn}>ELECTRIC &amp; INFRA</p>
              <p className={styles.cardJa}>電気・インフラのしごと</p>
              <h3 className={styles.cardTtl}>
                街と産業を動かす<br />電気・通信・土木の総合力
              </h3>
              <p className={styles.cardLead}>
                電気工事・通信工事・電気土木・消防・太陽光など幅広く対応します。
              </p>
              <ul className={styles.cardCategories}>
                {tradingCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={styles.cardCategory}
                      onClick={() => setActiveModal(cat.id)}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div
                className={styles.arrowWrap}
                onClick={() => setActiveModal('trading-01')}
                style={{ cursor: 'pointer' }}
              >
                <span className={styles.arrowTxt}>MORE</span>
                <span className={styles.arrowIco}></span>
              </div>
            </div>
          </div>

          {/* MANUFACTURING カード */}
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/TECNES_009.jpg" alt="MANUFACTURING" />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardEn}>BUILDING &amp; COMFORT</p>
              <p className={styles.cardJa}>快適空間のしごと</p>
              <h3 className={styles.cardTtl}>
                人が集まる空間を支える<br />空調・衛生設備の専門力
              </h3>
              <p className={styles.cardLead}>
                空調設備・衛生設備工事で、快適で安全な生活環境を整えます。
              </p>
              <ul className={styles.cardCategories}>
                {manufacturingCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={styles.cardCategory}
                      onClick={() => setActiveModal(cat.id)}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div
                className={styles.arrowWrap}
                onClick={() => setActiveModal('mfg-01')}
                style={{ cursor: 'pointer' }}
              >
                <span className={styles.arrowTxt}>MORE</span>
                <span className={styles.arrowIco}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <BusinessModal
          activeId={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}
