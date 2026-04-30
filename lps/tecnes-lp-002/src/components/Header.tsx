export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-sans font-black tracking-[0.18em] text-navy text-lg md:text-xl">
            TECNES
          </span>
          <span className="hidden md:inline text-[11px] tracking-[0.3em] text-muted">
            RECRUIT
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#why" className="hover:text-accent transition">私たちの強み</a>
          <a href="#members" className="hover:text-accent transition">メンバー</a>
          <a href="#office" className="hover:text-accent transition">オフィス</a>
          <a href="#values" className="hover:text-accent transition">価値観</a>
          <a href="#jobs" className="hover:text-accent transition">募集職種</a>
        </nav>
        <a
          href="#jobs"
          className="inline-flex items-center gap-2 bg-ink text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-navy transition"
        >
          エントリー
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
