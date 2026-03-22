import { Hero } from "@/components/marketing/hero";
import { FeatureGrid } from "@/components/marketing/feature-grid";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <FeatureGrid />
    </main>
  );
}
