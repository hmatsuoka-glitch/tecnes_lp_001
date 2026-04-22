import Image from 'next/image';
import styles from './Environment.module.css';

const cards = [
  { id: 1, img: '/images/environment_img01@2x.jpg', label: '福利厚生' },
  { id: 2, img: '/images/environment_img02@2x.jpg', label: '教育制度' },
  { id: 3, img: '/images/environment_img03@2x.jpg', label: 'オフィス紹介' },
  { id: 4, img: '/images/environment_img04@2x.jpg', label: '社員座談会 パパ・ママトーク' },
  { id: 5, img: '/images/environment_img05@2x.jpg', label: '社員座談会 社風トーク' },
  { id: 6, img: '/images/environment_img06@2x.jpg', label: '先輩たちの声' },
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
          みなさんが安心して働くことのできる環境、会社とともに成長できる環境を整えております。
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
