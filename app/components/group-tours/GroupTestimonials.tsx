"use client";

import styles from "./GroupTestimonials.module.css";
import { groupTestimonials } from "./GroupTestimonialsData";

export default function GroupTestimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>What Our Group Travelers Say</h2>
        </div>

        <div className={styles.grid}>
          {groupTestimonials.map((item) => (
            <div className={styles.card} key={item.name}>
              <img src={item.image} alt={item.name} />

              <div>
                <p>“{item.text}”</p>

                <strong>— {item.name}</strong>

                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}