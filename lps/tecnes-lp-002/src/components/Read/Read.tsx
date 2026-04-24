import Image from 'next/image';
import styles from './Read.module.css';

export default function Read() {
  return (
    <section id="read" className={styles.read}>
      <div className={`l-inner ${styles.readInner}`}>
        <div className={styles.leftBox}>
          <h2 className={`${styles.ttl} js-animate fadeIn01`}>
            私たちは社会と産業の<br className="u-sm-min" />未来のために挑戦し続けます
          </h2>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            千代田工販はただ商品を売るだけではありません。<br className="u-sm-min" />
            付加価値を加え、お客さまの課題解決に寄り添いながら<br className="u-sm-min" />
            社会インフラ整備と産業界の成長に貢献する商社です。
          </p>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            私たちの仕事は、お客さま一人ひとりの要望に応え<br className="u-sm-min" />信頼を創り出すこと。
          </p>
          <p className={`${styles.txt} js-animate fadeIn01`}>
            勇気がいる最初の一歩も、本気で向き合う。<br className="u-sm-min" />
            どんな難題があっても、創意と工夫で乗り越えていく。<br className="u-sm-min" />
            そんな想いは、きっと誰かの未来をともす光になるはずです。<br className="u-sm-min" />
            これが私たちの企業理念である「お役立ち」です。
          </p>
        </div>
        <div className={`${styles.rightBox} js-scroll01`}>
          <p className={styles.imageWrap}>
            <span className={styles.image01}>
              <picture>
                <source srcSet="/images/read_img01@2x.jpg" />
                <img src="/images/read_img01@2x.jpg" alt="" />
              </picture>
            </span>
            <span className={styles.image02}>
              <picture>
                <source srcSet="/images/read_img01@2x.jpg" />
                <img src="/images/read_img01@2x.jpg" alt="" />
              </picture>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
