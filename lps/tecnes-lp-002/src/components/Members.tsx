import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const members = [
  {
    name: "佐藤 涼介",
    role: "機械設計エンジニア / 入社4年目",
    image: "/images/TECNES_006.jpg",
    quote:
      "図面の中だけでは見えなかった現場の声を、設計に反映できるようになったのが大きい。",
    body:
      "前職では大手メーカーで標準品を担当していました。TECNESに移ってからは、お客様ごとに違う要件と向き合いながらゼロから組み上げる難しさと面白さを毎日味わっています。",
  },
  {
    name: "髙橋 美咲",
    role: "制御ソフトウェア開発 / 入社2年目",
    image: "/images/TECNES_007.jpg",
    quote:
      "新人でも、自分の書いたコードが実際の装置を動かすところまで見届けられる。",
    body:
      "学生時代は組込みの研究をしていました。TECNESではハードもソフトも垣根なく相談できる文化があり、聞きにくい疑問もすぐ解消できます。",
  },
];

export default function Members() {
  return (
    <section id="members" className="bg-[#f5f6f8] py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionTitle
          eyebrow="MEMBERS"
          title={
            <>
              メンバーが語る、
              <br />
              TECNESという場所。
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-10">
          {members.map((m, i) => (
            <Reveal as="article" key={m.name} delay={(i + 1) as 1 | 2}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_24px_rgba(13,27,42,0.06)]">
                <div
                  className="aspect-[5/4] bg-cover bg-center"
                  style={{ backgroundImage: `url('${m.image}')` }}
                />
                <div className="p-7 md:p-9">
                  <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink">
                    「{m.quote}」
                  </p>
                  <p className="mt-6 text-sm leading-loose text-ink/75">{m.body}</p>
                  <div className="mt-6 pt-5 border-t border-line text-sm">
                    <p className="font-bold text-ink">{m.name}</p>
                    <p className="text-muted text-xs mt-1">{m.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-white rounded-2xl px-8 py-10 md:px-12 md:py-12">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-dashed border-ink/30 flex items-center justify-center shrink-0">
              <span className="text-[10px] tracking-widest text-ink/60">
                COMING
                <br />
                SOON
              </span>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.4em] text-accent">
                STAFF DAILY
              </p>
              <p className="mt-2 font-serif font-black text-xl md:text-2xl text-ink">
                スタッフの1日
              </p>
              <p className="mt-3 text-sm text-muted leading-loose">
                エンジニアの一日のスケジュールを近日公開予定。出社から退勤まで、現場のリアルをお届けします。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
