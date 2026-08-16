"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TourHighlights.module.css";

const tours = [
  {
    slug: "mumbai-sightseeing",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    title: "Mumbai Sightseeing Tours",
    description: "Explore the vibrant city of Mumbai",
  },
  {
    slug: "elephanta-caves",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    title: "Elephanta Caves Tours",
    description: "UNESCO World Heritage Site Experience",
  },
  {
    slug: "food-culture",
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    title: "Food & Culture Tours",
    description: "Taste India's rich culture & food",
  },
  {
    slug: "bollywood-experience",
    src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80",
    title: "Bollywood Experience",
    description: "Step into the world of Indian cinema",
  },
  {
    slug: "golden-triangle",
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    title: "Golden Triangle Tours",
    description: "Delhi – Agra – Jaipur Experience",
  },
  {
    slug: "custom-tour",
    src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=900&q=80",
    title: "Customize Your Own Tour",
    description: "We create tours as per your interest",
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

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const previousTestimonials = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonials = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ================================
            TOURS
        ================================= */}

        <div className={styles.gallerySection}>

          <div className={styles.sectionHeader}>
            <div>
            

              <h2>
                GALLERY
              </h2>
            </div>

            
          </div>

          <div className={styles.galleryGrid}>

            {tours.map((tour) => (
              <Link
                href={`/tours/${tour.slug}`}
                className={styles.galleryItem}
                key={tour.slug}
              >

                <div className={styles.imageWrapper}>
                  <img
                    src={tour.src}
                    alt={tour.title}
                  />
                </div>

                <div className={styles.tourInfo}>
                  <h3>{tour.title}</h3>

                  <p>{tour.description}</p>

                  <span className={styles.learnMore}>
                    View Tour →
                  </span>
                </div>

              </Link>
            ))}

          </div>
        </div>

        {/* ================================
            TESTIMONIALS
        ================================= */}

        <div className={styles.testimonialSection}>

          <div className={styles.testimonialHeader}>

            <span>HAPPY CLIENTS</span>

            <h2>What Our Guests Say</h2>

            <div className={styles.headerDot}></div>

          </div>

          <div className={styles.testimonialWrapper}>

            <button
              type="button"
              className={styles.arrow}
              onClick={previousTestimonials}
              aria-label="Previous testimonials"
            >
              ‹
            </button>

            <div className={styles.testimonials}>

              {visibleTestimonials.map((testimonial) => (
                <article
                  className={styles.testimonialCard}
                  key={testimonial.name}
                >

                  <div className={styles.customer}>

                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />

                    <div className={styles.customerInfo}>

                      <h3>{testimonial.name}</h3>

                      <p>
                        <span className={styles.flag}>
                          {testimonial.flag}
                        </span>

                        {testimonial.country}
                      </p>

                    </div>

                  </div>

                  <div className={styles.stars}>
                    ★★★★★
                  </div>

                  <p className={styles.review}>
                    {testimonial.review}
                  </p>

                </article>
              ))}

            </div>

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