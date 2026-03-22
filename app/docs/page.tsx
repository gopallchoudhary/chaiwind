import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Overview of Chaiwind CSS — installation, usage, examples, and reference.",
};

export default function DocsIndexPage() {
  return (
    <div className="prose-docs max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Documentation
      </h1>
      <p className="text-lg text-[var(--muted-foreground)]">
        Chaiwind CSS is a utility-first CSS-in-JS library inspired by Tailwind CSS.
        Browse the sections below to install, learn usage patterns, see live examples,
        and look up every utility class.
      </p>
      <ul className="space-y-3 text-[var(--foreground)]">
        <li>
          <Link
            className="font-medium text-[var(--ring)] underline-offset-4 hover:underline"
            href="/docs/install"
          >
            Installation
          </Link>
          <span className="text-[var(--muted-foreground)]">
            {" "}
            — npm and CDN module setup
          </span>
        </li>
        <li>
          <Link
            className="font-medium text-[var(--ring)] underline-offset-4 hover:underline"
            href="/docs/usage"
          >
            Usage
          </Link>
          <span className="text-[var(--muted-foreground)]">
            {" "}
            — importing and applying utilities
          </span>
        </li>
        <li>
          <Link
            className="font-medium text-[var(--ring)] underline-offset-4 hover:underline"
            href="/docs/examples"
          >
            Examples
          </Link>
          <span className="text-[var(--muted-foreground)]">
            {" "}
            — layout, type, and color previews
          </span>
        </li>
        <li>
          <Link
            className="font-medium text-[var(--ring)] underline-offset-4 hover:underline"
            href="/docs/reference"
          >
            Reference
          </Link>
          <span className="text-[var(--muted-foreground)]">
            {" "}
            — full class list with computed CSS
          </span>
        </li>
      </ul>
    </div>
  );
}
