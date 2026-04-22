import Image from 'next/image';
import styles from './Discovery.module.css';

export default function Discovery() {
  return (
    <section id="discovery" className={styles.discovery}>
      <div className={styles.discoveryBg}>
        <Image src="/images/discovery_bg@2x.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>
      <div className={`l-inner ${styles.discoveryInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>DISCOVERY</span>
          <span className={styles.ttl01Ja}>街に広がる千代田工販</span>
        </h2>
        <p className={styles.leadTxt}>
          社会のさまざまな領域で活躍している千代田工販の事業についてご紹介します。
        </p>
        <a href="/#business" className={styles.ctaBtn}>詳細を見る</a>
        <p className={styles.decorCopy}>
          個性と想いが<br />響き合うことで<br />わくわくする
        </p>
      </div>
    </section>
  );
}
