"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          Rapidly build modern UIs with Chaiwind CSS
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-[var(--muted-foreground)]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          A utility-first CSS-in-JS toolkit inspired by Tailwind — small API, familiar
          class names, and fast iteration.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <Link
            href="/docs/install"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          >
            Get started
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          >
            Documentation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
