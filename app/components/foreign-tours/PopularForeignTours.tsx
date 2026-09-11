"use client";

import { useState } from "react";
import Link from "next/link";

import {
  MapPin,
  CalendarDays,
} from "lucide-react";

import styles from "./PopularForeignTours.module.css";
import { popularForeignTours } from "./PopularForeignToursData";

export default function PopularForeignTours() {

  const [activeFilter, setActiveFilter] = useState("India Tour");

  const filteredTours = popularForeignTours.filter(
    (tour) => tour.category === activeFilter
  );

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* =========================
            HEADING
        ========================= */}

        <div className={styles.heading}>

          <span>POPULAR PACKAGES</span>

          <h2>
            Most Popular Tours for Foreigners
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>

        </div>


        {/* =========================
            FILTER BUTTONS
        ========================= */}

        <div className={styles.filters}>

          <button
            type="button"
            className={
              activeFilter === "Mumbai Tour"
                ? styles.activeFilter
                : styles.filterButton
            }
            onClick={() => setActiveFilter("Mumbai Tour")}
          >
            Mumbai Tour
          </button>

          <button
            type="button"
            className={
              activeFilter === "India Tour"
                ? styles.activeFilter
                : styles.filterButton
            }
            onClick={() => setActiveFilter("India Tour")}
          >
            Tours in India
          </button>

        </div>


        {/* =========================
            TOUR CARDS GRID
        ========================= */}

        <div className={styles.grid}>

          {filteredTours.length > 0 ? (

            filteredTours.map((tour) => (

              <Link
                key={tour.slug}
                href={`/foreign-tours/${tour.slug}`}
                className={styles.cardLink}
              >

                <div className={styles.card}>

                  {/* =========================
                      IMAGE
                  ========================= */}

                  <div className={styles.imageWrap}>

                    <img
                      src={tour.image}
                      alt={tour.title}
                    />

                    <span className={styles.duration}>
                      {tour.duration}
                    </span>

                  </div>


                  {/* =========================
                      CARD BODY
                  ========================= */}

                  <div className={styles.cardBody}>

                    <h3>
                      {tour.title}
                    </h3>

                    <p className={styles.route}>
                      {tour.route}
                    </p>


                    <div className={styles.info}>

                      <span>
                        <CalendarDays size={15} />
                        {tour.duration}
                      </span>

                      <span>
                        <MapPin size={15} />
                        {tour.details}
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))

          ) : (

            <div className={styles.noTours}>
              No {activeFilter} available at the moment.
            </div>

          )}

        </div>

      </div>

    </section>
  );
}