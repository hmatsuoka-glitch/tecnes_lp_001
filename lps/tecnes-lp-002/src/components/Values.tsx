import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const values = [
  { icon: "/images/about_ico01.svg", title: "現場主義", body: "答えは図面ではなく現場にある。手を動かし、目で見て確かめる。", bg: "bg-[#fff5cf]" },
  { icon: "/images/about_ico02.svg", title: "対話を恐れない", body: "違う専門が交わる場では、率直な対話こそが価値を生む。", bg: "bg-[#dde4ff]" },
  { icon: "/images/about_ico03.svg", title: "前提を疑う", body: "「いつも通り」を疑い、もっと良い方法を探し続ける。", bg: "bg-[#ffe2cc]" },
  { icon: "/images/about_ico04.svg", title: "学び続ける", body: "技術の進歩に置いて行かれない。経験年数より探究心を尊ぶ。", bg: "bg-[#e1f0d4]" },
  { icon: "/images/about_ico05.svg", title: "誠実な納期", body: "出来ない約束はしない。約束した期日は何があっても守る。", bg: "bg-[#efd7ff]" },
  { icon: "/images/about_ico06.svg", title: "顧客の隣に立つ", body: "受注者ではなくパートナーとして、お客様の事業に伴走する。", bg: "bg-[#cfe9ff]" },
  { icon: "/images/about_ico07.svg", title: "安全は最上位", body: "ものづくりの土台は安全。一歩でも近道しない、を徹底する。", bg: "bg-[#ffd7d7]" },
  { icon: "/images/about_ico08.svg", title: "次へつなぐ", body: "個人の知恵を組織の財産に。次の世代が立てる土台をつくる。", bg: "bg-[#e2e2ee]" },
];

export default function Values() {
  return (
    <section id="values" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="bg-navy text-white rounded-3xl px-8 py-14 md:px-16 md:py-20">
          <div className="text-center">
            <Reveal>
              <p className="text-[10px] md:text-xs tracking-[0.5em] text-sky mb-4">
                8 VALUES
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-sans font-black text-2xl md:text-[2.4rem] leading-[1.4]">
                TECNESメンバーが
                <br />
                大切にしている8つの価値観。
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-sm md:text-base text-white/75 leading-loose max-w-2xl mx-auto">
                組織の方向性は、合言葉ではなく日々の判断で決まる。
                TECNESの判断軸となっている8つの価値観をご紹介します。
              </p>
            </Reveal>
          </div>

          <ul className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className={`${v.bg} rounded-2xl p-5 md:p-7 h-full`}>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 flex items-center justify-center">
                    <img
                      src={v.icon}
                      alt=""
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                  <h3 className="mt-5 font-sans font-black text-base md:text-lg text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-[13px] leading-relaxed text-navy/75">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
