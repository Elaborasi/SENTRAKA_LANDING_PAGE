import {
  ArrowRight,
  ChartColumn,
  FileText,
  Network,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { afterItems, beforeItems } from "@/content/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import styles from "./process-strip.module.css";

const beforeIcons: LucideIcon[] = [FileText, Network, ChartColumn];
const afterIcons: LucideIcon[] = [Network, FileText, ChartColumn, Rocket];

export function ProcessStrip() {
  return (
    <section className="container" aria-label="Dari rumit menjadi sederhana">
      <Reveal className={styles.strip}>
        <div className={styles.heading}>
          <p>Dari pekerjaan yang rumit</p>
          <span className={styles.line} aria-hidden="true" />
          <ArrowRight size={16} aria-hidden="true" />
          <p>Menjadi proses yang lebih sederhana</p>
        </div>

        <Stagger className={styles.flow}>
          <ul className={styles.group}>
            {beforeItems.map((label, i) => {
              const Icon = beforeIcons[i];
              return (
                <StaggerItem as="li" key={label} className={styles.cell}>
                  <div className={styles.beforeItem}>
                    <Icon size={20} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </ul>

          <ArrowRight
            className={styles.centerArrow}
            size={22}
            aria-hidden="true"
          />

          <ul className={styles.group}>
            {afterItems.map((label, i) => {
              const Icon = afterIcons[i];
              const last = i === afterItems.length - 1;
              return (
                <StaggerItem as="li" key={label} className={styles.cell}>
                  <div
                    className={`${styles.afterItem} ${last ? styles.final : ""}`}
                    style={{ animationDelay: `${i * 1.2}s` }}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </ul>
        </Stagger>
      </Reveal>
    </section>
  );
}
