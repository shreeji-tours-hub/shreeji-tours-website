"use client";

import styles from "./CabServices.module.css";
import { ArrowRight, Building2, CarFront, Plane, Gem } from "lucide-react";
import { cabServices } from "./CabServicesData";

const icons = [Building2, CarFront, Plane, Gem];

export default function CabServices() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Our Cab Hire Services</h2>
        </div>

        <div className={styles.grid}>
          {cabServices.map((service, index) => {
            const Icon = icons[index];

            return (
              <article className={styles.card} key={service.title}>

                <div className={styles.imageWrap}>
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className={styles.icon}>
                    <Icon size={21} />
                  </div>
                </div>

                <div className={styles.body}>
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="/contact" className={styles.button}>
                    Book Now
                    <ArrowRight size={16} />
                  </a>
                </div>

              </article>
            );
          })}
        </div>

      </div>

    </section>
  );
}