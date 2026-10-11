import { ConnectIcon, GrowthIcon, InsightsIcon, SearchIcon } from "./icons";
import { BrandLogo } from "./brand-logo";
import styles from "./story-system.module.css";

const stages = [
  {
    number: "01",
    english: "Understand",
    title: "Pahami cara kerja",
    copy: "Kami mulai dari pekerjaan dan tantangan yang benar-benar dihadapi tim Anda.",
    icon: SearchIcon,
    className: styles.stageOne,
  },
  {
    number: "02",
    english: "Design",
    title: "Rancang solusi",
    copy: "Software dan otomasi dirancang sesuai kebutuhan, bukan sekadar mengikuti tren.",
    icon: ConnectIcon,
    className: styles.stageTwo,
  },
  {
    number: "03",
    english: "Connect",
    title: "Hubungkan proses",
    copy: "Sistem dan data diintegrasikan agar pekerjaan terasa lebih sederhana.",
    icon: InsightsIcon,
    className: styles.stageThree,
  },
  {
    number: "04",
    english: "Grow",
    title: "Dampingi pertumbuhan",
    copy: "Solusi terus dikembangkan agar tetap berguna dan dapat diandalkan.",
    icon: GrowthIcon,
    className: styles.stageFour,
  },
];

export function StorySystem() {
  return (
    <figure className={styles.figure} aria-labelledby="story-caption">
      <figcaption id="story-caption" className={styles.caption}>
        Cara Sentraka membangun teknologi yang terarah, berguna, dan dapat
        diandalkan.
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
          d="M495 145 C400 145 430 236 360 236"
        />
        <path
          className={styles.pathFlow}
          d="M495 145 C400 145 430 236 360 236"
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
          d="M510 410 C410 410 430 315 360 315"
        />
        <path
          className={styles.pathFlow}
          d="M510 410 C410 410 430 315 360 315"
        />
        <circle className={styles.flowParticle} r="4">
          <animateMotion
            path="M230 145 C310 145 285 236 360 236"
            dur="3.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle className={styles.flowParticle} r="4">
          <animateMotion
            path="M495 145 C400 145 430 236 360 236"
            dur="3.8s"
            begin="-1.9s"
            repeatCount="indefinite"
          />
        </circle>
        <circle className={styles.flowParticle} r="4">
          <animateMotion
            path="M220 406 C310 406 285 315 360 315"
            dur="4.2s"
            begin="-1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle className={styles.flowParticle} r="4">
          <animateMotion
            path="M510 410 C410 410 430 315 360 315"
            dur="4.2s"
            begin="-3.1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle className={styles.nodeOrange} cx="230" cy="145" r="6" />
        <circle className={styles.nodeGreen} cx="495" cy="145" r="6" />
        <circle className={styles.nodeSand} cx="220" cy="406" r="6" />
        <circle className={styles.nodeOrange} cx="510" cy="410" r="6" />
      </svg>

      <div className={styles.orbitOne} aria-hidden="true" />
      <div className={styles.orbitTwo} aria-hidden="true" />

      <div className={styles.core} aria-hidden="true">
        <span className={styles.coreHalo} />
        <span className={styles.corePulse} />
        <BrandLogo compact />
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
