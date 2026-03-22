"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/install", label: "Installation" },
  { href: "/docs/usage", label: "Usage" },
  { href: "/docs/examples", label: "Examples" },
  { href: "/docs/reference", label: "Reference" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-semibold tracking-tight text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          >
            Chaiwind
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.href === "/docs"
                  ? pathname === "/docs"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                  {active && !reduceMotion ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-md bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : active ? (
                    <span className="absolute inset-0 -z-10 rounded-md bg-[var(--accent)]" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            className="border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
