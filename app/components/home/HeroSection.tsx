"use client";

import styles from "./HeroSection.module.css";
import { heroData } from "./Hero";

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* BACKGROUND VIDEO */}
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dz9hxvxa/video/upload/v1786279202/Incredible_India_-_Incredible_India_1080p_h264.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className={styles.heroOverlay}></div>

      {/* CONTENT */}
      <div className={styles.heroContent}>
        <div className={styles.heroCopy}>

          {/* TITLE */}
          <h1 className={styles.heroTitle}>
            {heroData.title}
          </h1>

          {/* SCRIPT TITLE */}
          <div className={styles.heroScript}>
            {heroData.subtitle}
          </div>

        </div>
      </div>

    </section>
  );
}