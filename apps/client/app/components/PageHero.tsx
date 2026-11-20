import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  compact?: boolean;
  tone?: "light" | "dark";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
  tone = "light",
}: PageHeroProps) {
  return (
    <section data-reveal
      className={[
        "relative flex items-center py-5 md:py-5",
        compact ? "min-h-[290px] md:min-h-[290px]" : "min-h-[318px] md:min-h-[390px]",
        tone === "dark" ? "bg-[#071f3b] text-white" : "bg-white text-[#071f3b]",
      ].join(" ")}
    >
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
        <span className={[
          "text-xs font-semibold uppercase tracking-[0.14em]",
          tone === "dark" ? "text-white/70" : "text-[#071f3b]",
        ].join(" ")}>
          {eyebrow}
        </span>
        <h1 className={[
          "mt-5 max-w-[960px] text-[clamp(2.75rem,5.2vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]",
          tone === "dark" ? "text-white" : "text-[#071f3b]",
        ].join(" ")}>
          {title}
        </h1>
        <p className={[
          "mt-5 max-w-[760px] text-[clamp(1.05rem,1.6vw,1.25rem)]",
          tone === "dark" ? "text-white" : "text-[#071f3b]",
        ].join(" ")}>
          {description}
        </p>
      </div>
    </section>
  );
}
