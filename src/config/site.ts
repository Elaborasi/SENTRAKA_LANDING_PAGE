export const siteConfig = {
  name: "Sentraka Digital",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6280000000000",
  whatsappMessage:
    "Halo Sentraka Digital, saya ingin mendiskusikan solusi digital yang tepat untuk kebutuhan bisnis saya.",
  navigation: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export function getWhatsAppUrl() {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;
}
