import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { popularGroupTours } from "@/app/components/group-tours/PopularGroupToursData";

import styles from "./GroupTour.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GroupTourPage({ params }: Props) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const tour = popularGroupTours.find(
    (item) =>
      item.slug?.trim().toLowerCase() === decodedSlug
  );

  if (!tour) {
    notFound();
  }

  /*
   * Create a tour code from the slug.
   *
   * Example:
   * golden-triangle-tour
   * becomes:
   * GTT
   */
  const tourCode = tour.slug
    .split("-")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO / FULL WIDTH BANNER
        ===================================================== */}

        <section className={styles.hero}>

          <img
            src={tour.image}
            alt={tour.title}
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}>

            <div className={styles.heroContent}>

              <span className={styles.heroLabel}>
                GROUP TOUR PACKAGE
              </span>

              <h1 className={styles.heroTitle}>
                {tour.title}
              </h1>

              <p className={styles.heroDescription}>
                {tour.route}
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TOUR INFORMATION
        ===================================================== */}

        <section className={styles.infoSection}>

          <div className={styles.container}>

            <div className={styles.infoGrid}>

              {/* DURATION */}

              <div className={styles.infoItem}>

                <span className={styles.infoLabel}>
                  Duration
                </span>

                <strong className={styles.infoValue}>
                  {tour.duration}
                </strong>

              </div>


              {/* ROUTE */}

              <div className={styles.infoItem}>

                <span className={styles.infoLabel}>
                  Route
                </span>

                <strong className={styles.infoValue}>
                  {tour.route}
                </strong>

              </div>


              {/* EXPERIENCE */}

              <div className={styles.infoItem}>

                <span className={styles.infoLabel}>
                  Experience
                </span>

                <strong className={styles.infoValue}>
                  {tour.description}
                </strong>

              </div>


              {/* TOUR CODE */}

              <div className={styles.infoItem}>

                <span className={styles.infoLabel}>
                  Tour Code
                </span>

                <strong className={styles.infoValue}>
                  {tourCode}
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OVERVIEW
        ===================================================== */}

        <section className={styles.overviewSection}>

          <div className={styles.container}>

            <div className={styles.mainContent}>

              {/* SECTION LABEL */}

              <span className={styles.sectionLabel}>
                ABOUT THE TOUR
              </span>


              {/* TITLE */}

              <h2>
                Tour Overview
              </h2>


              {/* OVERVIEW BOX */}

              <div className={styles.overviewBox}>

                <p className={styles.overview}>
                  {tour.overview}
                </p>

              </div>


              {/* =================================================
                  TOUR HIGHLIGHTS
              ================================================= */}

              <div className={styles.highlights}>

                <div className={styles.highlightsHeader}>

                  <span className={styles.highlightLabel}>
                    EXPERIENCE THE BEST
                  </span>

                  <h3>
                    Tour Highlights
                  </h3>

                </div>


                <div className={styles.highlightGrid}>

                  {tour.highlights.map(
                    (highlight, index) => (

                      <div
                        className={styles.highlight}
                        key={index}
                      >

                        <span className={styles.highlightIcon}>
                          ✓
                        </span>

                        <p>
                          {highlight}
                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ITINERARY
        ===================================================== */}

        <section className={styles.itinerarySection}>

          <div className={styles.container}>

            {/* SECTION HEADING */}

            <div className={styles.sectionHeading}>

              <span className={styles.sectionLabel}>
                YOUR JOURNEY
              </span>

              <h2>
                Day-Wise Itinerary
              </h2>

            </div>


            {/* ITINERARY + ENQUIRY */}

            <div className={styles.itineraryLayout}>


              {/* =================================================
                  ITINERARY
              ================================================= */}

              <div className={styles.itinerary}>

                {tour.itinerary.map((day) => (

                  <div
                    className={styles.day}
                    key={day.day}
                  >

                    {/* DAY NUMBER */}

                    <div className={styles.dayNumber}>
                      {day.day}
                    </div>


                    {/* DAY CONTENT */}

                    <div className={styles.dayContent}>

                      <h3>
                        {day.title}
                      </h3>

                      <p>
                        {day.description}
                      </p>

                      {day.overnight && (
                        <span className={styles.overnight}>
                          Overnight: {day.overnight}
                        </span>
                      )}

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  ENQUIRY FORM
              ================================================= */}

              <aside
                className={styles.enquiryCard}
                id="enquire"
              >

                <h3>
                  Enquire Now
                </h3>

                <p>
                  Fill in your details and our travel
                  expert will contact you shortly.
                </p>


                {/* FULL NAME */}

                <input
                  type="text"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />


                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />


                {/* MOBILE */}

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                />


                {/* TRAVEL DATE */}

                <input
                  type="date"
                  aria-label="Travel Date"
                />


                {/* NUMBER OF TRAVELERS */}

                <input
                  type="number"
                  placeholder="Number of Travelers"
                  min="1"
                  aria-label="Number of Travelers"
                />


                {/* NUMBER OF NIGHTS */}

                <select
                  defaultValue=""
                  aria-label="Number of Nights"
                >

                  <option
                    value=""
                    disabled
                  >
                    Number of Nights
                  </option>

                  <option value="1">
                    1 Night
                  </option>

                  <option value="2">
                    2 Nights
                  </option>

                  <option value="3">
                    3 Nights
                  </option>

                  <option value="4">
                    4 Nights
                  </option>

                  <option value="5">
                    5 Nights
                  </option>

                  <option value="6">
                    6 Nights
                  </option>

                  <option value="7">
                    7 Nights
                  </option>

                  <option value="8">
                    8 Nights
                  </option>

                  <option value="9">
                    9 Nights
                  </option>

                  <option value="10+">
                    10+ Nights
                  </option>

                </select>


                {/* SELECT HOTEL */}

                <select
                  defaultValue=""
                  aria-label="Select Hotel"
                >

                  <option
                    value=""
                    disabled
                  >
                    Select Hotel
                  </option>

                  <option value="5-star">
                    5 Star
                  </option>

                  <option value="4-star">
                    4 Star
                  </option>

                  <option value="3-star">
                    3 Star
                  </option>

                  <option value="2-star">
                    2 Star
                  </option>

                  <option value="budget">
                    Budget
                  </option>

                </select>


                {/* ADDITIONAL REQUIREMENTS */}

                <textarea
                  placeholder="Additional Requirements"
                  rows={4}
                  aria-label="Additional Requirements"
                />


                {/* SUBMIT */}

                <button
                  type="button"
                  className={styles.enquiryButton}
                >
                  SEND ENQUIRY
                </button>

              </aside>

            </div>

          </div>

        </section>


        {/* =====================================================
            INCLUSIONS / EXCLUSIONS
        ===================================================== */}

        <section className={styles.inclusionSection}>

          <div className={styles.container}>

            <div className={styles.inclusionGrid}>


              {/* =================================================
                  INCLUSIONS
              ================================================= */}

              <div className={styles.inclusionBox}>

                <div className={styles.inclusionHeader}>

                  <span className={styles.sectionLabel}>
                    INCLUDED
                  </span>

                  <h2>
                    Inclusions
                  </h2>

                  <p>
                    What's included in your tour package
                  </p>

                </div>


                <ul>

                  {tour.inclusions.map((item) => (

                    <li key={item}>

                      <span className={styles.inclusionIcon}>
                        ✓
                      </span>

                      <span className={styles.inclusionText}>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>


              {/* =================================================
                  EXCLUSIONS
              ================================================= */}

              <div className={styles.inclusionBox}>

                <div className={styles.inclusionHeader}>

                  <span className={styles.sectionLabel}>
                    NOT INCLUDED
                  </span>

                  <h2>
                    Exclusions
                  </h2>

                  <p>
                    Expenses not covered in the tour package
                  </p>

                </div>


                <ul>

                  {tour.exclusions.map((item) => (

                    <li key={item}>

                      <span
                        className={`${styles.inclusionIcon} ${styles.exclusionIcon}`}
                      >
                        ✕
                      </span>

                      <span className={styles.inclusionText}>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}