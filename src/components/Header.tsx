"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Locale } from "@/i18n/config";
import { LogoHorizontal } from "./Logo";

type NavDict = {
  home: string;
  about: string;
  capabilities: string;
  trading: string;
  education: string;
  platform: string;
  insights: string;
  contact: string;
};

export function Header({ lang, nav }: { lang: Locale; nav: NavDict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = `/${lang}`;

  const links = [
    { href: base, label: nav.home },
    { href: `${base}/about`, label: nav.about },
    { href: `${base}/capabilities`, label: nav.capabilities },
    { href: `${base}/contact`, label: nav.contact },
  ];

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href={base} aria-label="Titan-Enterprise — Home" className="group flex items-center">
          <LogoHorizontal />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-[0.18em] uppercase text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href={`${base}/contact`}
            className="border border-gold/40 px-5 py-2 text-[11px] tracking-[0.18em] uppercase text-gold transition-colors hover:border-gold hover:bg-gold/5"
          >
            {nav.contact}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative block h-px w-6 bg-gold">
            <span
              className={clsx(
                "absolute left-0 block h-px w-6 bg-gold transition-transform",
                open ? "top-0 rotate-45" : "-top-2",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 block h-px w-6 bg-gold transition-transform",
                open ? "top-0 -rotate-45" : "top-2",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[13px] tracking-[0.18em] uppercase text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-end pt-6">
              <Link
                href={`${base}/contact`}
                onClick={() => setOpen(false)}
                className="border border-gold/40 px-5 py-2 text-[11px] tracking-[0.18em] uppercase text-gold"
              >
                {nav.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
