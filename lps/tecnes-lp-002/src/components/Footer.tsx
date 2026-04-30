export default function Footer() {
  return (
    <footer className="bg-ink text-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-16 md:pt-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-sans font-black tracking-[0.18em] text-2xl">
              TECNES
            </p>
            <p className="mt-4 text-xs tracking-[0.3em] text-white/60">
              ENGINEERING THE NEXT
            </p>
            <p className="mt-8 text-sm leading-loose text-white/75">
              株式会社TECNES
              <br />
              ものづくりの現場と最先端の技術を結ぶ、
              <br />
              次世代の産業エンジニアリングカンパニー。
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] text-sky">SITEMAP</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#why" className="hover:text-sky transition">私たちの強み</a></li>
              <li><a href="#members" className="hover:text-sky transition">メンバー</a></li>
              <li><a href="#office" className="hover:text-sky transition">オフィス</a></li>
              <li><a href="#values" className="hover:text-sky transition">8つの価値観</a></li>
              <li><a href="#jobs" className="hover:text-sky transition">募集職種・エントリー</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.4em] text-sky">CONTACT</p>
            <p className="mt-4 text-sm leading-loose text-white/75">
              採用に関するお問い合わせは、
              <br />
              エントリーフォームよりお願いいたします。
            </p>
            <a
              href="#jobs"
              className="mt-5 inline-flex items-center gap-2 border border-white/40 text-white text-xs px-5 py-3 rounded-full hover:bg-white/10 transition"
            >
              エントリーする <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24" aria-hidden>
        <p className="font-sans font-black leading-[0.85] tracking-[-0.03em] text-white/[0.06] text-[26vw] md:text-[20vw] whitespace-nowrap text-center select-none">
          TECNES
        </p>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pb-10 -mt-6 md:-mt-10">
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} TECNES Inc. All rights reserved.</p>
          <p className="tracking-widest">RECRUIT SITE</p>
        </div>
      </div>
    </footer>
  );
}
