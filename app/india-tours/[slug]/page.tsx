import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { indiaTours } from "@/app/components/india-tours/PopularIndiaToursData";

import styles from "./IndiaTourDetail.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndiaTourPage({
  params,
}: Props) {
  const { slug } = await params;

  const tour = indiaTours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

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
            HERO / FULL WIDTH BANNER
            SAME STYLE AS FOREIGN TOURS
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
                INDIA TOUR PACKAGE
              </span>

              <h1
                style={{
                  maxWidth: "1000px",
                  margin: "0 0 25px",
                  color: "#fff",
                  fontFamily:
                    'Georgia, "Times New Roman", serif',
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
                {tour.location}
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
                  {tour.location}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span>
                  Experience
                </span>

                <strong>
                  {tour.tag}
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
            SAME STRUCTURE AS FOREIGN TOURS
        ===================================================== */}

        <section className={styles.overviewSection}>

          <div className={styles.container}>

            <div className={styles.contentGrid}>

              <div className={styles.mainContent}>

                <span className={styles.sectionLabel}>
                  DISCOVER INDIA
                </span>

                <h2>
                  Tour Overview
                </h2>

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

              {/* DAYS */}

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

                      <span className={styles.overnight}>
                        Overnight: {day.overnight}
                      </span>

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


                <input
                  placeholder="Full Name"
                  aria-label="Full Name"
                />


                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />


                <input
                  type="tel"
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                />


                <input
                  type="date"
                  aria-label="Travel Date"
                />


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

                  <option>
                    1 - 2
                  </option>

                  <option>
                    3 - 5
                  </option>

                  <option>
                    6 - 10
                  </option>

                  <option>
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

                  <option>
                    1 Night
                  </option>

                  <option>
                    2 Nights
                  </option>

                  <option>
                    3 Nights
                  </option>

                  <option>
                    4 Nights
                  </option>

                  <option>
                    5 Nights
                  </option>

                  <option>
                    6 Nights
                  </option>

                  <option>
                    7 Nights
                  </option>

                  <option>
                    8 Nights
                  </option>

                  <option>
                    9 Nights
                  </option>

                  <option>
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

                  <option>
                    5 Star
                  </option>

                  <option>
                    4 Star
                  </option>

                  <option>
                    3 Star
                  </option>

                  <option>
                    2 Star
                  </option>

                  <option>
                    Budget
                  </option>

                </select>


                <textarea
                  placeholder="Additional Requirements"
                  rows={4}
                  aria-label="Additional Requirements"
                />


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

              {/* INCLUSIONS */}

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


              {/* EXCLUSIONS */}

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

                      <span
                        className={styles.exclusionIcon}
                      >
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