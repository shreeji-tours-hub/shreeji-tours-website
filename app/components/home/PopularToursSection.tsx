"use client";

import Link from "next/link";
import styles from "./PopularToursSection.module.css";

import { popularTours } from "./PopularToursData";

export default function PopularToursSection() {
  return (
    <section
      className={styles.section}
      id="tours"
    >
      <div className={styles.container}>

        {/* HEADING */}

        <div className={styles.heading}>

          <span className={styles.headingLabel}>
            EXPLORE THE BEST OF INDIA
          </span>

          <h2>
            Popular India Tours
          </h2>

          <div className={styles.decoration}>
            <i></i>
            <b>○</b>
            <i></i>
          </div>

        </div>


        {/* TOUR GRID */}

        <div className={styles.grid}>

          {popularTours.map((tour) => (

            <Link
              href={`/tours/${tour.slug}`}
              className={`${styles.card} ${
                tour.featured
                  ? styles.featured
                  : ""
              }`}
              key={tour.slug}
            >

              <img
                src={tour.image}
                alt={tour.title}
              />

              {tour.featured ? (

                <div className={styles.featuredContent}>

                  <h3>
                    {tour.title}
                  </h3>

                  <p>
                    {tour.duration}
                  </p>

                  <span>
                    View Details →
                  </span>

                </div>

              ) : (

                <div className={styles.cardContent}>

                  <h3>
                    {tour.title}
                  </h3>

                  <p>
                    {tour.duration}
                  </p>

                  <span>
                    View Details →
                  </span>

                </div>

              )}

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}