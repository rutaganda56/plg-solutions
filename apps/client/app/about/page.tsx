import type { Metadata } from "next";
import OfficeAtlas from "@/app/components/OfficeAtlas";
import PageHero from "@/app/components/PageHero";

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
      />

      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1320px] gap-5 md:grid-cols-2">
          <div data-reveal-item className="rounded-[16px] bg-[#071f3b] p-7 text-white md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">Our mission</span>
            <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">Build digital infrastructure that institutions can own.</h2>
            <p className="mt-5 leading-7 text-white">
              Much of the infrastructure African economies run on is designed elsewhere,
              sold in, and handed over. We build it here, hold long-term positions in it,
              and operate it for its working life.
            </p>
          </div>
          <div data-reveal-item className="rounded-[16px] border border-[#071f3b]/15 p-7 text-[#071f3b] md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]">Our vision</span>
            <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#071f3b]">A continent whose institutions connect.</h2>
            <p className="mt-5 leading-7 text-[#071f3b]">
              Identity that is recognised across borders. Records one agency can verify from another.
               Services that don&apos;t stop at an institutional boundary.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article data-reveal-item
                className="min-h-[220px] rounded-[20px] border border-white/15 p-7"
                key={value.index}
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-white">{value.index}</span>
                <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 leading-7 text-white">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section data-reveal className="bg-white py-20 text-[#071f3b] md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="grid gap-8 rounded-[16px] border border-[#071f3b]/15 p-7 md:grid-cols-[0.8fr_1.2fr] md:p-9">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]">Partners</h3>
            <p className="leading-7 text-[#071f3b]">
              We collaborate with specialist technology partners when a
              programme needs them. Our partner network brings experience from
              African, Asian and Gulf markets. We acknowledge partners in the
              context of their work and with permission; named credits were not
              provided for this implementation.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#071f3b] py-20 text-white md:py-24">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="mb-12 max-w-[780px]">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Our presence</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]">Headquartered in Kigali, working across African markets.</h2>
            <p className="mt-4 leading-7 text-white/65">
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
