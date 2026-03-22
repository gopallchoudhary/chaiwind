import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--muted-foreground)]">
          Chaiwind CSS — utility-first styling inspired by Tailwind.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            href="/docs/install"
          >
            Install
          </Link>
          <Link
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            href="/docs/reference"
          >
            Reference
          </Link>
        </div>
      </div>
    </footer>
  );
}
