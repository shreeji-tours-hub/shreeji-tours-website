"use client";

import { useState } from "react";
import styles from "./TourSearch.module.css";
import { Search } from "lucide-react";

export default function TourSearch() {
  const [destination, setDestination] = useState("Any Destination");
  const [tourType, setTourType] = useState("Any Type");
  const [duration, setDuration] = useState("Any Duration");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (destination !== "Any Destination") {
      params.set("destination", destination);
    }

    if (tourType !== "Any Type") {
      params.set("type", tourType);
    }

    if (duration !== "Any Duration") {
      params.set("duration", duration);
    }

    // Update URL without leaving the page
    const query = params.toString();

    window.history.pushState(
      {},
      "",
      query ? `/tours?${query}` : "/tours"
    );

    // Scroll to tour packages
    const toursSection = document.getElementById("tour-packages");

    if (toursSection) {
      toursSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Let other components know that search changed
    window.dispatchEvent(new Event("tourSearch"));
  };

  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>

        {/* DESTINATION */}
        <div className={styles.field}>
          <label htmlFor="destination">
            Destination
          </label>

          <select
            id="destination"
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
          <label htmlFor="tourType">
            Tour Type
          </label>

          <select
            id="tourType"
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
          <label htmlFor="duration">
            Duration
          </label>

          <select
            id="duration"
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
        <button
          type="button"
          className={styles.button}
          onClick={handleSearch}
        >
          <Search size={18} strokeWidth={2.5} />

          <span>Search Tours</span>
        </button>

      </div>
    </section>
  );
}