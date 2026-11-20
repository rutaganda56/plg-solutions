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
        description="This notice explains how PLG Solutions uses the details you send through the website contact form."
        compact
      />
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px]">
        <article className="max-w-[850px] py-[54px] pb-[90px] [&_a]:text-[#071f3b] [&_a]:underline [&_h2]:mt-[38px] [&_h2]:mb-[10px] [&_h2]:text-[1.35rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.025em] [&_p]:text-[#5c6e82] [&_p]:leading-7">
          <p className="text-[0.86rem] text-[#5c6e82]">Last updated: 19 November 2026</p>
          <p>
            This notice explains how PLG Solutions uses the details you send through the website contact form.
          </p>

          <h2>Who we are</h2>
          <p>
            PLG Solutions is headquartered in Kigali, Rwanda. For privacy questions, email info@plgsolutions.com.
          </p>

          <h2>What we collect</h2>
          <p>
            When you send an enquiry we collect the name, organisation, email, country, enquiry type and message you provide. 
            Phone is optional. We also record that you consented to us using those details to respond.
          </p>

          <h2>How We Use It</h2>
          <p>
            We use enquiry details only to route your message to the right person and to reply. 
            We do not sell this information, and we do not use it for marketing unless you ask us to stay in touch.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiry records for as long as needed to handle the conversation and 
            any follow-up work that comes from it, then delete them when they are no longer required.
          </p>

          <h2>Your choices</h2>
          <p>
            For privacy questions or requests, email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <p>
            You can ask us what enquiry details we hold, ask us to correct them,
            or ask us to delete them, by emailing info@plgsolutions.com.
          </p>
        </article>
      </div>
    </>
  );
}
