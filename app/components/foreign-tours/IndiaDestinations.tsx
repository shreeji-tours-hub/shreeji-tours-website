"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./IndiaDestinations.module.css";
import { indiaTours } from "../india-tours/PopularIndiaToursData";

export default function IndiaDestinations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = 220;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Top Destinations in India</h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        <div className={styles.sliderWrapper}>

          <button
            type="button"
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            aria-label="Previous destinations"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={sliderRef}
            className={styles.grid}
          >
            {indiaTours.map((tour) => (
              <Link
                href={`/india-tours/${tour.slug}`}
                className={styles.card}
                key={tour.slug}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span>{tour.title}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            aria-label="Next destinations"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}