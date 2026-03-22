import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { ChaiwindStyles } from "@/components/providers/chaiwind-styles";
import "./chaiwind-keyframes.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChaiwindStyles />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4 py-10 sm:px-6">
        <DocsSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}
