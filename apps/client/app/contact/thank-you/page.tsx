import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <section className="thank-you">
      <div className="container">
        <span className="eyebrow">Enquiry received</span>
        <h1>Thank you for getting in touch.</h1>
        <p>
          Your message has been submitted. The PLG Solutions team will review
          your enquiry and follow up using the contact details you provided.
        </p>
        <Link className="btn primary" href="/">
          Return to home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
