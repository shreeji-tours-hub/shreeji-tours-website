"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./PopularInternationalTours.module.css";
import { popularInternationalTours } from "./PopularInternationalToursData";

export default function PopularInternationalTours() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 380;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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

        {/* SLIDER */}
        <div className={styles.sliderWrapper}>

          {/* LEFT ARROW */}
          <button
            type="button"
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            aria-label="Previous tours"
          >
            <ChevronLeft size={22} />
          </button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className={styles.grid}
          >
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

                    <span className={styles.details}>
                      View Details →
                    </span>

                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            aria-label="Next tours"
          >
            <ChevronRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
}