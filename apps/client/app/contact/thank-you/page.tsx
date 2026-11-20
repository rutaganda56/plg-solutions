import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <section className="bg-white py-20 text-[#071f3b] md:py-28">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5c6e82]">Enquiry received</span>
        <h1 className="mt-4 max-w-[800px] text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Thank you for getting in touch.</h1>
        <p className="mt-5 max-w-[680px] leading-7 text-[#5c6e82]">
          Your message has been submitted. The PLG Solutions team will review
          your enquiry and follow up using the contact details you provided.
        </p>
        <Link className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#071f3b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0a3a6b]" href="/">
          Return to home <span aria-hidden="true"></span>
        </Link>
      </div>
    </section>
  );
}
