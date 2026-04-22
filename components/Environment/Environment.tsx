import Image from 'next/image';
import styles from './Environment.module.css';

const cards = [
  { id: 1, img: '/images/nophoto.png', label: '福利厚生' },
  { id: 2, img: '/images/nophoto.png', label: '資格取得支援' },
  { id: 3, img: '/images/nophoto.png', label: '研修・教育制度' },
  { id: 4, img: '/images/nophoto.png', label: 'オフィス・現場紹介' },
  { id: 5, img: '/images/nophoto.png', label: '社員インタビュー' },
  { id: 6, img: '/images/nophoto.png', label: 'キャリアパス' },
];

export default function Environment() {
  return (
    <section id="environment" className={styles.environment}>
      <div className={`l-inner ${styles.environmentInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>ENVIRONMENT</span>
          <span className={styles.ttl01Ja}>働く環境を知る</span>
        </h2>
        <p className={styles.leadTxt}>
          資格取得支援・研修制度・充実した福利厚生など、TECNESで安心して長く働けるサポートを整えています。
        </p>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={card.img} alt={card.label} />
              </div>
              <p className={styles.cardLabel}>{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
