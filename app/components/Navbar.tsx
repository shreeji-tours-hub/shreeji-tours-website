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
    <>
      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <header className={styles.navbar}>
        <div className={styles.navInner}>

          {/* LOGO */}

          <Link
            href="/"
            className={styles.logo}
          >
            <div className={styles.logoSymbol}>
              🦚
            </div>

            <div className={styles.logoContent}>
              <div className={styles.logoText}>
                Shreeji Tours & Travels
              </div>

              <div className={styles.logoTagline}>
                MAKE TOUR EASY
              </div>
            </div>
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
            className={styles.mobileMenu}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>
      </header>
    </>
  );
}