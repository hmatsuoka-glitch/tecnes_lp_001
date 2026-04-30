import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-end overflow-hidden bg-ink text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/TECNES_001.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/80" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 md:px-10 pb-20 md:pb-32 pt-32">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.4em] text-accent mb-6">
            RECRUIT 2026
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-serif font-black leading-[1.25] text-[2.2rem] md:text-[4.5rem]">
            <span className="block">技術でつなぐ、</span>
            <span className="block">ものづくりの未来。</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-xl text-sm md:text-base leading-loose text-white/85">
            株式会社TECNESは、産業の現場と最先端の技術を結び、
            <br className="hidden md:block" />
            次の世代に受け継がれるものづくりを共に創る仲間を探しています。
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#jobs"
              className="inline-flex items-center gap-3 bg-white text-ink text-sm font-bold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition"
            >
              募集要項を見る <span aria-hidden>→</span>
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-3 border border-white/40 text-white text-sm px-7 py-4 rounded-full hover:bg-white/10 transition"
            >
              私たちについて
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/60 hidden md:block">
        SCROLL
      </div>
    </section>
  );
}
