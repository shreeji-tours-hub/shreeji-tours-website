import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { cabServices } from "@/app/components/cab-hire/CabServicesData";

import styles from "../../TourDetail.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CabPage({ params }: Props) {
  const { slug } = await params;

  const service = cabServices.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const serviceCode = service.slug
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
            src={service.image}
            alt={service.title}
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>

              <span className={styles.label}>
                CAB HIRE SERVICE
              </span>

              <h1>{service.title}</h1>

              <p>{service.description}</p>

            </div>
          </div>
        </section>


        {/* SERVICE INFORMATION */}

        <section className={styles.infoSection}>
          <div className={styles.container}>

            <div className={styles.infoGrid}>

              <div className={styles.infoItem}>
                <span>Service</span>
                <strong>{service.title}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Service Type</span>
                <strong>Cab Hire</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Experience</span>
                <strong>{service.description}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Service Code</span>
                <strong>{serviceCode}</strong>
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
                  ABOUT THE SERVICE
                </span>

                <h2>
                  {service.title}
                </h2>

                <p className={styles.overview}>
                  {service.description}
                </p>


                <div className={styles.highlights}>

                  <h3>
                    Why Choose This Service
                  </h3>

                  <div className={styles.highlightGrid}>

                    <div className={styles.highlight}>
                      <span>✓</span>
                      <p>Comfortable and reliable travel</p>
                    </div>

                    <div className={styles.highlight}>
                      <span>✓</span>
                      <p>Professional drivers</p>
                    </div>

                    <div className={styles.highlight}>
                      <span>✓</span>
                      <p>Clean and well-maintained vehicles</p>
                    </div>

                    <div className={styles.highlight}>
                      <span>✓</span>
                      <p>Flexible travel options</p>
                    </div>

                  </div>

                </div>

              </div>


              <div className={styles.sideImage}>

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

            </div>

          </div>
        </section>


        {/* BOOKING */}

        <section className={styles.itinerarySection}>
          <div className={styles.container}>

            <div className={styles.sectionHeading}>

              <span className={styles.label}>
                RESERVE YOUR CAB
              </span>

              <h2>
                Book {service.title}
              </h2>

            </div>


            <div className={styles.itineraryLayout}>

              <div className={styles.mainContent}>

                <h3>
                  Comfortable Travel Starts Here
                </h3>

                <p className={styles.overview}>
                  Tell us your travel requirements and
                  our team will help arrange the right
                  vehicle and service for your journey.
                </p>

                <div className={styles.highlightGrid}>

                  <div className={styles.highlight}>
                    <span>✓</span>
                    <p>Experienced drivers</p>
                  </div>

                  <div className={styles.highlight}>
                    <span>✓</span>
                    <p>Flexible booking options</p>
                  </div>

                  <div className={styles.highlight}>
                    <span>✓</span>
                    <p>Pickup and drop available</p>
                  </div>

                  <div className={styles.highlight}>
                    <span>✓</span>
                    <p>24×7 assistance</p>
                  </div>

                </div>

              </div>


              {/* ENQUIRY */}

              <aside
                className={styles.enquiryCard}
                id="enquire"
              >

                <h3>
                  Book Your Cab
                </h3>

                <p>
                  Fill in the form and our travel
                  expert will contact you shortly.
                </p>

                <input
                  value={serviceCode}
                  readOnly
                  aria-label="Service Code"
                />

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
                  aria-label="Vehicle Type"
                >
                  <option value="" disabled>
                    Select Vehicle Type
                  </option>

                  <option value="sedan">
                    Sedan
                  </option>

                  <option value="suv">
                    SUV
                  </option>

                  <option value="premium">
                    Premium
                  </option>
                </select>

                <textarea
                  placeholder="Pickup location / Additional Requirements"
                  rows={4}
                  aria-label="Additional Requirements"
                />

                <button
                  type="button"
                  className={styles.enquiryButton}
                >
                  SEND ENQUIRY
                </button>

                <div className={styles.tourCode}>
                  SERVICE CODE: {serviceCode}
                </div>

              </aside>

            </div>

          </div>
        </section>


        {/* CTA */}

        <section className={styles.cta}>

          <div className={styles.ctaContent}>

            <div>

              <span className={styles.sectionLabel}>
                TRAVEL WITH COMFORT
              </span>

              <h2>
                Ready to Book Your Cab?
              </h2>

              <p>
                Choose {service.title} for a comfortable
                and hassle-free journey.
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