import { getWhatsAppUrl } from "@/config/site";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import styles from "./whatsapp-cta.module.css";

type WhatsAppCtaProps = {
  children: React.ReactNode;
  variant?: "primary" | "nav";
};

export function WhatsAppCta({
  children,
  variant = "primary",
}: WhatsAppCtaProps) {
  return (
    <a
      className={`${styles.cta} ${styles[variant]}`}
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${String(children)} melalui WhatsApp (buka tab baru)`}
    >
      <WhatsAppIcon className={styles.whatsapp} />
      <span>{children}</span>
      <ArrowRightIcon className={styles.arrow} />
    </a>
  );
}
