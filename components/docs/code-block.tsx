"use client";

import { useState } from "react";

export function CodeBlock({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)]">
      {language ? (
        <div className="border-b border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--muted-foreground)]">
          {language}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-[var(--code-fg)]">
        <code>{children}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className={`absolute right-3 rounded-md border border-[var(--border)] bg-[var(--muted)] px-2 py-1 text-xs font-medium text-[var(--foreground)] opacity-0 transition-opacity hover:bg-[var(--accent)] group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] ${
          language ? "top-12" : "top-3"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
