import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sentraka Digital — Solusi Digital untuk Bisnis yang Lebih Maju",
    template: "%s | Sentraka Digital",
  },
  description:
    "Sentraka Digital adalah mitra teknologi untuk UMKM dan bisnis yang sedang tumbuh: website, toko online pribadi, solusi IT, dan pengelolaan server.",
};

export const viewport: Viewport = {
  themeColor: "#F7F5EF",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={spaceGrotesk.variable}>
      <body>
        <SmoothScroll>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
