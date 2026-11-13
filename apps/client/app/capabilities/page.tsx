import type { Metadata } from "next";
import CTASection from "@/app/components/CTASection";
import GlobeCanvas from "@/app/components/GlobeCanvas";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore PLG Solutions' platform, infrastructure, integration and technology delivery capabilities.",
};

const platforms = [
  {
    id: "identity",
    index: "01 / IDENTITY & VERIFICATION",
    title: "Identity & verification",
    body: "Support trusted verification across public services, financial institutions and telecom environments.",
    focus: ["Consent", "Verification", "Reuse"],
  },
  {
    id: "integration",
    index: "02 / SYSTEMS INTEGRATION",
    title: "Systems integration",
    body: "Connect platforms, devices and data sources so information can move between teams and institutions.",
    focus: ["Platforms", "Data exchange", "Interoperability"],
  },
  {
    id: "data",
    index: "03 / DATA & INTELLIGENCE",
    title: "Data & intelligence",
    body: "Turn distributed data into clearer reporting and useful operational insight for decision-makers and teams.",
    focus: ["Analytics", "Reporting", "Automation"],
  },
  {
    id: "infrastructure",
    index: "04 / INFRASTRUCTURE & CONTINUITY",
    title: "Infrastructure & continuity",
    body: "Plan cloud, hybrid and on-premise environments around availability, observability and recovery.",
    focus: ["Cloud", "Hybrid", "Recovery"],
  },
  {
    id: "security",
    index: "05 / SECURITY & RESILIENCE",
    title: "Security & resilience",
    body: "Shape security architecture around regulatory requirements, operational risks and service continuity.",
    focus: ["Security design", "Risk", "Resilience"],
  },
  {
    id: "delivery",
    index: "06 / DELIVERY",
    title: "Delivery & operations",
    body: "Structure implementation and rollout so ownership and ongoing operation are considered from the beginning.",
    focus: ["Structure", "Deployment", "Operations"],
  },
];

const supportingLayers = [
  {
    index: "A",
    title: "Architecture & advisory",
    body: "Translate priorities and operating constraints into a coherent technical direction.",
  },
  {
    index: "B",
    title: "Systems integration",
    body: "Coordinate interfaces and dependencies across platforms, infrastructure and teams.",
  },
  {
    index: "C",
    title: "Cybersecurity & resilience",
    body: "Build security, continuity and recovery considerations into the system lifecycle.",
  },
  {
    index: "D",
    title: "Support & improvement",
    body: "Plan for ownership, service continuity, maintenance and future change from the outset.",
  },
];

const lifecycle = [
  {
    index: "01",
    title: "Discover",
    body: "Understand the environment, stakeholders, constraints and outcomes.",
  },
  {
    index: "02",
    title: "Design",
    body: "Shape an architecture and delivery path around real operating needs.",
  },
  {
    index: "03",
    title: "Deliver",
    body: "Integrate, deploy and manage change with clear accountability.",
  },
  {
    index: "04",
    title: "Operate",
    body: "Support reliable service and continuous improvement over time.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>Connected technology. Delivered for reality.</>}
        description="From platform and infrastructure design to integration, deployment and support, we help organisations turn technology ambition into dependable operations."
      />

      <section className="section">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Core capabilities</span>
            <h2>Platforms designed to work as one.</h2>
            <p>
              Our work spans the connected layers that institutions rely on:
              platforms, infrastructure, data and the people who operate them.
            </p>
          </div>
          <div className="platform-grid">
            {platforms.map((platform) => (
              <article
                className="platform-card"
                id={platform.id}
                key={platform.index}
              >
                <span>{platform.index}</span>
                <h3>{platform.title}</h3>
                <p>{platform.body}</p>
                <ul className="platform-focus">
                  {platform.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Supporting layers</span>
            <h2>Disciplines that make delivery dependable.</h2>
          </div>
          <div className="support-grid">
            {supportingLayers.map((layer) => (
              <article className="support-card" key={layer.index}>
                <span>{layer.index}</span>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Delivery lifecycle</span>
              <h2>From the first question to long-term operation.</h2>
            </div>
            <p>
              We bring delivery thinking into the work early, so technical
              decisions remain grounded in implementation and ownership.
            </p>
          </div>
          <div className="lifecycle">
            {lifecycle.map((step) => (
              <article className="lifecycle-step" key={step.index}>
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container africa-panel">
          <div>
            <span className="eyebrow">Built with Africa in mind</span>
            <h2>Technology shaped by the environments it serves.</h2>
            <p>
              We work with organisations in Africa and beyond, adapting system
              design to local operating conditions, institutional priorities and
              the realities of deployment.
            </p>
          </div>
          <div className="africa-globe">
            <GlobeCanvas cx={0.5} cy={0.5} scale={0.43} offices />
          </div>
        </div>
      </section>

      <CTASection title="Let’s make your systems work better together." />
    </>
  );
}
