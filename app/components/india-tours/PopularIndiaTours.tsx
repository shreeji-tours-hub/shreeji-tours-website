"use client";

import { useRef } from "react";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarDays,
} from "lucide-react";

import styles from "./PopularIndiaTours.module.css";
import { indiaTours } from "./PopularIndiaToursData";

export default function PopularIndiaTours() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 330 : -330,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <span>POPULAR TOUR PACKAGES</span>

          <h2>Explore Our Most Popular India Tours</h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
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
            <ChevronLeft size={20} />
          </button>

          {/* TOUR CARDS */}
          <div
            ref={sliderRef}
            className={styles.grid}
          >
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

                    <h3>{tour.title}</h3>

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

          {/* RIGHT ARROW */}
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