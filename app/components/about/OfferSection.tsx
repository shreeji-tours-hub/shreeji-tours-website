"use client";

import { useRef } from "react";
import styles from "./OfferSection.module.css";
import { offerData } from "./OfferData";

export default function OfferSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}

        <div className={styles.heading}>
          <span>WHAT WE OFFER</span>

          <h2>
            Travel Experiences Designed Around You
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>


        {/* SLIDER */}

        <div className={styles.sliderWrapper}>

          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => slide("left")}
            aria-label="Previous"
          >
            ‹
          </button>


          <div
            className={styles.slider}
            ref={sliderRef}
          >

            {offerData.map((item) => (
              <div
                className={styles.card}
                key={item.slug}
              >

                <div className={styles.imageWrap}>

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                <div className={styles.content}>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>


          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => slide("right")}
            aria-label="Next"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}