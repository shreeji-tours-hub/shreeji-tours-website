"use client";

import { useState } from "react";



import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import styles from "./Navbar.module.css";

import {
  navbarLinks,
  navbarContact,
  navbarSocialLinks,
} from "./NavbarData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>

  

      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <header className={styles.navbar}>

        <div className={styles.navInner}>


          {/* LOGO */}

          <a
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

          </a>


          {/* DESKTOP MENU */}

          <nav
            className={`${styles.navLinks} ${
              mobileOpen
                ? styles.mobileActive
                : ""
            }`}
          >

            {navbarLinks.map((item, index) => (

              <a
                key={index}
                href={item.href}
                className={
                  index === 0
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  setMobileOpen(false)
                }
              >

                <span>
                  {item.label}
                </span>

               

              </a>

            ))}

          </nav>


          {/* MOBILE BUTTON */}

          <button
            className={styles.mobileMenu}
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            aria-label="Toggle navigation"
          >

          

          </button>

        </div>

      </header>


      {/* =========================
          WHATSAPP BUTTON
      ========================= */}

    </>
  );
}