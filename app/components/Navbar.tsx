"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import styles from "./Navbar.module.css";

import {
  navbarLinks,
} from "./NavbarData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>

        {/* =========================
            LOGO
        ========================= */}

        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786885575/Shreeji_logo_sdrwof.png"
            alt="Shreeji Tours & Travels"
          />
        </Link>


        {/* =========================
            NAVIGATION LINKS
        ========================= */}

        <nav
          className={`${styles.navLinks} ${
            mobileOpen ? styles.mobileActive : ""
          }`}
        >
          {navbarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? styles.active
                  : ""
              }
              onClick={() => setMobileOpen(false)}
            >
              <span>{item.label}</span>
            </Link>
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
          {mobileOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>
    </header>
  );
}