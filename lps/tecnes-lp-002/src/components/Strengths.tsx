import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  {
    no: "01",
    title: "現場と技術をつなぐ\nハイブリッドな専門集団",
    body:
      "金属加工・機械設計・制御システム──異なる領域の専門家が一つのチームを組み、お客様の現場課題に対して横断的な解を提示します。経験の浅いエンジニアでも、複数領域に触れながら成長できる環境です。",
    images: ["/images/TECNES_002.jpg", "/images/TECNES_003.jpg"],
  },
  {
    no: "02",
    title: "数字で証明される\n働きやすさへの投資",
    body:
      "残業時間の見える化、フレキシブルな勤務時間、有給取得の推奨。ものづくりの現場でありながら、IT企業並みのワークライフバランスを目指して制度をアップデートし続けています。",
    stats: [
      { label: "20代・30代の比率", value: "62%", unit: "" },
      { label: "平均残業時間（月）", value: "12", unit: "h" },
      { label: "有給取得率", value: "84", unit: "%" },
    ],
  },
  {
    no: "03",
    title: "クライアントの成長を\n自分の喜びにできる仕事",
    body:
      "TECNESは、製造業のお客様にとっての「もう一つの開発部門」を志向しています。長く伴走するからこそ、技術が形になる瞬間も、量産が立ち上がる瞬間も、クライアントと一緒に味わえます。",
    images: ["/images/TECNES_004.jpg"],
  },
];

export default function Strengths() {
  return (
    <section id="why" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
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

        <ul className="mt-16 md:mt-24 space-y-16 md:space-y-24">
          {items.map((it) => (
            <Reveal as="li" key={it.no}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-5xl md:text-7xl text-accent leading-none">
                      {it.no}
                    </span>
                    <span className="h-px flex-1 bg-line mt-6" />
                  </div>
                  <h3 className="mt-6 font-serif font-black text-xl md:text-2xl leading-[1.6] whitespace-pre-line text-ink">
                    {it.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm md:text-base leading-loose text-ink/80">
                    {it.body}
                  </p>

                  {it.images && (
                    <div className={`mt-8 grid gap-4 ${it.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {it.images.map((src) => (
                        <div
                          key={src}
                          className="aspect-[4/3] bg-cover bg-center rounded-md"
                          style={{ backgroundImage: `url('${src}')` }}
                        />
                      ))}
                    </div>
                  )}

                  {it.stats && (
                    <div className="mt-8 grid sm:grid-cols-3 gap-3">
                      {it.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg bg-navy text-white px-5 py-6"
                        >
                          <p className="text-[11px] tracking-widest text-white/70">
                            {s.label}
                          </p>
                          <p className="mt-2 font-serif font-black">
                            <span className="text-3xl md:text-4xl">{s.value}</span>
                            <span className="text-base ml-1">{s.unit}</span>
                          </p>
                        </div>
                      ))}
                    </div>
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
