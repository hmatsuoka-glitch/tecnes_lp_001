'use client';
import { useState } from 'react';
import styles from './ApplyForm.module.css';

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '', kana: '', age: '', phone: '', email: '',
    jobType: '', experience: '', motivation: '',
  });

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <section id="apply" className={styles.applyForm}>
        <div className={`l-inner ${styles.inner}`}>
          <div className={styles.thanks}>
            <p className={styles.thanksIcon}>✓</p>
            <h3 className={styles.thanksTtl}>送信が完了しました</h3>
            <p className={styles.thanksTxt}>
              ご応募ありがとうございます。<br />
              内容を確認の上、担当者よりご連絡いたします。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className={styles.applyForm}>
      <div className={`l-inner ${styles.inner}`}>
        <h2 className={`${styles.ttl01} js-animate fadeIn01`}>
          <span className={styles.ttl01En}>APPLY</span>
          <span className={styles.ttl01Ja}>応募フォーム</span>
        </h2>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.row}>
            <label className={styles.label}>
              氏名<span className={styles.required}>必須</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="例：山田 太郎"
              value={form.name}
              onChange={set('name')}
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>フリガナ</label>
            <input
              type="text"
              className={styles.input}
              placeholder="例：ヤマダ タロウ"
              value={form.kana}
              onChange={set('kana')}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>年齢</label>
            <input
              type="text"
              className={`${styles.input} ${styles.inputShort}`}
              placeholder="例：25"
              value={form.age}
              onChange={set('age')}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              電話番号<span className={styles.required}>必須</span>
            </label>
            <input
              type="tel"
              className={styles.input}
              placeholder="例：090-1234-5678"
              value={form.phone}
              onChange={set('phone')}
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              メールアドレス<span className={styles.required}>必須</span>
            </label>
            <input
              type="email"
              className={styles.input}
              placeholder="例：example@email.com"
              value={form.email}
              onChange={set('email')}
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              希望職種<span className={styles.required}>必須</span>
            </label>
            <select
              className={styles.select}
              value={form.jobType}
              onChange={set('jobType')}
              required
            >
              <option value="">選択してください</option>
              <option value="営業職">営業職</option>
              <option value="工事・技術職">工事・技術職</option>
              <option value="未定・相談したい">未定・相談したい</option>
            </select>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>経験・保有資格</label>
            <textarea
              className={styles.textarea}
              placeholder="例：電気工事士2種取得、施工管理経験3年など（未経験の方は「未経験」とご記入ください）"
              value={form.experience}
              onChange={set('experience')}
              rows={4}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label}>志望動機・メッセージ</label>
            <textarea
              className={styles.textarea}
              placeholder="自由にご記入ください"
              value={form.motivation}
              onChange={set('motivation')}
              rows={5}
            />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}

          <div className={styles.submitWrap}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? '送信中...' : '応募する'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
