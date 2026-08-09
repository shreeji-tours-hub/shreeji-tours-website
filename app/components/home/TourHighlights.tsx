"use client";

import { useState } from "react";
import styles from "./TourHighlights.module.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    alt: "Gateway of India",
  },
  {
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    alt: "Indian Palace",
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    alt: "Taj Mahal",
  },
  {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    alt: "Indian Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80",
    alt: "Mountain Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=600&q=80",
    alt: "India Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=600&q=80",
    alt: "Camel Safari",
  },
  {
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",
    alt: "India Sightseeing",
  },
];

const testimonials = [
  {
    name: "David Lee",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "https://i.pravatar.cc/100?img=12",
    review:
      "Excellent service and well planned tour. Thank you Shreeji Tours!",
  },
  {
    name: "Sophie Martin",
    country: "France",
    flag: "🇫🇷",
    avatar: "https://i.pravatar.cc/100?img=47",
    review:
      "Our India trip was wonderful. Everything was perfectly organized.",
  },
  {
    name: "Luca Romano",
    country: "Italy",
    flag: "🇮🇹",
    avatar: "https://i.pravatar.cc/100?img=33",
    review:
      "Highly professional and supportive team. Best tour experience!",
  },
  {
    name: "Emma Wilson",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://i.pravatar.cc/100?img=45",
    review:
      "Amazing experience from start to finish. Highly recommended!",
  },
  {
    name: "Daniel Smith",
    country: "USA",
    flag: "🇺🇸",
    avatar: "https://i.pravatar.cc/100?img=11",
    review:
      "Everything was smooth and perfectly arranged. Great local team!",
  },
];

export default function TourHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
    Shows 3 testimonials at a time.
  */

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const previousTestimonials = () => {
    setCurrentIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const nextTestimonials = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* ==================================================
            GALLERY
        ================================================== */}

        <div className={styles.gallerySection}>

          {/* HEADER */}

          <div className={styles.sectionHeader}>

            <h2>
              Moments from Our Tours
            </h2>

            <button
              type="button"
              className={styles.viewGallery}
            >
              View Gallery
            </button>

          </div>


          {/* GALLERY */}

          <div className={styles.galleryGrid}>

            {galleryImages.map((image, index) => (

              <div
                className={styles.galleryItem}
                key={index}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />

              </div>

            ))}

          </div>

        </div>


        {/* ==================================================
            TESTIMONIALS
        ================================================== */}

        <div className={styles.testimonialSection}>

          {/* HEADER */}

          <div className={styles.testimonialHeader}>

            <span>
              HAPPY CLIENTS
            </span>

            <h2>
              What Our Guests Say
            </h2>

            <div className={styles.headerDot}></div>

          </div>


          {/* CAROUSEL */}

          <div className={styles.testimonialWrapper}>

            {/* LEFT ARROW */}

            <button
              type="button"
              className={styles.arrow}
              onClick={previousTestimonials}
              aria-label="Previous testimonials"
            >
              ‹
            </button>


            {/* TESTIMONIAL CARDS */}

            <div className={styles.testimonials}>

              {visibleTestimonials.map(
                (testimonial) => (

                  <article
                    className={styles.testimonialCard}
                    key={testimonial.name}
                  >

                    {/* CUSTOMER */}

                    <div className={styles.customer}>

                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />

                      <div className={styles.customerInfo}>

                        <h3>
                          {testimonial.name}
                        </h3>

                        <p>

                          <span
                            className={styles.flag}
                          >
                            {testimonial.flag}
                          </span>

                          {testimonial.country}

                        </p>

                      </div>

                    </div>


                    {/* STARS */}

                    <div className={styles.stars}>
                      ★★★★★
                    </div>


                    {/* REVIEW */}

                    <p className={styles.review}>
                      {testimonial.review}
                    </p>

                  </article>

                )
              )}

            </div>


            {/* RIGHT ARROW */}

            <button
              type="button"
              className={styles.arrow}
              onClick={nextTestimonials}
              aria-label="Next testimonials"
            >
              ›
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}