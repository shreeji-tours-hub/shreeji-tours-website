import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { popularInternationalTours } from "@/app/components/international-tours/PopularInternationalToursData";

import styles from "./InternationalTour.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InternationalTourPage({
  params,
}: Props) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  /*
   * IMPORTANT:
   * Your actual data export is:
   *
   * popularInternationalTours
   *
   * Do NOT use internationalTours here.
   */
  const tour = popularInternationalTours.find(
    (item) =>
      item.slug?.trim().toLowerCase() === decodedSlug
  );

  if (!tour) {
    notFound();
  }

  /*
   * Generate tour code from slug.
   *
   * Example:
   * singapore-tour
   * becomes
   * ST
   *
   * dubai-tour
   * becomes
   * DT
   */
  const tourCode = tour.slug
    .split("-")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO
            SAME STRUCTURE AS INDIA TOUR DETAIL PAGE
        ===================================================== */}

        <section className={styles.hero}>

          <img
            src={tour.image}
            alt={tour.title}
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}>

            <div className={styles.heroContent}>

              <span className={styles.label}>
                INTERNATIONAL TOUR PACKAGE
              </span>

              <h1>
                {tour.title}
              </h1>

              <p>
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

                <span>
                  Duration
                </span>

                <strong>
                  {tour.duration}
                </strong>

              </div>


              {/* ROUTE */}

              <div className={styles.infoItem}>

                <span>
                  Route
                </span>

                <strong>
                  {tour.route}
                </strong>

              </div>


              {/* EXPERIENCE */}

              <div className={styles.infoItem}>

                <span>
                  Experience
                </span>

                <strong>
                  {tour.description}
                </strong>

              </div>


              {/* TOUR CODE */}

              <div className={styles.infoItem}>

                <span>
                  Tour Code
                </span>

                <strong>
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

            <div className={styles.contentGrid}>

              <div className={styles.mainContent}>

                <span className={styles.sectionLabel}>
                  DISCOVER THE WORLD
                </span>

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

                          <span
                            className={styles.highlightIcon}
                          >
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

          </div>

        </section>


        {/* =====================================================
            ITINERARY
        ===================================================== */}

        <section className={styles.itinerarySection}>

          <div className={styles.container}>

            <div className={styles.sectionHeading}>

              <span className={styles.label}>
                YOUR JOURNEY
              </span>

              <h2>
                Day-Wise Itinerary
              </h2>

            </div>


            <div className={styles.itineraryLayout}>

              {/* =================================================
                  DAYS
              ================================================= */}

              <div className={styles.itinerary}>

                {tour.itinerary.map((day) => (

                  <div
                    className={styles.day}
                    key={day.day}
                  >

                    <div className={styles.dayNumber}>
                      {day.day}
                    </div>


                    <div className={styles.dayContent}>

                      <h3>
                        {day.title}
                      </h3>

                      <p>
                        {day.description}
                      </p>


                      {day.overnight && (

                        <span
                          className={styles.overnight}
                        >
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

                <div className={styles.dateField}>
  <label htmlFor="start-date">
    Start Date
  </label>

  <input
    id="start-date"
    type="date"
  />
</div>


                {/* NUMBER OF TRAVELERS */}

                <select
                  defaultValue=""
                  aria-label="Number of Travelers"
                >

                  <option
                    value=""
                    disabled
                  >
                    Number of Travelers
                  </option>

                  <option value="1-2">
                    1 - 2
                  </option>

                  <option value="3-5">
                    3 - 5
                  </option>

                  <option value="6-10">
                    6 - 10
                  </option>

                  <option value="10+">
                    10+
                  </option>

                </select>


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


                {/* HOTEL CATEGORY */}

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

                <span className={styles.label}>
                  INCLUDED
                </span>

                <h2>
                  Inclusions
                </h2>

                <ul>

                  {tour.inclusions.map((item) => (

                    <li key={item}>

                      <span className={styles.inclusionIcon}>
                        ✓
                      </span>

                      <span>
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

                <span className={styles.label}>
                  NOT INCLUDED
                </span>

                <h2>
                  Exclusions
                </h2>

                <ul>

                  {tour.exclusions.map((item) => (

                    <li key={item}>

                      <span className={styles.exclusionIcon}>
                        ✕
                      </span>

                      <span>
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