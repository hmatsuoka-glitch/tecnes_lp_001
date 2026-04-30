import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Item = {
  no: string;
  title: string;
  body: string;
  images?: string[];
  donut?: { label: string; value: number; sub: string };
  bars?: { label: string; value: string }[];
  quote?: string;
  kpis?: { label: string; value: string; unit?: string }[];
};

const items: Item[] = [
  {
    no: "01",
    title: "現場と技術をつなぐ\nハイブリッドな専門集団",
    body:
      "金属加工・機械設計・制御システム──異なる領域の専門家が一つのチームを組み、お客様の現場課題に対して横断的な解を提示します。経験の浅いエンジニアでも、複数領域に触れながら成長できる環境です。",
    images: ["/images/TECNES_002.jpg", "/images/TECNES_003.jpg"],
  },
  {
    no: "02",
    title: "数字で証明される、\n働きやすさへの投資。",
    body:
      "残業時間の見える化、フレキシブルな勤務時間、有給取得の推奨。ものづくりの現場でありながら、IT企業並みのワークライフバランスを目指して制度をアップデートし続けています。",
    donut: { label: "20代・30代の比率", value: 62, sub: "若手中心のチーム構成" },
    bars: [
      { label: "平均残業時間（月）", value: "12h" },
      { label: "有給取得率", value: "84%" },
    ],
  },
  {
    no: "03",
    title: "クライアントの成長を\n自分の喜びにできる仕事。",
    body:
      "TECNESは、製造業のお客様にとっての「もう一つの開発部門」を志向しています。長く伴走するからこそ、技術が形になる瞬間も、量産が立ち上がる瞬間も、クライアントと一緒に味わえます。",
    images: ["/images/TECNES_004.jpg"],
    quote:
      "「外注先」ではなく、隣で一緒に汗をかく開発チーム。TECNESの仕事の手応えは、そこにあります。",
    kpis: [
      { label: "5年以上の継続取引", value: "78", unit: "%" },
      { label: "年間プロジェクト数", value: "120", unit: "+" },
      { label: "リピート受注率", value: "92", unit: "%" },
    ],
  },
];

function Donut({ value }: { value: number }) {
  const r = 56;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <svg viewBox="0 0 140 140" className="w-32 h-32 md:w-40 md:h-40">
      <circle
        cx="70"
        cy="70"
        r={r}
        fill="none"
        stroke="#dbe2f3"
        strokeWidth="14"
      />
      <circle
        cx="70"
        cy="70"
        r={r}
        fill="none"
        stroke="#3563e9"
        strokeWidth="14"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
      />
      <text
        x="70"
        y="78"
        textAnchor="middle"
        className="fill-navy font-black"
        style={{ fontSize: "26px" }}
      >
        {value}%
      </text>
    </svg>
  );
}

export default function Strengths() {
  return (
    <section id="why" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <SectionTitle
          eyebrow="WHY TECNES"
          title={
            <>
              TECNESならではの
              <br />
              強みと特徴。
            </>
          }
        />

        <ul className="mt-14 md:mt-20 space-y-6 md:space-y-8">
          {items.map((it) => (
            <Reveal as="li" key={it.no}>
              <article className="bg-cream rounded-2xl p-7 md:p-12 grid md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans font-black text-5xl md:text-6xl text-brand leading-none">
                      {it.no}
                    </span>
                    <span className="text-[10px] tracking-[0.4em] text-brand/70 mb-2">
                      POINT
                    </span>
                  </div>
                  <h3 className="mt-6 font-sans font-black text-xl md:text-[1.65rem] leading-[1.55] whitespace-pre-line text-navy">
                    {it.title}
                  </h3>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm md:text-[15px] leading-loose text-ink/80">
                    {it.body}
                  </p>

                  {it.images && (
                    <div
                      className={`mt-6 grid gap-3 ${
                        it.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                      }`}
                    >
                      {it.images.map((src) => (
                        <div
                          key={src}
                          className="aspect-[4/3] bg-cover bg-center rounded-xl"
                          style={{ backgroundImage: `url('${src}')` }}
                        />
                      ))}
                    </div>
                  )}

                  {it.donut && (
                    <div className="mt-7 grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-5 bg-white rounded-xl px-5 py-5">
                        <Donut value={it.donut.value} />
                        <div>
                          <p className="text-[11px] tracking-widest text-muted">
                            {it.donut.label}
                          </p>
                          <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                            {it.donut.sub}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {it.bars?.map((b) => (
                          <div
                            key={b.label}
                            className="bg-white rounded-xl px-5 py-4 flex items-center justify-between"
                          >
                            <p className="text-[11px] tracking-widest text-muted">
                              {b.label}
                            </p>
                            <p className="font-sans font-black text-2xl text-brand">
                              {b.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {it.quote && (
                    <figure className="mt-7 bg-navy text-white rounded-2xl px-6 py-7 md:px-8 md:py-8 relative overflow-hidden">
                      <span
                        aria-hidden
                        className="absolute -top-3 left-5 font-serif text-7xl text-sky/40 leading-none select-none"
                      >
                        “
                      </span>
                      <blockquote className="relative font-sans font-bold text-base md:text-lg leading-[1.8] pl-6">
                        {it.quote}
                      </blockquote>
                    </figure>
                  )}

                  {it.kpis && (
                    <dl className="mt-4 grid grid-cols-3 gap-3">
                      {it.kpis.map((k) => (
                        <div
                          key={k.label}
                          className="bg-white rounded-xl px-4 py-5 text-center"
                        >
                          <dt className="text-[10px] tracking-widest text-muted leading-tight">
                            {k.label}
                          </dt>
                          <dd className="mt-2 font-sans font-black text-brand">
                            <span className="text-2xl md:text-3xl">{k.value}</span>
                            {k.unit && (
                              <span className="text-base ml-0.5">{k.unit}</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
