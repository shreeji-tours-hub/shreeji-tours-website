import styles from "./AboutHero.module.css";
import { aboutHeroData } from "./AboutHeroData";
import {
  Users,
  Award,
  Headphones,
  HeartHandshake,
} from "lucide-react";

const icons = [
  Users,
  Award,
  Headphones,
  HeartHandshake,
];

export default function AboutHero() {
  return (
    <section className={styles.hero}>

      {/* BACKGROUND */}
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${aboutHeroData.image})`,
        }}
      />

      {/* OVERLAY */}
      <div className={styles.overlay} />

      <div className={styles.container}>

        <div className={styles.content}>

          {/* LABEL */}
          <span className={styles.label}>
            {aboutHeroData.label}
          </span>

          {/* TITLE */}
          <h1>
            {aboutHeroData.title}
            <br />

            <span>
              {aboutHeroData.highlight}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p>
            {aboutHeroData.description}
          </p>

          {/* STATS */}
          <div className={styles.stats}>

            {aboutHeroData.stats.map((stat, index) => {

              const Icon = icons[index];

              return (
                <div
                  className={styles.stat}
                  key={stat.label}
                >

                  <div className={styles.icon}>
                    <Icon size={20} />
                  </div>

                  <strong>
                    {stat.number}
                  </strong>

                  <small>
                    {stat.label}
                  </small>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}