"use client";

import styles from "./CabBooking.module.css";
import { Send, ChevronDown } from "lucide-react";
import { bookingFields, dutyTypes } from "./CabBookingData";

export default function CabBooking() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2>Enquire Now</h2>

        <form className={styles.form}>

          {/* EXISTING FIELDS */}
          {bookingFields.map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
            />
          ))}

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

            <ChevronDown size={16} />
          </div>

          {/* NUMBER OF PERSONS */}
          <input
            type="number"
            min="1"
            placeholder="Number of Persons"
          />

          {/* SUBMIT */}
          <button type="button">
            <Send size={15} />
            Send Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}