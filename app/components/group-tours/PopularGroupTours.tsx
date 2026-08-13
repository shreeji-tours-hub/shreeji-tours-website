"use client";

import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import styles from "./PopularGroupTours.module.css";
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
            <div
              className={styles.card}
              key={tour.slug}
            >

              <div className={styles.imageWrap}>

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span
                  className={styles.duration}
                  style={{
                    background: tour.color,
                  }}
                >
                  {tour.duration}
                </span>

              </div>

              <div className={styles.cardBody}>

                <h3>
                  {tour.title}
                </h3>

                <p className={styles.route}>
                  {tour.route}
                </p>

                <div className={styles.info}>

                  <span>
                    <CalendarDays size={14} />
                    {tour.duration}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {tour.description}
                  </span>

                </div>

                {/* DETAIL PAGE */}
                <Link
                  href={`/groups/${tour.slug}`}
                  className={styles.details}
                >
                  View Details →
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* ALL GROUP TOURS */}
        <div className={styles.bottomButton}>
          <Link
            href="/groups"
            className={styles.allTours}
          >
            View All Group Tours →
          </Link>
        </div>

      </div>
    </section>
  );
}