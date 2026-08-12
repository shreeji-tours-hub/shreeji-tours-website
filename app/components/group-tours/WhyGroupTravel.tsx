"use client";

import styles from "./WhyGroupTravel.module.css";
import { groupTravelReasons } from "./WhyGroupTravelData";

export default function WhyGroupTravel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>WHY TRAVEL WITH US?</span>
          <h2>Group Travel Made Easy</h2>
        </div>

        <div className={styles.grid}>
          {groupTravelReasons.map((reason) => (
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