import { ArrowRightIcon, CheckIcon } from "./icons";
import { ProcessStrip } from "./process-strip";
import { SiteHeader } from "./site-header";
import { StorySystem } from "./story-system";
import { WhatsAppCta } from "./whatsapp-cta";
import styles from "./hero.module.css";

const assurances = [
  "Pengembangan software",
  "Otomasi & integrasi sistem",
  "Produk digital",
];

export function Hero() {
  return (
    <main className={styles.page} id="beranda">
      <div className={styles.grain} aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Terarah, berguna, dan dapat diandalkan
          </p>
          <h1 id="hero-title" className={styles.headline}>
            <span className={styles.line}>
              <span>Mitra teknologi untuk</span>
            </span>
            <span className={`${styles.line} ${styles.accentLine}`}>
              <span>solusi digital yang praktis.</span>
            </span>
          </h1>
          <p className={styles.supporting}>
            Sentraka Digital membangun solusi digital praktis untuk
            menyederhanakan pekerjaan dan menghubungkan proses bisnis.
          </p>
          <div className={styles.actions}>
            <WhatsAppCta>Diskusikan kebutuhan Anda</WhatsAppCta>
            <a className={styles.secondary} href="#cara-kerja">
              <span>Lihat cara kami bekerja</span>
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
            Solusi digital untuk bisnis yang lebih maju
          </p>
          <StorySystem />
        </div>
      </section>

      <ProcessStrip />
      <span id="faq" className={styles.anchor} aria-hidden="true" />
    </main>
  );
}
