'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './People.module.css';

const members = [
  {
    id: 1,
    thumb: '/images/people_thumbs01@2x.jpg',
    catch: '先輩に支えられ始まった千代田工販での挑戦 次は私が後輩を支える番だ',
    dept: '電機システム部',
    role: '営業職',
    name: 'M.M',
    year: '2017年入社',
  },
  {
    id: 2,
    thumb: '/images/people_thumbs02@2x.jpg',
    catch: '関わるすべての人のベクトルを合わせて 大型プロジェクトに挑む',
    dept: 'プラント産業システム部',
    role: '営業職',
    name: 'Y.T',
    year: '2014年入社',
  },
  {
    id: 3,
    thumb: '/images/people_thumbs03@2x.jpg',
    catch: '顧客利益だけでなく その先にある「社会に良いこと」を追求',
    dept: '環境・機械システム営業部',
    role: '営業職',
    name: 'N.S',
    year: '2017年入社',
  },
  {
    id: 4,
    thumb: '/images/people_thumbs04@2x.jpg',
    catch: '主体性を持って企業と向き合い提案し、感謝される それが私の成長サイクル',
    dept: '新潟支店',
    role: '営業職',
    name: 'O.T',
    year: '2017年入社',
  },
  {
    id: 5,
    thumb: '/images/people_thumbs05@2x.jpg',
    catch: '商社ならではの価値を追求し 幅広い業界へ提案 次は本社でさらなる挑戦へ',
    dept: '九州支店',
    role: '営業職',
    name: 'J.A',
    year: '2019年入社',
  },
  {
    id: 6,
    thumb: '/images/people_thumbs06@2x.jpg',
    catch: '何事も全力で楽しむ 自社製品の海外展開という「未知なる挑戦」も楽しみたい',
    dept: '自動車部品部',
    role: '営業職',
    name: 'W.R',
    year: '2005年入社',
  },
  {
    id: 7,
    thumb: '/images/people_thumbs07@2x.jpg',
    catch: 'UVシステムの営業が切り拓く 「社会インフラ」と「持続可能な未来」への貢献',
    dept: 'UVシステム営業部',
    role: '営業職',
    name: 'E.M',
    year: '2012年入社',
  },
];

export default function People() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: import('swiper').default | null = null;

    const init = async () => {
      const { default: Swiper } = await import('swiper');
      const { Navigation, Pagination } = await import('swiper/modules');
      // CSS loaded via public/vendor/swiper-bundle.min.css in layout

      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination],
        slidesPerView: 1.2,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1025: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        },
      });
    };

    init();

    return () => {
      swiperInstance?.destroy();
    };
  }, []);

  return (
    <section id="people" className={styles.people}>
      <div className={`l-inner ${styles.peopleTop}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>PEOPLE</span>
          <span className={styles.ttl01Ja}>働く社員を知る</span>
        </h2>
        <p className={styles.leadTxt}>
          千代田工販で新しい自分に出会い、変わらない自分の信念を持って活躍している先輩たち。どんな想いで働いているのか、エピソードを交えてご紹介します。
        </p>
      </div>

      <div className={styles.mainImg}>
        <Image src="/images/people_img01@2x.jpg" alt="" width={1280} height={400} unoptimized style={{ width: '100%', height: 'auto' }} />
      </div>

      <div className={styles.swiperWrap}>
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {members.map((m) => (
              <div key={m.id} className="swiper-slide">
                <div className={styles.card}>
                  <div className={styles.cardThumb}>
                    <img src={m.thumb} alt={m.name} />
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardCatch}>{m.catch}</p>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardDept}>{m.dept}・{m.role}</span>
                      <span className={styles.cardName}>{m.name}</span>
                      <span className={styles.cardYear}>{m.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      <div className={`l-inner ${styles.decorSection}`}>
        <p className={styles.decorCopy}>
          <Image src="/images/people_copy.svg" alt="あなたの成長を全力でサポート" width={400} height={100} unoptimized />
        </p>
      </div>
    </section>
  );
}
