import classes, { type ChaiwindClassName } from "./chaiwind-classes";

export const CATEGORY_ORDER = [
  "Spacing",
  "Sizing",
  "Typography",
  "Colors — Text",
  "Colors — Background",
  "Layout",
  "Position",
  "Borders",
  "Shadows",
  "Opacity",
  "Overflow",
  "Cursor",
  "Pointer & user select",
  "Transition",
  "Transform",
  "Animation",
  "Lists",
] as const;

export type CategoryLabel = (typeof CATEGORY_ORDER)[number];

export function getCategoryForClass(name: string): CategoryLabel | "Other" {
  if (/^chai-(p|px|py|pt|pb|pl|pr)-/.test(name)) return "Spacing";
  if (/^chai-(m|mx|my|mt|mb|ml|mr)-/.test(name)) return "Spacing";

  if (/^chai-(w|min-w|max-w|h|min-h|max-h)-/.test(name)) return "Sizing";

  if (
    /^chai-text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/.test(name) ||
    /^chai-font-/.test(name) ||
    /^chai-italic$|^chai-not-italic$/.test(name) ||
    /^chai-text-(left|center|right|justify)$/.test(name) ||
    /^chai-(uppercase|lowercase|capitalize)$/.test(name) ||
    /^chai-(underline|line-through|no-underline)$/.test(name) ||
    /^chai-tracking-/.test(name) ||
    /^chai-leading-/.test(name) ||
    /^chai-truncate$|^chai-text-wrap$|^chai-text-nowrap$/.test(name)
  ) {
    return "Typography";
  }

  if (/^chai-text-/.test(name)) return "Colors — Text";

  if (
    /^chai-bg-(white|black|red|blue|green|yellow|purple|pink|gray|orange|indigo|teal|transparent)$/.test(
      name
    ) ||
    /^chai-bg-(cover|contain|center|top|bottom|no-repeat)$/.test(name)
  ) {
    return "Colors — Background";
  }

  if (
    /^chai-(block|inline|inline-block|hidden|flex|inline-flex|grid|inline-grid)$/.test(name) ||
    /^chai-flex/.test(name) ||
    /^chai-items-/.test(name) ||
    /^chai-justify-/.test(name) ||
    /^chai-self-/.test(name) ||
    /^chai-gap-/.test(name) ||
    /^chai-grid-cols-|^chai-col-span-/.test(name)
  ) {
    return "Layout";
  }

  if (
    /^chai-(static|relative|absolute|fixed|sticky)$/.test(name) ||
    /^chai-inset-|^chai-(top|right|bottom|left)-/.test(name) ||
    /^chai-z-/.test(name)
  ) {
    return "Position";
  }

  if (/^chai-border/.test(name) || /^chai-rounded/.test(name)) return "Borders";

  if (/^chai-shadow/.test(name)) return "Shadows";

  if (/^chai-opacity-/.test(name)) return "Opacity";

  if (/^chai-overflow/.test(name)) return "Overflow";

  if (/^chai-cursor-/.test(name)) return "Cursor";

  if (/^chai-pointer-|^chai-select-/.test(name)) return "Pointer & user select";

  if (/^chai-transition|^chai-duration-|^chai-ease-/.test(name)) return "Transition";

  if (/^chai-scale-|^chai-rotate-/.test(name)) return "Transform";

  if (/^chai-animate-/.test(name)) return "Animation";

  if (/^chai-list-/.test(name)) return "Lists";

  return "Other";
}

export type ClassRow = {
  name: ChaiwindClassName;
  css: string;
  category: CategoryLabel | "Other";
};

export function getAllClassRows(): ClassRow[] {
  return (Object.keys(classes) as ChaiwindClassName[]).map((name) => ({
    name,
    css: classes[name],
    category: getCategoryForClass(name),
  }));
}

export function filterClassRows(
  rows: ClassRow[],
  query: string,
  category: CategoryLabel | "Other" | "all"
): ClassRow[] {
  const q = query.trim().toLowerCase();
  return rows.filter((row) => {
    if (category !== "all" && row.category !== category) return false;
    if (!q) return true;
    return (
      row.name.toLowerCase().includes(q) ||
      row.css.toLowerCase().includes(q)
    );
  });
}
