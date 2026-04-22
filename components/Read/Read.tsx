import Image from 'next/image';
import styles from './Read.module.css';

export default function Read() {
  return (
    <section id="read" className={styles.read}>
      <div className={`l-inner ${styles.readInner}`}>
        <div className={styles.leftBox}>
          <h2 className={`${styles.ttl} js-animate fadeIn01`}>
            技術と絆で、<br className="u-sm-min" />街の未来を支える。
          </h2>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            TECNESは電気工事・通信・電気土木・空調衛生の<br className="u-sm-min" />
            総合工事会社です。<br className="u-sm-min" />
            大阪・東大阪を拠点に、社会インフラを支え続けています。
          </p>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            私たちの仕事は、目に見えないところで<br className="u-sm-min" />人々の暮らしを守ること。
          </p>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            現場で磨かれる技術と、チームで育む絆。<br className="u-sm-min" />
            その積み重ねが、街のインフラを形づくり、<br className="u-sm-min" />
            安全で快適な社会を次の世代へとつなぎます。<br className="u-sm-min" />
            これが私たちの誇りであり、TECNESのすべてです。
          </p>
        </div>
        <div className={`${styles.rightBox} js-scroll01`}>
          <p className={styles.imageWrap}>
            <span className={styles.image01}>
              <picture>
                <source srcSet="/images/TECNES_005.jpg" />
                <img src="/images/TECNES_005.jpg" alt="" />
              </picture>
            </span>
            <span className={styles.image02}>
              <picture>
                <source srcSet="/images/TECNES_006.jpg" />
                <img src="/images/TECNES_006.jpg" alt="" />
              </picture>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
