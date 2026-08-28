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
    name: "Mr. Bashir Ramzan",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "https://i.pravatar.cc/100?img=12",
    review:
      "The services provided was per EXCELLENCE. I would not hesitate to recommend Shreeji Tours n Travels.",
  },
  {
    name: "Mr. Rivaz",
    country: "South Africa",
    flag: "🇿🇦",
    avatar: "https://i.pravatar.cc/100?img=47",
    review:
      "Mr Vikrant Khut provided remarkable top class service during my stay in Mumbai. His attention to providing excellent service was unrivalled.",
  },
  {
    name: "Mrs. Bernadine",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "https://i.pravatar.cc/100?img=33",
    review:
      "Our family were treated to all sights in Mumbai and Vikrant was amazing. He built great rapport with my sons and explained every area with its history to us.",
  },
  {
    name: "Mr. Rakesh Udernani",
    country: "Dubai",
    flag: "🇦🇪",
    avatar: "https://i.pravatar.cc/100?img=45",
    review:
      "Our 5 days trip was fantastic. Vehicle was nice and driver was very polite and helpful. We look forward to working with Shreeji Tours n Travels again.",
  },
  {
    name: "Steven",
    country: "Mumbai",
    flag: "🇮🇳",
    avatar: "https://i.pravatar.cc/100?img=11",
    review:
      "One of the best tours and travels I have ever come across. What they promise is what they deliver and they always keep in touch with you during your tour.",
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
                Moments of our Tours
              </h2>
            </div>

             <Link
    href="/gallery"
    className={styles.viewGallery}
  >
    View More →
  </Link>
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