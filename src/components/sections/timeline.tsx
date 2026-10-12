"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { steps } from "@/content/content";
import { EASE, Reveal } from "@/components/ui/motion";
import styles from "./timeline.module.css";

export function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  // Garis progres terisi mengikuti scroll; langkah aktif = titik tengah layar.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 60%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section className={`container ${styles.section}`}>
      <aside className={styles.side}>
        <Reveal className={styles.note}>
          <p className={styles.noteKicker}>Anda tidak perlu</p>
          <h2>Paham teknologi untuk memulai.</h2>
          <p>
            Kami menjelaskan dengan bahasa sehari-hari dan hanya meminta
            keputusan yang memang perlu dari Anda.
          </p>
          <div className={styles.meta}>
            <span aria-live="polite">
              Tahap {String(active + 1).padStart(2, "0")} dari{" "}
              {String(steps.length).padStart(2, "0")}
            </span>
            <div className={styles.bar} aria-hidden="true">
              <motion.i
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </div>
          </div>
        </Reveal>
      </aside>

      <ol ref={listRef} className={styles.list}>
        <span className={styles.track} aria-hidden="true">
          <motion.span
            className={styles.fill}
            style={reduce ? { scaleY: 1 } : { scaleY: scrollYProgress }}
          />
        </span>
        {steps.map((step, i) => {
          const state =
            i === active ? styles.current : i < active ? styles.done : styles.upcoming;
          return (
            <motion.li
              key={step.title}
              className={`${styles.item} ${state}`}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.card}>
                <h3>
                  <span className="sr-only">Tahap {i + 1}: </span>
                  {step.title}
                </h3>
                <p>{step.copy}</p>
                <span className={styles.pill}>Anda terima: {step.receive}</span>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
