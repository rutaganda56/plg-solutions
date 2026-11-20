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
    <header data-header="" className="sticky top-0 z-50 bg-[#071f3b] text-white border-b border-white/10 shadow-[0_0_13px_2px_rgba(13,59,112,1)]">
      <div className="mx-auto flex min-h-[76px] w-[calc(100%-48px)] max-w-[1320px] items-center justify-between gap-7">
        <Link
          className="inline-flex items-center"
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
            className="h-10 w-auto"
          />
        </Link>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
          aria-label={open ? "Close menu" : headerData.menuLabel}
          aria-expanded={open}
          aria-controls="primary-navigation"
          type="button"
          onClick={() => setOpen((s) => !s)}
        >
          <span
            aria-hidden="true"
            className={[
              "relative block h-0.5 w-5 rounded-full bg-current transition-colors duration-200",
              "before:absolute before:left-0 before:top-0 before:h-0.5 before:w-5 before:-translate-y-1.5 before:rounded-full before:bg-current before:transition-transform before:duration-200 before:content-['']",
              "after:absolute after:left-0 after:top-0 after:h-0.5 after:w-5 after:translate-y-1.5 after:rounded-full after:bg-current after:transition-transform after:duration-200 after:content-['']",
              open ? "bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45" : "",
            ].join(" ")}
          />
        </button>
        <nav
          id="primary-navigation"
          className={[
            "absolute left-6 right-6 top-[76px] flex-col gap-1 border border-white/20 bg-[#071f3b] p-4",
            open ? "flex" : "hidden",
            "md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0",
          ].join(" ")}
          aria-label="Primary navigation"
        >
          {headerData.links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={[
                "px-3 py-2 text-sm font-semibold",
                pathname === l.to ? "text-white" : "text-white/65",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold md:ml-3 md:mt-0"
            style={{ color: "#071f3b" }}
            href="/contact"
            onClick={() => setOpen(false)}
          >
            {headerData.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}