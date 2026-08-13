"use client";

import Link from "next/link";

import styles from "./OfferSection.module.css";
import { offerData } from "./OfferData";

export default function OfferSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>

          <span>
            WHAT WE OFFER
          </span>

          <h2>
            Travel Experiences Designed Around You
          </h2>

          <div className={styles.decoration}>
            <i />
            <b>○</b>
            <i />
          </div>

        </div>


        <div className={styles.grid}>

          {offerData.map((item) => (

            <Link
              href={`/about/${item.slug}`}
              className={styles.card}
              key={item.slug}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className={styles.content}>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className={styles.viewMore}>
                  VIEW DETAILS →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}