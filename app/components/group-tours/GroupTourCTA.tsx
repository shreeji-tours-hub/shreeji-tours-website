"use client";

import styles from "./GroupTourCTA.module.css";
import { groupTourCTA } from "./GroupTourCTAData";

export default function GroupTourCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.cta}>
        <div className={styles.content}>
          <h2>{groupTourCTA.title}</h2>

          <p>{groupTourCTA.description}</p>

          <a href="/contact" className={styles.button}>
            {groupTourCTA.button}
            <span>→</span>
          </a>
        </div>

        <div className={styles.photos}>
          {groupTourCTA.images.map((image, index) => (
            <div
              className={`${styles.photo} ${styles[`photo${index + 1}`]}`}
              key={image}
            >
              <img src={image} alt="Group travel" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}