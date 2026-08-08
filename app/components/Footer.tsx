"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  ChevronDown,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="topbar">
        <div className="container topbar-inner">

          <div className="top-contact">

            <span>
              <Phone size={13} />
              +91 9969422936
            </span>

            <span>
              <Phone size={13} />
              +91 9324622153
            </span>

            <span>
              <Mail size={13} />
              contact@shreejitourstravels.in
            </span>

            <span className="website-top">
              🌐 www.shreejitourstravels.in
            </span>

          </div>

          <div className="social-top">

            <span className="language">
              English
              <ChevronDown size={11} />
            </span>

            <FaFacebookF size={13} />
            <FaInstagram size={13} />
            <FaYoutube size={13} />
            <MessageCircle size={14} />

          </div>

        </div>
      </div>


      {/* NAVBAR */}
      <header className="navbar">

        <div className="container nav-inner">

          {/* LOGO */}
          <div className="logo-area">

            <div className="logo-symbol">
              🦚
            </div>

            <div>

              <div className="logo-text">
                Shreeji Tours n Travels
              </div>

              <div className="logo-tagline">
                Make Tour Easy
              </div>

            </div>

          </div>


          {/* NAVIGATION */}
          <nav
            className={`nav-links ${
              mobileOpen ? "mobile-active" : ""
            }`}
          >

            <a
              href="/"
              className="active"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About Us
            </a>

            <a
              href="#tours"
              onClick={closeMenu}
            >
              India Tours
              <ChevronDown size={11} />
            </a>

            <a
              href="#foreigners"
              onClick={closeMenu}
            >
              Tours for Foreigners
            </a>

            <a
              href="#international"
              onClick={closeMenu}
            >
              International Tours
              <ChevronDown size={11} />
            </a>

            <a
              href="#cab"
              onClick={closeMenu}
            >
              Cab Hire
            </a>

            <a
              href="#groups"
              onClick={closeMenu}
            >
              Group Tours
            </a>

            <a
              href="#reviews"
              onClick={closeMenu}
            >
              Happy Clients
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact Us
            </a>

          </nav>


          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >

            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}

          </button>

        </div>

      </header>


      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919969422936"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-top"
      >

        <MessageCircle size={16} />

        WhatsApp Us

      </a>
    </>
  );
}