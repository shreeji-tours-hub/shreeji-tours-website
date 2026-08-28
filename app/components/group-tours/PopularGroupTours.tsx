"use client";

import { useState } from "react";
import Link from "next/link";

import {
  MapPin,
  CalendarDays,
} from "lucide-react";

import styles from "./PopularGroupTours.module.css";
import { popularGroupTours } from "./PopularGroupToursData";

type FilterType = "specialist" | "upcoming";

export default function PopularGroupTours() {
  const [activeFilter, setActiveFilter] =
    useState<FilterType>("specialist");

  const filteredTours = popularGroupTours.filter(
    (tour) => tour.category === activeFilter
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>POPULAR GROUP TOURS</span>

          <h2>
            Explore Our Best Group Experiences
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>

          {/* FILTERS */}
          <div className={styles.filters}>

            <button
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === "specialist"
                  ? styles.activeFilter
                  : ""
              }`}
              onClick={() =>
                setActiveFilter("specialist")
              }
            >
              Our Specialist Group Tour
            </button>

            <button
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === "upcoming"
                  ? styles.activeFilter
                  : ""
              }`}
              onClick={() =>
                setActiveFilter("upcoming")
              }
            >
              Upcoming Group Tour
            </button>

          </div>
        </div>


        {/* TOUR GRID */}
        {filteredTours.length > 0 ? (
          <div className={styles.grid}>

            {filteredTours.map((tour) => (
              <Link
                href={`/groups/${tour.slug}`}
                className={styles.cardLink}
                key={tour.slug}
              >

                <div className={styles.card}>

                  {/* IMAGE */}
                  <div className={styles.imageWrap}>

                    <img
                      src={tour.image}
                      alt={tour.title}
                    />

                    <span
                      className={
                        styles.durationBadge
                      }
                    >
                      {tour.duration}
                    </span>

                  </div>


                  {/* CARD BODY */}
                  <div className={styles.cardBody}>

                    <h3>
                      {tour.title}
                    </h3>

                    <p
                      className={
                        styles.route
                      }
                    >
                      {tour.route}
                    </p>


                    <div className={styles.info}>

                      <span>
                        <CalendarDays
                          size={15}
                        />

                        {tour.duration}
                      </span>

                      <span>
                        <MapPin
                          size={15}
                        />

                        {tour.description}
                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>
              Upcoming Group Tours
            </h3>

            <p>
              New group tours are coming soon.
              Please check back shortly.
            </p>
          </div>
        )}

      </div>

      {/* =====================================================
          GROUP TOUR REGISTRATION
      ===================================================== */}

      <div className={styles.registrationSection}>
        <div className={styles.container}>

          <div className={styles.registrationContent}>

            <span className={styles.sectionLabel}>
              JOIN OUR GROUP TOUR
            </span>

            <h2>
              Registration for Group Tour
            </h2>

            <p>
              Ready to travel with us? Fill out the registration form below to join our upcoming group tours and our team will contact you.
            </p>

            <a
              href="https://forms.gle/PK7Bxb6icoJ6qSsEA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registrationButton}
            >
              Click Here
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}