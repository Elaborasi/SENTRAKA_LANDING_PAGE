"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/button";
import { BrandLogo } from "./brand-logo";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Sentraka Digital — Beranda"
          onClick={() => setOpen(false)}
        >
          <BrandLogo priority />
        </Link>

        <nav className={styles.nav} aria-label="Navigasi utama">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? styles.active : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <WhatsAppButton size="sm" whatsapp arrow>
            Diskusi via WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navigasi seluler">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              className={isActive(item.href) ? styles.sheetActive : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton whatsapp arrow block>
          Diskusi via WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}
