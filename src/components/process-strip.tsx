import {
  ArrowRightIcon,
  ConnectIcon,
  GrowthIcon,
  InsightsIcon,
  SearchIcon,
} from "./icons";
import styles from "./process-strip.module.css";

const before = ["File tersebar", "Pekerjaan repetitif", "Laporan manual"];
const after = [
  "Proses terotomasi",
  "Data terintegrasi",
  "Laporan real-time",
  "Siap bertumbuh",
];

export function ProcessStrip() {
  return (
    <section
      className={styles.strip}
      id="cara-kerja"
      aria-labelledby="process-title"
    >
      <div className={styles.heading}>
        <p id="process-title">Dari proses manual</p>
        <span aria-hidden="true" />
        <ArrowRightIcon />
        <p>Menuju sistem yang terhubung</p>
      </div>
      <div className={styles.flow}>
        <div className={styles.group}>
          {before.map((label, index) => {
            const Icon = [SearchIcon, ConnectIcon, InsightsIcon][index];
            return (
              <div className={styles.beforeItem} key={label}>
                <Icon size={18} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
        <ArrowRightIcon className={styles.centerArrow} />
        <div className={styles.group}>
          {after.map((label, index) => {
            const Icon = [ConnectIcon, SearchIcon, InsightsIcon, GrowthIcon][
              index
            ];
            return (
              <div className={styles.afterItem} key={label}>
                <Icon size={18} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
