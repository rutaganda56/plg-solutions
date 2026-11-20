import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/app/components/CTASection";
import {
  approach,
  capabilities,
  connected,
  cta,
  hero,
  sectors,
  sectorsHeading,
  signals,
  whatWeDo,
} from "@/app/lib/home";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Advanced technology, grounded delivery",
  description:
    "PLG Solutions designs, integrates and delivers technology systems for organisations operating in complex, real-world environments.",
};
export default function Home() {
  return (
    <>
      <section data-reveal className="relative overflow-hidden bg-[#071f3b] text-white">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px] py-10 md:py-18 lg:py-22">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_390px]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Digital infrastructure
              </span>
              <h1 className="mt-6 max-w-[920px] text-[clamp(3rem,5.5vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                {hero.titlePrimary}
                <span className="block text-white/65">{hero.titleSecondary}</span>
              </h1>
              <p className="mt-8 max-w-[650px] text-base leading-7 text-white md:text-lg">
                {hero.lede}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link className="inline-flex min-h-14 items-center justify-between gap-8 rounded-full border border-white/40 px-6 text-sm font-semibold text-white" href="/capabilities">
                    <span>{hero.primaryCta}</span>
                  </Link>
                  <Link className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white" href="/contact">
                    {hero.secondaryCta}
                  </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 border border-white/20 rounded-[10px] ">
              {hero.telemetry.map((s) => (
                <div
                  key={s.label}
                  className={[
                    "min-h-15 border-r border-b border-white/20 p-2",
                  ].join(" ")}
                >
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.10em] text-white/70">
                    {s.label}
                  </p>
                  <p className="mt-2 text-base font-semibold uppercase text-white">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-3 border-t border-white/20 pt-7 md:grid-cols-[1fr_auto] md:items-center">
            <span className="max-w-[700px] text-lg font-semibold">{hero.brandline}</span>
            <small className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{hero.brandlineSmall}</small>
          </div>
        </div>
      </section>
      <section data-reveal className="bg-[#071f3b] text-white">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid md:grid-cols-3" role="region" aria-label="PLG Solutions delivery principles">
            {signals.map((signal) => (
              <article className="px-0 py-6 md:px-7" key={signal.index}>
                <span className="text-xs font-semibold text-white/55">{signal.index}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-1 text-sm text-white/65">{signal.body}</p>
              </article>
            ))}
          </div>
          <div className="py-5 text-right text-[0.67rem] font-bold tracking-[0.16em] text-white/55">DEPENDABLE BY DESIGN</div>
        </div>
      </section>

      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-8 pb-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]/60">{whatWeDo.eyebrow}</span>
              <h2 className="mt-4 max-w-[760px] text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">{whatWeDo.title}</h2>
            </div>
            <p className="max-w-[570px] text-base leading-7 text-[#071f3b]/65 md:justify-self-end">{whatWeDo.lede}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {capabilities.map((capability, capabilityIndex) => (
              <article data-reveal-item
                className={[
                  "flex min-h-[300px] flex-col rounded-[16px] p-7 md:p-8",
                  capabilityIndex === 0 ? "border border-[#071f3b] bg-[#071f3b] text-white md:col-span-8" :
                  capabilityIndex === 1 ? "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-4" :
                  "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-4",
                ].join(" ")}
                id={capability.anchor}
                key={capability.index}
              >
                <div className="flex items-center justify-between">
                  <span className={[
                    "text-xs font-semibold tracking-[0.12em]",
                    capabilityIndex === 0 ? "text-white" : "text-[#071f3b]",
                  ].join(" ")}>
                    {capability.index} / {capability.category}
                  </span>
                  <span className={[
                    "size-2 rounded-full",
                    capabilityIndex === 0 ? "bg-white" : "bg-[#071f3b]",
                  ].join(" ")} />
                </div>
                <h2 className="mt-7 max-w-[560px] text-[clamp(1.45rem,2.2vw,2rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
                  {capability.title}
                </h2>
                <p className={[
                  "mt-4 max-w-[490px] leading-7",
                  capabilityIndex === 0 ? "text-white" : "text-[#071f3b]",
                ].join(" ")}>
                  {capability.body}
                </p>
                <Link
                  className={[
                    "mt-auto inline-flex items-center pt-7 font-semibold",
                    capabilityIndex === 0 ? "text-white" : "text-[#071f3b]",
                  ].join(" ")}
                  href={`/capabilities#${capability.anchor}`}
                >
                    {whatWeDo.link} <span aria-hidden="true"></span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{connected.eyebrow}</span>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
              {connected.live}
            </p>
          </div>
          <div className="grid gap-8 py-12 md:grid-cols-[0.9fr_1.1fr]">
            <h2 className="max-w-[620px] text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">{connected.title}</h2>
            <p className="max-w-[620px] leading-7 text-white">{connected.lede}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-12">
            {connected.cards.map((card, cardIndex) => (
              <article data-reveal-item
                className={[
                  "flex min-h-[220px] flex-col rounded-[16px] bg-white p-7 text-[#071f3b]",
                  cardIndex === 0 ? "md:col-span-5" : cardIndex === 1 ? "md:col-span-3" : "md:col-span-4",
                ].join(" ")}
                key={card.index}
              >
                <span className="text-xs font-semibold text-[#071f3b]">{card.index}</span>
                <h3 className="mt-auto text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#071f3b]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-8 pb-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]/60">Where we work</span>
              <h2 className="mt-4 max-w-[760px] text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">{sectorsHeading}</h2>
            </div>
            <p className="max-w-[570px] text-base leading-7 text-[#071f3b]/65 md:justify-self-end">{sectors.map((sector) => sector.title).join(" · ")}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector, sectorIndex) => (
              <Link data-reveal-item
                className={[
                  "flex min-h-40 flex-col justify-between rounded-[16px] p-5",
                  sectorIndex === 0
                    ? "bg-[#071f3b] text-white"
                    : "border border-[#071f3b]/15 bg-white text-[#071f3b]",
                ].join(" ")}
                href={`/industries#${sector.anchor}`}
                key={sector.anchor}
              >
                <span className={sectorIndex === 0 ? "text-xs text-white" : "text-xs text-[#071f3b]"} aria-hidden="true">
                  <Image src={sector.index} alt="" width={24} height={24} />
                </span>
                <strong
                  className={[
                    "block max-w-[180px] text-base leading-snug",
                    sectorIndex === 0 ? "text-white" : "text-[#071f3b]",
                  ].join(" ")}
                >
                  {sector.title}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1320px] gap-12 md:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{approach.eyebrow}</span>
            <h2 className="mt-4 max-w-[620px] text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">{approach.title}</h2>
            <p className="mt-5 max-w-[560px] leading-7 text-white">{approach.lede}</p>
            <div
              className="mt-8 min-h-64 bg-cover bg-center"
              role="img"
              aria-label="Institutional operations centre"
              style={{
                backgroundImage: `url("${approach.image}")`,
                filter: "grayscale(100%) contrast(1.15)",
              }}
            >
              <span className="block bg-[#071f3b] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white">{approach.imageCaption}</span>
            </div>
          </div>
          <div className="grid gap-5">
            {approach.steps.map((step) => (
              <article data-reveal-item
                className="grid min-h-[150px] grid-cols-[48px_1fr] gap-4 rounded-[16px] border border-white/15 p-6"
                key={step.index}
              >
                <span className="text-xs font-semibold text-white">{step.index}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${cta.title} ${cta.titleLine2}`}
        description={cta.body}
      />
    </>
  );
}
