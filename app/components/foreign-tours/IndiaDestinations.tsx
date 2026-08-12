"use client";

import styles from "./IndiaDestinations.module.css";

import { ArrowRight } from "lucide-react";

import { indiaDestinations } from "./IndiaDestinationsData";

export default function IndiaDestinations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Top Destinations in India</h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {indiaDestinations.map((destination) => (
            <a
              href="/tours"
              className={styles.card}
              key={destination.name}
            >
              <img
                src={destination.image}
                alt={destination.name}
              />

              <span>{destination.name}</span>
            </a>
          ))}
        </div>

        <a
          href="/tours"
          className={styles.button}
        >
          Explore All Destinations
          <ArrowRight size={16} />
        </a>

      </div>
    </section>
  );
}