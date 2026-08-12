"use client";

import styles from "./GroupTourHero.module.css";

import {
  Headphones,
  MapPinned,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { groupTourHero } from "./GroupTourHeroData";

const iconMap = {
  guide: MapPinned,
  shield: ShieldCheck,
  custom: SlidersHorizontal,
  support: Headphones,
};

export default function GroupTourHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            {groupTourHero.eyebrow}
          </div>

          <h1>{groupTourHero.title}</h1>

          <h2>{groupTourHero.highlight}</h2>

          <p>{groupTourHero.description}</p>

          <div className={styles.features}>
            {groupTourHero.features.map((feature) => {
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