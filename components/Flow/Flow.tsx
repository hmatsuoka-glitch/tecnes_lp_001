import Image from 'next/image';
import styles from './Flow.module.css';

export default function Flow() {
  return (
    <section id="flow" className={styles.flow}>
      <div className={`l-inner ${styles.flowInner}`}>
        <h2 className={`${styles.flowTtl01} js-animate fadeIn01`}>仕事の流れ</h2>
        <p className={styles.flowTxt01}>
          私たちはお客さまの課題解決を通して、社会インフラの発展を支えることで豊かな暮らしを実現します。
        </p>

        <p className={styles.flowCopy}>
          <Image src="/images/flow_txt.png" alt="" width={600} height={120} unoptimized />
        </p>
      </div>
    </section>
  );
}
