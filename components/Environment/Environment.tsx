'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Environment.module.css';

const photos = [
  '/images/environment_img01@2x.jpg',
  '/images/environment_img02@2x.jpg',
  '/images/environment_img03@2x.jpg',
  '/images/environment_img04@2x.jpg',
  '/images/environment_img05@2x.jpg',
  '/images/environment_img06@2x.jpg',
];

const items = [
  {
    id: 1,
    label: '福利厚生',
    details: [
      '社会保険完備',
      '制服支給',
      '資格支援制度',
      '退職金制度（全額会社負担）',
      '確定拠出年金・積立年金',
      '誕生日プレゼント制度',
      'インフルエンザ予防接種',
      'オーラルケア',
      'chocoZAP完全無料通い放題',
    ],
  },
  {
    id: 2,
    label: '資格取得支援制度',
    details: [
      '資格取得費用全額会社負担',
      '電気工事士（第一種・第二種）取得支援',
      '電気通信工事担任者取得支援',
      '1級・2級電気工事施工管理技士取得支援',
      '社内研修制度（OJT）',
      '外部研修・講習会参加支援',
    ],
  },
];

export default function Environment() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="environment" className={styles.environment}>
      <div className={`l-inner ${styles.environmentInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>ENVIRONMENT</span>
          <span className={styles.ttl01Ja}>働く環境を知る</span>
        </h2>
        <p className={styles.leadTxt}>
          資格取得支援・充実した福利厚生など、TECNESで安心して長く働けるサポートを整えています。
        </p>
        <div className={styles.photoGrid}>
          {photos.map((src, i) => (
            <div key={i} className={styles.photoItem}>
              <Image src={src} alt="" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
          ))}
        </div>

        <ul className={styles.accordion}>
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''}`}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.accordionLabel}>{item.label}</span>
                  <span className={styles.accordionIcon} aria-hidden="true" />
                </button>
                <div className={styles.accordionBody} aria-hidden={!isOpen}>
                  <ul className={styles.detailList}>
                    {item.details.map((d, i) => (
                      <li key={i} className={styles.detailItem}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
