"use client";

import styles from "./CabRates.module.css";
import {
  Building2,
  CarFront,
  Plane,
  Clock,
  UserRound,
} from "lucide-react";

import { cabRates } from "./CabRatesData";

const iconMap = {
  local: Building2,
  outstation: CarFront,
  airport: Plane,
};

export default function CabRates() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Cab Rental Rates</h2>

          <div className={styles.line}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        <div className={styles.grid}>
          {cabRates.map((rate) => {
            const Icon =
              iconMap[rate.type as keyof typeof iconMap];

            return (
              <div className={styles.card} key={rate.title}>

                <div className={`${styles.cardHeader} ${styles[rate.type]}`}>
                  <Icon size={25} />

                  <div>
                    <strong>{rate.title}</strong>
                    <span>({rate.subtitle})</span>
                  </div>
                </div>

                <div className={styles.body}>
                  {rate.vehicles.map((vehicle) => (
                    <div className={styles.vehicle} key={vehicle}>
                      <CarFront size={17} />
                      <span>{vehicle}</span>
                    </div>
                  ))}

                  <div className={styles.note}>
                    {rate.type === "local" ? (
                      <Clock size={16} />
                    ) : (
                      <UserRound size={16} />
                    )}

                    <span>{rate.note}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}