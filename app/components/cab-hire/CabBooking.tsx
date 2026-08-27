"use client";

import styles from "./CabBooking.module.css";
import { Send, ChevronDown } from "lucide-react";
import { dutyTypes } from "./CabBookingData";

export default function CabBooking() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <h2>Enquire Now</h2>

          <p>
            Share your travel requirements and we will get back to you.
          </p>
        </div>

        <form className={styles.form}>

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
          />

          {/* MOBILE NUMBER */}
          <input
            type="tel"
            placeholder="Mobile Number"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email ID"
          />

          {/* DUTY TYPE */}
          <div className={styles.selectWrapper}>
            <select defaultValue="">
              <option value="" disabled>
                Duty Type
              </option>

              {dutyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <ChevronDown size={18} />
          </div>

          {/* NUMBER OF PERSONS */}
          <input
            type="number"
            min="1"
            placeholder="No. of Persons"
          />

          {/* EMPTY SPACE */}
          <div className={styles.emptyField} />

          {/* PICKUP DATE */}
          <div className={styles.dateTimeField}>
            <label htmlFor="pickup-date">
              Pickup Date
            </label>

            <input
              id="pickup-date"
              type="date"
              className={styles.dateInput}
            />
          </div>

          {/* PICKUP TIME */}
          <div className={styles.dateTimeField}>
            <label htmlFor="pickup-time">
              Pickup Time
            </label>

            <input
              id="pickup-time"
              type="time"
              className={styles.timeInput}
            />
          </div>

          {/* PICKUP LOCATION */}
          <input
            type="text"
            placeholder="Pickup Location"
          />

          {/* DROP LOCATION */}
          <input
            type="text"
            placeholder="Drop Location"
          />

          {/* SPECIAL REQUEST */}
          <textarea
            placeholder="Special Request"
            rows={4}
          />

          {/* SUBMIT */}
          <button type="button">
            <Send size={17} />
            Send Enquiry
          </button>

        </form>

      </div>
    </section>
  );
}