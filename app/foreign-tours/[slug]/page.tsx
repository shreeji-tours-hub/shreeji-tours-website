import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { popularForeignTours } from "@/app/components/foreign-tours/PopularForeignToursData";

import styles from "./TourDetail.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ForeignTourPage({ params }: Props) {
  const { slug } = await params;

  const tour = popularForeignTours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO / FULL WIDTH BANNER
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
    src={tour.heroImage}
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
        TOURS FOR FOREIGNERS
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
        {tour.description}
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
                <span>Duration</span>
                <strong>{tour.duration}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Route</span>
                <strong>{tour.route}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Experience</span>
                <strong>{tour.details}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Tour Type</span>
                <strong>Private / Customized</strong>
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
                  DISCOVER INDIA
                </span>

                <h2>Tour Overview</h2>

                <p className={styles.overview}>
                  {tour.overview}
                </p>

                <div className={styles.highlights}>

                  <h3>Tour Highlights</h3>

                  <div className={styles.highlightGrid}>

                    {tour.highlights.map(
                      (highlight, index) => (
                        <div
                          className={styles.highlight}
                          key={index}
                        >
                          <span>✓</span>

                          <p>{highlight}</p>
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

              <span className={styles.sectionLabel}>
                YOUR JOURNEY
              </span>

              <h2>Day-Wise Itinerary</h2>

            </div>

            <div className={styles.itineraryLayout}>

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

                      <h3>{day.title}</h3>

                      <p>{day.description}</p>

                      {day.overnight && (
                        <div className={styles.overnight}>
                          Overnight: {day.overnight}
                        </div>
                      )}

                    </div>

                  </div>

                ))}

              </div>


              {/* =====================================================
                  ENQUIRY
              ===================================================== */}

              <aside className={styles.enquiryCard}>

                <h3>Enquire Now</h3>

                <p>
                  Fill in your details and our
                  travel expert will contact you
                  shortly.
                </p>

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                />

                <input
                  type="date"
                  aria-label="Travel Date"
                />

                <input
                  type="number"
                  placeholder="Number of Travelers"
                  min="1"
                />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Package
                  </option>

                  <option value="standard">
                    Standard
                  </option>

                  <option value="deluxe">
                    Deluxe
                  </option>

                  <option value="premium">
                    Premium
                  </option>
                </select>

                <textarea
                  placeholder="Additional Requirements"
                  rows={4}
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

            <div
              className={`${styles.inclusionGrid} ${styles.twoColumns}`}
            >

              {/* =====================================================
                  INCLUSIONS
              ===================================================== */}

              <div className={styles.inclusionBox}>

                <span className={styles.sectionLabel}>
                  INCLUDED
                </span>

                <h2>Inclusions</h2>

                <ul>

                  {tour.inclusions.map((item) => (

                    <li key={item}>

                      <span>✓</span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>


              {/* =====================================================
                  EXCLUSIONS
              ===================================================== */}

              <div className={styles.inclusionBox}>

                <span className={styles.sectionLabel}>
                  NOT INCLUDED
                </span>

                <h2>Exclusions</h2>

                <ul>

                  {tour.exclusions.map((item) => (

                    <li key={item}>

                      <span>✕</span>

                      {item}

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