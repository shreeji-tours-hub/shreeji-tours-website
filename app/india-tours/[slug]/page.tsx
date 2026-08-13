import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { indiaTours } from "@/app/components/india-tours/PopularIndiaToursData";

import styles from "../../TourDetail.module.css";

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

        {/* HERO */}

        <section className={styles.hero}>

          <img
            src={tour.image}
            alt={tour.title}
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}>

            <div className={styles.heroContent}>

              <span className={styles.label}>
                INDIA TOUR PACKAGE
              </span>

              <h1>
                {tour.title}
              </h1>

              <p>
                {tour.location}
              </p>

            </div>

          </div>

        </section>


        {/* TOUR INFORMATION */}

        <section className={styles.infoSection}>

          <div className={styles.container}>

            <div className={styles.infoGrid}>

              <div className={styles.infoItem}>
                <span>Duration</span>
                <strong>{tour.duration}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Route</span>
                <strong>{tour.location}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Tour Type</span>
                <strong>{tour.tag}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Tour Code</span>
                <strong>{tourCode}</strong>
              </div>

            </div>

          </div>

        </section>


        {/* OVERVIEW */}

        <section className={styles.overviewSection}>

          <div className={styles.container}>

            <div className={styles.contentGrid}>

              <div className={styles.mainContent}>

                <span className={styles.label}>
                  ABOUT THE TOUR
                </span>

                <h2>
                  {tour.title}
                </h2>

                <p className={styles.overview}>
                  {tour.overview}
                </p>


                {/* HIGHLIGHTS */}

                <div className={styles.highlights}>

                  <h3>
                    Tour Highlights
                  </h3>

                  <div className={styles.highlightGrid}>

                    {tour.highlights.map(
                      (highlight, index) => (

                        <div
                          className={styles.highlight}
                          key={index}
                        >

                          <span>✓</span>

                          <p>
                            {highlight}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>


              {/* SIDE IMAGE */}

              <div className={styles.sideImage}>

                <img
                  src={tour.tourImage}
                  alt={tour.title}
                />

              </div>

            </div>

          </div>

        </section>


        {/* ITINERARY */}

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


              {/* ENQUIRY */}

              <aside className={styles.enquiryCard}>

                <h3>
                  Enquire Now
                </h3>

                <p>
                  Fill in the form and our travel
                  expert will contact you shortly.
                </p>

                <input
                  value={tourCode}
                  readOnly
                  aria-label="Tour Code"
                />

                <input
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
                />

                <select defaultValue="">
                  <option value="" disabled>
                    Number of Travelers
                  </option>

                  <option>1 - 2</option>
                  <option>3 - 5</option>
                  <option>6 - 10</option>
                  <option>10+</option>
                </select>

                <textarea
                  placeholder="Additional Requirements"
                  rows={4}
                />

                <button
                  className={styles.enquiryButton}
                >
                  SEND ENQUIRY
                </button>

                <div className={styles.tourCode}>
                  TOUR CODE: {tourCode}
                </div>

              </aside>

            </div>

          </div>

        </section>


        {/* INCLUSIONS / EXCLUSIONS */}

        <section className={styles.inclusionSection}>

          <div className={styles.container}>

            <div className={styles.inclusionGrid}>

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
                      <span>✓</span>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>


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
                      <span>✕</span>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>


              {/* CUSTOM TOUR */}

              <div className={styles.customizeCard}>

                <img
                  src={tour.image}
                  alt="Customize your India tour"
                />

                <div className={styles.customizeContent}>

                  <h3>
                    Want a Customized Tour?
                  </h3>

                  <p>
                    Tell us what you want and
                    we will create a personalized
                    journey for you.
                  </p>

                  <a
                    href="#enquire"
                    className={styles.customizeButton}
                  >
                    Customize Tour
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className={styles.cta}>

          <div className={styles.ctaContent}>

            <div>

              <span className={styles.sectionLabel}>
                PLAN YOUR JOURNEY
              </span>

              <h2>
                Ready to Explore {tour.title}?
              </h2>

              <p>
                Book your unforgettable India
                journey with Shreeji Tours & Travels.
              </p>

            </div>

            <a
              href="#enquire"
              className={styles.ctaButton}
            >
              BOOK NOW →
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}