"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Utility-first",
    body: "Compose layouts with `chai-flex`, `chai-grid`, spacing, and typography utilities.",
  },
  {
    title: "Familiar patterns",
    body: "Class names mirror Tailwind-style conventions so you can move quickly.",
  },
  {
    title: "Drop-in usage",
    body: "Use npm or a CDN module script — pick what fits your stack.",
  },
];

export function FeatureGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-[var(--border)] bg-[var(--muted)]/30 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <h2 className="text-lg font-semibold text-[var(--foreground)]">{f.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
              {f.body}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
