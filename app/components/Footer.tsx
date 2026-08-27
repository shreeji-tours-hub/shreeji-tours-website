"use client";

import styles from "./Footer.module.css";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

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

        {/* ABOUT / BRAND */}

        <div className={styles.brandColumn}>

          <img
  src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1786899430/WhatsApp_Image_2026-08-16_at_15.49.04-removebg-preview_nqkobb.png"
  alt="Shreeji Tours & Travels"
  className={styles.footerLogo}
/>

          <p className={styles.description}>
            {footerBrand.description}
          </p>

          {/* TRIPADVISOR */}

          <a
  href="https://www.tripadvisor.in/Attraction_Review-g304554-d15697131-Reviews-Shreeji_Tours_n_Travels-Mumbai_Maharashtra.html"
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


          <a
  href="https://share.google/iwzoH7qJBgbfY3qzL"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.googleReview}
>
  <div className={styles.googleLogo}>
    <img
      src="/images/google_review_clean_transparent.png"
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

            {/* =====================================================
      GOOGLE MAP
  ===================================================== */}

  <div className={styles.mapContainer}>

  <iframe
    src={`https://www.google.com/maps?q=${encodeURIComponent(
      footerContact.mapQuery
    )}&output=embed`}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Shreeji Tours and Travels Location"
  />

</div>


          {/* SOCIAL ICONS */}

          <div className={styles.social}>

  <a
    href={footerSocialLinks.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href={footerSocialLinks.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href={footerSocialLinks.youtube}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://x.com/ShreejiTnT"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
  >
    <FaXTwitter />
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


      {/* FLOATING BUTTONS */}

<div className={styles.floatingButtons}>

  {/* BACK TO TOP */}

  <button
    type="button"
    className={styles.backToTop}
    aria-label="Back to top"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    <ArrowUp size={24} strokeWidth={2.5} />
  </button>


  {/* WHATSAPP */}

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

</div>

    </footer>
  );
}