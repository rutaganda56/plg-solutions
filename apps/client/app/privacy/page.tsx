import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import { contact } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "Learn how PLG Solutions handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy notice</>}
        description="This notice explains what information you may provide through this website and how it is used to respond to you."
        compact
      />
      <div className="container">
        <article className="legal-content">
          <p className="legal-updated">Last updated: 13 November 2026</p>
          <p>
            PLG Solutions respects the privacy of people who contact us. This
            notice applies to information submitted through the contact form or
            through the email and phone details published on this website.
          </p>

          <h2>Information you provide</h2>
          <p>
            The contact form may ask for your name, organisation, email address,
            phone number, country, enquiry type and message. Please do not
            include passwords, payment information or other sensitive personal
            information in your message.
          </p>

          <h2>How we use it</h2>
          <p>
            We use the information you submit to review and respond to your
            enquiry, communicate with you about it, and take reasonable steps
            to prevent misuse of the form. We do not ask for information that is
            unnecessary to understand your enquiry.
          </p>

          <h2>Sharing and service providers</h2>
          <p>
            Information may be processed by service providers that support the
            operation of this website or the handling of enquiries. We do not
            sell the personal information submitted through the contact form.
            Information may also be disclosed where required by applicable law.
          </p>

          <h2>Retention and your choices</h2>
          <p>
            We retain enquiry information for as long as reasonably necessary
            to respond and maintain related business records, subject to
            applicable legal requirements. You may contact us to request access
            to, correction or deletion of information you have provided, subject
            to any legal obligations that apply.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions or requests, email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <p>
            This website may link to third-party services. Their privacy
            practices are governed by their own notices.
          </p>
        </article>
      </div>
    </>
  );
}
