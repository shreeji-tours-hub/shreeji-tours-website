"use client";

import Link from "next/link";

import {
  CalendarDays,
  MapPin,
} from "lucide-react";

import styles from "./PopularInternationalTours.module.css";
import { popularInternationalTours } from "./PopularInternationalToursData";

export default function PopularInternationalTours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>POPULAR INTERNATIONAL TOURS</span>

          <h2>Explore the World With Us</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        {/* TOUR GRID */}
        <div className={styles.grid}>
          {popularInternationalTours.map((tour) => (
            <Link
              href={`/international-tours/${tour.slug}`}
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

                  <span className={styles.duration}>
                    {tour.duration}
                  </span>
                </div>

                {/* CARD BODY */}
                <div className={styles.cardBody}>

                  <h3>{tour.title}</h3>

                  <p className={styles.route}>
                    {tour.route}
                  </p>

                  <div className={styles.info}>

                    <span>
                      <CalendarDays size={16} />
                      {tour.duration}
                    </span>

                    <span>
                      <MapPin size={16} />
                      {tour.description}
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