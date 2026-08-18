"use client";

import styles from "./GroupTourSearch.module.css";
import { Search, ChevronDown } from "lucide-react";

export default function GroupTourSearch() {
  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>

        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="group-destination">
            Destination
          </label>

          <div className={styles.select}>
            <select
              id="group-destination"
              defaultValue=""
            >
              <option value="" disabled>
                Any Destination
              </option>

              <option value="rajasthan">
                Rajasthan
              </option>

              <option value="kerala">
                Kerala
              </option>

              <option value="goa">
                Goa
              </option>

              <option value="himachal">
                Himachal Pradesh
              </option>

              <option value="kashmir">
                Kashmir
              </option>

              <option value="uttarakhand">
                Uttarakhand
              </option>

              <option value="gujarat">
                Gujarat
              </option>

              <option value="south-india">
                South India
              </option>
            </select>

            <ChevronDown
              className={styles.chevron}
              size={17}
            />
          </div>
        </div>

        {/* DURATION */}
        <div className={styles.field}>
          <label htmlFor="group-duration">
            Duration
          </label>

          <div className={styles.select}>
            <select
              id="group-duration"
              defaultValue=""
            >
              <option value="" disabled>
                Any Duration
              </option>

              <option value="2-3">
                2–3 Days
              </option>

              <option value="4-5">
                4–5 Days
              </option>

              <option value="6-7">
                6–7 Days
              </option>

              <option value="8-10">
                8–10 Days
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

        {/* GROUP TYPE */}
        <div className={styles.field}>
          <label htmlFor="group-type">
            Group Type
          </label>

          <div className={styles.select}>
            <select
              id="group-type"
              defaultValue=""
            >
              <option value="" disabled>
                All Group Types
              </option>

              <option value="family">
                Family Groups
              </option>

              <option value="friends">
                Friends &amp; Groups
              </option>

              <option value="corporate">
                Corporate Groups
              </option>

              <option value="senior">
                Senior Citizen Groups
              </option>

              <option value="student">
                Student Groups
              </option>

              <option value="custom">
                Custom Groups
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