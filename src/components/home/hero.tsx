import Image from "next/image";
import { Check, ChartColumn, FileText, Network, TrendingUp } from "lucide-react";
import { heroStages } from "@/content/content";
import { Button, WhatsAppButton } from "@/components/ui/button";
import { Heading, Parallax, Reveal } from "@/components/ui/motion";
import styles from "./hero.module.css";

const icons = [FileText, Network, ChartColumn, TrendingUp];
const slots = [styles.c1, styles.c2, styles.c3, styles.c4];
const depth = [26, 44, 36, 56];

const assurances = [
  "Pengembangan software",
  "Otomasi dan integrasi sistem",
  "Produk digital",
];

/* Jalur koneksi kartu -> inti logo (viewBox 720x600). */
const paths = [
  { d: "M266 150 C320 150 300 230 328 272", dur: "3.8s", begin: "0s" },
  { d: "M454 150 C400 150 420 230 392 272", dur: "3.8s", begin: "-1.9s" },
  { d: "M266 570 C320 570 300 490 328 448", dur: "4.2s", begin: "-1s" },
  { d: "M454 570 C400 570 420 490 392 448", dur: "4.2s", begin: "-3.1s" },
];

const nodes = [
  { cx: 266, cy: 150, cls: styles.nodeOrange },
  { cx: 454, cy: 150, cls: styles.nodeGreen },
  { cx: 266, cy: 570, cls: styles.nodeSand },
  { cx: 454, cy: 570, cls: styles.nodeOrange },
];

export function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <Reveal as="p" className="eyebrow" y={12}>
          Terarah, berguna, dan dapat diandalkan
        </Reveal>
        <div id="hero-title" className={styles.titleWrap}>
          <Heading
            as="h1"
            className="h1"
            text="Mitra teknologi untuk"
            accent="solusi digital yang praktis."
            delay={0.1}
          />
        </div>
        <Reveal as="p" className={`lead ${styles.lead}`} delay={0.35}>
          Sentraka Digital membangun solusi digital praktis untuk
          menyederhanakan pekerjaan dan menghubungkan proses bisnis.
        </Reveal>
        <Reveal className={styles.actions} delay={0.45}>
          <WhatsAppButton whatsapp arrow>
            Diskusikan kebutuhan Anda
          </WhatsAppButton>
          <Button href="/cara-kerja" variant="ghost" arrow>
            Lihat cara kami bekerja
          </Button>
        </Reveal>
        <ul className={styles.assurances}>
          {assurances.map((item) => (
            <li key={item}>
              <span aria-hidden="true">
                <Check size={14} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.visual}>
        <svg
          className={styles.connections}
          viewBox="0 0 720 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {paths.map((p) => (
            <g key={p.d}>
              <path className={styles.pathBase} d={p.d} />
              <path className={styles.pathFlow} d={p.d} />
            </g>
          ))}
          {paths.map((p) => (
            <circle className={styles.flowParticle} r="4" key={`p-${p.d}`}>
              <animateMotion
                path={p.d}
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          {nodes.map((n) => (
            <circle
              key={`${n.cx}-${n.cy}`}
              className={n.cls}
              cx={n.cx}
              cy={n.cy}
              r="6"
            />
          ))}
        </svg>

        <div className={styles.rings} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <Parallax amount={14} className={styles.coreSlot}>
          <div className={styles.core}>
            <span className={styles.coreHalo} aria-hidden="true" />
            <span className={styles.corePulse} aria-hidden="true" />
            <Image
              src="/brand/sentraka-logo-horizontal-compact.svg"
              alt="Sentraka Digital"
              width={190}
              height={45}
            />
          </div>
        </Parallax>

        {heroStages.map((stage, i) => {
          const Icon = icons[i];
          return (
            <Parallax
              key={stage.number}
              amount={depth[i]}
              className={`${styles.card} ${slots[i]}`}
            >
              <div className={styles.enter}>
                <article>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <p className={styles.tag}>
                    {stage.number} {stage.tag}
                  </p>
                  <h3>{stage.title}</h3>
                  <p className={styles.copyText}>{stage.copy}</p>
                </article>
              </div>
            </Parallax>
          );
        })}
      </div>
    </section>
  );
}
