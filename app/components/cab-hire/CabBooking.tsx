"use client";

import styles from "./CabBooking.module.css";
import { Send } from "lucide-react";
import { bookingFields } from "./CabBookingData";

export default function CabBooking() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2>Enquire Now</h2>

        <form className={styles.form}>

          {bookingFields.map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
            />
          ))}

          <button type="button">
            <Send size={15} />
            Send Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}