import type { Metadata } from "next";
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
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PLG Solutions"
        title={<>We build national infrastructure, and we stay to run it.</>}
        description="PLG Solutions designs, structures, finances and operates the digital platforms that institutions depend on."
        tone="dark"
        mediaSrc={videos.hero}
      />

      <section className="section">
        <div className="container about-split">
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>Build digital infrastructure that institutions can own.</h2>
            <p>
              Much of the infrastructure African economies run on is designed elsewhere,
              sold in, and handed over. We build it here, hold long-term positions in it,
              and operate it for its working life.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our vision</span>
            <h2>A continent whose institutions connect.</h2>
            <p>
              Identity that is recognised across borders. Records one agency can verify from another.
               Services that don&apos;t stop at an institutional boundary.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
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
          <div className="partner-note">
            <h3 className="eyebrow">Partners</h3>
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
    </>
  );
}
