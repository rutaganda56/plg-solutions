"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerData } from "@/app/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header data-header="" className="site-header">
      <div className="container nav">
        <Link
          className="logo"
          href="/"
          aria-label={headerData.homeAria}
          onClick={() => setOpen(false)}
        >
          <Image
            src={headerData.logoSrc}
            alt={headerData.logoAlt}
            width={256}
            height={113}
            priority
          />
        </Link>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : headerData.menuLabel}
          aria-expanded={open}
          aria-controls="primary-navigation"
          type="button"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Primary navigation"
        >
          {headerData.links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={pathname === l.to ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>
            {headerData.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}