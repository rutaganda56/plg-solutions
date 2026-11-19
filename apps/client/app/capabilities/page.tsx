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
    index: "01 /",
    title: "Identity & verification",
    body: "Verification infrastructure that lets banks, telecoms and government agencies confirm identity once, securely and with consent, instead of each rebuilding the same process.",
  },
  {
    id: "integration",
    index: "02 /",
    title: "Institutional data exchange",
    body: "Governed data sharing between institutions, with consent, audit and access control built into the architecture rather than added later.",
    focus: ["Platforms", "Data exchange", "Interoperability"],
  },
  {
    id: "data",
    index: "03 /",
    title: "Registries & records",
    body: "Authoritative records that other systems can rely on, designed for the volumes and availability requirements of national use.",
    focus: ["Analytics", "Reporting", "Automation"],
  },
  {
    id: "infrastructure",
    index: "04 /",
    title: "Border & trade systems",
    body: "Integrated screening, inspection and clearance infrastructure across inland and border points.",
    focus: ["Cloud", "Hybrid", "Recovery"],
  }
];

const supportingLayers = [
    {
    index: "1",
    title: "Systems integration",
    body: "Coordinate interfaces and dependencies across platforms, infrastructure and teams.",
    focus:["Enterprise integration","API & middleware","Device / IoT integration","Identity integration","Legacy interfaces","Operational monitoring"]
  },
  {
    index: "2",
    title: "Data & intelligence",
    body: "Turning distributed data into dashboards, analytics and automation that supervisors, analysts and frontline teams actually use.",
    focus:["Data platforms","Dashboards & reporting","Analytics","Automation","Data integration","Decision support"]
  },
  {
    index: "3",
    title: "Infrastructure & continuity",
    body: "Cloud, hybrid and on premise environments designed for availability, observability and recovery, including hosting inside national data centres.",
    focus:["Cloud architecture","Hybrid environments","Platform engineering","Monitoring","Resilience planning","Operational support"]
  },
  {
    index: "4",
    title: "Security & resilience",
    body: "Security architecture aligned to regulatory requirements and operational risk, designed in from the start.",
    focus:["Security architecture","Identity & access","Secure configuration","Resilience design","Risk-informed controls","Operational readiness"]
  },
];

const lifecycle = [
  {
    index: "01",
    title: "structure",
    body: "Design, commercial model, pricing methodology and the regulatory arrangements that make adoption work.",
  },
  {
    index: "02",
    title: "Define",
    body: "Requirements, architecture and the operating model for the platform.",
  },
  {
    index: "03",
    title: "Build",
    body: "Engineering and integration with the institutions that will connect.",
  },
  {
    index: "04",
    title: "Deploy",
    body: "Rollout, onboarding, change and adoption across participating organisations.",
  },
  {
    index: "05",
    title: "Operate",
    body: "Long-term operation, support and evolution under partnership and concession models.",
  }
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>We build the platforms institutions share.</>}
        description="PLG Solutions designs, builds and operates digital infrastructure used by many organisations at once the identity, data and service layers that governments, regulators and industry depend on. We build in Rwanda, for the continent."
      />

      <section className="section">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Shared digital infrastructure</span>
            <h2>National platforms</h2>
            <p>
              Infrastructure built once, used by everyone who needs it.
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Supporting layers</span>
            <h2>What it takes to run at national scale</h2>
            <p>Platforms this size succeed on the layers underneath them.</p>
          </div>
          <div className="support-grid">
            {supportingLayers.map((layer) => (
              <article className="support-card" key={layer.index}>
                <span>{layer.index}</span>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
                <ul className="industry-tags">
                  {layer.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
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
              <h2>We don&apos;t hand over and leave.</h2>
            </div>
            <p>
              Most national platforms stall on mandate, pricing and ownership rather than on engineering. 
              We work on all of it, and we stay for the operating life of the system.
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
            <span className="eyebrow">Built from here</span>
            <h2>Built in Kigali. Designed for the continent.</h2>
            <p>
              Institutions across Africa face the same problems in a different order 
              fragmented identity systems, records that can&apos;t be verified across borders, services
               that stop at the edge of one agency. We build platforms designed from the outset to be 
               redeployed in a second market and to interoperate across them.
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
