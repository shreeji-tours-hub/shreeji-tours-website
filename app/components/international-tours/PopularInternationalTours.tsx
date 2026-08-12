"use client";

import styles from "./PopularInternationalTours.module.css";
import { CalendarDays, MapPin } from "lucide-react";
import { popularInternationalTours } from "./PopularInternationalToursData";

export default function PopularInternationalTours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>POPULAR INTERNATIONAL TOURS</span>

          <h2>Explore the World With Us</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {popularInternationalTours.map((tour) => (
            <div className={styles.card} key={tour.title}>
              <div className={styles.imageWrap}>
                <img src={tour.image} alt={tour.title} />

                <span className={styles.duration}>
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

        <a href="/international" className={styles.allTours}>
          View All International Tours →
        </a>
      </div>
    </section>
  );
}