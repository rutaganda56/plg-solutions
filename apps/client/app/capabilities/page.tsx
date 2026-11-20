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

      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="mb-12 max-w-[780px]">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]/60">Shared digital infrastructure</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]">National platforms</h2>
            <p className="mt-3 text-[#071f3b]/65">
              Infrastructure built once, used by everyone who needs it.
            </p>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-12">
            {platforms.map((platform, platformIndex) => (
              <article data-reveal-item
                className={[
                  "flex min-h-[280px] flex-col rounded-[16px] p-7",
                  platformIndex === 0
                    ? "border border-[#071f3b] bg-[#071f3b] text-white md:col-span-6"
                    : platformIndex === 3
                      ? "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-6"
                      : "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-6",
                ].join(" ")}
                id={platform.id}
                key={platform.index}
              >
                <span className={platformIndex === 0 ? "text-xs font-semibold tracking-[0.12em] text-white" : "text-xs font-semibold tracking-[0.12em] text-[#071f3b]"}>{platform.index}</span>
                <h3 className={platformIndex === 0 ? "mt-8 max-w-[520px] text-[clamp(1.35rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-0.035em] text-white" : "mt-8 max-w-[520px] text-[clamp(1.35rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-0.035em] text-[#071f3b]"}>{platform.title}</h3>
                <p className={platformIndex === 0 ? "mt-6 max-w-[560px] leading-7 text-white" : "mt-6 max-w-[560px] leading-7 text-[#071f3b]"}>{platform.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="mb-12 max-w-[780px]">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Supporting layers</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]">What it takes to run at national scale</h2>
            <p className="mt-3 text-white/65">Platforms this size succeed on the layers underneath them.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {supportingLayers.map((layer) => (
              <article data-reveal-item
                className="rounded-[20px] border border-white/15 p-7"
                key={layer.index}
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-white">{layer.index}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 leading-7 text-white">{layer.body}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white">
                  {layer.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]/60">Delivery lifecycle</span>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]">We don&apos;t hand over and leave.</h2>
            </div>
            <p className="leading-7 text-[#071f3b]/65">
              Most national platforms stall on mandate, pricing and ownership rather than on engineering. 
              We work on all of it, and we stay for the operating life of the system.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {lifecycle.map((step) => (
              <article data-reveal-item
                className="min-h-[210px] rounded-[20px] border border-[#071f3b]/15 p-6"
                key={step.index}
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-[#071f3b]">{step.index}</span>
                <h3 className="mt-4 text-lg font-semibold text-[#071f3b]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#071f3b]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1320px] gap-12 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Built from here</span>
            <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.045em]">Built in Kigali. Designed for the continent.</h2>
            <p className="mt-5 leading-7 text-white/65">
              Institutions across Africa face the same problems in a different order 
              fragmented identity systems, records that can&apos;t be verified across borders, services
               that stop at the edge of one agency. We build platforms designed from the outset to be 
               redeployed in a second market and to interoperate across them.
            </p>
          </div>
          <div className="h-[270px] min-h-[220px]">
            <GlobeCanvas cx={0.5} cy={0.5} scale={0.43} offices />
          </div>
        </div>
      </section>

      <CTASection title="Let’s make your systems work better together." />
    </>
  );
}
