import type { ChaiwindClassName } from "./chaiwind-classes";
import classes from "./chaiwind-classes";

/** Escape a class name for use in a CSS selector (chai-* is safe; kept for completeness). */
export function escapeClassSelector(name: string): string {
  return name.replace(/\\/g, "\\\\").replace(/\./g, "\\.");
}

export function classesToStylesheet(
  map: Record<string, string> = classes as unknown as Record<string, string>
): string {
  return Object.entries(map)
    .map(([className, css]) => {
      const safe = `.${escapeClassSelector(className)}`;
      return `${safe} { ${css} }`;
    })
    .join("\n");
}

/** Subset of utilities for lighter example bundles. */
export function pickClasses(names: ChaiwindClassName[]): string {
  const subset: Record<string, string> = {};
  for (const n of names) {
    subset[n] = classes[n];
  }
  return classesToStylesheet(subset);
}
