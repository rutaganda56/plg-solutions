import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import { contact } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the PLG Solutions website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Website terms</>}
        description="These terms describe the basic conditions for using the PLG Solutions website."
        compact
      />
      <div className="container">
        <article className="legal-content">
          <p className="legal-updated">Last updated: 13 November 2026</p>
          <h2>Website information</h2>
          <p>
            The information on this website is provided for general
            informational purposes. While we aim to keep it clear and current,
            it may not describe every service, capability or engagement
            requirement. Please contact us to discuss a specific need.
          </p>

          <h2>No offer or professional advice</h2>
          <p>
            Website content does not create a service agreement, guarantee a
            particular result or constitute professional advice for a specific
            situation. Any services will be governed by the terms agreed
            directly between the relevant parties.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may use this website for lawful purposes. Do not attempt to
            disrupt its operation, gain unauthorised access to systems or submit
            content that is unlawful, misleading or harmful.
          </p>

          <h2>Intellectual property and third-party links</h2>
          <p>
            Unless otherwise stated, website content and branding are owned by
            or used with permission by PLG Solutions. You may not reproduce or
            distribute material from this website for commercial use without
            prior permission. Links to third-party sites are provided for
            convenience; PLG Solutions does not control their content or terms.
          </p>

          <h2>Changes and contact</h2>
          <p>
            We may update website content or these terms from time to time.
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </article>
      </div>
    </>
  );
}
