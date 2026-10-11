import Image from "next/image";
import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span
      className={`${styles.logo} ${compact ? styles.compact : ""}`}
      aria-label="Sentraka Digital"
    >
      <Image
        className={styles.image}
        src="/logo.png"
        alt=""
        width={2172}
        height={724}
        sizes={compact ? "112px" : "176px"}
        priority={!compact}
      />
    </span>
  );
}
