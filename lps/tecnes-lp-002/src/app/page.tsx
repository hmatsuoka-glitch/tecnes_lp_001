"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   constants
------------------------------------------------------------------ */

// TODO: クライアント確認後、実績値に差し替え
const STATS = {
  inexperienced: { label: "未経験スタート", num: 80, unit: "%", note: "入社時に業界未経験" },
  athletes: { label: "体育会系出身", num: 6, unit: "割超", note: "元運動部が活躍中" },
  avgAge: { label: "平均年齢", num: 29, unit: "歳", note: "若手が多い現場" },
  license: { label: "資格取得支援", num: 100, unit: "%", note: "受験費用を会社負担" },
} as const;

// TODO: CV手段確定後に調整（エントリーフォーム / LINE / マイナビ等のURLに差し替え）
const ENTRY_URL = "#entry";
const CTA_MICRO = "履歴書不要・私服OK／質問だけでも大歓迎";

/* ------------------------------------------------------------------
   scroll reveal
   - JS無効時は全コンテンツ表示（.js-anim を html に付与してから隠す）
   - 早めのトリガー + 短いフェードで「白飛び」時間を作らない
------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------
   mobile sticky CTA: ヒーロー通過後に表示、最下部CTAが見えたら非表示
------------------------------------------------------------------ */
function useStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const entry = document.getElementById("entry");
    if (!hero || !entry || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    let heroPassed = false;
    let entryVisible = false;
    const update = () => setShow(heroPassed && !entryVisible);

    const heroIo = new IntersectionObserver(
      ([e]) => {
        heroPassed = !e.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );
    const entryIo = new IntersectionObserver(
      ([e]) => {
        entryVisible = e.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );
    heroIo.observe(hero);
    entryIo.observe(entry);
    return () => {
      heroIo.disconnect();
      entryIo.disconnect();
    };
  }, []);

  return show;
}

/* ------------------------------------------------------------------
   count up number（reduced-motion時・IO非対応時は即時最終値）
------------------------------------------------------------------ */
function CountUp({ end, duration = 1400 }: { end: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window)) {
      setN(end);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          if (reduced) {
            setN(end);
          } else {
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * end));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          io.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{n}</span>;
}

/* ------------------------------------------------------------------
   CTAバンド（繰り返しCTA）
   人物写真スロットあり（画像支給まで非表示フラグで制御）
------------------------------------------------------------------ */
const SHOW_BAND_PHOTO = false; // TODO: 人物写真支給後に true にして bandPhoto を差し替え

function CtaBand() {
  return (
    <section className="band">
      {SHOW_BAND_PHOTO && (
        <div className="band__photo">
          {/* TODO: 社員写真支給待ち（リクスポ方式の人物切り抜き想定） */}
          <img src="/images/TECNES_002.jpg" alt="" />
        </div>
      )}
      <div className="inner band__inner">
        <p className="band__en en">NEXT INNING</p>
        <h2 className="band__title">次の本気、はじめよう。</h2>
        <div className="cta-stack">
          <a href={ENTRY_URL} className="btn btn--onband">
            まずは話を聞いてみる
            <span className="btn__arrow">▶</span>
          </a>
          <p className="cta-micro">{CTA_MICRO}</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   data
------------------------------------------------------------------ */
const empathy = [
  "「引退」した日から、あの頃ほど本気になれるものに出会えていない。",
  "デスクに1日中座る仕事より、体を動かして汗をかきたい。",
  "一人でコツコツより、仲間とチームで一つの目標を追いたい。",
  "学歴や勉強に自信はない。でも、努力と根性なら誰にも負けない。",
  "上下関係や礼儀は当たり前。それが評価される場所で働きたい。",
  "やった分だけ、ちゃんと結果と給料で返ってくる仕事がいい。",
];

const reasons = [
  {
    no: "01",
    eq: "反復練習 ＝ 技術習得",
    title: "「素振り」できたヤツは、\n現場でも伸びる。",
    txt: "電気設備の技術は、才能ではなく反復で身につく。毎日の素振りでスイングを固めたように、一つひとつの作業を繰り返して“体で覚える”。コツコツ続けられる元野球部は、未経験からでも確実にレベルアップしていく。",
  },
  {
    no: "02",
    eq: "チームプレー ＝ 班の連携",
    title: "現場は、\n9人で守る「チーム戦」。",
    txt: "TECNESの現場は一人では回らない。役割を分担し、声を掛け合い、班（チーム）で一つの工事を完成させる。ポジションを守り、カバーし合う——グラウンドで培った連携力が、そのまま武器になる。",
  },
  {
    no: "03",
    eq: "根性・体力 ＝ 現場力",
    title: "鍛えた体と粘りは、\nここで“戦力”になる。",
    txt: "暑さ寒さ、最後まで走り切る粘り強さ。厳しい練習を耐え抜いた経験は、現場で必ず活きる。頑張りが「気合」で終わらず、資格・技術・給与という結果に変わっていく場所だ。",
  },
];

const translate = [
  { from: "守備位置・ポジション", to: "担当する工事・役割" },
  { from: "監督・コーチ", to: "現場の先輩・職長" },
  { from: "練習の積み重ね", to: "資格取得・技術習得" },
  { from: "試合・大会", to: "一つひとつの現場・引き渡し" },
  { from: "レギュラー・エース", to: "現場を任される職長・リーダー" },
];

const steps = [
  {
    phase: "1年目",
    no: "01",
    title: "素振りの年",
    txt: "先輩について現場の基本を覚える。道具の名前、安全のルール、体の使い方。分からなくて当たり前。まずは全力でついていく。",
    tag: "OJT・基礎",
  },
  {
    phase: "2〜3年目",
    no: "02",
    title: "スタメン定着",
    txt: "任される作業が増え、資格も取得。自分のポジションを守れるように。後輩も入ってきて、教える側の一歩を踏み出す。",
    tag: "資格取得支援",
  },
  {
    phase: "4〜6年目",
    no: "03",
    title: "エース格へ",
    txt: "現場の中心として判断を任される。班のメンバーをまとめ、段取りを組む。努力が役職・給与にはっきり反映される。",
    tag: "リーダー候補",
  },
  {
    phase: "その先",
    no: "04",
    title: "監督（職長）",
    txt: "現場全体を指揮する職長・管理者へ。後進を育て、会社を背負う存在に。第二の野球人生の“優勝”を、ここで掴む。",
    tag: "職長・管理職",
  },
];

const numbers = [
  STATS.inexperienced,
  STATS.athletes,
  STATS.avgAge,
  STATS.license,
];

// 先輩の声
// TODO: 実在の社員の声・写真に差し替え予定（写真は社員写真支給待ち。現在は現場写真を仮使用）
const voices = [
  {
    img: "/images/TECNES_009.jpg",
    pos: "元・高校球児 / 内野手",
    catch: "「もう一度、本気になれる場所だった」",
    txt: "引退してから、どこか物足りない毎日でした。TECNESに入って、また“チームで一つのものを完成させる”感覚が戻ってきた。未経験でしたが、先輩が素振りのように基礎から教えてくれます。",
    name: "入社2年目 / T.K",
  },
  {
    img: "/images/TECNES_005.jpg",
    pos: "元・大学野球部 / 投手",
    catch: "「努力が“数字”で返ってくる」",
    txt: "練習した分だけ上手くなる——野球で信じてきたことが、この仕事でもそのまま通用します。資格を取るたびに手当も上がる。頑張りがちゃんと給料に反映されるのが、やりがいです。",
    name: "入社4年目 / R.S",
  },
  {
    img: "/images/TECNES_002.jpg",
    pos: "元・シニアリーグ / 捕手",
    catch: "「学歴の代わりに、資格が名刺になる」",
    txt: "高卒で入社して、最初は不安しかなかったです。でも資格を取るごとに任される仕事が増えて、今は後輩の指導も担当。勉強は苦手でしたが、現場で覚える勉強なら続けられました。",
    name: "入社3年目 / Y.M",
  },
];

const joinSteps = [
  {
    no: "01",
    title: "エントリー",
    txt: "フォームから30秒で完了。履歴書はまだ不要です。",
  },
  {
    no: "02",
    title: "カジュアル面談",
    txt: "私服OK・オンラインOK。仕事内容や給与のリアルを全部話します。",
  },
  {
    no: "03",
    title: "現場見学（希望者のみ）",
    txt: "実際の現場と先輩の働き方を見てから決められます。",
  },
  {
    no: "04",
    title: "内定・入社",
    txt: "最短2週間。入社日は相談OK。野球で言う“入団”です。",
  },
];

const faqs = [
  {
    q: "電気の知識ゼロ、まったくの未経験でも大丈夫ですか？",
    a: "問題ありません。社員の約8割が未経験スタートです。野球でいう“素振り”のように、先輩がマンツーマンで基礎から教えます。学歴も不問。大切なのは、素直さと最後までやり切る姿勢です。",
  },
  {
    q: "体力や上下関係は、正直きついですか？",
    a: "現場仕事なので体力は使いますが、厳しい部活を経験した皆さんなら心配いりません。むしろ体力・礼儀・根性は大きな武器になります。理不尽なシゴキではなく、成長のための指導です。",
  },
  {
    q: "頑張りは、ちゃんと評価されますか？",
    a: "はい。資格取得で手当が増え、現場での実力が役職・昇給に直結します。年功序列だけでなく、「やった分だけ返ってくる」評価制度。試合で結果を出せば認められる——それと同じです。",
  },
  {
    q: "給与や休みは、実際どうなんですか？",
    a: "カジュアル面談で、モデル年収・残業・休日の実データをすべてお見せします。入ってから「聞いてない」が一番不幸なので、先に全部話すのがTECNESのルールです。",
  },
  {
    q: "野球経験しかなくても、将来キャリアは築けますか？",
    a: "築けます。1年目の“素振り”から、スタメン、エース、そして現場を率いる職長（監督）へ。多くの先輩が未経験から現場のリーダーになっています。第二のキャリアの主役はあなたです。",
  },
];

// 会社概要
// TODO: クライアント支給情報に差し替え
const company = [
  { label: "会社名", value: "株式会社TECNES" },
  { label: "代表者", value: "―" },
  { label: "所在地", value: "―" },
  { label: "事業内容", value: "―" },
  { label: "設立", value: "―" },
];

/* ------------------------------------------------------------------
   page
------------------------------------------------------------------ */
export default function Home() {
  useReveal();
  const stickyShow = useStickyCta();

  return (
    <main className="wrap">
      {/* ============ HERO ============ */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img
            src="/images/TECNES_007.jpg"
            alt="現場で電気設備工事に取り組むTECNESの技術者"
          />
        </div>
        <div className="hero__en-watermark en">PLAY BALL</div>

        <div className="hero__topbar">
          <div className="hero__logo">
            <img src="/images/logo.png" alt="TECNES" />
            <span>TECNES</span>
          </div>
          <a href={ENTRY_URL} className="hero__nav-cta">
            応募する ▶
          </a>
        </div>

        <div className="hero__inner">
          <div className="hero__tag">
            <span>高卒・大卒・既卒OK｜元野球部・体育会系 歓迎</span>
          </div>
          <h1 className="hero__copy">
            甲子園は終わった。
            <br />
            <span className="line2">お前の全力は、まだだ。</span>
          </h1>
          <p className="hero__sub">
            引退したあの日から、本気になれるものを探しているなら。
            次の本気は、この現場にある。チームで戦い、努力が結果になる仕事——TECNES。
          </p>

          <div className="hero__badges">
            <div className="hbadge">
              <p className="hbadge__label">{STATS.inexperienced.label}</p>
              <p className="hbadge__num en">
                {STATS.inexperienced.num}
                <small>{STATS.inexperienced.unit}</small>
              </p>
            </div>
            <div className="hbadge">
              <p className="hbadge__label">{STATS.athletes.label}</p>
              <p className="hbadge__num en">
                {STATS.athletes.num}
                <small>{STATS.athletes.unit}</small>
              </p>
            </div>
            <div className="hbadge">
              <p className="hbadge__label">資格費用 会社負担</p>
              <p className="hbadge__num en">
                {STATS.license.num}
                <small>{STATS.license.unit}</small>
              </p>
            </div>
          </div>

          <div className="hero__actions">
            <div className="cta-stack">
              {/* TODO: CV手段確定後に調整 */}
              <a href={ENTRY_URL} className="btn btn--primary btn--main">
                まずは話を聞いてみる
                <span className="btn__note">（30秒で応募完了）</span>
              </a>
              <p className="cta-micro">{CTA_MICRO}</p>
            </div>
            <a href="#reasons" className="btn btn--ghost">
              なぜ元野球部なのか
            </a>
          </div>
        </div>

        <div className="scrolldown en">SCROLL</div>
      </section>

      {/* ============ EMPATHY ============ */}
      <section className="section empathy">
        <div className="inner">
          <div className="empathy__head reveal">
            <span className="kicker">Are you the one?</span>
            <p className="empathy__title">
              一つでも当てはまるなら、
              <br />
              <span className="accent">きっと、ここが合っている。</span>
            </p>
          </div>

          <div className="empathy__list">
            {empathy.map((t, i) => (
              <div className="empathy__item reveal" key={i}>
                <span className="empathy__check">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          <p className="empathy__punch reveal">
            その気持ち、全部“正解”だ。
            <br />
            <small>
              TECNESは、元野球部の「らしさ」がそのまま強みになる会社。
              <br />
              グラウンドを、現場に変えよう。
            </small>
          </p>
        </div>
      </section>

      {/* ============ REASONS ============ */}
      <section className="section reasons" id="reasons">
        <div className="inner">
          <div className="reasons__head reveal">
            <span className="kicker">Why baseball players win here</span>
            <h2 className="sec-title">
              なぜ、元野球部が
              <br />
              <span className="accent">現場で活躍できるのか。</span>
            </h2>
          </div>

          <div className="reasons__grid">
            {reasons.map((r) => (
              <div className="rcard reveal" key={r.no}>
                <div className="rcard__no en">{r.no}</div>
                <div className="rcard__eq">{r.eq}</div>
                <h3 className="rcard__title">
                  {r.title.split("\n").map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
                </h3>
                <p className="rcard__txt">{r.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAバンド 1 */}
      <CtaBand />

      {/* ============ WORK ============ */}
      <section className="section work" id="work">
        <div className="inner">
          <div className="reveal">
            <span className="kicker">Our field</span>
            <h2 className="sec-title">
              仕事は、電気で社会を動かすこと。
              <br />
              <span className="accent">言うなれば、“インフラの守備”だ。</span>
            </h2>
          </div>

          <div className="work__grid">
            <div className="work__photo reveal">
              <img src="/images/TECNES_005.jpg" alt="電気設備の施工に取り組む様子" />
              <span className="work__photo-badge">電気設備 施工・保守</span>
            </div>
            <div className="work__body reveal">
              <h3>ビル・工場・街の“電気”を、つくり、守る。</h3>
              <p>
                TECNESの仕事は、建物や設備の電気工事・保守。
                スイッチひとつで明かりが点き、機械が動く——その当たり前を、
                現場でつくっているのが私たちだ。専門用語は入社後に覚えればいい。
                まずは、野球で言うところの“各ポジション”をイメージしてほしい。
              </p>

              <div className="translate">
                {translate.map((row, i) => (
                  <div className="translate__row" key={i}>
                    <span className="translate__from">{row.from}</span>
                    <span className="translate__arrow">▶</span>
                    <span className="translate__to">{row.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STEP ============ */}
      <section className="section step" id="step">
        <div className="inner">
          <div className="reveal">
            <span className="kicker">Growth roadmap</span>
            <h2 className="sec-title">
              素振りから、監督へ。
              <br />
              <span className="accent">成長のロードマップ。</span>
            </h2>
            <p className="sec-lead" style={{ color: "rgba(255,255,255,0.82)" }}>
              入社1年目の“素振り”から、現場を率いる“監督（職長）”まで。
              一段ずつ、確実に。あなたの第二の野球人生の道筋です。
            </p>
          </div>

          <div className="step__timeline">
            {steps.map((s) => (
              <div className="scard reveal" key={s.no}>
                <div className="scard__phase">{s.phase}</div>
                <div className="scard__no en">{s.no}</div>
                <h3 className="scard__title">{s.title}</h3>
                <p className="scard__txt">{s.txt}</p>
                <span className="scard__tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAバンド 2 */}
      <CtaBand />

      {/* ============ NUMBERS ============ */}
      <section className="section numbers" id="numbers">
        <div className="inner">
          <div className="reveal">
            <span className="kicker">TECNES in numbers</span>
            <h2 className="sec-title">数字で見る、TECNESという“チーム”。</h2>
          </div>

          <div className="numbers__grid">
            {numbers.map((n, i) => (
              <div className="ncard reveal" key={i}>
                <p className="ncard__label">{n.label}</p>
                <p className="ncard__value">
                  <span className="ncard__num en">
                    <CountUp end={n.num} />
                  </span>
                  <span className="ncard__unit">{n.unit}</span>
                </p>
                <p className="ncard__note">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VOICE ============ */}
      <section className="section voice" id="voice">
        <div className="inner">
          <div className="reveal">
            <span className="kicker">Teammates' voice</span>
            <h2 className="sec-title">
              グラウンドを卒業した、
              <br />
              <span className="accent">先輩たちの声。</span>
            </h2>
          </div>

          <div className="voice__grid">
            {voices.map((v, i) => (
              <div className="vcard reveal" key={i}>
                {/* TODO: 社員写真支給後、NO PHOTOを <img src={v.img}> 表示に戻す */}
                <div className="vcard__photo nophoto" aria-label="写真準備中">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.2 3.8-6.5 8-6.5s8 2.3 8 6.5" />
                  </svg>
                  <span className="nophoto__txt en">NO PHOTO</span>
                </div>
                <div>
                  <p className="vcard__pos">{v.pos}</p>
                  <p className="vcard__catch">{v.catch}</p>
                  <p className="vcard__txt">{v.txt}</p>
                  <p className="vcard__name">
                    <b>{v.name}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAバンド 3 */}
      <CtaBand />

      {/* ============ HOW TO JOIN ============ */}
      <section className="section join" id="join">
        <div className="inner">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="kicker" style={{ justifyContent: "center" }}>
              How to join
            </span>
            <h2 className="sec-title">入社までは、たった4ステップ。</h2>
            <p className="sec-lead">
              選考というより、キャッチボール。まずは気軽に話すところから。
            </p>
          </div>

          <div className="join__grid">
            {joinSteps.map((s) => (
              <div className="jcard reveal" key={s.no}>
                <div className="jcard__no en">{s.no}</div>
                <h3 className="jcard__title">{s.title}</h3>
                <p className="jcard__txt">{s.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section faq" id="faq">
        <div className="inner-narrow">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="kicker" style={{ justifyContent: "center" }}>
              Before you step up
            </span>
            <h2 className="sec-title">その不安、全部つぶしておく。</h2>
          </div>

          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className="qa reveal" key={i}>
                <p className="qa__q">
                  <i>Q</i>
                  <span>{f.q}</span>
                </p>
                <p className="qa__a">
                  <i>A</i>
                  <span>{f.a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPANY ============ */}
      <section className="section company" id="company">
        <div className="inner-narrow">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="kicker" style={{ justifyContent: "center" }}>
              Company
            </span>
            <h2 className="sec-title">運営会社</h2>
          </div>

          <div className="ctable reveal">
            <table>
              <tbody>
                {company.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta" id="entry">
        <div className="cta__bg">
          <img src="/images/TECNES_001.jpg" alt="" />
        </div>
        <div className="cta__inner inner">
          <p className="cta__lead en reveal">PLAY BALL — さあ、次の本気へ。</p>
          <h2 className="cta__copy reveal">
            バットを、
            <br />
            工具に持ち替えろ。
          </h2>
          <p className="cta__sub reveal">
            未経験でいい。学歴もいらない。必要なのは、まだ本気になりたいという気持ちだけ。
            <br />
            あなたのその全力を、TECNESのチームで待っている。
          </p>
          <div className="cta__actions reveal">
            <div className="cta-stack">
              <a href={ENTRY_URL} className="btn btn--primary btn--lg">
                まずは話を聞いてみる
                <span className="btn__arrow">▶</span>
              </a>
              <p className="cta-micro">{CTA_MICRO}</p>
            </div>
            <a href="#faq" className="btn btn--ghost btn--lg">
              まず不安を解消する
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="foot">
        <div className="foot__logo">TECNES</div>
        <p>元野球部・体育会系のための採用サイト</p>
        <p style={{ marginTop: 8 }}>© 2026 TECNES inc. All rights reserved.</p>
      </footer>

      {/* sticky CTA (mobile) */}
      <div className={`sticky-cta${stickyShow ? " is-show" : ""}`}>
        <a href={ENTRY_URL} className="btn btn--primary">
          まずは話を聞いてみる ▶
        </a>
        <p className="sticky-cta__micro">{CTA_MICRO}</p>
      </div>
    </main>
  );
}
