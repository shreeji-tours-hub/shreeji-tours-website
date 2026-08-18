"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Clock3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./PopularIndiaTours.module.css";
import { indiaTours } from "./PopularIndiaToursData";

export default function PopularIndiaTours() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <span>POPULAR TOUR PACKAGES</span>

          <h2>Explore Our Most Popular India Tours</h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.sliderWrapper}>

          <button
            type="button"
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            aria-label="Previous tours"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={sliderRef}
            className={styles.grid}
          >
            {indiaTours.map((tour) => (
              <div
                className={styles.card}
                key={tour.slug}
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

                  <Link
                    href={`/india-tours/${tour.slug}`}
                    className={styles.details}
                  >
                    View Details
                    <ArrowRight size={15} />
                  </Link>

                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            aria-label="Next tours"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}