"use client";

import styles from "./GroupDestinations.module.css";
import { groupDestinations } from "./GroupDestinationsData";

export default function GroupDestinations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Top Group Destinations in India</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {groupDestinations.map((destination) => (
            <div className={styles.card} key={destination.title}>
              <img
                src={destination.image}
                alt={destination.title}
              />

              <div>{destination.title}</div>
            </div>
          ))}
        </div>

        <a href="/tours" className={styles.button}>
          Explore All Destinations →
        </a>
      </div>
    </section>
  );
}