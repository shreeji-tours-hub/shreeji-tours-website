"use client";

import styles from "./CabHireSection.module.css";

import { cabHireData } from "./CabHireData";

export default function CabHireSection() {
  return (
    <section
      className={styles.section}
      id="cab"
    >

      <div className={styles.container}>

        {/* CONTENT */}

        <div className={styles.content}>

          <span className={styles.label}>
            {cabHireData.label}
          </span>

          <h2>

            {cabHireData.title.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}

          </h2>

          <p>
            {cabHireData.description}
          </p>

          <a
            href={cabHireData.buttonLink}
            className={styles.button}
          >
            {cabHireData.buttonText}
          </a>

        </div>


        {/* IMAGE */}

        <div className={styles.imageWrapper}>

          <img
            src={cabHireData.image}
            alt={cabHireData.imageAlt}
          />

        </div>


        {/* FEATURES */}

        <div className={styles.features}>

          {cabHireData.features.map((feature) => (

            <p key={feature}>
              <span>✓</span>
              {feature}
            </p>

          ))}

        </div>

      </div>

    </section>
  );
}