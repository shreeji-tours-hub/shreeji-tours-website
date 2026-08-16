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

      {/* =====================================================
    PLAN YOUR JOURNEY
===================================================== */}

<div className={styles.journeySection}>

  {/* LEFT CONTENT */}
  <div className={styles.journeyContent}>

    <span className={styles.journeyLabel}>
      LET'S PLAN YOUR NEXT JOURNEY
    </span>

    <h2>
      Your journey starts here.
    </h2>

    <p>
      Whether you're looking for a spiritual pilgrimage, family vacation,
      honeymoon, corporate event, luxury holiday, or an unforgettable
      India trip, Shreeji Tours & Travels is here to make your journey
      easy and memorable.
    </p>

    <a
      href="/contact"
      className={styles.journeyButton}
    >
      Contact Us
    </a>

  </div>


  {/* CONTACT DETAILS */}
  <div className={styles.journeyContact}>

    <a href={`tel:${footerContact.phone1}`}>
      <Phone size={14} />
      <span>{footerContact.phone1}</span>
    </a>

    <a href={`tel:${footerContact.phone2}`}>
      <Phone size={14} />
      <span>{footerContact.phone2}</span>
    </a>

    <a href={`mailto:${footerContact.email}`}>
      <Mail size={14} />
      <span>{footerContact.email}</span>
    </a>

    <a href={`mailto:${footerContact.email2}`}>
      <Mail size={14} />
      <span>{footerContact.email2}</span>
    </a>

    <div>
      <MapPin size={14} />
      <span>{footerContact.address}</span>
    </div>

  </div>


  {/* IMAGE */}
  <div className={styles.journeyImage}>
    <img
      src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786886105/pexels-silverkblack-36729940_marxpd.jpg"
      alt="Travel consultant"
    />
  </div>

</div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className={styles.footerMain}>

        {/* ABOUT / BRAND */}

        <div className={styles.brandColumn}>

          <h3 className={styles.columnTitle}>
            About Shreeji Tours & Travels
          </h3>

          <p className={styles.description}>
            {footerBrand.description}
          </p>

          {/* TRIPADVISOR */}

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


          {/* GOOGLE REVIEW */}

          <a
            href={footerReviews.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleReview}
          >
            <div className={styles.googleLogo}>
              <img
                src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786886193/rev_b8nqzw.jpg"
                alt="Google Reviews"
              />
            </div>

          
          </a>

        </div>


        {/* QUICK LINKS */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
            Quick Links
          </h3>

          <ul className={styles.links}>
            {footerQuickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* POPULAR TOURS */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
            Popular Tours
          </h3>

          <ul className={styles.links}>
            {footerPopularTours.map((tour, index) => (
              <li key={index}>
                <a href="#tours">
                  {tour}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* SERVICES */}

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>
            Our Services
          </h3>

          <ul className={styles.links}>
            {footerServices.map((service, index) => (
              <li key={index}>
                <a href={service.href}>
                  {service.label}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* CONTACT */}

        <div className={styles.contactColumn}>

          <h3 className={styles.columnTitle}>
            Contact Us
          </h3>

          <div className={styles.contactList}>

            <a
              href={`tel:${footerContact.phone1}`}
              className={styles.contactItem}
            >
              <Phone size={14} strokeWidth={2} />
              <span>{footerContact.phone1}</span>
            </a>

            <a
              href={`tel:${footerContact.phone2}`}
              className={styles.contactItem}
            >
              <Phone size={14} strokeWidth={2} />
              <span>{footerContact.phone2}</span>
            </a>

            <a
              href={`mailto:${footerContact.email}`}
              className={styles.contactItem}
            >
              <Mail size={14} strokeWidth={2} />
              <span>{footerContact.email}</span>
            </a>

            <a
              href={`mailto:${footerContact.email2}`}
              className={styles.contactItem}
            >
              <Mail size={14} strokeWidth={2} />
              <span>{footerContact.email2}</span>
            </a>

            <div className={styles.contactItem}>
              <MapPin size={16} strokeWidth={2} />
              <span>{footerContact.address}</span>
            </div>

          </div>


          {/* SOCIAL ICONS */}

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


      {/* BOTTOM BAR */}

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


      {/* FLOATING WHATSAPP */}

      <a
        href={footerSocialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsapp}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className={styles.whatsappIcon} />

        <span className={styles.whatsappText}>
          WhatsApp Us
        </span>
      </a>

    </footer>
  );
}