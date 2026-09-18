"use client";

import { useState } from "react";
import styles from "./ForeignTourSearch.module.css";

import {
  Search,
  ChevronDown,
  MapPin,
  CalendarDays,
  UsersRound,
} from "lucide-react";

import { foreignTourSearchOptions } from "./ForeignTourSearchData";

type Props = {
  destination?: string;
  duration?: string;
  tourType?: string;
};

export default function ForeignTourSearch({
  destination = "All Destinations",
  duration = "All Durations",
  tourType = "All Tour Types",
}: Props) {
  return (
    <section className={styles.section}>
      <form className={styles.searchBox} method="GET">
        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="destination">Destination</label>
          <div className={styles.select}>
            <MapPin size={18} className={styles.icon} />

            <select
              id="destination"
              name="destination"
              defaultValue={destination}
            >
              {foreignTourSearchOptions.destinations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={16} className={styles.chevron} />
          </div>
        </div>

        {/* DURATION */}
        <div className={styles.field}>
          <label htmlFor="duration">Duration</label>

          <div className={styles.select}>
            <CalendarDays size={18} className={styles.icon} />

            <select id="duration" name="duration" defaultValue={duration}>
              {foreignTourSearchOptions.durations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={16} className={styles.chevron} />
          </div>
        </div>

        {/* TOUR TYPE */}
        <div className={styles.field}>
          <label htmlFor="tourType">Tour Type</label>

          <div className={styles.select}>
            <UsersRound size={18} className={styles.icon} />

            <select id="tourType" name="tourType" defaultValue={tourType}>
              {foreignTourSearchOptions.types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={16} className={styles.chevron} />
          </div>
        </div>

        {/* SEARCH */}
        <button type="submit" className={styles.button}>
          <Search size={19} />
          <span>Search Tours</span>
        </button>
      </form>
    </section>
  );
}
