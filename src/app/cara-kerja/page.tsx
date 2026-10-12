import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "Cara Kerja",
  description:
    "Lima tahap kerja Sentraka Digital, dari audit singkat tanpa biaya sampai pendampingan setelah solusi berjalan.",
};

export default function CaraKerjaPage() {
  return (
    <>
      <PageHero
        eyebrow="Cara kerja"
        title="Lima tahap,"
        accent="tanpa istilah teknis yang membingungkan."
        copy="Dari percakapan pertama sampai pendampingan, Anda tahu apa yang sedang dikerjakan dan apa yang akan diterima."
      />
      <Timeline />
      <CtaBanner
        title="Mulai dari tahap pertama."
        copy="Audit singkat gratis dan tidak mengikat. Ceritakan usaha Anda."
      />
    </>
  );
}
