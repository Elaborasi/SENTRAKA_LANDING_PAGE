import { siteConfig } from "@/config/site";
import { BrandLogo } from "./brand-logo";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={`container ${styles.footer}`}>
      <BrandLogo height={36} />
      <p>{siteConfig.tagline}</p>
    </footer>
  );
}
