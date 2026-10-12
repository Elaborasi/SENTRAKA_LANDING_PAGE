"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealTag = "div" | "li" | "article" | "section" | "p";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: RevealTag;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Fade + rise saat elemen masuk viewport. */
export function Reveal({
  children,
  className,
  style,
  as = "div",
  delay = 0,
  y = 26,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.05, staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "ul" | "ol";
  amount?: number;
};

/** Container yang memunculkan `StaggerItem` anaknya bergantian. */
export function Stagger({
  children,
  className,
  style,
  as = "div",
  amount = 0.2,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      style={style}
      variants={groupVariants}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "article";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={className} style={style} variants={itemVariants}>
      {children}
    </Comp>
  );
}

type HeadingProps = {
  text: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
};

const wordVariants: Variants = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.85, ease: EASE } },
};

/** Judul dengan reveal per kata (masked slide-up). `accent` diberi gradasi sand → terracotta. */
export function Heading({
  text,
  accent,
  as = "h2",
  className,
  delay = 0,
}: HeadingProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.h2;
  const base = text.split(" ").filter(Boolean);
  const accented = accent ? accent.split(" ").filter(Boolean) : [];
  const total = Math.max(accented.length - 1, 1);

  return (
    <Comp
      className={className}
      aria-label={[text, accent].filter(Boolean).join(" ")}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: 0.055 } },
      }}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {base.map((word, i) => (
        <span key={`b-${i}`} aria-hidden="true">
          <span className="word-mask">
            <motion.span className="word" variants={wordVariants}>
              {word}
            </motion.span>
          </span>{" "}
        </span>
      ))}
      {accented.map((word, i) => (
        <span key={`a-${i}`} aria-hidden="true">
          <span className="word-mask">
            <motion.span
              className="word"
              variants={wordVariants}
              style={{
                color: `color-mix(in srgb, #c2652a ${Math.round((i / total) * 100)}%, #b98a55)`,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < accented.length - 1 ? " " : null}
        </span>
      ))}
    </Comp>
  );
}

type ParallaxProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Amplitudo pergeseran vertikal dalam px (positif = bergerak naik saat scroll turun). */
  amount?: number;
  rotate?: number;
};

/** Bergeser halus mengikuti progres scroll elemen di viewport. */
export function Parallax({
  children,
  className,
  style,
  amount = 40,
  rotate = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? style : { ...style, y, rotate: r }}
    >
      {children}
    </motion.div>
  );
}
