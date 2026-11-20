import type { Metadata } from "next";
import CTASection from "@/app/components/CTASection";
import PageHero from "@/app/components/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "PLG Solutions works with government, financial services, telecommunications, trade and energy organisations.",
};

const industries = [
  {
    id: "government",
    index: "01",
    icon: "/corporate_fare_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png",
    title: "Government & public sectors",
    description:
      "Digital public services, shared platforms and infrastructure modernisation for ministries, agencies and national institutions.",
    focus: ["Digital public services", "Shared platforms", "Infrastructure modernisation"],
  },
  {
    id: "financial",
    index: "02",
    icon: "/local_atm_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png",
    title: "Financial services & regulation",
    description:
      "Verification, supervision and data infrastructure for central banks, regulators, banks and insurers.",
    focus: ["Identity & verification", "Supervisory data", "Sector wide platforms"],
  },
  {
    id: "telecommunications",
    index: "03",
    icon: "/cell_tower_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png",
    title: "Telecommunications",
    description:
      "Subscriber verification, integration and compliance systems for operators and the regulators who supervise them.",
    focus: ["Subscriber verification", "Regulatory reporting", "Systems integration"],
  },
  {
    id: "trade",
    index: "04",
    icon: "/swap_horizontal_circle_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png",
    title: "Trade & borders",
    description:
      "Screening, inspection and clearance infrastructure across inland and border points.",
    focus: ["Border systems", "Inspection technology", "Clearance workflows"],
  },
  {
    id: "energy",
    index: "05",
    icon: "/whatshot_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png",
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
      <section data-reveal className="bg-white py-5 text-[#071f3b] md:py-5">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-5 md:grid-cols-12">
            {industries.map((industry, industryIndex) => (
              <article data-reveal-item
                className={[
                  "min-h-[320px] rounded-[16px] p-7",
                  industryIndex === 0
                    ? "border border-[#071f3b] bg-[#071f3b] text-white md:col-span-7"
                    : industryIndex === 1
                      ? "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-5"
                      : "border border-[#071f3b]/15 bg-white text-[#071f3b] md:col-span-4",
                ].join(" ")}
                id={industry.id}
                key={industry.index}
              >
                <Image
                  className={industryIndex === 0 ? "text-xs font-semibold text-white" : "text-xs font-semibold text-[#071f3b]"} aria-hidden="true"
                  src={industry.icon}
                  alt={industry.title}
                  width={24}
                  height={24}
                />
                <h2 className={industryIndex === 0 ? "mt-5 text-[clamp(1.35rem,2vw,1.65rem)] font-semibold leading-tight tracking-[-0.04em] text-white" : "mt-5 text-[clamp(1.35rem,2vw,1.65rem)] font-semibold leading-tight tracking-[-0.04em] text-[#071f3b]"}>{industry.title}</h2>
                <p className={industryIndex === 0 ? "mt-4 leading-7 text-white" : "mt-4 leading-7 text-[#071f3b]"}>{industry.description}</p>
                <ul className={industryIndex === 0 ? "mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white" : "mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#071f3b]"}>
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
