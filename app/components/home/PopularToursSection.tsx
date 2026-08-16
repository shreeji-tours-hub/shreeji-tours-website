"use client";

import Link from "next/link";
import styles from "./PopularToursSection.module.css";

import { popularTours } from "./PopularToursData";

export default function PopularToursSection() {
  const featuredTour = popularTours[0];
  const otherTours = popularTours.slice(1);

  return (
    <section className={styles.section} id="tours">
      <div className={styles.container}>

        {/* HEADING */}

        <div className={styles.heading}>
          <span className={styles.headingLabel}>
            EXPLORE THE BEST OF INDIA
          </span>

          <h2>View More Tours</h2>

          <div className={styles.decoration}>
            <i></i>
            <b>○</b>
            <i></i>
          </div>
        </div>


        {/* SINGLE TOUR ROW */}

        <div className={styles.tourRow}>

          {/* FEATURED TOUR — LEFT */}

          {featuredTour && (
            <div className={styles.featuredCard}>

              <img
                src={featuredTour.image}
                alt={featuredTour.title}
              />

              <div className={styles.featuredContent}>

                <h3>
                  {featuredTour.title}
                </h3>

                <p>
                  {featuredTour.description ||
                    "Explore the vibrant city of Mumbai with our exciting sightseeing experience."}
                </p>

                {/* ONLY THIS IS CLICKABLE */}

                <Link
                  href="/india-tours"
                  className={styles.featuredButton}
                >
                  View All Tours
                </Link>

              </div>
            </div>
          )}


          {/* OTHER TOURS — NOT CLICKABLE */}

          <div className={styles.toursGrid}>

            {otherTours.map((tour) => (
              <div
                key={tour.slug}
                className={styles.card}
              >

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <div className={styles.cardContent}>

                  <h3>
                    {tour.title}
                  </h3>

                  <p>
                    {tour.duration}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}