"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqGroups } from "@/content/content";
import { WhatsAppButton } from "@/components/ui/button";
import { EASE, Reveal } from "@/components/ui/motion";
import styles from "./faq-explorer.module.css";

export function FaqExplorer() {
  const uid = useId();
  const reduce = useReducedMotion();
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  const current = faqGroups[group];

  const selectGroup = (i: number) => {
    setGroup(i);
    setOpen(0);
  };

  return (
    <section className={`container ${styles.section}`}>
      <Reveal as="div" className={styles.side}>
        <div role="tablist" aria-label="Kategori FAQ" className={styles.tabs}>
          {faqGroups.map((g, i) => (
            <button
              key={g.name}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={group === i}
              aria-controls={`${uid}-panel`}
              className={`${styles.tab} ${group === i ? styles.tabOn : ""}`}
              onClick={() => selectGroup(i)}
            >
              <span>{g.name}</span>
              <span className={styles.count}>{g.items.length}</span>
            </button>
          ))}
        </div>

        <div className={styles.help}>
          <h2>Masih ada pertanyaan?</h2>
          <p>Kami balas dengan saran yang jelas dan praktis.</p>
          <WhatsAppButton variant="orange" size="sm" message="Halo Sentraka Digital, saya punya pertanyaan.">
            Tanya via WhatsApp
          </WhatsAppButton>
        </div>
      </Reveal>

      <div
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${group}`}
        className={styles.panel}
      >
        <AnimatePresence mode="wait">
          <motion.ul
            key={group}
            className={styles.list}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {current.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <h3>
                    <button
                      type="button"
                      className={styles.q}
                      aria-expanded={isOpen}
                      aria-controls={`${uid}-a-${group}-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.toggle} aria-hidden="true">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`${uid}-a-${group}-${i}`}
                        role="region"
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className={styles.a}>{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
