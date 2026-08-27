"use client";

import { useState } from "react";
import styles from "./CabRates.module.css";

import {
  Building2,
  CarFront,
  Plane,
  Clock,
  UserRound,
  Plus,
} from "lucide-react";

import { cabRates } from "./CabRatesData";

const iconMap = {
  local: Building2,
  outstation: CarFront,
  airport: Plane,
};

export default function CabRates() {
  const [openVehicle, setOpenVehicle] = useState<string | null>(null);

  const toggleVehicle = (vehicleId: string) => {
    setOpenVehicle((current) =>
      current === vehicleId ? null : vehicleId
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>Cab Rental Rates</h2>

          <div className={styles.line}>
            <i />
            <b>○</b>
            <i />
          </div>
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {cabRates.map((rate) => {
            const Icon =
              iconMap[rate.type as keyof typeof iconMap];

            return (
              <div className={styles.card} key={rate.title}>

                {/* CARD HEADER */}
                <div
                  className={`${styles.cardHeader} ${styles[rate.type]}`}
                >
                  <Icon size={25} />

                  <div className={styles.headerText}>
  <strong>{rate.title}</strong>
  <span> ({rate.subtitle})</span>
</div>
                </div>

                {/* CARD BODY */}
                <div className={styles.body}>

                  {rate.vehicles.map((vehicle, index) => {
                    const vehicleId = `${rate.type}-${index}`;
                    const isOpen = openVehicle === vehicleId;

                    return (
                      <div
                        className={styles.vehicleWrapper}
                        key={vehicle.name}
                      >

                        {/* VEHICLE ROW */}
                        <div className={styles.vehicle}>
                          <div className={styles.vehicleName}>
                            <CarFront size={17} />
                            <span>{vehicle.name}</span>
                          </div>

                          <button
                            type="button"
                            className={`${styles.plusButton} ${
                              isOpen ? styles.open : ""
                            }`}
                            onClick={() =>
                              toggleVehicle(vehicleId)
                            }
                            aria-label={`Show price for ${vehicle.name}`}
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        {/* PRICE DROPDOWN */}
                        <div
                          className={`${styles.priceDropdown} ${
                            isOpen ? styles.show : ""
                          }`}
                        >
                          {/* RENTAL PRICE */}
                          <div className={styles.priceHeader}>
                            <span>Rental Price</span>

                            <strong>
                              {vehicle.price}
                            </strong>
                          </div>

                          {/* EXTRA DETAILS */}
                          <div className={styles.vehicleDetails}>
                            {vehicle.details.map(
                              (detail, detailIndex) => (
                                <span key={detailIndex}>
                                  {detail}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                      </div>
                    );
                  })}

                  {/* NOTES */}
<div className={styles.note}>
  <Clock size={18} />

  <div className={styles.noteContent}>
    <span>{rate.note}</span>

    {(rate.type === "local" || rate.type === "outstation") && (
      <span className={styles.secondaryNote}>
        Local and outstation duties cannot be merged. Both duties are charged separately.
      </span>
    )}
  </div>
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