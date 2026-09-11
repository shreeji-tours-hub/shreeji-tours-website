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
            We Make Tour Easy
          </h2>

          <p className={styles.introText}>
            Traveling under your own power and at your own
            pace, you’ll connect more meaningfully with your
            destination and have more fun!
          </p>

          {/* TRAVEL EXPERIENCES */}
          <div className={styles.experiences}>

            <h3 className={styles.experienceTitle}>
              Explore Our Travel Experiences
            </h3>

            <ul>
              <li>
                <strong>Mumbai Tours</strong> – Discover Mumbai like a local
              </li>

              <li>
                <strong>Family Tours</strong> – Comfortable journeys for every generation
              </li>

              <li>
                <strong>Group Tours</strong> – Travel together, laugh together, make memories together
              </li>

              <li>
                <strong>Honeymoon Tours</strong> – Romantic escapes made special for couple
              </li>

              <li>
                <strong>Corporate Tours</strong> – Hassle-free travel for teams and businesses
              </li>

              <li>
                <strong>Culture & Spiritual Tours</strong> – Discover India's heritage, temples & traditions
              </li>

              <li>
                <strong>Wellness Tours</strong> – Yoga, Meditation & Ayurveda experiences
              </li>

              <li>
                <strong>Village Experiences</strong> – Experience authentic rural India
              </li>

              <li>
                <strong>Wildlife Tours</strong> – Get closer to nature and India's incredible wildlife
              </li>
            </ul>

            <p className={styles.experienceClosing}>
              You choose the destination. We take care of the journey.
            </p>

          </div>

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