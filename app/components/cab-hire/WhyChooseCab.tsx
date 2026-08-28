"use client";

import styles from "./WhyChooseCab.module.css";

import { whyChooseCab } from "./WhyChooseCabData";

export default function WhyChooseCab() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2>Why Choose Us?</h2>

        <div className={styles.list}>

          {whyChooseCab.map((item) => {

            const Icon = item.icon;

            return (
              <div
                className={styles.item}
                key={item.title}
              >

                <Icon
                  className={styles.icon}
                  size={23}
                  strokeWidth={2}
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