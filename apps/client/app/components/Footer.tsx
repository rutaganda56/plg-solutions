import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/app/lib/content";

const year = 2026;

export default function Footer() {
  return (
    <footer data-footer="" className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-updated">
          <div className="footer-brand">
            <Link className="footer-logo" href="/" aria-label="PLG Solutions home">
              <Image
                src={footerData.logoSrc}
                alt={footerData.logoAlt}
                width={256}
                height={113}
              />
            </Link>
            <p>{footerData.blurb}</p>
          </div>
          <div>
            <h4>{footerData.exploreTitle}</h4>
            <div className="footer-links">
              {footerData.links.map((r) => (
                <Link key={r.to} href={r.to}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4>{footerData.contactTitle}</h4>
            <div className="footer-links">
              <a href={`tel:${footerData.phone}`}>{footerData.phoneDisplay}</a>
              <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
              <span>{footerData.hq.label}</span>
              {footerData.hq.lines.map((r) => (
                <span key={r}>{r}</span>
              ))}
              {footerData.offices.map((r) => (
                <span key={r.label}>
                  {r.label} — {r.line}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4>{footerData.legalTitle}</h4>
            <div className="footer-links">
              {footerData.legalLinks.map((r) => (
                <Link key={r.to} href={r.to}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} PLG Solutions. All rights reserved.</span>
          <span>{footerData.tagline}</span>
        </div>
      </div>
    </footer>
  );
}