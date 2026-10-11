import { ArrowRightIcon, CheckIcon } from "./icons";
import { ProcessStrip } from "./process-strip";
import { SiteHeader } from "./site-header";
import { StorySystem } from "./story-system";
import { WhatsAppCta } from "./whatsapp-cta";
import styles from "./hero.module.css";

const assurances = [
  "Solusi sesuai kebutuhan",
  "Proses yang jelas",
  "Pendampingan berkelanjutan",
];

export function Hero() {
  return (
    <main className={styles.page} id="beranda">
      <div className={styles.grain} aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Digital solutions for business</p>
          <h1 id="hero-title" className={styles.headline}>
            <span className={styles.line}>
              <span>Bisnis terus bertumbuh.</span>
            </span>
            <span className={`${styles.line} ${styles.accentLine}`}>
              <span>Sistem harus mengikuti.</span>
            </span>
          </h1>
          <p className={styles.supporting}>
            Kami membantu bisnis menyederhanakan proses kerja melalui software,
            otomasi, dan data yang saling terhubung—agar tim bisa fokus pada hal
            yang lebih berarti.
          </p>
          <div className={styles.actions}>
            <WhatsAppCta>Diskusikan kebutuhan Anda</WhatsAppCta>
            <a className={styles.secondary} href="#cara-kerja">
              <span>Kenali pendekatan kami</span>
              <ArrowRightIcon />
            </a>
          </div>
          <ul className={styles.assurances} aria-label="Komitmen layanan">
            {assurances.map((item) => (
              <li key={item}>
                <span aria-hidden="true">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} id="layanan">
          <p className={styles.visualKicker}>
            <span>01—04</span>
            Dari kebutuhan menuju pertumbuhan
          </p>
          <StorySystem />
        </div>
      </section>

      <ProcessStrip />
      <span id="faq" className={styles.anchor} aria-hidden="true" />
    </main>
  );
}
