"use client";

import {
  Clock3,
  UserRound,
  BadgeIndianRupee,
  ShieldCheck,
} from "lucide-react";

import styles from "./ContactHero.module.css";

import { contactHeroData } from "./ContactHeroData";

const icons = [
  Clock3,
  UserRound,
  BadgeIndianRupee,
  ShieldCheck,
];

export default function ContactHero() {
  return (
    <section className={styles.hero}>

      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${contactHeroData.image})`,
        }}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>

        <div className={styles.content}>

          <span className={styles.label}>
            {contactHeroData.label}
          </span>

          <h1>
            {contactHeroData.title}
            <br />

            <span>
              {contactHeroData.highlight}
            </span>
          </h1>

          <p>
            {contactHeroData.description}
          </p>


          <div className={styles.features}>

            {contactHeroData.features.map(
              (feature, index) => {

                const Icon = icons[index];

                return (
                  <div
                    className={styles.feature}
                    key={feature.title}
                  >

                    <div className={styles.icon}>
                      <Icon size={20} />
                    </div>

                    <div>
                      <strong>
                        {feature.title}
                      </strong>

                      <small>
                        {feature.subtitle}
                      </small>
                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}