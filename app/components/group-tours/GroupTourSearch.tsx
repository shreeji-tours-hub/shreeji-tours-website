"use client";

import styles from "./GroupTourSearch.module.css";
import { Search, ChevronDown } from "lucide-react";

export default function GroupTourSearch() {
  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>
        <div className={styles.field}>
          <label>Destination</label>
          <div className={styles.select}>
            <span>Any Destination</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className={styles.field}>
          <label>Duration</label>
          <div className={styles.select}>
            <span>Any Duration</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className={styles.field}>
          <label>Group Type</label>
          <div className={styles.select}>
            <span>All Group Types</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <button className={styles.button}>
          <Search size={17} />
          Search Tours
        </button>
      </div>
    </section>
  );
}