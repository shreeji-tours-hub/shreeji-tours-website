"use client";

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


        {/* 3 × 3 GRID */}

        <div className={styles.grid}>

          {popularTours.map((tour) => (

            <div
              className={`${styles.card} ${
                tour.featured
                  ? styles.featured
                  : ""
              }`}
              key={tour.title}
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

                  <a href="#contact">
                    View All Tours
                  </a>

                </div>

              ) : (

                <div className={styles.cardContent}>

                  <h3>
                    {tour.title}
                  </h3>

                  <p>
                    {tour.duration}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}