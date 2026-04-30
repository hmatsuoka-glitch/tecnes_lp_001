import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const values = [
  {
    icon: "/images/about_ico01.svg",
    title: "現場主義",
    body: "答えは図面ではなく現場にある。手を動かし、目で見て確かめる。",
    bg: "bg-[#fff5d6]",
  },
  {
    icon: "/images/about_ico02.svg",
    title: "対話を恐れない",
    body: "違う専門が交わる場では、率直な対話こそが価値を生む。",
    bg: "bg-[#dde9ff]",
  },
  {
    icon: "/images/about_ico03.svg",
    title: "前提を疑う",
    body: "「いつも通り」を疑い、もっと良い方法を探し続ける。",
    bg: "bg-[#ffe6d6]",
  },
  {
    icon: "/images/about_ico04.svg",
    title: "学び続ける",
    body: "技術の進歩に置いて行かれない。経験年数より探究心を尊ぶ。",
    bg: "bg-[#e6f5d6]",
  },
  {
    icon: "/images/about_ico05.svg",
    title: "誠実な納期",
    body: "出来ない約束はしない。約束した期日は何があっても守る。",
    bg: "bg-[#f1d6ff]",
  },
  {
    icon: "/images/about_ico06.svg",
    title: "顧客の隣に立つ",
    body: "受注者ではなくパートナーとして、お客様の事業に伴走する。",
    bg: "bg-[#d6f1ff]",
  },
  {
    icon: "/images/about_ico07.svg",
    title: "安全は最上位",
    body: "ものづくりの土台は安全。一歩でも近道しない、を徹底する。",
    bg: "bg-[#ffe0e0]",
  },
  {
    icon: "/images/about_ico08.svg",
    title: "次へつなぐ",
    body: "個人の知恵を組織の財産に。次の世代が立てる土台をつくる。",
    bg: "bg-[#e8e8f0]",
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionTitle
          invert
          eyebrow="8 VALUES"
          title={
            <>
              TECNESメンバーが
              <br />
              大切にしている8つの価値観。
            </>
          }
        />

        <ul className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className={`${v.bg} rounded-2xl p-5 md:p-7 h-full`}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/70 flex items-center justify-center">
                  <img
                    src={v.icon}
                    alt=""
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />
                </div>
                <h3 className="mt-5 font-serif font-black text-base md:text-lg text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-ink/75">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
