"use client";

import styles from "./ForeignTourCTA.module.css";

import { ArrowRight } from "lucide-react";

import { foreignTourCTA } from "./ForeignTourCTAData";

export default function ForeignTourCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.cta}>

        <div className={styles.pattern} />

        <div className={styles.content}>
          <h2>{foreignTourCTA.title}</h2>

          <p>{foreignTourCTA.text}</p>
        </div>

        <a
          href="/contact"
          className={styles.button}
        >
          {foreignTourCTA.button}

          <ArrowRight size={18} />
        </a>

      </div>

      <div className={styles.trust}>

        <div>
          <strong>1000+</strong>
          <span>Happy Travelers</span>
        </div>

        <div>
          <strong>Best Price</strong>
          <span>Guarantee</span>
        </div>

        <div>
          <strong>No Hidden</strong>
          <span>Charges</span>
        </div>

        <div>
          <strong>Secure</strong>
          <span>Payments</span>
        </div>

        <div>
          <strong>Trusted Travel</strong>
          <span>Partner</span>
        </div>

      </div>

    </section>
  );
}