'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Business.module.css';
import BusinessModal, { tradingModals, manufacturingModals } from './BusinessModal';

const tradingCategories = [
  { label: 'エネルギー・電力関連', id: 'trading-01' },
  { label: 'プラント産業・電機関連', id: 'trading-02' },
  { label: '交通・施設関連', id: 'trading-03' },
  { label: '環境機械関連', id: 'trading-04' },
  { label: '情報・通信関連', id: 'trading-05' },
  { label: '国際事業', id: 'trading-06' },
];

const manufacturingCategories = [
  { label: '自動車部品事業', id: 'mfg-01' },
  { label: 'UVシステム事業', id: 'mfg-02' },
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
          商社のネットワークを活かし、自社製品も販売しています。私たちはお客さまから必要とされるパートナーであり続けるため、クリエイティブな発想で解決策を提案します。
        </p>

        <div className={styles.cards}>
          {/* TRADING カード */}
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/trading_img@2x.jpg" alt="TRADING" />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardEn}>TRADING</p>
              <p className={styles.cardJa}>商社のしごと</p>
              <h3 className={styles.cardTtl}>
                幅広い領域に精通した<br />電機機械の専門商社
              </h3>
              <p className={styles.cardLead}>
                電気機器や一般産業機械のシステム販売を手掛けています。
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
              <img src="/images/manufacturing_img@2x.jpg" alt="MANUFACTURING" />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardEn}>MANUFACTURING</p>
              <p className={styles.cardJa}>モノづくりのしごと</p>
              <h3 className={styles.cardTtl}>
                長年培った信頼と技術力で<br />自社事業を展開
              </h3>
              <p className={styles.cardLead}>
                自社製品として自動車部品や紫外線応用機器を提供しています。
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
