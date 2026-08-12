"use client";

import styles from "./CabFleet.module.css";
import { UserRound } from "lucide-react";
import { cabFleet } from "./CabFleetData";

export default function CabFleet() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Our Fleet</h2>

          <div className={styles.line}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {cabFleet.map((car) => (
            <div className={styles.card} key={car.name}>

              <div className={styles.image}>
                <img src={car.image} alt={car.name} />
              </div>

              <h3>{car.name}</h3>

              <span>
                <UserRound size={13} />
                {car.capacity}
              </span>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}