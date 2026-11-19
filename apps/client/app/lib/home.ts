import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLG Solutions | Advanced technology, grounded delivery",
  description: "PLG Solutions — Advanced technology, grounded delivery.",
};

const hero = {
  titlePrimary: "Advanced technology.",
  titleSecondary: "Grounded delivery.",
  lede:
    "PLG Solutions designs, integrates and delivers technology systems for organisations operating in complex, real-world environments.",
  primaryCta: "Explore our capabilities",
  secondaryCta: "Start a conversation",
  brandline: "We build systems that institutions depend on and people benefit from.",
  brandlineSmall: "Built for the real world",
  telemetry: [
    { label: "Architecture", value: "CONNECTED" },
    { label: "Delivery", value: "GROUNDED" },
    { label: "Resilience", value: "BUILT IN" },
    { label: "Network", value: "ACTIVE", live: true },
  ],
};

const videos = {
  hero: "https://videos.pexels.com/video-files/3125427/3125427-uhd_3840_2160_25fps.mp4",
  infrastructure:
    "https://videos.pexels.com/video-files/7140928/7140928-uhd_3840_2160_24fps.mp4",
};

const signals = [
  { index: "01", title: "Strategy  System", body: "Translate ambition into architecture." },
  { index: "02", title: "System  Operation", body: "Integrate technology into reality." },
  { index: "03", title: "Operation  Outcome", body: "Deliver measurable performance." },
];

const whatWeDo = {
  eyebrow: "What we do",
  title: "Technology that works where it matters.",
  lede:
    "We connect technical ambition with practical implementation from system design and integration to deployment, resilience and long-term operation.",
  link: "Explore capability",
};

const capabilities = [
  {
    index: "01",
    category: "IDENTITY & VERIFICATION",
    title: "Confirm identity once, securely.",
    body: "Verification infrastructure for banks, telecoms and government agencies, built around consent and reuse.",
    anchor: "identity",
    visual: "identity",
  },
  {
    index: "02",
    category: "SYSTEMS INTEGRATION",
    title: "Connect institutions that have never shared data before.",
    body: "Connect existing platforms, devices and data sources so information moves reliably between institutions.",
    anchor: "integration",
    visual: "integration",
  },
  {
    index: "03",
    category: "DATA & INTELLIGENCE",
    title: "Turn distributed data into operational intelligence.",
    body: "Dashboards, analytics and automation for supervisors, analysts and frontline teams.",
    anchor: "data",
    visual: "data",
  },
  {
    index: "04",
    category: "INFRASTRUCTURE & CONTINUITY",
    title: "Infrastructure designed for continuity.",
    body: "Cloud, hybrid and on-premise environments designed for availability, observability and recovery.",
    anchor: "infrastructure",
    visual: "infrastructure",
  },
  {
    index: "05",
    category: "SECURITY & RESILIENCE",
    title: "Security designed in from the start.",
    body: "Security architecture aligned to regulatory requirements and operational risk.",
    anchor: "security",
    visual: "security",
  },
  {
    index: "06",
    category: "DELIVERY",
    title: "From plan to operational reality.",
    body: "Structured implementation, rollout and support that keeps projects grounded in outcomes.",
    anchor: "delivery",
    visual: "delivery",
  },
];

const connected = {
  eyebrow: "Connected by design",
  live: "SYSTEMS / DATA / OPERATIONS",
  title: "One operating picture across complex environments.",
  lede:
    "PLG Solutions brings platforms, infrastructure, data and people into a coherent system helping organisations move from fragmented technology to clearer operational control.",
  cards: [
    {
      index: "01",
      title: "Connect the environment",
      body: "Bring platforms, infrastructure and interfaces into a dependable connected architecture.",
    },
    {
      index: "02",
      title: "Surface the right information",
      body: "Move useful data to the people and systems that need it, when they need it.",
    },
    {
      index: "03",
      title: "Strengthen decisions and delivery",
      body: "Create clearer operational visibility, accountability and confidence in execution.",
    },
  ],
};

const sectorsHeading = "Built for institutions operating at national scale.";

const sectors = [
  {
    index: "⌂",
    title: "Government & public sector",
    anchor: "government",
  },
  {
    index: "◉",
    title: "Financial services & regulation",
    anchor: "financial",
  },
  {
    index: "⌁",
    title: "Telecommunications",
    anchor: "telecommunications",
  },
  {
    index: "⇄",
    title: "Trade & borders",
    anchor: "trade",
  },
  {
    index: "⚡",
    title: "Energy & utilities",
    anchor: "energy",
  },
];

const approach = {
  eyebrow: "Our approach",
  title: "Technology with delivery discipline.",
  lede:
    "We start with the operational problem, design for the environment, and stay focused on implementation from day one.",
  image:
    "https://images.pexels.com/photos/3992926/pexels-photo-3992926.jpeg?cs=srgb&dl=pexels-cdc-library-3992926.jpg&fm=jpg",
  imageCaption: "Operational environments shape the solution.",
  steps: [
    {
      index: "01",
      title: "Understand the environment",
      body: "We map the people, systems, constraints, risks and outcomes that define the problem.",
    },
    {
      index: "02",
      title: "Design for reality",
      body: "Solutions are shaped around interoperability, security, maintainability and the realities of operations.",
    },
    {
      index: "03",
      title: "Deliver with control",
      body: "Clear milestones, accountable implementation and practical change management keep delivery moving.",
    },
    {
      index: "04",
      title: "Operate for the long term",
      body: "We design for support, resilience, continuous improvement and future change.",
    },
  ],
};

const cta = {
  title: "Complex challenge?",
  titleLine2: "Start with a conversation.",
  body: "Whether you're modernising an existing environment or building something new, PLG Solutions can help define the right approach and deliver it.",
};

export {
  hero,
  videos,
  signals,
  whatWeDo,
  capabilities,
  connected,
  sectorsHeading,
  sectors,
  approach,
  cta,
};