"use client";

import styles from "./CabHero.module.css";

import {
  ShieldCheck,
  UserRound,
  CarFront,
  IndianRupee,
} from "lucide-react";

import { cabHero } from "./CabHeroData";

const iconMap = {
  shield: ShieldCheck,
  driver: UserRound,
  car: CarFront,
  price: IndianRupee,
};

export default function CabHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>

          <span className={styles.eyebrow}>
            {cabHero.eyebrow}
          </span>

          <h1>
            {cabHero.title}
            <br />
            <span>{cabHero.highlight}</span>
          </h1>

          <p>{cabHero.description}</p>

          <div className={styles.features}>
            {cabHero.features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  className={styles.feature}
                  key={feature.title}
                >
                  <div className={styles.icon}>
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                    />
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