import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/content/content";
import { Heading, Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ModuleShape } from "@/components/ui/modules";
import styles from "./services-preview.module.css";

const iconColor = {
  forest: "#f7f5ef",
  peach: "#f97316",
  sand: "#b98350",
  navy: "#d4a574",
} as const;

export function ServicesPreview() {
  return (
    <section className={`container section ${styles.section}`} id="layanan">
      <div className={styles.head}>
        <div>
          <Reveal as="p" className="eyebrow" y={12}>
            Layanan
          </Reveal>
          <Heading
            className={`h2 ${styles.title}`}
            text="Satu mitra untuk empat kebutuhan digital usaha."
          />
        </div>
        <Reveal delay={0.1}>
          <Link href="/layanan" className={styles.all}>
            Lihat semua layanan <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <Stagger as="ul" className={styles.grid}>
        {pillars.map((p) => (
          <StaggerItem as="li" key={p.id} className={styles.cell}>
            <Link
              href={`/layanan#${p.id}`}
              className={`${styles.card} ${styles[p.tone]}`}
            >
              <ModuleShape
                slot={p.slot}
                color={iconColor[p.tone]}
                className={styles.shape}
              />
              <h3>{p.name}</h3>
              <p>{p.short}</p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
