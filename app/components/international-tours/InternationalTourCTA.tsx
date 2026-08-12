"use client";

import styles from "./InternationalTourCTA.module.css";
import { internationalTourCTA } from "./InternationalTourCTAData";

export default function InternationalTourCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.cta}>
        <div className={styles.content}>
          <h2>{internationalTourCTA.title}</h2>

          <p>{internationalTourCTA.description}</p>

          <a href="/contact" className={styles.button}>
            {internationalTourCTA.button}
            <span>→</span>
          </a>
        </div>

        <div className={styles.photos}>
          {internationalTourCTA.images.map((image, index) => (
            <div
              className={`${styles.photo} ${styles[`photo${index + 1}`]}`}
              key={image}
            >
              <img src={image} alt="International destination" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}