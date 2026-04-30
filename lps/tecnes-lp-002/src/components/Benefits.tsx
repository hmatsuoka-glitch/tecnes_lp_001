import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const benefits = [
  {
    title: "技術手当・資格手当",
    body:
      "業務に関連する資格は受験料・更新料を会社が負担。取得後は月次の手当が支給されます。",
  },
  {
    title: "学習支援制度",
    body:
      "書籍購入・オンライン講座・社外勉強会の参加費を全額補助。半期ごとに上限を設けず実費精算。",
  },
  {
    title: "フレックスタイム",
    body:
      "コアタイム10時〜15時。子どもの送迎や通院など、ライフイベントに合わせた働き方が可能です。",
  },
  {
    title: "リモートワーク",
    body:
      "設計・開発業務を中心に、週2日までのリモート勤務に対応。チームごとに最適なバランスを設計します。",
  },
  {
    title: "健康サポート",
    body:
      "年2回の健康診断、人間ドック補助、メンタルヘルス相談窓口、インフルエンザ予防接種費用の負担。",
  },
  {
    title: "リフレッシュ休暇",
    body:
      "勤続3年・5年・10年のタイミングで連続休暇を付与。長く働く人ほど時間で報われる仕組み。",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <SectionTitle
          eyebrow="WORKING STYLE"
          title={
            <>
              長く働ける環境を
              <br />
              制度で支える。
            </>
          }
          description="「ものづくり業界だから仕方ない」をなくしたい。家族や自分自身を犠牲にせず、技術者として走り続けるための制度を整えています。"
        />

        <ul className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-8">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={((i % 2) + 1) as 1 | 2}>
              <div className="border-t-2 border-navy pt-6">
                <h3 className="font-sans font-black text-lg md:text-xl text-navy">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-loose text-ink/75">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
