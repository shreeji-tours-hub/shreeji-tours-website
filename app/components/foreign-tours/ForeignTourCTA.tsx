"use client";

import styles from "./ForeignTourCTA.module.css";
import { ArrowRight } from "lucide-react";
import { foreignTourCTA } from "./ForeignTourCTAData";

export default function ForeignTourCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.cta}>

      

        {/* CONTENT */}
        <div className={styles.content}>
          <h2>{foreignTourCTA.title}</h2>

          <p>{foreignTourCTA.text}</p>

          <a
            href="/contact"
            className={styles.button}
          >
            <span>{foreignTourCTA.button}</span>
            <ArrowRight size={19} strokeWidth={2} />
          </a>
        </div>

        {/* RIGHT POLAROIDS */}
        <div className={styles.polaroids}>

          <div className={`${styles.polaroid} ${styles.photo1}`}>
            <img
              src={foreignTourCTA.images[0]}
              alt="Travel destination"
            />
          </div>

          <div className={`${styles.polaroid} ${styles.photo2}`}>
            <img
              src={foreignTourCTA.images[1]}
              alt="Travel destination"
            />
          </div>

          <div className={`${styles.polaroid} ${styles.photo3}`}>
            <img
              src={foreignTourCTA.images[2]}
              alt="Travel destination"
            />
          </div>

        </div>

      </div>
    </section>
  );
}