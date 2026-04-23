'use client';
import { useEffect } from 'react';
import styles from './Business.module.css';

export interface ModalData {
  id: string;
  num: string;
  title: string;
  subTitle: string;
  body: string;
  keywords: string[];
  img: string;
}

const tradingModals: ModalData[] = [
  {
    id: 'trading-01',
    num: 'ELECTRIC & INFRA #01',
    title: '電気工事',
    subTitle: '街に電気を届ける、あらゆる場所で',
    body: 'ビル・工場・公共施設など多様な施設の電気設備を設計・施工・メンテナンスします。受変電設備から照明・コンセント配線まで、確かな技術と安全管理で社会を支えます。',
    keywords: ['＃受変電設備', '＃幹線・動力設備', '＃照明・コンセント工事'],
    img: '/images/TECNES_008.jpg',
  },
  {
    id: 'trading-02',
    num: 'ELECTRIC & INFRA #02',
    title: '通信工事',
    subTitle: '情報をつなぐ、くらしをつなぐ',
    body: '通信ケーブルや光ファイバー、LAN・電話設備の敷設から各種放送・セキュリティシステムの構築まで、高品質な通信インフラを提供します。',
    keywords: ['＃LAN・通信配線', '＃TV共聴設備', '＃セキュリティシステム'],
    img: '/images/TECNES_008.jpg',
  },
  {
    id: 'trading-03',
    num: 'ELECTRIC & INFRA #03',
    title: '電気土木工事',
    subTitle: '地下から街を支えるインフラ整備',
    body: '道路・鉄道・河川などの公共インフラに関わる電気土木工事を担います。管路や埋設ケーブルの施工を通じ、都市機能を安定的に維持するライフラインを整備します。',
    keywords: ['＃管路工事', '＃ケーブル埋設', '＃公共インフラ整備'],
    img: '/images/TECNES_008.jpg',
  },
  {
    id: 'trading-04',
    num: 'ELECTRIC & INFRA #04',
    title: '消防施設工事',
    subTitle: '命と財産を守る防災設備',
    body: 'スプリンクラー・自動火災報知設備・誘導灯など、万一の事態に備えた防災設備を設計・施工します。法令に基づく定期点検・更新工事まで総合的にサポートします。',
    keywords: ['＃自動火災報知設備', '＃スプリンクラー設備', '＃誘導灯・非常照明'],
    img: '/images/TECNES_008.jpg',
  },
  {
    id: 'trading-05',
    num: 'ELECTRIC & INFRA #05',
    title: '太陽光・省エネ',
    subTitle: '再生可能エネルギーで未来へ',
    body: '太陽光発電システムの設計・施工から蓄電池の導入、LED照明への切り替えなど省エネソリューションを提案。カーボンニュートラルへの取り組みを技術面から支援します。',
    keywords: ['＃太陽光発電システム', '＃蓄電池', '＃LED・省エネ改修'],
    img: '/images/TECNES_008.jpg',
  },
  {
    id: 'trading-06',
    num: 'ELECTRIC & INFRA #06',
    title: '官公庁・公共工事',
    subTitle: '地域社会のインフラを担う',
    body: '国・地方自治体・公共機関が発注する電気・通信・設備工事を幅広く受注。厳格な品質・安全管理のもと、公共施設の整備・更新を通じて地域社会に貢献します。',
    keywords: ['＃官公庁工事', '＃公共施設整備', '＃インフラ更新'],
    img: '/images/TECNES_008.jpg',
  },
];

const manufacturingModals: ModalData[] = [
  {
    id: 'mfg-01',
    num: 'BUILDING & COMFORT #01',
    title: '空調設備工事',
    subTitle: '快適な温熱環境を設計・構築する',
    body: 'ビル・病院・学校・商業施設など各種建物の空調設備を設計・施工します。省エネ性能の高いシステム選定から施工・保守まで、年間を通じた快適な室内環境を実現します。',
    keywords: ['＃空調機器設置', '＃ダクト工事', '＃省エネ空調システム'],
    img: '/images/TECNES_009.jpg',
  },
  {
    id: 'mfg-02',
    num: 'BUILDING & COMFORT #02',
    title: '衛生設備工事',
    subTitle: '安全で清潔な水まわりを支える',
    body: '給排水・給湯・衛生器具の設置など、建物に欠かせない衛生設備工事を手がけます。設計段階からの提案で、使いやすく衛生的な水まわり環境を構築します。',
    keywords: ['＃給排水配管', '＃給湯設備', '＃衛生器具取付'],
    img: '/images/TECNES_009.jpg',
  },
];

interface BusinessModalProps {
  activeId: string | null;
  onClose: () => void;
}

export { tradingModals, manufacturingModals };

export default function BusinessModal({ activeId, onClose }: BusinessModalProps) {
  const allModals = [...tradingModals, ...manufacturingModals];
  const currentIndex = allModals.findIndex((m) => m.id === activeId);
  const current = currentIndex >= 0 ? allModals[currentIndex] : null;

  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const goPrev = () => {
    if (currentIndex > 0) {
      const prev = allModals[currentIndex - 1];
      onClose();
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('openModal', { detail: prev.id }));
      }, 0);
    }
  };

  const goNext = () => {
    if (currentIndex < allModals.length - 1) {
      const next = allModals[currentIndex + 1];
      onClose();
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('openModal', { detail: next.id }));
      }, 0);
    }
  };

  if (!current) return null;

  return (
    <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalBox}>
        <button className={styles.modalClose} onClick={onClose} aria-label="閉じる" />
        <div className={styles.modalImg}>
          <img src={current.img} alt={current.title} />
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalNum}>{current.num}</p>
          <h3 className={styles.modalTtl}>{current.title}</h3>
          <p className={styles.modalSubTtl}>{current.subTitle}</p>
          <p className={styles.modalTxt}>{current.body}</p>
          <ul className={styles.modalKeywords}>
            {current.keywords.map((kw) => (
              <li key={kw} className={styles.modalKeyword}>{kw}</li>
            ))}
          </ul>
          <div className={styles.modalNav}>
            <button
              className={styles.modalNavBtn}
              onClick={goPrev}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
            >
              ← 前の事業
            </button>
            <button className={styles.modalNavClose} onClick={onClose}>閉じる</button>
            <button
              className={styles.modalNavBtn}
              onClick={goNext}
              disabled={currentIndex === allModals.length - 1}
              style={{ opacity: currentIndex === allModals.length - 1 ? 0.3 : 1 }}
            >
              次の事業 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
