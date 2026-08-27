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
            SAME AS INDIA TOUR BANNER
        ===================================================== */}

        <section
          className={styles.hero}
          style={{
            position: "relative",
            width: "100%",
            height: "calc(100vh - 90px)",
            minHeight: "700px",
            overflow: "hidden",
          }}
        >
          <img
            src={tour.image}
            alt={tour.title}
            className={styles.heroImage}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          <div
            className={styles.heroOverlay}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)",
            }}
          >
            <div
              className={styles.heroContent}
              style={{
                width: "min(1400px, 90%)",
                margin: "0 auto",
                color: "#fff",
              }}
            >
              <span
                className={styles.label}
                style={{
                  display: "inline-block",
                  background: "#a80000",
                  color: "#fff",
                  padding: "12px 22px",
                  marginBottom: "28px",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                GROUP TOUR PACKAGE
              </span>

              <h1
                style={{
                  maxWidth: "1000px",
                  margin: "0 0 25px",
                  color: "#fff",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "clamp(55px, 6vw, 100px)",
                  fontWeight: 700,
                  lineHeight: 0.98,
                }}
              >
                {tour.title}
              </h1>

              <p
                style={{
                  maxWidth: "1000px",
                  margin: 0,
                  color: "#fff",
                  fontSize: "20px",
                  lineHeight: 1.65,
                }}
              >
                {tour.route}
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            TOUR INFORMATION
            SAME RED BAR AS INDIA TOUR
        ===================================================== */}

        <section className={styles.infoSection}>
          <div className={styles.container}>

            <div className={styles.infoGrid}>

              <div className={styles.infoItem}>
                <span>
                  Duration
                </span>

                <strong>
                  {tour.duration}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span>
                  Route
                </span>

                <strong>
                  {tour.route}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span>
                  Experience
                </span>

                <strong>
                  {tour.description}
                </strong>
              </div>


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


                {/* =================================================
                    TOUR DATE + PRICE
                    ONLY SHOWN FOR UPCOMING TOURS
                    (tours where date/price are set in the data file)
                ================================================= */}

                {tour.date && tour.price && (
                  <div className={styles.tourMeta}>

                    <div className={styles.tourMetaItem}>

                      <span className={styles.tourMetaIcon}>
                        📅
                      </span>

                      <div>
                        <span className={styles.tourMetaLabel}>
                          Tour Date
                        </span>

                        <span className={styles.tourMetaValue}>
                          {tour.date}
                        </span>
                      </div>

                    </div>


                    <div className={styles.tourMetaItem}>

                      <span className={styles.tourMetaIcon}>
                        ₹
                      </span>

                      <div>
                        <span className={styles.tourMetaLabel}>
                          Price
                        </span>

                        <span className={styles.tourMetaValue}>
                          {tour.price}
                        </span>
                      </div>

                    </div>

                  </div>
                )}

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


                {/* TOUR DATE */}

                <div className={styles.dateField}>

                  <label htmlFor="start-date">
                    Tour Date
                  </label>

                  <input
                    id="start-date"
                    type="date"
                  />

                </div>


                {/* NUMBER OF TRAVELERS */}

                <input
                  type="number"
                  placeholder="Number of Travelers"
                  min="1"
                />


                {/* NUMBER OF NIGHTS */}

                <input
                  type="number"
                  placeholder="Number of Nights"
                  min="1"
                />


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