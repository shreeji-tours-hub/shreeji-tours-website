"use client";

import styles from "./ForeignTourCTA.module.css";

import { ForeignTourCTAData } from "./ForeignTourCTAData";

export default function ForeignCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.content}>

          <h2>
            {ForeignTourCTAData.title}
          </h2>

          <p>
            {ForeignTourCTAData.description}
          </p>

          <a
            href={ForeignTourCTAData.href}
            className={styles.button}
          >
            {ForeignTourCTAData.button}
            <span>→</span>
          </a>

        </div>

        <div className={styles.images}>

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80"
            alt="Taj Mahal"
          />

          <img
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=80"
            alt="India travel"
          />

          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80"
            alt="Indian destination"
          />

        </div>

      </div>

    </section>
  );
}