import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const transcript = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "e-Codes-PROJECTS-chaiwind",
  "agent-transcripts",
  "4e09e2ba-8442-476b-ae6f-e428bfd7aab9",
  "4e09e2ba-8442-476b-ae6f-e428bfd7aab9.jsonl"
);

const lines = fs.readFileSync(transcript, "utf8").split("\n");
const row = lines.find((l) => l.includes("'chai-p-1': 'padding: 0.25rem'"));
if (!row) {
  console.error("Transcript line with classes not found");
  process.exit(1);
}
const { message } = JSON.parse(row);
const text = message.content[0].text;
const start = text.indexOf("const classes = {");
const endMarker = text.indexOf("};\n\nexport default classes", start);
if (start === -1 || endMarker === -1) {
  console.error("Could not find class object boundaries");
  process.exit(1);
}
const body = text.slice(start + "const classes = ".length, endMarker + 1);
const out = `/** Auto-generated from project transcript — Chaiwind utility map */
const classes = ${body} as const satisfies Record<string, string>;

export default classes;
export type ChaiwindClassName = keyof typeof classes;
`;
const outPath = path.join(__dirname, "..", "lib", "chaiwind-classes.ts");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath);
