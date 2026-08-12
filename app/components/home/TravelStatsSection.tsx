"use client";

import styles from "./TravelStatsSection.module.css";
import { travelStats } from "./TravelStatsData";
import { MapPin, Smile, Plane } from "lucide-react";

const iconMap = {
  location: MapPin,
  smile: Smile,
  plane: Plane,
};

export default function TravelStatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h2>
            We Make
            <br />
            World Travel Easy
          </h2>

          <p>
            Traveling under your own power and at your own
            pace, you’ll connect more meaningfully with your
            destination and have more fun!
          </p>

          <a href="#tours" className={styles.button}>
            Explore Our Tours
            <span>↗</span>
          </a>
        </div>

        {/* STATS */}
        {travelStats.map((stat) => {
          const Icon =
            iconMap[stat.icon as keyof typeof iconMap] || MapPin;

          return (
            <div
              className={styles.statCard}
              key={stat.label}
            >
              <Icon
                className={styles.statIcon}
                size={38}
                strokeWidth={2}
              />

              <h3>{stat.number}</h3>

              <p>{stat.label}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
}