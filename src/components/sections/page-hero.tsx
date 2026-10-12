import { Heading, Reveal } from "@/components/ui/motion";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  aside?: React.ReactNode;
};

export function PageHero({ eyebrow, title, accent, copy, aside }: PageHeroProps) {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.main}>
        <Reveal as="p" className="eyebrow" y={12}>
          {eyebrow}
        </Reveal>
        <Heading
          as="h1"
          className={`h1 ${styles.title}`}
          text={title}
          accent={accent}
          delay={0.08}
        />
        <Reveal as="p" className={`lead ${styles.copy}`} delay={0.3}>
          {copy}
        </Reveal>
      </div>
      {aside ? (
        <Reveal className={styles.aside} delay={0.4}>
          {aside}
        </Reveal>
      ) : null}
    </section>
  );
}
