"use client";

import Link from "next/link";
import { useRef } from "react";

import {
  CalendarDays,
  MapPinned,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./PopularForeignTours.module.css";
import { popularForeignTours } from "./PopularForeignToursData";

export default function PopularForeignTours() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

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

        {/* TOURS + ARROWS */}
        <div className={styles.sliderWrapper}>

          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            aria-label="Previous tours"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className={styles.grid}
            ref={scrollRef}
          >
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

                 

                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            aria-label="Next tours"
          >
            <ChevronRight size={20} />
          </button>

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