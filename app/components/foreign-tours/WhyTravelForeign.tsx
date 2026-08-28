"use client";

import styles from "./WhyTravelForeign.module.css";
import { travelReasons } from "./WhyTravelForeignData";

export default function WhyTravelWithUs() {
  return (
    <>
      {/* =========================================================
          WHY TRAVEL WITH US
      ========================================================= */}

      <section className={styles.section}>

        <div className={styles.container}>

          {/* HEADING */}
          <div className={styles.heading}>

            <span>WHY TRAVEL WITH US?</span>

            <h2>
              Travel With Confidence
            </h2>

          </div>


          {/* REASONS */}
          <div className={styles.grid}>

            {travelReasons.map((reason) => (

              <div
                className={styles.item}
                key={reason.title}
              >

                {/* IMAGE */}
                <img
                  src={reason.image}
                  alt={reason.title}
                  className={styles.reasonImage}
                />

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          TRAVEL SERVICES & INDIA EXPERIENCES
      ========================================================= */}

      <section className={styles.servicesSection}>

        <div className={styles.servicesContainer}>

          <div className={styles.servicesGrid}>

            {/* =====================================================
                EVERYTHING WE TAKE CARE OF
            ===================================================== */}

            <div className={styles.serviceCard}>

              <div className={styles.serviceHeader}>

                <div className={styles.serviceIcon}>
                  ✓
                </div>

                <div>

                  <span className={styles.serviceLabel}>
                    TRAVEL COMFORTABLY
                  </span>

                  <h2 className={styles.serviceTitle}>
                    Everything we take care of
                  </h2>

                </div>

              </div>


              <div className={styles.serviceList}>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>01</span>
                  <span>Airport Transfer</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>02</span>
                  <span>Hotel Accommodation</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>03</span>
                  <span>Private Ac Vehicle</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>04</span>
                  <span>Local Guide &amp; Assistance</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>05</span>
                  <span>Sightseeing &amp; Entry Tickets</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>06</span>
                  <span>Meal Recommendation</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>07</span>
                  <span>Travel Assistance</span>
                </div>

              </div>

            </div>


            {/* =====================================================
                EXPLORE INDIA
            ===================================================== */}

            <div className={styles.serviceCard}>

              <div className={styles.serviceHeader}>

                <div className={styles.serviceIcon}>
                  ★
                </div>

                <div>

                  <span className={styles.serviceLabel}>
                    DISCOVER INDIA
                  </span>

                  <h2 className={styles.serviceTitle}>
                    Explore India
                  </h2>

                </div>

              </div>


              <div className={styles.serviceList}>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>01</span>
                  <span>Culture &amp; Heritage</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>02</span>
                  <span>Spiritual Journey</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>03</span>
                  <span>Himalayan Adventure</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>04</span>
                  <span>Yoga &amp; Meditation</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>05</span>
                  <span>Wild Life Safaris</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>06</span>
                  <span>Luxury &amp; Leisure</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>07</span>
                  <span>Family Holiday</span>
                </div>

                <div className={styles.serviceListItem}>
                  <span className={styles.number}>08</span>
                  <span>Festival Celebration</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}