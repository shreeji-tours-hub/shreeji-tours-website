"use client";

import styles from "./HeroSection.module.css";

import { heroData } from "./Hero";

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* OVERLAY */}
      <div className={styles.heroOverlay}></div>

      {/* CONTENT */}
      <div className={styles.heroContent}>

        <div className={styles.heroCopy}>

          {/* TITLE */}
          <h1 className={styles.heroTitle}>
            {heroData.title}
          </h1>

          {/* SCRIPT TITLE */}
          <div className={styles.heroScript}>
            {heroData.subtitle}
          </div>

          {/* SERVICES */}
          <p className={styles.heroServices}>

            {heroData.services.map((service, index) => (

              <span key={service}>

                {service}

                {index < heroData.services.length - 1 && (
                  <b>•</b>
                )}

              </span>

            ))}

          </p>

        </div>

      </div>


      {/* =========================
          TRIPADVISOR
      ========================= */}

      <div className={styles.tripadvisorBadge}>

        <div className={styles.tripadvisorExcellent}>
          {heroData.tripAdvisor.rating}
        </div>

        <div className={styles.tripadvisorBrand}>

          <div className={styles.tripadvisorCircle}>
            ●
          </div>

          <strong>
            Tripadvisor
          </strong>

        </div>

        <div className={styles.tripadvisorStars}>
          ★★★★★
        </div>

        <small>
          {heroData.tripAdvisor.reviews}
        </small>

      </div>

    </section>
  );
}