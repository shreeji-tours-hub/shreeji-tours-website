"use client";

import styles from "./Footer.module.css";

import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
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

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className={styles.footerMain}>


        {/* =====================================================
            ABOUT / BRAND
        ===================================================== */}

        <div className={styles.brandColumn}>

          <h3 className={styles.columnTitle}>
            About Shreeji Tours & Travels
          </h3>


          <p className={styles.description}>
            {footerBrand.description}
          </p>


          {/* =========================
              TRIPADVISOR
          ========================= */}

          <a
            href={footerReviews.tripadvisorLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tripadvisor}
          >

            <div className={styles.tripadvisorTop}>

              <div className={styles.tripadvisorCircle}>
                ✓
              </div>

              <span>
                Tripadvisor
              </span>

            </div>


            <div className={styles.tripadvisorBottom}>

              <span className={styles.stars}>
                ★★★★★
              </span>

              <span className={styles.reviewCount}>
                {footerBrand.tripadvisorReviews}
              </span>

            </div>

          </a>


          {/* =========================
              GOOGLE REVIEW
          ========================= */}

     <a
  href={footerReviews.googleReviewLink}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.googleReview}
>
  <div className={styles.googleLogo}>
    <img
      src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786695053/images_rstxap.png"
      alt="Google Reviews"
    />
  </div>

  <div className={styles.googleText}>
    <strong>Excellent</strong>

    <span>★★★★★</span>
  </div>
</a>
        </div>


        {/* =====================================================
            QUICK LINKS
        ===================================================== */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
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


        {/* =====================================================
            POPULAR TOURS
        ===================================================== */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
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


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
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


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <div className={styles.contactColumn}>

          <h3 className={styles.columnTitle}>
            Contact Us
          </h3>


          <div className={styles.contactList}>


            {/* PHONE 1 */}

            <a
              href={`tel:${footerContact.phone1}`}
              className={styles.contactItem}
            >

              <Phone
                size={14}
                strokeWidth={2}
              />

              <span>
                {footerContact.phone1}
              </span>

            </a>


            {/* PHONE 2 */}

            <a
              href={`tel:${footerContact.phone2}`}
              className={styles.contactItem}
            >

              <Phone
                size={14}
                strokeWidth={2}
              />

              <span>
                {footerContact.phone2}
              </span>

            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${footerContact.email}`}
              className={styles.contactItem}
            >

              <Mail
                size={14}
                strokeWidth={2}
              />

              <span>
                {footerContact.email}
              </span>

            </a>


            {/* SECOND EMAIL */}

            <a
              href={`mailto:${footerContact.email2}`}
              className={styles.contactItem}
            >

              <Mail
                size={14}
                strokeWidth={2}
              />

              <span>
                {footerContact.email2}
              </span>

            </a>


            {/* ADDRESS */}

            <div className={styles.contactItem}>

              <MapPin
                size={16}
                strokeWidth={2}
              />

              <span>
                {footerContact.address}
              </span>

            </div>

          </div>


          {/* =========================
              SOCIAL ICONS
          ========================= */}

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

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

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


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

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