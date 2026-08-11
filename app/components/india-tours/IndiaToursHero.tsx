"use client";

import styles from "./IndiaToursHero.module.css";
import {
  Phone,
  MapPinned,
  Headphones,
  ShieldCheck,
} from "lucide-react";

import { indiaToursHeroData } from "./IndiaToursHeroData";

const features = [
  {
    title: "Best Price",
    subtitle: "Guaranteed",
    icon: Phone,
  },
  {
    title: "Customized",
    subtitle: "Tours",
    icon: MapPinned,
  },
  {
    title: "24×7 Customer",
    subtitle: "Support",
    icon: Headphones,
  },
  {
    title: "Safe & Secure",
    subtitle: "Travel",
    icon: ShieldCheck,
  },
];

export default function IndiaToursHero() {
  return (
    <section className={styles.hero}>

      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.breadcrumb}>
            {indiaToursHeroData.breadcrumb}
          </div>

          <h1>
            {indiaToursHeroData.title}
          </h1>

          <h2>
            {indiaToursHeroData.subtitle}
          </h2>

          <p>
            {indiaToursHeroData.description}
          </p>

          <div className={styles.features}>

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className={styles.feature}
                  key={feature.title}
                >
                  <div className={styles.icon}>
                    <Icon size={23} />
                  </div>

                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.subtitle}</span>
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