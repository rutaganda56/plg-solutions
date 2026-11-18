import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Complex challenge? Start with a conversation.",
  description = "Tell us what you are trying to achieve. We can help define a practical path from ambition to operation.",
}: CTASectionProps) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box">
          <div>
            <span className="eyebrow">Talk to PLG Solutions</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <Link className="btn" href="/contact">
            Start a conversation <span aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
