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
    <section data-reveal className="bg-white text-[#071f3b]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px] py-16 md:py-24">
        <div className="grid items-end gap-8 rounded-[20px] border border-[#071f3b]/15 p-7 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#071f3b]">Talk to PLG Solutions</span>
            <h2 className="mt-4 max-w-[760px] text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#071f3b]">{title}</h2>
            <p className="mt-5 max-w-[680px] text-base leading-7 text-[#071f3b]">{description}</p>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#071f3b] px-6 text-sm font-semibold !text-white" href="/contact">
            Start a conversation <span aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
