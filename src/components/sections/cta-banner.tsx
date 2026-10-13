import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/button";
import { Parallax, Reveal } from "@/components/ui/motion";
import { ModuleShape } from "@/components/ui/modules";
import styles from "./cta-banner.module.css";

type CtaBannerProps = {
  title: string;
  copy: string;
  showEmail?: boolean;
};

export function CtaBanner({ title, copy, showEmail = false }: CtaBannerProps) {
  return (
    <section className={styles.wrap} aria-labelledby="cta-title">
      <div className={styles.panel}>
        <div className={styles.art} aria-hidden="true">
          <Parallax amount={18} className={`${styles.shape} ${styles.s1}`}>
            <ModuleShape slot="tl" color="#164a3e" />
          </Parallax>
          <Parallax amount={26} className={`${styles.shape} ${styles.s2}`}>
            <ModuleShape slot="tr" color="#f97316" />
          </Parallax>
          <Parallax amount={34} className={`${styles.shape} ${styles.s3}`}>
            <ModuleShape slot="bl" color="#d4a574" />
          </Parallax>
          <Parallax amount={14} className={`${styles.shape} ${styles.s4}`}>
            <ModuleShape slot="br" color="#164a3e" />
          </Parallax>
        </div>

        <div className={styles.copy}>
          <Reveal>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className={styles.text}>{copy}</p>
          </Reveal>
          <Reveal delay={0.16} className={styles.actions}>
            <WhatsAppButton variant="orange">Chat via WhatsApp</WhatsAppButton>
            {showEmail && siteConfig.email ? (
              <span className={styles.email}>
                atau email{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </span>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
