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

  const tour = popularInternationalTours.find(
    (item) =>
      item.slug?.trim().toLowerCase() === decodedSlug
  );

  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =========================
            HERO
        ========================= */}
        <section className={styles.hero}>

          <img
            src={tour.image}
            alt={tour.title}
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>

              <span className={styles.heroLabel}>
                INTERNATIONAL TOUR PACKAGE
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


        {/* =========================
            TOUR INFORMATION
        ========================= */}
        <section className={styles.infoSection}>

          <div className={styles.infoContainer}>

            <div className={styles.infoGrid}>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Duration
                </span>

                <strong className={styles.infoValue}>
                  {tour.duration}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Route
                </span>

                <strong className={styles.infoValue}>
                  {tour.route}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Experience
                </span>

                <strong className={styles.infoValue}>
                  {tour.description}
                </strong>
              </div>


              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Tour Type
                </span>

                <strong className={styles.infoValue}>
                  International
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            OVERVIEW
        ========================= */}
        <section className={styles.overviewSection}>

          <div className={styles.container}>

            <div className={styles.overviewGrid}>

              <div>

                <span className={styles.sectionLabel}>
                  ABOUT THE TOUR
                </span>

                <h2 className={styles.overviewTitle}>
                  {tour.title}
                </h2>

                <p className={styles.overviewText}>
                  {tour.overview}
                </p>


                <div className={styles.highlights}>

                  <h3 className={styles.highlightsTitle}>
                    Tour Highlights
                  </h3>

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

                          <p
                            className={styles.highlightText}
                          >
                            {highlight}
                          </p>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>


              <div className={styles.sideImage}>

                <img
                  src={tour.image}
                  alt={tour.title}
                />

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            ITINERARY
        ========================= */}
        <section className={styles.itinerarySection}>

          <div className={styles.container}>

            <div className={styles.sectionHeading}>

              <span className={styles.sectionLabel}>
                YOUR JOURNEY
              </span>

              <h2>
                Day-Wise Itinerary
              </h2>

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


              {/* =========================
                  ENQUIRY
              ========================= */}
              <aside
                className={styles.enquiryCard}
                id="enquire"
              >

                <h3>
                  Enquire Now
                </h3>

                <p>
                  Fill in the form and our travel
                  expert will contact you shortly.
                </p>


                <input
                  type="text"
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


        {/* =========================
            INCLUSIONS / EXCLUSIONS
        ========================= */}
        <section className={styles.inclusionSection}>

          <div className={styles.container}>

            <div className={styles.inclusionGrid}>

              {/* INCLUSIONS */}

              <div className={styles.inclusionBox}>

                <span className={styles.sectionLabel}>
                  INCLUDED
                </span>

                <h2>
                  Inclusions
                </h2>

                <ul>

                  {tour.inclusions.map((item) => (

                    <li key={item}>

                      <span>
                        ✓
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>


              {/* EXCLUSIONS */}

              <div className={styles.inclusionBox}>

                <span className={styles.sectionLabel}>
                  NOT INCLUDED
                </span>

                <h2>
                  Exclusions
                </h2>

                <ul>

                  {tour.exclusions.map((item) => (

                    <li key={item}>

                      <span>
                        ✕
                      </span>

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