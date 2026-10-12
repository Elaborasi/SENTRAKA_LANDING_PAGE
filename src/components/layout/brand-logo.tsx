import Image from "next/image";

type BrandLogoProps = {
  variant?: "primary" | "dark";
  height?: number;
  priority?: boolean;
};

const sources = {
  primary: { src: "/brand/sentraka-logo-horizontal-compact.svg", w: 763.69, h: 180.2 },
  dark: { src: "/brand/sentraka-logo-horizontal-compact-dark.svg", w: 763.69, h: 180.2 },
} as const;

export function BrandLogo({
  variant = "primary",
  height = 40,
  priority = false,
}: BrandLogoProps) {
  const s = sources[variant];
  return (
    <Image
      src={s.src}
      alt="Sentraka Digital"
      width={Math.round((s.w / s.h) * height)}
      height={height}
      priority={priority}
      style={{ width: "auto", height }}
    />
  );
}
