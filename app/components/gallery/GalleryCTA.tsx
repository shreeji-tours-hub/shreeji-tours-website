"use client";

import styles from "./GalleryCTA.module.css";
import { galleryCTAData } from "./GalleryPageData";

export default function GalleryCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.content}>

          <h2>
            {galleryCTAData.title}
          </h2>

          <p>
            {galleryCTAData.description}
          </p>

          <a
            href={galleryCTAData.href}
            className={styles.button}
          >
            {galleryCTAData.button}
            <span>→</span>
          </a>

        </div>

        <div className={styles.images}>

          {galleryCTAData.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
            />
          ))}

        </div>

      </div>

    </section>
  );
}