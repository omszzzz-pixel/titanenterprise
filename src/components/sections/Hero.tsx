"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Container } from "@/components/ui/Container";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number], delay },
});

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-44 lg:pt-52 lg:pb-32">
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden />
      <div className="absolute inset-0 radial-fade" aria-hidden />

      <Container>
        <motion.div
          {...fade(0.05)}
          className="tracking-eyebrow text-[11px] uppercase text-gold"
        >
          {dict.eyebrow}
        </motion.div>

        <motion.h1
          {...fade(0.18)}
          className="mt-8 font-display text-[44px] leading-[1.12] text-foreground sm:text-[64px] lg:text-[88px]"
        >
          <span className="block">{dict.titleA}</span>
          <span className="block pb-3 text-gold-gradient italic">
            {dict.titleB}
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.32)}
          className="mt-10 max-w-2xl text-[15px] leading-[1.7] text-muted sm:text-[17px]"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          {...fade(0.46)}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <Link
            href={`/${lang}/capabilities`}
            className="group relative inline-flex items-center gap-3 border border-gold bg-gold px-7 py-4 text-[12px] tracking-[0.18em] uppercase text-black transition-colors hover:bg-gold-bright"
          >
            {dict.ctaPrimary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href={`/${lang}/about`}
            className="group inline-flex items-center gap-3 border border-line-strong px-7 py-4 text-[12px] tracking-[0.18em] uppercase text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {dict.ctaSecondary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </Container>

      <motion.div
        {...fade(0.6)}
        className="mt-32 hidden items-center justify-center gap-3 sm:flex"
      >
        <span className="h-px w-16 bg-line-strong" />
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-subtle">
          Scroll
        </span>
        <span className="h-px w-16 bg-line-strong" />
      </motion.div>
    </section>
  );
}
