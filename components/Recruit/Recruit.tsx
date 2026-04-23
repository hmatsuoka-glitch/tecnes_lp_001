'use client';
import { useState } from 'react';
import styles from './Recruit.module.css';

const jobs = [
  {
    id: 'sales',
    category: '営業職',
    items: [
      {
        label: '仕事内容',
        content: [
          '電気・通信・土木・空調・衛生工事に関する営業活動',
          '「電気をつなぎ、社会を動かす」をテーマに、お客様と現場をつなぐ役割',
        ],
      },
      {
        label: '応募資格',
        content: ['高卒以上', '普通自動車運転免許', '未経験OK'],
      },
      {
        label: '勤務地',
        content: [
          '大阪工事事務所（本社）：大阪府東大阪市川俣1-6-10',
          'マイカー通勤可能',
        ],
      },
      {
        label: '勤務時間',
        content: [
          'フレックスタイムや変形労働など、ライフスタイルに合わせた勤務スタイルが可能',
        ],
      },
      {
        label: '給与',
        content: [
          '経験者：月給 330,000円〜600,000円',
          '未経験者：月給 235,000円〜300,000円',
          '※お持ちの資格やスキル、経験値に応じて面接時にご相談',
          '昇給：年2回（6月・12月）',
          '賞与あり',
        ],
      },
      {
        label: '手当',
        content: [
          '出張手当、資格手当、役職手当など各種手当あり',
          'インセンティブ制度あり',
          '通勤手当：全額支給',
        ],
      },
      { label: '雇用形態', content: ['正社員'] },
    ],
  },
  {
    id: 'engineer',
    category: '工事・技術職',
    items: [
      {
        label: '仕事内容',
        content: [
          '一般電気工事、通信設備工事、電気土木工事、空調・衛生工事など幅広い工事業務',
          '大型商業施設やマンションの新築・改修工事で、基幹設備構築から照明・コンセント・各種機械の施工を担当',
        ],
      },
      {
        label: '応募資格',
        content: ['高卒以上', '普通自動車運転免許', '未経験OK'],
      },
      {
        label: '勤務地',
        content: [
          '大阪工事事務所（本社）：大阪府東大阪市川俣1-6-10',
          'JR線「高井田中央」駅・大阪メトロ「高井田」駅 徒歩5分',
          'マイカー通勤可',
        ],
      },
      {
        label: '勤務時間',
        content: ['1日8時間労働', '現場により出勤時間変動'],
      },
      {
        label: '給与',
        content: [
          '経験者：月給 330,000円〜600,000円',
          '未経験者：月給 235,000円〜300,000円',
          '昇給 年2回（6月・12月）',
          '賞与あり',
        ],
      },
      {
        label: '手当',
        content: [
          '出張手当・資格手当・役職手当',
          'インセンティブ制度',
          '通勤手当 全額支給',
        ],
      },
      { label: '雇用形態', content: ['正社員'] },
    ],
  },
];

export default function Recruit() {
  const [activeId, setActiveId] = useState(jobs[0].id);
  const activeJob = jobs.find((j) => j.id === activeId)!;

  return (
    <section id="recruit" className={styles.recruit}>
      <div className={`l-inner ${styles.recruitInner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>RECRUIT</span>
          <span className={styles.ttl01Ja}>募集要項</span>
        </h2>

        {/* タブ */}
        <div className={styles.tabs} role="tablist">
          {jobs.map((job) => (
            <button
              key={job.id}
              role="tab"
              aria-selected={activeId === job.id}
              className={`${styles.tab} ${activeId === job.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(job.id)}
            >
              {job.category}
            </button>
          ))}
        </div>

        {/* 詳細テーブル */}
        <div className={styles.jobCard}>
          <dl className={styles.jobList}>
            {activeJob.items.map((item) => (
              <div key={item.label} className={styles.jobRow}>
                <dt className={styles.jobLabel}>{item.label}</dt>
                <dd className={styles.jobContent}>
                  {item.content.map((line, i) => (
                    <p key={i} className={styles.jobLine}>{line}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
