"use client";

import styles from "./ContactFormMap.module.css";

import { contactFormData } from "./ContactFormMapData";

export default function ContactFormMap() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* FORM */}

        <div className={styles.formBox}>

          <h2>
            {contactFormData.title}
          </h2>

          <p>
            {contactFormData.description}
          </p>

          <form>

            <div className={styles.row}>

              <input
                type="text"
                placeholder="Your Name *"
                required
              />

              <input
                type="email"
                placeholder="Your Email *"
                required
              />

            </div>

            <input
              type="tel"
              placeholder="Your Phone *"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message *"
              rows={6}
              required
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>


        {/* MAP */}

        <div className={styles.map}>

          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              contactFormData.mapQuery
            )}&output=embed`}
            loading="lazy"
            allowFullScreen
            title="Shreeji Tours and Travels Location"
          />

        </div>

      </div>

    </section>
  );
}