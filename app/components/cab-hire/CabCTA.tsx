"use client";

import styles from "./CabCTA.module.css";

export default function CabHireCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            READY TO TRAVEL?
          </span>

          <h2>
            Comfortable Rides,
            <br />
            Memorable Journeys!
          </h2>

          <p>
            Book your cab with us and travel worry-free.
          </p>

          <a href="/contact" className={styles.button}>
            Book Your Ride Now
            <span>→</span>
          </a>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=85"
            alt="Luxury car travel"
          />
        </div>

      </div>
    </section>
  );
}