"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ModuleSlot, Tone } from "@/content/content";
import { EASE } from "./motion";

const PATHS = {
  tl: "M50,0 H96 A4,4 0 0 1 100,4 V96 A4,4 0 0 1 96,100 H50 A50,50 0 0 1 0,50 V50 A50,50 0 0 1 50,0 Z",
  bl: "M4,108 H50 A50,50 0 0 1 100,158 V158 A50,50 0 0 1 50,208 H4 A4,4 0 0 1 0,204 V112 A4,4 0 0 1 4,108 Z",
  br: "M112,108 H158 A50,50 0 0 1 208,158 V204 A4,4 0 0 1 204,208 H158 A50,50 0 0 1 108,158 V112 A4,4 0 0 1 112,108 Z",
} as const;

const VIEWBOX: Record<ModuleSlot, string> = {
  tl: "0 0 100 100",
  tr: "108 0 100 100",
  bl: "0 108 100 100",
  br: "108 108 100 100",
};

function Shape({ slot, fill }: { slot: ModuleSlot; fill: string }) {
  return slot === "tr" ? (
    <circle cx="158" cy="50" r="50" fill={fill} />
  ) : (
    <path d={PATHS[slot]} fill={fill} />
  );
}

/** Satu modul brand (dipakai sebagai ikon/dekorasi). */
export function ModuleShape({
  slot,
  color,
  className,
}: {
  slot: ModuleSlot;
  color: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={VIEWBOX[slot]}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Shape slot={slot} fill={color} />
    </svg>
  );
}

/** Warna panel + empat modul untuk tiap nada kartu layanan. */
export const toneVisual: Record<
  Tone,
  { panel: string; base: string; accent: string }
> = {
  forest: { panel: "#164a3e", base: "#1f6152", accent: "#f7f5ef" },
  peach: { panel: "#f5cba8", base: "#e6a878", accent: "#f97316" },
  sand: { panel: "#dcc2a0", base: "#c9a578", accent: "#0f3d33" },
  navy: { panel: "#2a364d", base: "#3b4a66", accent: "#d4a574" },
};

const SLOTS: ModuleSlot[] = ["tl", "tr", "bl", "br"];

/** Susunan 2x2 modul dengan satu modul disorot; muncul bergantian saat terlihat. */
export function ModuleGrid({
  tone,
  highlight,
  className,
}: {
  tone: Tone;
  highlight: ModuleSlot;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const v = toneVisual[tone];

  return (
    <svg
      viewBox="0 0 208 208"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {SLOTS.map((slot, i) => (
        <motion.g
          key={slot}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
        >
          <Shape slot={slot} fill={slot === highlight ? v.accent : v.base} />
        </motion.g>
      ))}
    </svg>
  );
}
