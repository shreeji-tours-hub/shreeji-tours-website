"use client";

import { useState } from "react";
import styles from "./GalleryPage.module.css";
import { galleryCTAData } from "./GalleryPageData";

import {
  Users,
  Award,
  Headphones,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

const filters = [
  "Mumbai Tour",
  "India Tour",
  "India Group Tour",
  "Foreigners Group Tour",
];

const galleryData: Record<string, GalleryImage[]> = {
  "Mumbai Tour": [
    {
      src: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=90",
      alt: "Gateway of India Mumbai",
    },
    {
      src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=90",
      alt: "Mumbai city",
    },
    {
      src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=90",
      alt: "Mumbai heritage",
    },
    {
      src: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=90",
      alt: "Mumbai skyline",
    },
    {
      src: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1200&q=90",
      alt: "Mumbai monument",
    },

    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=90",
      alt: "Mumbai architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90",
      alt: "India heritage",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian culture",
    },
    {
      src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1200&q=90",
      alt: "India travel",
    },
  ],

  "India Tour": [
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90",
      alt: "Taj Mahal",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian heritage",
    },
    {
      src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1200&q=90",
      alt: "India temple",
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian palace",
    },
    {
      src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=90",
      alt: "India landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian destination",
    },
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian monument",
    },
    {
      src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian palace",
    },
    {
      src: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian travel destination",
    },
  ],

  "India Group Tour": [
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90",
      alt: "India group tour",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=90",
      alt: "India group travel",
    },
    {
      src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1200&q=90",
      alt: "Indian cultural tour",
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=90",
      alt: "India group experience",
    },
    {
      src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=90",
      alt: "India group journey",
    },
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=90",
      alt: "India sightseeing group",
    },
  ],

  "Foreigners Group Tour": [
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90",
      alt: "Foreigners visiting India",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=90",
      alt: "Foreign travelers in India",
    },
    {
      src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1200&q=90",
      alt: "India cultural experience",
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=90",
      alt: "India heritage experience",
    },
    {
      src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=90",
      alt: "India travel experience",
    },
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=90",
      alt: "India sightseeing",
    },
  ],
};

const features = [
  {
    number: "1000+",
    title: "Happy Travelers",
    icon: Users,
  },
  {
    number: "15+",
    title: "Years of Experience",
    icon: Award,
  },
  {
    number: "24×7",
    title: "Customer Support",
    icon: Headphones,
  },
  {
    number: "Customised",
    title: "Tour Packages",
    icon: Sparkles,
  },
  {
    number: "Safe & Secure",
    title: "Travel",
    icon: ShieldCheck,
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Mumbai Tour");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = galleryData[activeFilter];

  return (
    <div className={styles.page}>

      {/* =================================================
          HERO
      ================================================= */}

      <section className={styles.hero}>

        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContainer}>

          <div className={styles.heroContent}>

            <div className={styles.breadcrumb}>
              Moments Of Our Tours
            </div>

            <h1>Our Gallery</h1>

            <h2>
              Explore Our Beautiful Travel Memories
            </h2>

            <p>
              Explore beautiful moments captured during our
              incredible journeys across India.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          GALLERY
      ================================================= */}

      <section className={styles.gallerySection}>

        <div className={styles.galleryContainer}>

          <div className={styles.sectionHeading}>

            <span>OUR GALLERY</span>

            <h2>
              Explore Our Tour Gallery
            </h2>

            <div className={styles.headingDecoration}>
              <span />
              <b>✦</b>
              <span />
            </div>

          </div>


          {/* FILTERS */}

          <div className={styles.filters}>

            {filters.map((filter) => (

              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? styles.filterActive
                    : styles.filterButton
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>

            ))}

          </div>


          {/* IMAGE GRID */}

          <div className={styles.galleryGrid}>

            {images.map((image, index) => (

              <button
                type="button"
                className={styles.galleryCard}
                key={`${activeFilter}-${index}`}
                onClick={() => setSelectedImage(image.src)}
                aria-label={`Open ${image.alt}`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />

                <div className={styles.imageOverlay}>
                  <span>View Image</span>
                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          FEATURES
      ================================================= */}

      <section className={styles.featuresSection}>

        <div className={styles.featuresContainer}>

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                className={styles.feature}
                key={feature.title}
              >

                <div className={styles.featureIcon}>
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                <div className={styles.featureText}>

                  <strong>
                    {feature.number}
                  </strong>

                  <span>
                    {feature.title}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* =================================================
          RED CTA
      ================================================= */}
{/* 
      <section className={styles.ctaSection}>

        <div className={styles.ctaCard}>

          <div className={styles.ctaImages}>

            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=90"
              alt="Taj Mahal"
            />

            <img
              src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=90"
              alt="Indian palace"
            />

            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=90"
              alt="Indian heritage"
            />

          </div>


          <div className={styles.ctaContent}>

            <h2>
              Create Your Beautiful Memories
            </h2>

            <p>
              Let us plan your perfect journey and be a
              part of your unforgettable travel memories.
            </p>

            <a href="/contact-us">
              Plan Your Tour →
            </a>

          </div>

        </div>

      </section> */}


      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {selectedImage && (

        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <img
            src={selectedImage}
            alt="Gallery preview"
            className={styles.lightboxImage}
            onClick={(event) => event.stopPropagation()}
          />

        </div>

      )}

    </div>
  );
}