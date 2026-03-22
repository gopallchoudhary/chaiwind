"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/install", label: "Installation" },
  { href: "/docs/usage", label: "Usage" },
  { href: "/docs/examples", label: "Examples" },
  { href: "/docs/reference", label: "Reference" },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-52 shrink-0 md:block">
      <nav className="sticky top-20 space-y-1 pb-8" aria-label="Documentation">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
          Documentation
        </p>
        {links.map((item) => {
          const active =
            item.href === "/docs"
              ? pathname === "/docs"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] ${
                active
                  ? "bg-[var(--accent)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--accent)]/60 hover:text-[var(--foreground)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
