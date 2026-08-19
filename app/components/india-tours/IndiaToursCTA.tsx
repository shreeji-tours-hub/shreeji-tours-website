"use client";

import styles from "./TourCTA.module.css";

const tourImages = [
  {
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=85",
    alt: "Taj Mahal, India",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=85",
    alt: "Mountain travel",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=85",
    alt: "Kerala backwaters",
  },
];

export default function TourCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.cta}>

        {/* =========================
            LEFT LUGGAGE IMAGE
        ========================= */}

      


        {/* =========================
            CONTENT
        ========================= */}

        <div className={styles.content}>
          <h2>Can’t Find Your Perfect Tour?</h2>

          <p>
            We customize tours based on your interests, time & budget.
            Let us help you plan your dream vacation!
          </p>

          <a
            href="/contact"
            className={styles.button}
          >
            Enquire Now
            <span>→</span>
          </a>
        </div>


        {/* =========================
            RIGHT TRAVEL PHOTOS
        ========================= */}

        <div className={styles.polaroids}>
          {tourImages.map((image, index) => (
            <div
              key={image.alt}
              className={`${styles.polaroid} ${
                styles[`photo${index + 1}` as keyof typeof styles]
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}