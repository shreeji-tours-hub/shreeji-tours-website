"use client";

import Link from "next/link";
import {
  CalendarDays,
  MapPinned,
  ArrowRight,
} from "lucide-react";

import styles from "./PopularForeignTours.module.css";
import { popularForeignTours } from "./PopularForeignToursData";

export default function PopularForeignTours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <span>POPULAR PACKAGES</span>

          <h2>Most Popular Tours for Foreigners</h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {popularForeignTours.map((tour) => (
            <div className={styles.card} key={tour.slug}>

              <div className={styles.imageWrap}>
                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span className={styles.duration}>
                  {tour.duration}
                </span>
              </div>

              <div className={styles.cardBody}>

                <h3>{tour.title}</h3>

                <p className={styles.route}>
                  {tour.route}
                </p>

                <div className={styles.info}>
                  <span>
                    <CalendarDays size={14} />
                    {tour.duration}
                  </span>

                  <span>
                    <MapPinned size={14} />
                    {tour.details}
                  </span>
                </div>

                <Link
                  href={`/foreign-tours/${tour.slug}`}
                  className={styles.details}
                >
                  View Details
                  <ArrowRight size={15} />
                </Link>

              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomButton}>
          <Link
            href="/foreign-tours"
            className={styles.allTours}
          >
            View All Foreign Tours
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}