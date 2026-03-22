"use client";

export function ExamplesShowcase() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Flex row</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          <code className="font-mono">chai-flex chai-items-center chai-gap-4 chai-p-4 chai-rounded-lg chai-border chai-bg-white chai-shadow-sm</code>
        </p>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4">
          <div className="chai-flex chai-items-center chai-gap-4 chai-p-4 chai-rounded-lg chai-border chai-bg-white chai-shadow-sm">
            <span className="chai-h-10 chai-w-10 chai-rounded-full chai-bg-blue" />
            <div className="chai-flex chai-flex-col chai-gap-1">
              <span className="chai-text-base chai-font-semibold chai-text-black">
                Card title
              </span>
              <span className="chai-text-sm chai-text-gray">Supporting text</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Grid</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          <code className="font-mono">chai-grid chai-grid-cols-3 chai-gap-4</code> with
          colored cells
        </p>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4">
          <div className="chai-grid chai-grid-cols-3 chai-gap-4">
            <div className="chai-h-16 chai-rounded-md chai-bg-red" />
            <div className="chai-h-16 chai-rounded-md chai-bg-green" />
            <div className="chai-h-16 chai-rounded-md chai-bg-blue" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Typography</h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4">
          <div className="chai-flex chai-flex-col chai-gap-2">
            <p className="chai-text-4xl chai-font-bold chai-text-black chai-tracking-tight">
              Display
            </p>
            <p className="chai-text-lg chai-text-gray chai-leading-normal">
              Body copy with gray color and comfortable line height.
            </p>
            <p className="chai-text-sm chai-uppercase chai-tracking-wider chai-text-purple">
              Eyebrow
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Buttons</h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4">
          <div className="chai-flex chai-flex-wrap chai-gap-3">
            <button
              type="button"
              className="chai-inline-flex chai-items-center chai-justify-center chai-rounded-lg chai-bg-indigo chai-px-4 chai-py-2 chai-text-sm chai-font-semibold chai-text-white chai-shadow chai-transition"
            >
              Primary
            </button>
            <button
              type="button"
              className="chai-inline-flex chai-items-center chai-justify-center chai-rounded-lg chai-border chai-border-gray chai-bg-white chai-px-4 chai-py-2 chai-text-sm chai-font-medium chai-text-black"
            >
              Secondary
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Animations</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Keyframes are loaded on documentation pages so{" "}
          <code className="font-mono">chai-animate-*</code> utilities resolve.
        </p>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4">
          <div className="chai-flex chai-items-center chai-gap-6">
            <div className="chai-h-10 chai-w-10 chai-rounded-full chai-bg-teal chai-animate-pulse" />
            <div className="chai-h-10 chai-w-10 chai-rounded-full chai-bg-orange chai-animate-spin" />
          </div>
        </div>
      </section>
    </div>
  );
}
