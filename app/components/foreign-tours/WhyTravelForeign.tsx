"use client";

import styles from "./WhyTravelForeign.module.css";

import { whyTravelForeign } from "./WhyTravelForeignData";

export default function WhyTravelForeign() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>WHY TRAVEL WITH US?</span>

          <h2>
            Why Travel With Shreeji Tours n Travels?
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        {/* REASONS */}
        <div className={styles.grid}>

          {whyTravelForeign.map((item) => (
            <div
              className={styles.item}
              key={item.title}
            >

              {/* IMAGE */}
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.content}>

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