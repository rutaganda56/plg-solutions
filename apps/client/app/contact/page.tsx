import type { Metadata } from "next";
import OfficeAtlas from "@/app/components/OfficeAtlas";
import PageHero from "@/app/components/PageHero";
import { contact } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PLG Solutions to discuss a technology, integration or delivery challenge.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to our team.</>}
        description="Tell us what you’re building, and we’ll route your enquiry to the right person."
        compact
      />
      <section className="bg-white py-16 text-[#071f3b] md:py-20">
        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1320px] items-start gap-12 min-[821px]:grid-cols-[0.75fr_1.25fr] min-[821px]:gap-[65px]">
          <aside>
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5c6e82]">Start a conversation</span>
            <h2 className="my-[13px] text-[clamp(1.8rem,3vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.045em]">Send us an enquiry.</h2>
            <p className="text-[#5c6e82]">
              Tell us about your project, partnership or procurement enquiry.
            </p>
            <div className="mt-[30px] grid gap-[15px]">
              <a className="grid gap-0.5 border-b border-[#e3ebf1] pb-[15px]" href={`mailto:${contact.email}`}>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#5c6e82]">Email</span>
                <strong className="text-base font-semibold">{contact.email}</strong>
              </a>
              <a className="grid gap-0.5 border-b border-[#e3ebf1] pb-[15px]" href={`tel:${contact.phone}`}>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#5c6e82]">Phone</span>
                <strong className="text-base font-semibold">{contact.phoneDisplay}</strong>
              </a>
              <div className="grid gap-0.5 border-b border-[#e3ebf1] pb-[15px]">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#5c6e82]">Locations</span>
                <strong className="text-base font-semibold">{contact.hq.label}</strong>
                <strong className="text-base font-semibold">{contact.hq.lines.join(", ")}</strong>
                {contact.offices.map((office) => (
                  <strong className="text-base font-semibold" key={office.label}>
                    {office.label} — {office.line}
                  </strong>
                ))}
              </div>
            </div>
          </aside>

          <form
            className="grid grid-cols-1 gap-[15px] rounded-[23px] border border-[#e3ebf1] bg-white p-[22px] shadow-[0_16px_50px_rgba(6,31,60,0.06)] min-[601px]:grid-cols-2 min-[601px]:gap-[18px] min-[601px]:p-[30px]"
            name="contact"
            method="POST"
            action="/contact/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </div>

            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-name">Name *</label>
              <input
                autoComplete="name"
                className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-organisation">Organisation *</label>
              <input
                autoComplete="organization"
                className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-organisation"
                name="organisation"
                placeholder="Organisation name"
                required
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-email">Email *</label>
              <input
                autoComplete="email"
                className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-email"
                name="email"
                type="email"
                placeholder="name@organisation.com"
                required
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-phone">Phone</label>
              <input
                autoComplete="tel"
                className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+250 ..."
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-country">Country</label>
              <input
                autoComplete="country-name"
                className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-country"
                name="country"
                placeholder="Country"
              />
            </div>
            <div className="grid gap-[7px]">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-enquiry">Enquiry type</label>
              <select className="min-h-[47px] w-full rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15" id="contact-enquiry" name="enquiry_type" defaultValue="project">
                <option value="project">Project enquiry</option>
                <option value="partnership">Partnership</option>
                <option value="procurement">Procurement</option>
                <option value="media">Media & press</option>
                <option value="careers">Careers</option>
                <option value="general">General enquiry</option>
              </select>
            </div>
            <div className="grid gap-[7px] min-[601px]:col-span-2">
              <label className="text-[0.82rem] font-bold" htmlFor="contact-message">What can we help with? *</label>
              <textarea
                className="min-h-[140px] w-full resize-y rounded-[10px] border border-[#d6e0e9] bg-white px-[13px] py-[11px] text-[#0f2238] placeholder:text-[#8795a4] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1768a8]/15"
                id="contact-message"
                name="message"
                placeholder="Tell us about the challenge, environment or outcome you need."
                required
                rows={5}
              />
            </div>
            <label className="flex items-start gap-2.5 text-[0.83rem] text-[#5c6e82] min-[601px]:col-span-2">
              <input className="mt-[3px] h-[17px] w-[17px] shrink-0 accent-[#0a3a6b]" type="checkbox" name="consent" value="yes" required />
              <span>
                I consent to PLG Solutions storing and using these details to
                respond to my enquiry. See our{" "}
                <a className="text-[#0a3a6b] underline underline-offset-2" href="/privacy">privacy notice</a>.
              </span>
            </label>
            <button className="inline-flex min-h-12 items-center justify-center justify-self-start rounded-full bg-[#071f3b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0a3a6b]" type="submit">
              Start a conversation
            </button>
            <p className="self-center text-sm text-[#5c6e82]">
              We respond to enquiries within two working days.
            </p>
          </form>
        </div>
      </section>
      <section className="bg-[#f4f7f9] py-16 text-[#071f3b] md:py-20">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5c6e82]">Our offices</span>
            <h2 className="mt-2 text-[clamp(1.8rem,3vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.045em]">Locations</h2>
          </div>
          <OfficeAtlas />
        </div>
      </section>
    </>
  );
}
