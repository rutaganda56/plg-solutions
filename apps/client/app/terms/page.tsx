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
        title={<>Terms of use</>}
        description="These terms apply to your use of the PLG Solutions website."
        compact
      />
      <div className="container">
        <article className="legal-content">
          <p className="legal-updated">Last updated: 19 November 2026</p>
          <h2>Using this site</h2>
          <p>
            The site is provided to describe PLG Solutions and to receive project,
             partnership, procurement and related enquiries. Do not misuse the site or attempt to disrupt it.
          </p>

          <h2>Content</h2>
          <p>
            Website content is for general information. 
            It is not a bid, contract, or advice. Project terms, if any, are agreed separately in writing.
          </p>

          <h2>Enquiries</h2>
          <p>
            Sending an enquiry does not create a contract.
            We will tell you honestly whether we are the right partner for the work you describe.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: info@plgsolutions.com.
          </p>
        </article>
      </div>
    </>
  );
}
