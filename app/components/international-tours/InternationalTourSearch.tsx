"use client";

import styles from "./InternationalTourSearch.module.css";
import {
  Search,
  ChevronDown,
} from "lucide-react";

export default function InternationalTourSearch() {
  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>

        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="destination">
            Destination
          </label>

          <div className={styles.select}>
            <select
              id="destination"
              defaultValue=""
            >
              <option value="" disabled>
                Any Destination
              </option>

              <option value="dubai">Dubai</option>
              <option value="singapore">Singapore</option>
              <option value="thailand">Thailand</option>
              <option value="bali">Bali</option>
              <option value="maldives">Maldives</option>
              <option value="europe">Europe</option>
              <option value="australia">Australia</option>
              <option value="japan">Japan</option>
            </select>

            <ChevronDown
              className={styles.chevron}
              size={17}
            />
          </div>
        </div>


        {/* DURATION */}
        <div className={styles.field}>
          <label htmlFor="duration">
            Duration
          </label>

          <div className={styles.select}>
            <select
              id="duration"
              defaultValue=""
            >
              <option value="" disabled>
                Any Duration
              </option>

              <option value="3-4">
                3–4 Days
              </option>

              <option value="5-6">
                5–6 Days
              </option>

              <option value="7-8">
                7–8 Days
              </option>

              <option value="9-10">
                9–10 Days
              </option>

              <option value="10-plus">
                10+ Days
              </option>
            </select>

            <ChevronDown
              className={styles.chevron}
              size={17}
            />
          </div>
        </div>


        {/* TOUR TYPE */}
        <div className={styles.field}>
          <label htmlFor="tour-type">
            Tour Type
          </label>

          <div className={styles.select}>
            <select
              id="tour-type"
              defaultValue=""
            >
              <option value="" disabled>
                All Tour Types
              </option>

              <option value="family">
                Family Tours
              </option>

              <option value="honeymoon">
                Honeymoon Tours
              </option>

              <option value="adventure">
                Adventure Tours
              </option>

              <option value="group">
                Group Tours
              </option>

              <option value="luxury">
                Luxury Tours
              </option>

              <option value="budget">
                Budget Tours
              </option>
            </select>

            <ChevronDown
              className={styles.chevron}
              size={17}
            />
          </div>
        </div>


        {/* SEARCH BUTTON */}
        <button
          type="button"
          className={styles.button}
        >
          <Search size={17} />
          <span>Search Tours</span>
        </button>

      </div>
    </section>
  );
}