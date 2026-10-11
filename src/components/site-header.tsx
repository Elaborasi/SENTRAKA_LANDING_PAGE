import { siteConfig } from "@/config/site";
import { BrandLogo } from "./brand-logo";
import { WhatsAppCta } from "./whatsapp-cta";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a
        href="#beranda"
        className={styles.brand}
        aria-label="Sentraka Digital — Beranda"
      >
        <BrandLogo />
      </a>
      <nav className={styles.nav} aria-label="Navigasi utama">
        {siteConfig.navigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={index === 0 ? styles.active : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <WhatsAppCta variant="nav">Diskusi via WhatsApp</WhatsAppCta>
    </header>
  );
}
