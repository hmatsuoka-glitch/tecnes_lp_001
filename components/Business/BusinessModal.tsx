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
    num: '商社のしごと #01',
    title: 'エネルギー・電力関連',
    subTitle: '電気をつくる、電気をはこぶ',
    body: '火力・水力発電や電力流通設備を通じて、安定した電力供給に貢献。カーボンニュートラルを目指し、再生可能エネルギーや次世代エネルギー分野にも注力しています。',
    keywords: ['＃発電設備', '＃受変電設備', '＃太陽光発電システム'],
    img: '/images/nophoto.png',
  },
  {
    id: 'trading-02',
    num: '商社のしごと #02',
    title: 'プラント産業・電機関連',
    subTitle: '工場の"つくる・しらべる・はこぶ"',
    body: '製造業全般に電力システムから製造機械、物流設備、労働環境の改善まで、工場を動かすために必要な機器やサービスを幅広く提供しています。',
    keywords: ['＃産業用モータ', '＃産業機械', '＃計測・制御システム'],
    img: '/images/nophoto.png',
  },
  {
    id: 'trading-03',
    num: '商社のしごと #03',
    title: '交通・施設関連',
    subTitle: '都市と人びとをつなげる',
    body: '電車の駆動システムや照明、空調、電源を供給するための受変電設備などを提供し、駅の自動改札機や端末システムも納入しています。鉄道会社との仕事を通じて安全な交通システムの構築に貢献しています。',
    keywords: ['＃車両用駆動システム', '＃駅務システム', '＃鉄道電力システム'],
    img: '/images/nophoto.png',
  },
  {
    id: 'trading-04',
    num: '商社のしごと #04',
    title: '環境機械関連',
    subTitle: '"地球に優しい"を実現する',
    body: 'カーボンニュートラルやSDGsを重視し、排水や排ガスの浄化装置、省エネシステムを提供。余剰エネルギーの有効活用など、環境配慮型の事業を展開しています。',
    keywords: ['＃水処理システム', '＃大気処理システム', '＃省エネシステム'],
    img: '/images/nophoto.png',
  },
  {
    id: 'trading-05',
    num: '商社のしごと #05',
    title: '情報・通信関連',
    subTitle: '工場をネットワークでつなぐ',
    body: 'DXを活用し、パソコンやセンサーなどの情報機器を組み合わせたシステムで、工場設備の安定稼働や予防保全、生産性向上を支援しています。',
    keywords: ['＃生産管理システム', '＃監視カメラシステム', '＃IoTソリューション'],
    img: '/images/nophoto.png',
  },
  {
    id: 'trading-06',
    num: '商社のしごと #06',
    title: '国際事業',
    subTitle: 'お客さまと世界をむすぶ',
    body: '中国や東南アジアを中心に産業機器の輸出や特色ある海外製品を輸入販売。自社製品の紫外線殺菌装置も海外に納入するなど、グローバルに事業を展開中です。',
    keywords: ['＃製品の輸出入販売', '＃海外向け案件の営業サポート'],
    img: '/images/nophoto.png',
  },
];

const manufacturingModals: ModalData[] = [
  {
    id: 'mfg-01',
    num: 'モノづくりのしごと #01',
    title: '自動車部品事業',
    subTitle: 'トラックやバスの安全と環境をまもる',
    body: 'トラックやバスなどの商用車向けにエアブレーキ配管の加工や排出ガスの無害化を図る浄化システム用の配管を販売。自社で製造拠点を構え、少量多品種生産によりきめ細かいニーズに対応、大手商用車メーカーと直接取引しています。',
    keywords: ['＃エアブレーキ配管', '＃燃料配管', '＃排出ガス浄化システム用配管'],
    img: '/images/nophoto.png',
  },
  {
    id: 'mfg-02',
    num: 'モノづくりのしごと #02',
    title: 'UVシステム事業',
    subTitle: 'キレイな水で安心・安全をとどける',
    body: '飲料水や洗浄水向けの紫外線殺菌装置を設計・販売しています。当社研究開発センターにて試験や研究を重ね、安心・安全な水を提供。約半世紀の実績とノウハウを持つ紫外線技術のリーディングカンパニーです。',
    keywords: ['＃半導体工場向け', '＃食品・飲料工場向け', '＃上下水道施設向け'],
    img: '/images/nophoto.png',
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
