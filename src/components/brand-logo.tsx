import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  compact?: boolean;
};

/**
 * Isolated development placeholder.
 * Replace this component's content with the supplied original logo asset once
 * the file is available in /public; do not recreate the brand mark in CSS/SVG.
 */
export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span
      className={`${styles.logo} ${compact ? styles.compact : ""}`}
      aria-label="Sentraka Digital"
      data-logo-placeholder="true"
    >
      <span className={styles.assetSlot} aria-hidden="true">
        SD
      </span>
      <span className={styles.wordmark}>
        <strong>Sentraka</strong>
        <span>Digital</span>
      </span>
    </span>
  );
}
