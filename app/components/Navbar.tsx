"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Navbar.module.css";

import {
  navbarLinks,
} from "./NavbarData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="/"
          className={styles.logo}
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786885575/Shreeji_logo_sdrwof.png"
            alt="Shreeji Tours & Travels"
          />
        </a>


        {/* =========================
            DESKTOP / MOBILE MENU
        ========================= */}

        <nav
          className={`${styles.navLinks} ${
            mobileOpen ? styles.mobileActive : ""
          }`}
        >
          {navbarLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={index === 0 ? styles.active : ""}
              onClick={() => setMobileOpen(false)}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>


        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          type="button"
          className={styles.mobileMenu}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}