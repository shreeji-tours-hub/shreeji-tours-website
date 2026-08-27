"use client";

import Link from "next/link";

import {
  MapPin,
  CalendarDays,
} from "lucide-react";

import styles from "./PopularIndiaTours.module.css";
import { indiaTours } from "./PopularIndiaToursData";

export default function PopularIndiaTours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =================================================
            HEADING
        ================================================= */}

        <div className={styles.heading}>
          <span>POPULAR TOUR PACKAGES</span>

          <h2>
            Explore Our Most Popular India Tours
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>


        {/* =================================================
            TOUR CARDS GRID
        ================================================= */}

        <div className={styles.grid}>

          {indiaTours.map((tour) => (
            <Link
              href={`/india-tours/${tour.slug}`}
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

                  <span className={styles.durationBadge}>
                    {tour.duration}
                  </span>

                </div>


                {/* CARD BODY */}

                <div className={styles.cardBody}>

                  <h3>
                    {tour.title}
                  </h3>

                  <p className={styles.route}>
                    {tour.location}
                  </p>


                  <div className={styles.info}>

                    <span>
                      <CalendarDays size={15} />
                      {tour.duration}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {tour.tag}
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