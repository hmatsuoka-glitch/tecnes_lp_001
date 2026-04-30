import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const offices = [
  {
    image: "/images/TECNES_008.jpg",
    label: "OPEN LAB",
    title: "境界をなくしたエンジニアリング・スペース",
    body:
      "設計・試作・検証を一つのフロアに集約。専門が違うメンバー同士でも、振り向けばすぐに相談できる距離感を大切にしています。",
  },
  {
    image: "/images/TECNES_009.jpg",
    label: "FOCUS BOOTH",
    title: "深く考えるための個室ブース",
    body:
      "コードレビューや構想図の整理など、集中したい仕事のために個室ブースを完備。ミーティングで途切れない時間を確保できます。",
  },
  {
    image: "/images/TECNES_002.jpg",
    label: "REFRESH",
    title: "対話が自然に生まれるラウンジ",
    body:
      "立ち話から雑談、ランチタイムまで。役職や部署を越えてつながる場所として、ラウンジは社員の交差点になっています。",
  },
];

export default function Office() {
  return (
    <section id="office" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionTitle
          eyebrow="OFFICE"
          title={
            <>
              働く環境への
              <br />
              小さなこだわりが、
              <br className="md:hidden" />
              チームを強くする。
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {offices.map((o, i) => (
            <Reveal as="article" key={o.label} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('${o.image}')` }}
              />
              <p className="mt-5 text-[10px] tracking-[0.4em] text-accent">
                {o.label}
              </p>
              <h3 className="mt-2 font-serif font-black text-lg leading-[1.6] text-ink">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-loose text-ink/75">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
