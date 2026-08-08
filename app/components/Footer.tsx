"use client";

import styles from "./Footer.module.css";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  footerBrand,
  footerQuickLinks,
  footerPopularTours,
  footerServices,
  footerContact,
  footerSocialLinks,
  footerReviews,
  footerCopyright,
} from "./FooterData";


export default function Footer() {

  return (

    <footer
      className={styles.footer}
      id="contact"
    >


      {/* =========================
          GOOGLE REVIEWS
      ========================= */}

      <div className={styles.reviewSection}>

        <div className={styles.reviewContainer}>

          <div className={styles.reviewText}>

            <h3>
              {footerReviews.title}
            </h3>

            <p>
              {footerReviews.description}
            </p>

          </div>


          <a
            href={footerReviews.googleReviewLink}
            className={styles.reviewButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Leave a Google Review
          </a>

        </div>

      </div>


      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className={styles.footerMain}>


        {/* =========================
            BRAND
        ========================= */}

        <div className={styles.brand}>

          <div className={styles.logo}>

            <div className={styles.logoSymbol}>
              🦚
            </div>

            <div>

              <div className={styles.logoText}>
                {footerBrand.name}
              </div>

              <div className={styles.logoTagline}>
                {footerBrand.tagline}
              </div>

            </div>

          </div>


          <p className={styles.description}>
            {footerBrand.description}
          </p>


          {/* TRIPADVISOR */}

          <div className={styles.tripadvisor}>

            <strong>
              ◎ Tripadvisor
            </strong>

            <span>
              {footerBrand.tripadvisorReviews}
            </span>

          </div>


          {/* SOCIAL */}

          <div className={styles.social}>

            <a
              href={footerSocialLinks.facebook}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={footerSocialLinks.instagram}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={footerSocialLinks.youtube}
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href={footerSocialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}

        <div className={styles.column}>

          <h3>
            Quick Links
          </h3>

          <ul className={styles.links}>

            {footerQuickLinks.map(
              (link, index) => (

                <li key={index}>

                  <a href={link.href}>
                    {link.label}
                  </a>

                </li>

              )
            )}

          </ul>

        </div>


        {/* =========================
            POPULAR TOURS
        ========================= */}

        <div className={styles.column}>

          <h3>
            Popular Tours
          </h3>

          <ul className={styles.links}>

            {footerPopularTours.map(
              (tour, index) => (

                <li key={index}>

                  <a href="#tours">
                    {tour}
                  </a>

                </li>

              )
            )}

          </ul>

        </div>


        {/* =========================
            SERVICES
        ========================= */}

        <div className={styles.column}>

          <h3>
            Our Services
          </h3>

          <ul className={styles.links}>

            {footerServices.map(
              (service, index) => (

                <li key={index}>

                  <a href={service.href}>
                    {service.label}
                  </a>

                </li>

              )
            )}

          </ul>

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className={styles.column}>

          <h3>
            Contact Us
          </h3>


          <div className={styles.contactList}>


            <a
              href={`tel:${footerContact.phone1}`}
              className={styles.contactItem}
            >

              <Phone
                size={17}
                className={styles.contactIcon}
              />

              <span>
                {footerContact.phone1}
              </span>

            </a>


            <a
              href={`tel:${footerContact.phone2}`}
              className={styles.contactItem}
            >

              <Phone
                size={17}
                className={styles.contactIcon}
              />

              <span>
                {footerContact.phone2}
              </span>

            </a>


            <a
              href={`mailto:${footerContact.email}`}
              className={styles.contactItem}
            >

              <Mail
                size={17}
                className={styles.contactIcon}
              />

              <span>
                {footerContact.email}
              </span>

            </a>


            <div className={styles.contactItem}>

              <MapPin
                size={20}
                className={styles.contactIcon}
              />

              <span>
                {footerContact.address}
              </span>

            </div>


          </div>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className={styles.bottom}>

        <div className={styles.bottomInner}>

          <p className={styles.copyright}>

            © {footerCopyright.year}{" "}

            {footerCopyright.text}

          </p>


          <div className={styles.bottomLinks}>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          FLOATING WHATSAPP
      ========================= */}

      <a
        href={footerSocialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsapp}
        aria-label="WhatsApp"
      >

        <FaWhatsapp
          className={styles.whatsappIcon}
        />

        <span className={styles.whatsappText}>
          WhatsApp Us
        </span>

      </a>


    </footer>
  );
}