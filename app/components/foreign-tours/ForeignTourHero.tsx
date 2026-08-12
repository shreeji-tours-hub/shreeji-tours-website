"use client";

import styles from "./ForeignTourHero.module.css";

import {
  Headphones,
  MapPinned,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { foreignTourHero } from "./ForeignTourHeroData";

const iconMap = {
  guide: MapPinned,
  shield: ShieldCheck,
  custom: SlidersHorizontal,
  support: Headphones,
};

export default function ForeignTourHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            {foreignTourHero.eyebrow}
          </div>

          <h1>{foreignTourHero.title}</h1>

          <h2>{foreignTourHero.highlight}</h2>

          <p>{foreignTourHero.description}</p>

          <div className={styles.features}>
            {foreignTourHero.features.map((feature) => {
              const Icon =
                iconMap[feature.icon as keyof typeof iconMap];

              return (
                <div
                  className={styles.feature}
                  key={feature.title}
                >
                  <div className={styles.icon}>
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}