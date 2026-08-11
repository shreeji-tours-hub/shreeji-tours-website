"use client";

import styles from "./PopularIndiaTours.module.css";
import { Clock3, ArrowRight } from "lucide-react";

import { indiaTours } from "./PopularIndiaToursData";

export default function PopularIndiaTours() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>

          <span>POPULAR TOUR PACKAGES</span>

          <h2>
            Explore Our Most Popular India Tours
          </h2>

          <div className={styles.decoration}>
            <i></i>
            <b>○</b>
            <i></i>
          </div>

        </div>

        <div className={styles.grid}>

          {indiaTours.map((tour) => (

            <div
              className={styles.card}
              key={tour.title}
            >

              <div className={styles.imageWrap}>

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span className={styles.tag}>
                  {tour.tag}
                </span>

              </div>

              <div className={styles.cardContent}>

                <h3>{tour.title}</h3>

                <p className={styles.location}>
                  {tour.location}
                </p>

                <div className={styles.duration}>
                  <Clock3 size={15} />
                  {tour.duration}
                </div>

                <button className={styles.details}>
                  View Details
                  <ArrowRight size={15} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}