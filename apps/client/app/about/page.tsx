import type { Metadata } from "next";
import CTASection from "@/app/components/CTASection";
import OfficeAtlas from "@/app/components/OfficeAtlas";
import PageHero from "@/app/components/PageHero";
import { videos } from "@/app/lib/home";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PLG Solutions, our mission, values, leadership approach and locations.",
};

const values = [
  {
    index: "01",
    title: "Regulatory fluency",
    body: "We work within institutional mandates and regulatory environments, alongside the organisations responsible for them.",
  },
  {
    index: "02",
    title: "Accountability",
    body: "We stay focused on whether a platform performs in operation, not only whether a project reaches handover.",
  },
  {
    index: "03",
    title: "Practicality",
    body: "We design around the people who operate a system and the conditions they work in.",
  },
  {
    index: "04",
    title: "Long-term stewardship",
    body: "We consider support, resilience and continued operation as part of the platform lifecycle.",
  },
];

const leadershipPrinciples = [
  {
    index: "01",
    title: "Clear direction",
    body: "Aligning technology decisions with organisational priorities and measurable outcomes.",
  },
  {
    index: "02",
    title: "Technical stewardship",
    body: "Keeping architecture, integration and operational realities connected.",
  },
  {
    index: "03",
    title: "Delivery ownership",
    body: "Maintaining accountability from early planning through deployment and operation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PLG Solutions"
        title={<>Build essential digital infrastructure—and stay to operate it.</>}
        description="PLG Solutions works across the platform lifecycle, from early design and financing through continued operation for institutional clients."
        tone="dark"
        mediaSrc={videos.hero}
      />

      <section className="section">
        <div className="container about-split">
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>Build digital infrastructure that institutions can own.</h2>
            <p>
              We work beyond one-off technology handovers: helping shape
              platforms for their operating context and supporting them through
              their working life.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our vision</span>
            <h2>Institutions connected across African markets.</h2>
            <p>
              Interoperable identity, records and services can help institutions
              verify information and work together across organisational and
              national boundaries.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">What guides us</span>
            <h2>Principles that shape how we build and operate.</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.index}>
                <span>{value.index}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Our presence</span>
            <h2>Headquartered in Kigali, working across African markets.</h2>
            <p>
              Our headquarters is in Kigali, Rwanda, with office locations in
              Lagos and Dubai. We work with clients and delivery partners across
              the environments where our systems operate.
            </p>
          </div>
          <OfficeAtlas />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Leadership</span>
            <h2>Direction, technical stewardship and delivery ownership.</h2>
            <p>
              We bring strategy and execution into the same conversation so
              decisions remain connected to operational outcomes. This
              implementation does not include named leadership profiles.
            </p>
          </div>
          <div className="leadership-grid">
            {leadershipPrinciples.map((principle) => (
              <article className="leadership-card" key={principle.index}>
                <span className="card-num">{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="partner-note">
            <h3>Partner acknowledgements</h3>
            <p>
              We collaborate with specialist technology partners when a
              programme needs them. Our partner network brings experience from
              African, Asian and Gulf markets. We acknowledge partners in the
              context of their work and with permission; named credits were not
              provided for this implementation.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Let’s talk about what you need to make possible." />
    </>
  );
}
