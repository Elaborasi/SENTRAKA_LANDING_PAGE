import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sentraka Digital — Solusi Digital untuk Bisnis yang Lebih Maju",
  description:
    "Sentraka Digital adalah mitra teknologi untuk software, otomasi proses, integrasi sistem, dan produk digital yang praktis serta dapat diandalkan.",
};

export const viewport: Viewport = {
  themeColor: "#F7F5EF",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
