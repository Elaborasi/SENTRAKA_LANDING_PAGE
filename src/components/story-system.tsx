import { ConnectIcon, GrowthIcon, InsightsIcon, SearchIcon } from "./icons";
import { BrandLogo } from "./brand-logo";
import styles from "./story-system.module.css";

const stages = [
  {
    number: "01",
    english: "Understand",
    title: "Pahami kebutuhan",
    copy: "Menggali proses bisnis dan tantangan yang nyata.",
    icon: SearchIcon,
    className: styles.stageOne,
  },
  {
    number: "02",
    english: "Connect",
    title: "Hubungkan sistem",
    copy: "Menyatukan proses agar bergerak sebagai satu kesatuan.",
    icon: ConnectIcon,
    className: styles.stageTwo,
  },
  {
    number: "03",
    english: "Gain insight",
    title: "Kelola data",
    copy: "Mengubah data menjadi informasi yang berguna.",
    icon: InsightsIcon,
    className: styles.stageThree,
  },
  {
    number: "04",
    english: "Move forward",
    title: "Dukung pertumbuhan",
    copy: "Membantu bisnis bekerja lebih efektif dan siap berkembang.",
    icon: GrowthIcon,
    className: styles.stageFour,
  },
];

export function StorySystem() {
  return (
    <figure className={styles.figure} aria-labelledby="story-caption">
      <figcaption id="story-caption" className={styles.caption}>
        Empat langkah Sentraka mengubah proses kompleks menjadi sistem yang
        terhubung.
      </figcaption>

      <svg
        className={styles.connections}
        viewBox="0 0 720 570"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.pathBase}
          d="M230 145 C310 145 285 236 360 236"
        />
        <path
          className={styles.pathFlow}
          d="M230 145 C310 145 285 236 360 236"
        />
        <path
          className={styles.pathBase}
          d="M360 236 C430 236 400 145 495 145"
        />
        <path
          className={styles.pathFlow}
          d="M360 236 C430 236 400 145 495 145"
        />
        <path
          className={styles.pathBase}
          d="M220 406 C310 406 285 315 360 315"
        />
        <path
          className={styles.pathFlow}
          d="M220 406 C310 406 285 315 360 315"
        />
        <path
          className={styles.pathBase}
          d="M360 315 C430 315 410 410 510 410"
        />
        <path
          className={styles.pathFlow}
          d="M360 315 C430 315 410 410 510 410"
        />
        <circle className={styles.nodeOrange} cx="230" cy="145" r="6" />
        <circle className={styles.nodeGreen} cx="495" cy="145" r="6" />
        <circle className={styles.nodeSand} cx="220" cy="406" r="6" />
        <circle className={styles.nodeOrange} cx="510" cy="410" r="6" />
      </svg>

      <div className={styles.orbitOne} aria-hidden="true" />
      <div className={styles.orbitTwo} aria-hidden="true" />

      <div className={styles.core} aria-hidden="true">
        <span className={styles.coreHalo} />
        <BrandLogo compact />
        <span className={styles.coreLabel}>Sistem terhubung</span>
      </div>

      {stages.map((stage) => {
        const Icon = stage.icon;
        return (
          <article
            className={`${styles.stage} ${stage.className}`}
            key={stage.number}
          >
            <div className={styles.iconWrap} aria-hidden="true">
              <Icon />
            </div>
            <div className={styles.stageContent}>
              <div className={styles.stageMeta}>
                <span>{stage.number}</span>
                <span>{stage.english}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </div>
          </article>
        );
      })}
    </figure>
  );
}
