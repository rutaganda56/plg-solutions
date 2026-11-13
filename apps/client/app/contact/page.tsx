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
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <span className="eyebrow">Start a conversation</span>
            <h2>Send us an enquiry.</h2>
            <p>
              Tell us about your project, partnership or procurement enquiry.
            </p>
            <div className="contact-details">
              <a href={`mailto:${contact.email}`}>
                <span>Email</span>
                <strong>{contact.email}</strong>
              </a>
              <a href={`tel:${contact.phone}`}>
                <span>Phone</span>
                <strong>{contact.phoneDisplay}</strong>
              </a>
              <div>
                <span>Locations</span>
                <strong>{contact.hq.label}</strong>
                <strong>{contact.hq.lines.join(", ")}</strong>
                {contact.offices.map((office) => (
                  <strong key={office.label}>
                    {office.label} — {office.line}
                  </strong>
                ))}
              </div>
            </div>
          </aside>

          <form
            className="contact-form"
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

            <div className="form-field">
              <label htmlFor="contact-name">Name *</label>
              <input
                autoComplete="name"
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-organisation">Organisation *</label>
              <input
                autoComplete="organization"
                id="contact-organisation"
                name="organisation"
                placeholder="Organisation name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email *</label>
              <input
                autoComplete="email"
                id="contact-email"
                name="email"
                type="email"
                placeholder="name@organisation.com"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-phone">Phone</label>
              <input
                autoComplete="tel"
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+250 ..."
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-country">Country</label>
              <input
                autoComplete="country-name"
                id="contact-country"
                name="country"
                placeholder="Country"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-enquiry">Enquiry type</label>
              <select id="contact-enquiry" name="enquiry_type" defaultValue="project">
                <option value="project">Project enquiry</option>
                <option value="partnership">Partnership</option>
                <option value="procurement">Procurement</option>
                <option value="media">Media & press</option>
                <option value="careers">Careers</option>
                <option value="general">General enquiry</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="contact-message">What can we help with? *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about the challenge, environment or outcome you need."
                required
                rows={5}
              />
            </div>
            <label className="consent-field">
              <input type="checkbox" name="consent" value="yes" required />
              <span>
                I consent to PLG Solutions storing and using these details to
                respond to my enquiry. See our{" "}
                <a href="/privacy">privacy notice</a>.
              </span>
            </label>
            <button className="btn primary" type="submit">
              Start a conversation
            </button>
            <p className="response-note">
              We respond to enquiries within two working days.
            </p>
          </form>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="page-intro">
            <span className="eyebrow">Our offices</span>
            <h2>Locations</h2>
          </div>
          <OfficeAtlas />
        </div>
      </section>
    </>
  );
}
