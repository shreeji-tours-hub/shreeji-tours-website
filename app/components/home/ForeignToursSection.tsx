"use client";

import Link from "next/link";
import styles from "./ForeignToursSection.module.css";

import { featuredForeignTours } from "@/app/components/foreign-tours/PopularForeignToursData";

export default function ForeignToursSection() {
  return (
    <>
      {/* =========================================================
          INTRO CONTENT
      ========================================================= */}

      <section className={styles.introSection}>

        <div className={styles.introContainer}>

          <span className={styles.introLabel}>
            Explore Incredible India with SHREEJI TOURS n TRAVELS
          </span>

          <h1 className={styles.introTitle}>
            Journey Beyond Destination
          </h1>

          <h2 className={styles.introSubTitle}>
            Mumbai-Based Trusted Travel Company
          </h2>

          <p className={styles.introExperience}>
            15+ Years of Experience in Creating Unforgettable Journeys & Happy Memories
          </p>

          <p className={styles.introDescription}>
            Discover the beauty, culture, spirituality, and incredible destinations of India with Shreeji Tours n Travels. From memorable family holidays and exciting group tours to spiritual journeys and customized travel experiences, we make every journey comfortable, enjoyable, and truly special.
          </p>

        </div>

      </section>


      {/* =========================================================
          TOURS FOR FOREIGNERS
      ========================================================= */}

      <section className={styles.section} id="foreigners">

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
              <i />
              <b>○</b>
              <i />
            </div>

          </div>


          {/* TOUR CARDS */}

          <div className={styles.grid}>

            {featuredForeignTours.map((tour) => (

              <div
                key={tour.slug}
                className={styles.card}
              >

                <div className={styles.imageWrap}>

                  <img
                    className={styles.image}
                    src={tour.image}
                    alt={tour.title}
                  />

                </div>

                <div className={styles.cardContent}>

                  <h3 className={styles.cardTitle}>
                    {tour.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {tour.description}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* =========================================================
              VIEW MORE BUTTON
          ========================================================= */}

          <div className={styles.viewMoreWrapper}>

            <Link
              href="/foreigners"
              className={styles.viewMoreButton}
            >
              View More
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}