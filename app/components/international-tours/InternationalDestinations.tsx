"use client";

import styles from "./InternationalDestinations.module.css";
import { internationalDestinations } from "./InternationalDestinationsData";

export default function InternationalDestinations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Top International Destinations</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {internationalDestinations.map((destination) => (
            <div className={styles.card} key={destination.title}>
              <img
                src={destination.image}
                alt={destination.title}
              />

              <div>{destination.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}