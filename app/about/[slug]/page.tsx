import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { offerData } from "@/app/components/about/OfferData";

import styles from "./OfferDetail.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;

  const offer = offerData.find(
    (item) => item.slug === slug
  );

  if (!offer) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* HERO */}

        <section className={styles.hero}>

          <img
            src={offer.image}
            alt={offer.title}
            className={styles.heroImage}
          />

          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>

            <span className={styles.label}>
              WHAT WE OFFER
            </span>

            <h1>
              {offer.title}
            </h1>

            <p>
              {offer.text}
            </p>

          </div>

        </section>


        {/* INFORMATION */}

        <section className={styles.infoSection}>

          <div className={styles.container}>

            <div className={styles.infoGrid}>

              <div className={styles.infoItem}>
                <span>Service</span>

                <strong>
                  {offer.title}
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span>Category</span>

                <strong>
                  Travel Services
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span>Experience</span>

                <strong>
                  Personalized Travel
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span>Service Code</span>

                <strong>
                  {offer.slug
                    .split("-")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* OVERVIEW */}

        <section className={styles.overviewSection}>

          <div className={styles.container}>

            <div className={styles.contentGrid}>

              <div className={styles.mainContent}>

                <span className={styles.sectionLabel}>
                  ABOUT THE SERVICE
                </span>

                <h2>
                  {offer.title}
                </h2>

                <p className={styles.overview}>
                  {offer.text}
                </p>

              </div>


              <div className={styles.sideImage}>

                <img
                  src={offer.image}
                  alt={offer.title}
                />

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
                Ready to Get Started?
              </h2>

              <p>
                Contact us and let us help you
                plan your perfect travel experience.
              </p>

            </div>

            <a
              href="/contact"
              className={styles.ctaButton}
            >
              CONTACT US →
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}