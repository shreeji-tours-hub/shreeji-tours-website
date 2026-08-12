"use client";

import styles from "./WhyInternationalTravel.module.css";
import { internationalReasons } from "./WhyInternationalTravelData";

export default function WhyInternationalTravel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>WHY TRAVEL WITH US?</span>
          <h2>Travel the World With Confidence</h2>
        </div>

        <div className={styles.grid}>
          {internationalReasons.map((reason) => (
            <div className={styles.item} key={reason.title}>
              <img src={reason.image} alt={reason.title} />

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}