import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const colorEyebrow = invert ? "text-accent" : "text-accent";
  const colorTitle = invert ? "text-white" : "text-ink";
  const colorDesc = invert ? "text-white/75" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <Reveal>
        <p className={`text-[11px] md:text-xs tracking-[0.4em] mb-4 ${colorEyebrow}`}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`font-sans font-black leading-[1.4] tracking-tight text-2xl md:text-[2.5rem] ${colorTitle}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className={`mt-6 text-sm md:text-base leading-loose ${colorDesc}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
