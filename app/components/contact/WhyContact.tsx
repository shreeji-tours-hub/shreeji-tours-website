"use client";

import {
  Gift,
  BadgeCheck,
  UserRound,
  Headphones,
  ShieldCheck,
} from "lucide-react";

import styles from "./WhyContact.module.css";

import { whyContactData } from "./WhyContactData";

const icons = [
  Gift,
  BadgeCheck,
  UserRound,
  Headphones,
  ShieldCheck,
];

export default function WhyContact() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2>
          Why Contact Us?
        </h2>

        <div className={styles.grid}>

          {whyContactData.map((item, index) => {

            const Icon = icons[index];

            return (
              <div
                className={styles.item}
                key={item.title}
              >

                <Icon
                  size={30}
                  className={styles.icon}
                />

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}