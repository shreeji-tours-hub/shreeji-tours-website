"use client";

import styles from "./PopularGroupTours.module.css";
import { CalendarDays, MapPin } from "lucide-react";
import { popularGroupTours } from "./PopularGroupToursData";

export default function PopularGroupTours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>POPULAR GROUP TOURS</span>
          <h2>Explore Our Best Group Experiences</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {popularGroupTours.map((tour) => (
            <div className={styles.card} key={tour.title}>
              <div className={styles.imageWrap}>
                <img src={tour.image} alt={tour.title} />

                <span
                  className={styles.duration}
                  style={{ background: tour.color }}
                >
                  {tour.duration}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3>{tour.title}</h3>

                <p className={styles.route}>{tour.route}</p>

                <div className={styles.info}>
                  <span>
                    <CalendarDays size={13} />
                    {tour.duration}
                  </span>

                  <span>
                    <MapPin size={13} />
                    {tour.description}
                  </span>
                </div>

                <a href="/contact" className={styles.details}>
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <a href="/groups" className={styles.allTours}>
          View All Group Tours →
        </a>
      </div>
    </section>
  );
}