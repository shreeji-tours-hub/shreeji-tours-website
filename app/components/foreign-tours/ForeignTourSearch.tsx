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

export default function ForeignTourSearch() {
  const [destination, setDestination] = useState("All Destinations");
  const [duration, setDuration] = useState("All Duration");
  const [tourType, setTourType] = useState("All Tour Types");

  const handleSearch = () => {
    console.log({
      destination,
      duration,
      tourType,
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>

        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="destination">Destination</label>

          <div className={styles.select}>
            <MapPin size={18} className={styles.icon} />

            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              {foreignTourSearchOptions.destinations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className={styles.chevron}
            />
          </div>
        </div>

        {/* DURATION */}
        <div className={styles.field}>
          <label htmlFor="duration">Duration</label>

          <div className={styles.select}>
            <CalendarDays size={18} className={styles.icon} />

            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              {foreignTourSearchOptions.durations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className={styles.chevron}
            />
          </div>
        </div>

        {/* TOUR TYPE */}
        <div className={styles.field}>
          <label htmlFor="tourType">Tour Type</label>

          <div className={styles.select}>
            <UsersRound size={18} className={styles.icon} />

            <select
              id="tourType"
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
            >
              {foreignTourSearchOptions.types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className={styles.chevron}
            />
          </div>
        </div>

        {/* SEARCH */}
        <button
          type="button"
          className={styles.button}
          onClick={handleSearch}
        >
          <Search size={19} />
          <span>Search Tours</span>
        </button>

      </div>
    </section>
  );
}