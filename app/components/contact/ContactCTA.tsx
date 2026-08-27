"use client";

import styles from "./ContactCTA.module.css";

import { contactCTAData } from "./ContactCTAData";

export default function ContactCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.content}>

          <h2>
            {contactCTAData.title}
          </h2>

          <p>
            {contactCTAData.description}
          </p>

          <a
            href={contactCTAData.href}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactCTAData.button}
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