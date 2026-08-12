"use client";

import styles from "./ForeignTourSearch.module.css";

import {
  Search,
  ChevronDown,
  MapPin,
  CalendarDays,
  UsersRound,
} from "lucide-react";

import { foreignTourSearchOptions } from "./ForeignTourSearchData";

export default function ForeignTourSearch() {
  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>

        <div className={styles.field}>
          <label>Destination</label>

          <div className={styles.select}>
            <MapPin size={18} />

            <select defaultValue="All Destinations">
              {foreignTourSearchOptions.destinations.map(
                (item) => (
                  <option key={item}>{item}</option>
                )
              )}
            </select>

            <ChevronDown size={16} />
          </div>
        </div>

        <div className={styles.field}>
          <label>Duration</label>

          <div className={styles.select}>
            <CalendarDays size={18} />

            <select defaultValue="All Duration">
              {foreignTourSearchOptions.durations.map(
                (item) => (
                  <option key={item}>{item}</option>
                )
              )}
            </select>

            <ChevronDown size={16} />
          </div>
        </div>

        <div className={styles.field}>
          <label>Tour Type</label>

          <div className={styles.select}>
            <UsersRound size={18} />

            <select defaultValue="All Tour Types">
              {foreignTourSearchOptions.types.map(
                (item) => (
                  <option key={item}>{item}</option>
                )
              )}
            </select>

            <ChevronDown size={16} />
          </div>
        </div>

        <button className={styles.button}>
          <Search size={19} />
          Search Tours
        </button>

      </div>
    </section>
  );
}