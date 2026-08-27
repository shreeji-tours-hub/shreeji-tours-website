"use client";

import Link from "next/link";

import {
  MapPin,
  CalendarDays,
} from "lucide-react";

import styles from "./PopularForeignTours.module.css";
import { popularForeignTours } from "./PopularForeignToursData";

export default function PopularForeignTours() {
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
            TOUR CARDS GRID
        ========================= */}

        <div className={styles.grid}>

          {popularForeignTours.map((tour) => (

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

          ))}

        </div>

      </div>
    </section>
  );
}