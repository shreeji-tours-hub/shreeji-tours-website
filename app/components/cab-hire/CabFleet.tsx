"use client";

import styles from "./CabFleet.module.css";
import { CarFront, Crown, Clock } from "lucide-react";
import { cabFleet } from "./CabFleetData";

export default function CabFleet() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            OUR FLEET
          </span>

          <h2>
            Choose the Right Vehicle
            <span> For Your Journey</span>
          </h2>

          <p>
            From comfortable everyday travel to premium luxury vehicles,
            choose from our wide range of well-maintained options.
          </p>

          <div className={styles.headingLine}>
            <span></span>
            <b>◆</b>
            <span></span>
          </div>
        </div>


        {/* =========================
            VEHICLE LISTS
        ========================= */}

        <div className={styles.lists}>

          {/* =========================
              OUR VEHICLES
          ========================= */}

          <div className={styles.listCard}>

            <div className={styles.cardHeader}>
              <div className={styles.headerIcon}>
                <CarFront size={24} strokeWidth={1.7} />
              </div>

              <div>
                <span className={styles.cardEyebrow}>
                  TRAVEL COMFORTABLY
                </span>

                <h3>
                  Our Vehicle List
                </h3>
              </div>
            </div>


            <div className={styles.vehicleList}>

              {cabFleet.vehicles.map((vehicle, index) => (
                <div
                  className={styles.vehicleItem}
                  key={vehicle}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.vehicleName}>
                    {vehicle}
                  </span>
                </div>
              ))}

            </div>

            <div className={styles.priceNote}>
  <Clock size={18} strokeWidth={2} />
  <span>Price Available on Request</span>
</div>

          </div>


          {/* =========================
              LUXURY VEHICLES
          ========================= */}

          <div className={`${styles.listCard} ${styles.luxuryCard}`}>

            <div className={styles.cardHeader}>
              <div className={styles.headerIcon}>
                <Crown size={24} strokeWidth={1.7} />
              </div>

              <div>
                <span className={styles.cardEyebrow}>
                  PREMIUM TRAVEL
                </span>

                <h3>
                  Luxury Vehicles List
                </h3>
              </div>
            </div>


            <div className={styles.vehicleList}>

              {cabFleet.luxuryVehicles.map((vehicle, index) => (
                <div
                  className={styles.vehicleItem}
                  key={vehicle}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.vehicleName}>
                    {vehicle}
                  </span>
                </div>
              ))}

            </div>

            <div className={styles.priceNote}>
  <Clock size={18} strokeWidth={2} />
  <span>Price Available on Request</span>
</div>

          </div>

        </div>

      </div>
    </section>
  );
}