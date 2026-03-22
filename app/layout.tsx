import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Chaiwind CSS",
    template: "%s · Chaiwind CSS",
  },
  description:
    "Utility-first CSS-in-JS toolkit inspired by Tailwind CSS — documentation, examples, and class reference.",
  openGraph: {
    title: "Chaiwind CSS",
    description:
      "Utility-first CSS-in-JS toolkit inspired by Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-[var(--primary-foreground)]"
          >
            Skip to content
          </a>
          <SiteHeader />
          <div className="flex flex-1 flex-col" id="main-content">
            {children}
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
