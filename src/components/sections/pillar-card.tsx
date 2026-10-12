"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Pillar } from "@/content/content";
import { WhatsAppButton } from "@/components/ui/button";
import { EASE, Stagger, StaggerItem } from "@/components/ui/motion";
import { ModuleGrid, toneVisual } from "@/components/ui/modules";
import styles from "./pillar-card.module.css";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const v = toneVisual[pillar.tone];

  return (
    <motion.article
      ref={ref}
      id={pillar.id}
      className={`${styles.card} ${styles[pillar.tone]}`}
      initial={reduce ? false : { opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <Stagger className={styles.body}>
        <StaggerItem>
          <p className={styles.kicker}>Pilar {pillar.name}</p>
        </StaggerItem>
        <StaggerItem>
          <h2 className={styles.title}>{pillar.title}</h2>
        </StaggerItem>
        <StaggerItem>
          <p className={styles.audience}>{pillar.audience}</p>
        </StaggerItem>
        <StaggerItem>
          <ul className={styles.bullets}>
            {pillar.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </StaggerItem>
        <StaggerItem>
          <p className={styles.result}>{pillar.result}</p>
        </StaggerItem>
        <StaggerItem>
          <WhatsAppButton
            size="sm"
            variant={pillar.tone === "forest" || pillar.tone === "navy" ? "light" : "forest"}
            message={pillar.message}
          >
            {pillar.cta}
          </WhatsAppButton>
        </StaggerItem>
      </Stagger>

      <div className={styles.art} style={{ background: v.panel }}>
        <motion.div style={reduce ? undefined : { y: artY }} className={styles.artInner}>
          <ModuleGrid tone={pillar.tone} highlight={pillar.slot} />
        </motion.div>
      </div>
    </motion.article>
  );
}
