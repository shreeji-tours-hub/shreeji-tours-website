"use client";

import Link from "next/link";
import styles from "./ForeignToursSection.module.css";
import { foreignTours } from "./ForeignToursData";

export default function ForeignToursSection() {
  return (
    <section
      className={styles.section}
      id="foreigners"
    >
      <div className={styles.container}>

        {/* HEADING */}

        <div className={styles.heading}>

          <span className={styles.headingLabel}>
            TOURS FOR FOREIGNERS
          </span>

          <h2 className={styles.headingTitle}>
            Specially Designed for International Travelers
          </h2>

          <div className={styles.decoration}>
            <i></i>
            <b>○</b>
            <i></i>
          </div>

        </div>


        {/* TOUR GRID */}

        <div className={styles.grid}>

          {foreignTours.map((tour) => (

            <Link
              href={`/foreign-tours/${tour.slug}`}
              className={styles.card}
              key={tour.slug}
            >

              <img
                className={styles.image}
                src={tour.image}
                alt={tour.alt}
              />

              <div className={styles.cardContent}>

                <h3 className={styles.cardTitle}>
                  {tour.title}
                </h3>

                <p className={styles.cardDescription}>
                  {tour.description}
                </p>

                <span className={styles.viewTour}>
                  VIEW TOUR →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}