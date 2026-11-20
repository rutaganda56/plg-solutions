import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/app/lib/content";

const year = 2026;

export default function Footer() {
  return (
    <footer data-footer="" className="bg-[#071f3b] text-white">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1320px] py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link className="inline-flex" href="/" aria-label="PLG Solutions home">
              <Image
                src={footerData.logoSrc}
                alt={footerData.logoAlt}
                width={256}
                height={113}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[260px] text-sm leading-7 text-white/65">{footerData.blurb}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{footerData.exploreTitle}</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              {footerData.links.map((r) => (
                <Link key={r.to} href={r.to}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{footerData.contactTitle}</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
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
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{footerData.legalTitle}</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              {footerData.legalLinks.map((r) => (
                <Link key={r.to} href={r.to}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© {year} PLG Solutions. All rights reserved.</span>
          <span>{footerData.tagline}</span>
        </div>
      </div>
    </footer>
  );
}