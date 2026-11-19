import type { Metadata } from "next";
import CTASection from "@/app/components/CTASection";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "PLG Solutions works with government, financial services, telecommunications, trade and energy organisations.",
};

const industries = [
  {
    id: "government",
    index: "01",
    icon: "⌂",
    title: "Government & public sectors",
    description:
      "Digital public services, shared platforms and infrastructure modernisation for ministries, agencies and national institutions.",
    focus: ["Digital public services", "Shared platforms", "Infrastructure modernisation"],
  },
  {
    id: "financial",
    index: "02",
    icon: "◉",
    title: "Financial services & regulation",
    description:
      "Verification, supervision and data infrastructure for central banks, regulators, banks and insurers.",
    focus: ["Identity & verification", "Supervisory data", "Sector wide platforms"],
  },
  {
    id: "telecommunications",
    index: "03",
    icon: "⌁",
    title: "Telecommunications",
    description:
      "Subscriber verification, integration and compliance systems for operators and the regulators who supervise them.",
    focus: ["Subscriber verification", "Regulatory reporting", "Systems integration"],
  },
  {
    id: "trade",
    index: "04",
    icon: "⇄",
    title: "Trade & borders",
    description:
      "Screening, inspection and clearance infrastructure across inland and border points.",
    focus: ["Border systems", "Inspection technology", "Clearance workflows"],
  },
  {
    id: "energy",
    index: "05",
    icon: "⚡",
    title: "Energy & utilities",
    description:
      "Connected systems for managing assets, monitoring operations and coordinating field and control-room teams across multiple locations.",
    focus: ["Distributed monitoring", "Asset data", "Field-to-office workflows"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Where we work.</>}
        description="We work with institutions at national scale, in regulated environments where their essential systems need to remain dependable."
      />

      <section className="section">
        <div className="container">
          <div className="industry-page-grid">
            {industries.map((industry) => (
              <article
                className="industry-detail"
                id={industry.id}
                key={industry.index}
              >
                <span className="industry-icon" aria-hidden="true">{industry.icon}</span>
                <h2>{industry.title}</h2>
                <p>{industry.description}</p>
                <ul className="industry-tags">
                  {industry.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Building something at national scale?"
        description="Tell us what you are planning or procuring. We will help you decide whether PLG Solutions is the right partner for the work."
      />
    </>
  );
}
