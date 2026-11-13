import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  compact?: boolean;
  tone?: "light" | "dark";
  mediaSrc?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
  tone = "light",
  mediaSrc,
}: PageHeroProps) {
  return (
    <section className={`page-hero ${tone}${compact ? " compact" : ""}`}>
      {mediaSrc && (
        <video
          className="page-hero-media"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )}
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
