"use client";

import Link from "next/link";
import styles from "./ForeignToursSection.module.css";

import { popularForeignTours } from "@/app/components/foreign-tours/PopularForeignToursData";

export default function ForeignToursSection() {
  return (
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

          {popularForeignTours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/foreign-tours/${tour.slug}`}
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

            </Link>
          ))}

        </div>


        {/* ONE VIEW MORE BUTTON FOR THE WHOLE SECTION */}
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
  );
}