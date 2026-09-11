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

          <p className={styles.introExperience}>
            Highly Rated on Google & TripAdvisor — Trusted by Travellers Worldwide
          </p>


          {/* =====================================================
              GOOGLE + TRIPADVISOR REVIEWS
          ===================================================== */}

          <div className={styles.reviewRow}>

            {/* TRIPADVISOR */}

            <a
              href="https://www.tripadvisor.in/Attraction_Review-g304554-d15697131-Reviews-Shreeji_Tours_n_Travels-Mumbai_Maharashtra.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tripadvisor}
            >

              <img
                src="/tripadvisor.png"
                alt="Tripadvisor"
                className={styles.tripadvisorLogo}
              />


              <div className={styles.tripadvisorBottom}>

                <span className={styles.stars}>
                  ★★★★★
                </span>

                <span className={styles.reviewCount}>
                  500+ Reviews
                </span>

              </div>

            </a>


            {/* GOOGLE REVIEWS */}

            <a
              href="https://share.google/iwzoH7qJBgbfY3qzL"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleReview}
            >

              <img
                src="/images/google_review_clean_transparent.png"
                alt="Google Reviews"
                className={styles.googleReviewImage}
              />

            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          TOURS FOR FOREIGNERS
      ========================================================= */}

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