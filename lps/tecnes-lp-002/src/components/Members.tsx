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
    <section id="members" className="bg-navy py-24 md:py-36 text-white">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <SectionTitle
          invert
          eyebrow="MEMBERS"
          title={
            <>
              メンバーが語る、
              <br />
              TECNESという場所。
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-12">
          {members.map((m, i) => (
            <Reveal as="article" key={m.name} delay={(i + 1) as 1 | 2}>
              <div className="flex items-start gap-5 md:gap-7">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center shrink-0 ring-4 ring-white/15"
                  style={{ backgroundImage: `url('${m.image}')` }}
                />
                <div className="pt-2">
                  <p className="text-[10px] tracking-[0.4em] text-sky">
                    INTERVIEW {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-sans font-black text-base md:text-xl leading-[1.7]">
                    「{m.quote}」
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-loose text-white/75">{m.body}</p>
              <div className="mt-6 pt-5 border-t border-white/15 text-sm">
                <p className="font-bold">{m.name}</p>
                <p className="text-white/60 text-xs mt-1">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 md:mt-20 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-10 md:px-12 md:py-12">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-dashed border-white/30 flex items-center justify-center shrink-0">
              <span className="text-[10px] tracking-widest text-white/60 text-center">
                COMING
                <br />
                SOON
              </span>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-sky">STAFF DAILY</p>
              <p className="mt-2 font-sans font-black text-xl md:text-2xl">
                スタッフの1日
              </p>
              <p className="mt-3 text-sm text-white/70 leading-loose">
                エンジニアの一日のスケジュールを近日公開予定。出社から退勤まで、現場のリアルをお届けします。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
