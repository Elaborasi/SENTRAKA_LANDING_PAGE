const DEFAULT_WHATSAPP = "6280000000000";

export const siteConfig = {
  name: "Sentraka Digital",
  tagline: "Solusi digital untuk bisnis yang lebih maju.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP,
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  whatsappMessage:
    "Halo Sentraka Digital, saya ingin mendiskusikan solusi digital yang tepat untuk kebutuhan bisnis saya.",
  navigation: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Cara Kerja", href: "/cara-kerja" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

export function getWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

/** Nomor tampil di tombol; placeholder bila belum diisi lewat env. */
export function getWhatsAppLabel() {
  return siteConfig.whatsappNumber === DEFAULT_WHATSAPP
    ? "[nomor]"
    : `+${siteConfig.whatsappNumber}`;
}

export function getEmailLabel() {
  return siteConfig.email || "[alamat email]";
}
