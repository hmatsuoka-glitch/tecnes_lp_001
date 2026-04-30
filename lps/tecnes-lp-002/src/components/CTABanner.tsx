import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/TECNES_005.jpg')" }}
    >
      <div className="absolute inset-0 bg-ink/70" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 text-white">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] text-accent mb-3">JOIN US</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-serif font-black text-2xl md:text-4xl leading-[1.4]">
            募集職種の具体的な仕事内容を
            <br className="hidden md:block" />
            ご紹介します。
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <a
            href="#jobs"
            className="mt-8 inline-flex items-center gap-3 bg-white text-ink text-sm font-bold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition"
          >
            募集要項を見る <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
