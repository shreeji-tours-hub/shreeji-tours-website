"use client";

import { useState } from "react";
import styles from "./TourSearch.module.css";
import { Search } from "lucide-react";

export default function TourSearch({
  params,
}: {
  params: {
    destination?: string;
    duration?: string;
    tourType?: string;
  };
}) {
  const [destination, setDestination] = useState(
    params?.destination ?? "Any Destination",
  );
  const [tourType, setTourType] = useState(params?.tourType ?? "Any Type");
  const [duration, setDuration] = useState(params?.duration ?? "Any Duration");

  return (
    <section className={styles.section}>
      <form className={styles.searchBox} method="GET">
        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="destination">Destination</label>

          <select
            id="destination"
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={styles.select}
          >
            <option>Any Destination</option>
            <option>Delhi</option>
            <option>Agra</option>
            <option>Jaipur</option>
            <option>Kerala</option>
            <option>Rajasthan</option>
            <option>Himachal Pradesh</option>
            <option>Goa</option>
            <option>South India</option>
            <option>Uttarakhand</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* TOUR TYPE */}
        <div className={styles.field}>
          <label htmlFor="tourType">Tour Type</label>

          <select
            id="tourType"
            name="tourType"
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
            className={styles.select}
          >
            <option>Any Type</option>
            <option>Heritage</option>
            <option>Spiritual</option>
            <option>Nature</option>
            <option>Wildlife</option>
            <option>Beach</option>
            <option>Pilgrimage</option>
            <option>Adventure</option>
            <option>Family</option>
          </select>
        </div>

        {/* DURATION */}
        <div className={styles.field}>
          <label htmlFor="duration">Duration</label>

          <select
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={styles.select}
          >
            <option>Any Duration</option>
            <option>1 - 3 Days</option>
            <option>4 - 5 Days</option>
            <option>6 - 7 Days</option>
            <option>8 - 10 Days</option>
            <option>10+ Days</option>
          </select>
        </div>

        {/* SEARCH */}
        <button type="submit" className={styles.button}>
          <Search size={18} strokeWidth={2.5} />

          <span>Search Tours</span>
        </button>
      </form>
    </section>
  );
}
