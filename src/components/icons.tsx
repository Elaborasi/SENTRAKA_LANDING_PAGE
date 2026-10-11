type IconProps = {
  size?: number;
  className?: string;
};

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRightIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.2 7.7c.3-.3.6-.2.8.1l1 2c.1.3.1.5-.1.7l-.7.8c.7 1.5 1.8 2.6 3.4 3.3l.8-.9c.2-.2.4-.2.7-.1l1.9.9c.3.2.4.5.3.8-.3 1-1.2 1.7-2.3 1.7-3.9-.1-7.2-3.2-7.4-7.1 0-.9.6-1.8 1.6-2.2Z" />
    </svg>
  );
}

export function SearchIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="M4 5.5h12v14H4z" />
      <path d="M7 9h6M7 13h5M7 17h3" />
      <path d="m16 14 4 4M20 14l-4 4" />
    </svg>
  );
}

export function ConnectIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 7v5M6 16v-3h12v3M9 12h6" />
    </svg>
  );
}

export function InsightsIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="M5 19v-5h3v5M10.5 19V9h3v10M16 19V4h3v15" />
    </svg>
  );
}

export function GrowthIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="m5 17 5-5 3 3 6-8" />
      <path d="M14 7h5v5" />
    </svg>
  );
}

export function CheckIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...shared}
    >
      <path d="m6 12 4 4 8-9" />
    </svg>
  );
}
