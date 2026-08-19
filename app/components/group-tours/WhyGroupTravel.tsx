"use client";

import styles from "./WhyGroupTravel.module.css";
import { groupTravelReasons } from "./WhyGroupTravelData";

export default function WhyGroupTravel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>WHY TRAVEL WITH US?</span>

          <h2>
            Group Travel Made Easy
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        {/* REASONS */}
        <div className={styles.grid}>
          {groupTravelReasons.map((reason) => (
            <div
              className={styles.item}
              key={reason.title}
            >
              {/* IMAGE */}
              <img
                src={reason.image}
                alt={reason.title}
                className={styles.reasonImage}
              />

              {/* TITLE */}
              <h3>
                {reason.title}
              </h3>

              {/* DESCRIPTION */}
              <p>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}