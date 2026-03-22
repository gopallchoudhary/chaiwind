import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { Callout } from "@/components/docs/callout";

export const metadata: Metadata = {
  title: "Usage",
  description:
    "How to load Chaiwind CSS and apply utility classes in your markup.",
};

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-[var(--primary-foreground)]">
        {number}
      </span>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
        )}
      </div>
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md border border-[var(--border)] bg-[var(--muted)] px-1.5 py-0.5 font-mono text-sm text-[var(--foreground)]">
      {children}
    </code>
  );
}

export default function UsagePage() {
  return (
    <article className="max-w-3xl space-y-12">

      {/* Page header */}
      <div className="space-y-3 border-b border-[var(--border)] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Getting Started
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Usage
        </h1>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          Import the runtime once, then write{" "}
          <InlineCode>chai-*</InlineCode> classes directly on your HTML
          elements. No config, no build step — styles are injected automatically
          when the DOM is ready.
        </p>
      </div>

      {/* Step 1 — npm */}
      <section className="space-y-4">
        <SectionHeader
          number="1"
          title="Install via npm"
          description="Install the package from npm using your preferred package manager."
        />
        <div className="space-y-3 pl-11">
          <CodeBlock language="bash">{`npm install chaiwind-css
# or
pnpm add chaiwind-css
# or
yarn add chaiwind-css`}</CodeBlock>

          <p className="text-sm text-[var(--muted-foreground)]">
            Then import it once at your app entry point:
          </p>

          <CodeBlock language="javascript">{`import "chaiwind-css";`}</CodeBlock>

          <p className="text-sm text-[var(--muted-foreground)]">
            Place the import in your entry file — for example{" "}
            <InlineCode>main.jsx</InlineCode>,{" "}
            <InlineCode>main.ts</InlineCode>, or{" "}
            <InlineCode>app/layout.tsx</InlineCode> — so styles are available
            before your components render.
          </p>
        </div>
      </section>

      {/* Step 2 — CDN */}
      <section className="space-y-4">
        <SectionHeader
          number="2"
          title="Or use the CDN"
          description="No bundler? Drop a single script tag into your HTML file."
        />
        <div className="space-y-3 pl-11">
          <CodeBlock language="html">{`<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/chaiwind-css/src/index.js"
></script>`}</CodeBlock>

          <p className="text-sm text-[var(--muted-foreground)]">
            Add the tag inside <InlineCode>{"<head>"}</InlineCode> or just
            before <InlineCode>{"</body>"}</InlineCode>. Chaiwind will
            auto-run once the DOM is ready.
          </p>
        </div>
      </section>

      {/* Step 3 — Applying classes */}
      <section className="space-y-4">
        <SectionHeader
          number="3"
          title="Apply utility classes"
          description="Start writing chai-* classes on any HTML element."
        />
        <div className="space-y-3 pl-11">
          <CodeBlock language="html">{`<!-- Flex layout with spacing and border -->
<div class="chai-flex chai-items-center chai-gap-4 chai-p-4 chai-rounded-lg chai-border">
  <img class="chai-h-10 chai-w-10 chai-rounded-full" src="avatar.jpg" />
  <div class="chai-flex chai-flex-col chai-gap-1">
    <p class="chai-text-base chai-font-semibold">Gopal Choudhary</p>
    <p class="chai-text-sm chai-text-gray">Software Developer</p>
  </div>
</div>

<!-- Grid layout -->
<div class="chai-grid chai-grid-cols-3 chai-gap-4 chai-p-4">
  <div class="chai-bg-red chai-rounded-lg chai-p-4" />
  <div class="chai-bg-green chai-rounded-lg chai-p-4" />
  <div class="chai-bg-blue chai-rounded-lg chai-p-4" />
</div>

<!-- Typography -->
<h1 class="chai-text-4xl chai-font-bold chai-tracking-tight">
  Hello, Chaiwind!
</h1>
<p class="chai-text-lg chai-text-gray chai-leading-normal">
  Supporting description text.
</p>`}</CodeBlock>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          How it works
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Scans the DOM",
              desc: "Finds every element with a class attribute on DOMContentLoaded.",
            },
            {
              step: "02",
              title: "Matches classes",
              desc: "Looks up each chai- class in the utility dictionary via exact O(1) lookup.",
            },
            {
              step: "03",
              title: "Injects styles",
              desc: "Applies matched styles using setProperty() — no cssText conflicts.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4 space-y-2"
            >
              <p className="font-mono text-xs font-semibold text-[var(--muted-foreground)]">
                {step}
              </p>
              <p className="text-sm font-semibold text-[var(--foreground)]">{title}</p>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available groups callout */}
      <Callout title="Available utility groups">
        <ul className="space-y-1.5 text-sm">
          {[
            ["Spacing", "chai-p-*, chai-m-*, chai-px-*, chai-py-*, chai-mt-*, chai-mx-auto"],
            ["Typography", "chai-text-*, chai-font-*, chai-leading-*, chai-tracking-*"],
            ["Colors", "chai-bg-*, chai-text-{color}"],
            ["Layout", "chai-flex, chai-grid, chai-grid-cols-*, chai-items-*, chai-justify-*"],
            ["Sizing", "chai-w-*, chai-h-*, chai-min-w-*, chai-max-w-*"],
            ["Position", "chai-relative, chai-absolute, chai-fixed, chai-sticky, chai-z-*"],
            ["Borders", "chai-border-*, chai-rounded-*"],
            ["Shadows", "chai-shadow-{sm|md|lg|xl|2xl}"],
            ["Transitions", "chai-transition, chai-duration-*, chai-ease-*"],
            ["Animations", "chai-animate-{spin|ping|bounce|pulse}"],
            ["Opacity", "chai-opacity-{0|25|50|75|100}"],
            ["Overflow & Cursor", "chai-overflow-*, chai-cursor-*"],
          ].map(([group, classes]) => (
            <li key={group} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <span className="w-28 shrink-0 font-medium text-[var(--foreground)]">
                {group}
              </span>
              <span className="font-mono text-xs text-[var(--muted-foreground)]">
                {classes}
              </span>
            </li>
          ))}
        </ul>
      </Callout>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Next steps
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/docs/examples",
              title: "Examples →",
              desc: "Browse real UI patterns built with chai- classes.",
            },
            {
              href: "/docs/reference",
              title: "Reference →",
              desc: "Full list of every utility class and its CSS output.",
            },
          ].map(({ href, title, desc }) => (
            <a
              key={href}
              href={href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--muted)] p-5 space-y-1 transition-colors hover:border-[var(--foreground)]"
            >
              <p className="text-sm font-semibold text-[var(--foreground)] group-hover:underline">
                {title}
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">{desc}</p>
            </a>
          ))}
        </div>
      </section>

    </article>
  );
}