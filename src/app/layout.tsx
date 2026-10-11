import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sentraka Digital — Sistem yang Bertumbuh Bersama Bisnis",
  description:
    "Sentraka Digital membantu bisnis menyederhanakan proses kerja melalui software, otomasi, dan data yang saling terhubung.",
};

export const viewport: Viewport = {
  themeColor: "#F7F5EF",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
