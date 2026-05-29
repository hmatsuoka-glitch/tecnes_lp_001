'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './People.module.css';

const members = [
  {
    id: 1,
    thumb: '/images/tn.jpg',
    catch: '現場で育まれた技術と絆が 私をTECNESで輝かせてくれた',
    dept: '電気工事部',
    role: '施工管理',
    name: 'T.N',
    year: '2020年入社',
  },
  {
    id: 2,
    thumb: '/images/ks.jpg',
    catch: 'チームで乗り越えた困難が 自分の大きな自信になった',
    dept: '',
    role: '',
    name: 'K.S',
    year: '2018年入社',
  },
  {
    id: 3,
    thumb: '/images/mh.jpg',
    catch: '地道な積み重ねが 街のインフラを形づくる喜び',
    dept: '電気土木部',
    role: '現場監督',
    name: 'M.H',
    year: '2019年入社',
  },
  {
    id: 4,
    thumb: '/images/yk.jpg',
    catch: 'お客さまの「ありがとう」が 工事への誇りを育てる',
    dept: '空調衛生部',
    role: '施工管理',
    name: 'Y.K',
    year: '2021年入社',
  },
  {
    id: 5,
    thumb: '/images/rt.jpg',
    catch: '資格取得を全力支援してくれる 仲間と会社が私の成長を後押し',
    dept: '電気工事部',
    role: '電気工事士',
    name: 'R.T',
    year: '2022年入社',
  },
  {
    id: 6,
    thumb: '/images/ao.jpg',
    catch: '女性でも活躍できる現場 TECNESなら挑戦し続けられる',
    dept: '設計・積算部',
    role: '積算担当',
    name: 'A.O',
    year: '2020年入社',
  },
  {
    id: 7,
    thumb: '/images/hm.jpg',
    catch: '若手でも責任ある仕事を任せてもらえる それがTECNESの魅力',
    dept: '電気工事部',
    role: '施工管理',
    name: 'H.M',
    year: '2023年入社',
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
          TECNESで技術を磨き、仲間とともに挑戦し続ける先輩たち。どんな想いで現場に立ち、どう成長してきたのか、リアルなエピソードをご紹介します。
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
                      {(m.dept || m.role) && (
                        <span className={styles.cardDept}>{[m.dept, m.role].filter(Boolean).join('・')}</span>
                      )}
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
        <p className={styles.decorCopy}>あなたの挑戦を、TECNESが全力でサポートします。</p>
      </div>
    </section>
  );
}
