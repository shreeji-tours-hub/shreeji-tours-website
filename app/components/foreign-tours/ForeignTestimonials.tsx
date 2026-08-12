"use client";

import styles from "./ForeignTestimonials.module.css";

import { Star } from "lucide-react";

import { foreignTestimonials } from "./ForeignTestimonialsData";

export default function ForeignTestimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>What Our Travelers Say</h2>
        </div>

        <div className={styles.grid}>
          {foreignTestimonials.map((testimonial) => (
            <article
              className={styles.card}
              key={testimonial.name}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div className={styles.content}>
                <p>
                  “{testimonial.quote}”
                </p>

                <strong>
                  – {testimonial.name},{" "}
                  {testimonial.country}
                </strong>

                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}