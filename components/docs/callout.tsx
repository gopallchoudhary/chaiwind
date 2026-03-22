export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--accent)]/50 p-4 text-sm text-[var(--foreground)]">
      {title ? <p className="mb-2 font-semibold">{title}</p> : null}
      <div className="text-[var(--muted-foreground)] [&_a]:text-[var(--foreground)] [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
