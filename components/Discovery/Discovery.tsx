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
          <span className={styles.ttl01Ja}>街を支えるTECNES</span>
        </h2>
        <p className={styles.leadTxt}>
          電気・通信・空調衛生工事を通じて、大阪の街と社会インフラを支えるTECNESの工事実績をご覧ください。
        </p>
        <a href="/#business" className={styles.ctaBtn}>工事実績を見る</a>
        <p className={styles.decorCopy}>
          技術と絆で<br />未来の街を<br />支えていく
        </p>
      </div>
    </section>
  );
}
