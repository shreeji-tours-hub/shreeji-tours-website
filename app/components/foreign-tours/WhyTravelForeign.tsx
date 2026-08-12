"use client";

import styles from "./WhyTravelForeign.module.css";

import { whyTravelForeign } from "./WhyTravelForeignData";

export default function WhyTravelForeign() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>
            Why Travel With Shreeji Tours n Travels?
          </h2>
        </div>

        <div className={styles.grid}>
          {whyTravelForeign.map((item) => (
            <div
              className={styles.item}
              key={item.title}
            >
              <img
                src={item.image}
                alt=""
              />

              <div>
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}