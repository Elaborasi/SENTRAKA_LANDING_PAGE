import type { Metadata } from "next";
import { pillars } from "@/content/content";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { PillarCard } from "@/components/sections/pillar-card";
import { ModuleShape } from "@/components/ui/modules";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Empat pilar layanan Sentraka Digital: Website, Personal Store, IT Solution, dan Server Management.",
};

const colors = ["#0f3d33", "#f97316", "#d4a574", "#1e293b"];
const slots = ["tl", "tr", "bl", "br"] as const;

export default function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Empat pilar untuk"
        accent="kebutuhan digital usaha Anda."
        copy="Mulai dari satu layanan, tambah sesuai pertumbuhan. Lingkup, jadwal, dan biaya selalu ditulis sebelum pekerjaan dimulai."
        aside={
          <div className={styles.chips} aria-hidden="true">
            {slots.map((slot, i) => (
              <ModuleShape key={slot} slot={slot} color={colors[i]} />
            ))}
          </div>
        }
      />
      <section className={`container ${styles.list}`}>
        {pillars.map((p) => (
          <PillarCard key={p.id} pillar={p} />
        ))}
      </section>
      <CtaBanner
        title="Belum yakin mulai dari mana?"
        copy="Ceritakan usaha Anda. Audit singkat kami gratis dan tidak mengikat."
      />
    </>
  );
}
