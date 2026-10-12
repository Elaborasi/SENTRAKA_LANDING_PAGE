import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import styles from "./button.module.css";

type Variant = "forest" | "orange" | "ghost" | "light";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  external?: boolean;
  whatsapp?: boolean;
  arrow?: boolean;
  block?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "forest",
  size = "md",
  external = false,
  whatsapp = false,
  arrow = false,
  block = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[variant],
    size === "sm" ? styles.sm : "",
    block ? styles.block : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {whatsapp ? <MessageCircle size={18} aria-hidden="true" /> : null}
      <span>{children}</span>
      {arrow ? (
        <ArrowRight className={styles.arrow} size={18} aria-hidden="true" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={href} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
}

type WhatsAppButtonProps = Omit<ButtonProps, "href" | "external"> & {
  message?: string;
};

export function WhatsAppButton({ message, ...props }: WhatsAppButtonProps) {
  return <Button {...props} href={getWhatsAppUrl(message)} external />;
}
