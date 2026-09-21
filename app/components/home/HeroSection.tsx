"use client";

import styles from "./HeroSection.module.css";

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
          src="https://res.cloudinary.com/dcaiszxcb/video/upload/v1790000464/Incredible_India_xf9vaj.mp4"
          type="video/mp4"
        />
      </video>

      {/* CONTENT */}
      <div className={styles.heroContent}>
        <div className={styles.heroCopy}>
          {/* Hero content can be added here */}
        </div>
      </div>

    </section>
  );
}