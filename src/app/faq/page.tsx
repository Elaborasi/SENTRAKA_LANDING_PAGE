import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqExplorer } from "@/components/sections/faq-explorer";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan seputar layanan, biaya, proses, keamanan data, dan dukungan Sentraka Digital.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang"
        accent="sering diajukan."
        copy="Jawaban singkat dan jujur untuk calon pelanggan. Belum ketemu? Tanyakan langsung lewat WhatsApp."
      />
      <FaqExplorer />
      <CtaBanner
        title="Mulai dari satu percakapan."
        copy="Ceritakan kebutuhan usaha Anda. Audit awal gratis dan tidak mengikat."
      />
    </>
  );
}
