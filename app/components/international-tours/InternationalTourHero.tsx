"use client";

import styles from "./InternationalTourHero.module.css";

import {
  Headphones,
  MapPinned,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { internationalTourHero } from "./InternationalTourHeroData";

const iconMap = {
  guide: MapPinned,
  shield: ShieldCheck,
  custom: SlidersHorizontal,
  support: Headphones,
};

export default function InternationalTourHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            {internationalTourHero.eyebrow}
          </div>

          <h1>{internationalTourHero.title}</h1>

          <h2>{internationalTourHero.highlight}</h2>

          <p>{internationalTourHero.description}</p>

          <div className={styles.features}>
            {internationalTourHero.features.map((feature) => {
              const Icon =
                iconMap[feature.icon as keyof typeof iconMap];

              return (
                <div className={styles.feature} key={feature.title}>
                  <div className={styles.icon}>
                    <Icon size={23} />
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