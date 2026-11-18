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
  videos,
} from "@/app/lib/home";

export const metadata: Metadata = {
  title: "Advanced technology, grounded delivery",
  description:
    "PLG Solutions designs, integrates and delivers technology systems for organisations operating in complex, real-world environments.",
};
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="display">
                {hero.titlePrimary} <span className="accent">{hero.titleSecondary}</span>
              </h1>
              <p className="lede">{hero.lede}</p>
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="btns">
                  <Link className="btn primary" href="/capabilities">
                    {hero.primaryCta} <span aria-hidden="true"></span>
                  </Link>
                  <Link className="btn secondary" href="/contact">
                    {hero.secondaryCta}
                  </Link>
                </div>

                <div className="w-full md:w-[420px]">
                  <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/50 backdrop-blur-md">
                    {hero.telemetry.map((s, i) => (
                      <div
                        key={s.label}
                        className={[
                          "px-6 py-7",
                          i % 2 === 0 ? "border-r border-white/15" : "",
                          i < 2 ? "border-b border-white/15" : "",
                        ].join(" ")}
                      >
                        <p className="text-xs uppercase tracking-[0.15em] text-white/80">
                          {s.label}
                        </p>
                        <p className="mt-2 text-lg font-bold uppercase text-white">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              >
                <source src={videos.hero} type="video/mp4" />
              </video>
              <div className="hero-video-overlay" aria-hidden="true" />
              <div className="hero-video-label">
                <span className="status-dot" />
                CONNECTED SYSTEMS / GROUNDED DELIVERY
              </div>
            </div>
          </div>
          <div className="hero-brandline">
            <span>{hero.brandline}</span>
            <small>{hero.brandlineSmall}</small>
          </div>
        </div>
      </section>
      <section className="section signals-section">
        <div className="container">
          <div className="signal-grid" role="region" aria-label="PLG Solutions delivery principles">
            {signals.map((signal) => (
              <article className="signal-card" key={signal.index}>
                <span>{signal.index}</span>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
          <div className="signal-footer">DEPENDABLE BY DESIGN</div>
        </div>
      </section>

      <section className="section soft">
        <div className="container ">
          <div className="section-head">
            <div>
              <span className="eyebrow">{whatWeDo.eyebrow}</span>
              <h2>{whatWeDo.title}</h2>
            </div>
            <p>{whatWeDo.lede}</p>
          </div>
          <div className="capability-showcases grid grid-cols-1 gap-2 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                className="capability-showcase"
                id={capability.anchor}
                key={capability.index}
              >
                <div className="showcase-content">
                  <span className="card-num">
                    {capability.index} / {capability.category}
                  </span>
                  <h2>{capability.title}</h2>
                  <p>{capability.body}</p>
                  <Link className="text-link" href={`/capabilities#${capability.anchor}`}>
                    {whatWeDo.link} <span aria-hidden="true"></span>
                  </Link>
                </div>
                <span className="showcase-count">
                  {capability.index} / {String(capabilities.length).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container connected-section">
          <div className="connected-kicker">
            <span className="eyebrow">{connected.eyebrow}</span>
            <p className="connected-readout">
              <span className="status-dot" />
              {connected.live}
            </p>
          </div>
          <div className="connected-intro">
            <h2>{connected.title}</h2>
            <p>{connected.lede}</p>
          </div>
          <div className="connected-cards">
            {connected.cards.map((card) => (
              <article className="connected-card" key={card.index}>
                <span>{card.index}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Where we work</span>
              <h2>{sectorsHeading}</h2>
            </div>
            <p>{sectors.map((sector) => sector.title).join(" · ")}</p>
          </div>
          <div className="sector-tiles">
            {sectors.map((sector) => (
              <Link
                className="sector-tile"
                href={`/industries#${sector.anchor}`}
                key={sector.anchor}
              >
                <span aria-hidden="true">{sector.index}</span>
                <strong>{sector.title}</strong>
                <span className="sector-arrow" aria-hidden="true"></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container approach">
          <div className="approach-copy">
            <span className="eyebrow">{approach.eyebrow}</span>
            <h2>{approach.title}</h2>
            <p>{approach.lede}</p>
            <div
              className="approach-image"
              role="img"
              aria-label="Institutional operations centre"
              style={{ backgroundImage: `url("${approach.image}")` }}
            >
              <span>{approach.imageCaption}</span>
            </div>
          </div>
          <div className="steps">
            {approach.steps.map((step) => (
              <article className="step" key={step.index}>
                <span>{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
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
