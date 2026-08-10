"use client";

import styles from "./TravelStatsSection.module.css";
import { travelStats } from "./TravelStatsData";


export default function TravelStatsSection() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.content}>

          <h2>
            We Make
            <br />
            World Travel Easy
          </h2>

          <p>
            Traveling under your own power and at your own
            pace, you’ll connect more meaningfully with your
            destination and have more fun!
          </p>

          <a
            href="#tours"
            className={styles.button}
          >
            Explore Our Tours
            <span>↗</span>
          </a>

        </div>


        {/* STATS */}

        <div className={styles.stats}>

          {travelStats.map((stat, index) => (

            <div
              key={index}
              className={`${styles.statCard} ${
                index === 1
                  ? styles.middleCard
                  : ""
              }`}
            >

              <div className={styles.icon}>
                {stat.icon}
              </div>

              <div className={styles.number}>
                {stat.number}
              </div>

              <div className={styles.label}>
                {stat.label}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}