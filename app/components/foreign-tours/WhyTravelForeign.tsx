"use client";

import styles from "./WhyTravelForeign.module.css";
import { travelReasons } from "./WhyTravelForeignData";

export default function WhyTravelWithUs() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>WHY TRAVEL WITH US?</span>

          <h2>
            Travel With Confidence
          </h2>
        </div>


        {/* REASONS */}
        <div className={styles.grid}>

          {travelReasons.map((reason) => (

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

              <h3>
                {reason.title}
              </h3>

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