"use client";

import { useState, useEffect } from "react";
import styles from "./GalleryPage.module.css";

import {
  Users,
  Award,
  Headphones,
  Sparkles,
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Play,
  Video,
  Globe,
} from "lucide-react";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

type GalleryImage = {
  src: string;
  alt: string;
};

/* =========================================================
   GALLERY FILTERS
========================================================= */

const filters = [
  "Mumbai Tour",
  "India Tour",
  "India Group Tour",
  "Foreigners Group Tour",
];

/* =========================================================
   GALLERY DATA
========================================================= */

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


// const features = [
//   {
//     number: "1000+",
//     title: "Happy Travelers",
//     icon: Users,
//   },
//   {
//     number: "15+",
//     title: "Years of Experience",
//     icon: Award,
//   },
//   {
//     number: "24×7",
//     title: "Customer Support",
//     icon: Headphones,
//   },
//   {
//     number: "Customised",
//     title: "Tour Packages",
//     icon: Sparkles,
//   },
//   {
//     number: "Safe & Secure",
//     title: "Travel",
//     icon: ShieldCheck,
//   },
// ];

/* =========================================================
   YOUTUBE
========================================================= */

/*
  IMPORTANT:

  If YouTube does not automatically load the latest uploads
  from the channel, replace these two IDs with the actual
  YouTube video IDs.

  Example:
  https://www.youtube.com/watch?v=ABC123XYZ
  videoId = "ABC123XYZ"
*/

const youtubeVideos = [
  {
    videoId: "4lS5WG6Xho8",
    title: "Shreeji Tours n Travels",
  },
  {
    videoId: "BiBQfCnmin4",
    title: "Shreeji Tours n Travels",
  },
];

/* =========================================================
   CUSTOMER REVIEWS
========================================================= */

/*
  These are customer testimonials published on the company's
  own website. They are NOT labelled as Google reviews.

  The button below takes visitors to the provided Google
  review page.
*/

const reviews = [
  {
    name: "Mr. Bashir Ramzan",
    location: "Canada",
    text: "The services provided was per EXCELLENCE. I would not hesitate to recommend Shreeji Tours n Travels.",
  },
  {
    name: "Mr. Rivaz",
    location: "South Africa",
    text: "Mr Vikrant Khut provided remarkable top class service during my stay in Mumbai. His attention to providing excellent service was unrivalled.",
  },
  {
    name: "Mrs. Bernadine",
    location: "Australia",
    text: "Our family were treated to all sights in Mumbai and Vikrant was amazing. He built great rapport with my sons and explained every area with its history to us.",
  },
  {
    name: "Mr. Rakesh Udernani",
    location: "Dubai",
    text: "Our 5 days trip was fantastic. Vehicle was nice and driver was very polite and helpful. We look forward to working with Shreeji Tours n Travels again.",
  },
  {
    name: "Steven",
    location: "Mumbai",
    text: "One of the best tours and travels I have ever come across. What they promise is what they deliver and they always keep in touch with you during your tour.",
  },
];

/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socialLinks = {
  facebook: "https://www.facebook.com/shreejitnt/",
  instagram: "https://www.instagram.com/shreejitoursntravels",
  x: "https://x.com/ShreejiTnT",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState("Mumbai Tour");

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [reviewIndex, setReviewIndex] =
    useState(0);

  const images =
    galleryData[activeFilter] || [];

  /* =======================================================
     PAGINATION
  ======================================================= */

  const IMAGES_PER_PAGE = 6;

  const totalPages = Math.ceil(
    images.length / IMAGES_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * IMAGES_PER_PAGE;

  const visibleImages =
    images.slice(
      startIndex,
      startIndex + IMAGES_PER_PAGE
    );

  const changeFilter = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  /* =======================================================
     REVIEW SLIDER
  ======================================================= */

  const nextReview = () => {
    setReviewIndex(
      (current) =>
        (current + 1) % reviews.length
    );
  };

  const previousReview = () => {
    setReviewIndex(
      (current) =>
        (current - 1 + reviews.length) %
        reviews.length
    );
  };

  /* =======================================================
     X/TWITTER WIDGET
  ======================================================= */

  useEffect(() => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    if (
      document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      )
    ) {
      return;
    }

    const script =
      document.createElement("script");

    script.src =
      "https://platform.twitter.com/widgets.js";

    script.async = true;

    script.charset = "utf-8";

    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.page}>

      {/* =================================================
          HERO
      ================================================= */}

      <section className={styles.hero}>

        <div
          className={
            styles.heroBackground
          }
        />

        <div
          className={
            styles.heroOverlay
          }
        />

        <div
          className={
            styles.heroContainer
          }
        >

          <div
            className={
              styles.heroContent
            }
          >

            <div className={styles.breadcrumb}>
  Moments Of Our Tours
</div>

<h1>Our Gallery</h1>

<h2>
  Explore Our Beautiful Travel
  <br />
  Memories
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

      <section
        className={
          styles.gallerySection
        }
      >

        <div
          className={
            styles.galleryContainer
          }
        >

          <div
            className={
              styles.sectionHeading
            }
          >

            <span>
              OUR GALLERY
            </span>

            <h2>
              Explore Our Tour Gallery
            </h2>

            <div
              className={
                styles.headingDecoration
              }
            >
              <span />
              <b>✦</b>
              <span />
            </div>

          </div>


          {/* FILTERS */}

          <div
            className={
              styles.filters
            }
          >

            {filters.map(
              (filter) => (

                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter ===
                    filter
                      ? styles.filterActive
                      : styles.filterButton
                  }
                  onClick={() =>
                    changeFilter(
                      filter
                    )
                  }
                >
                  {filter}
                </button>

              )
            )}

          </div>


          {/* IMAGE GRID */}

          <div
            className={
              styles.galleryGrid
            }
          >

            {visibleImages.map(
              (image, index) => (

                <button
                  type="button"
                  className={
                    styles.galleryCard
                  }
                  key={`${activeFilter}-${startIndex + index}`}
                  onClick={() =>
                    setSelectedImage(
                      image.src
                    )
                  }
                  aria-label={`Open ${image.alt}`}
                >

                  <img
                    src={image.src}
                    alt={image.alt}
                  />

                  <div
                    className={
                      styles.imageOverlay
                    }
                  >
                    <span>
                      View Image
                    </span>
                  </div>

                </button>

              )
            )}

          </div>


          {/* PAGINATION */}

          {totalPages > 1 && (

            <div
              className={
                styles.pagination
              }
            >

              <button
                type="button"
                className={
                  styles.paginationArrow
                }
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage(
                    (page) =>
                      Math.max(
                        1,
                        page - 1
                      )
                  )
                }
                aria-label="Previous page"
              >
                <ChevronLeft
                  size={19}
                />
              </button>


              {Array.from(
                {
                  length: totalPages,
                },
                (_, index) => (
                  <button
                    type="button"
                    key={index + 1}
                    className={
                      currentPage ===
                      index + 1
                        ? styles.paginationActive
                        : styles.paginationButton
                    }
                    onClick={() =>
                      setCurrentPage(
                        index + 1
                      )
                    }
                  >
                    {index + 1}
                  </button>
                )
              )}


              <button
                type="button"
                className={
                  styles.paginationArrow
                }
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage(
                    (page) =>
                      Math.min(
                        totalPages,
                        page + 1
                      )
                  )
                }
                aria-label="Next page"
              >
                <ChevronRight
                  size={19}
                />
              </button>

            </div>

          )}

        </div>

      </section>



      {/* <section
        className={
          styles.featuresSection
        }
      >

        <div
          className={
            styles.featuresContainer
          }
        >

          {features.map(
            (feature) => {

              const Icon =
                feature.icon;

              return (

                <div
                  className={
                    styles.feature
                  }
                  key={
                    feature.title
                  }
                >

                  <div
                    className={
                      styles.featureIcon
                    }
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div
                    className={
                      styles.featureText
                    }
                  >

                    <strong>
                      {feature.number}
                    </strong>

                    <span>
                      {feature.title}
                    </span>

                  </div>

                </div>

              );

            }
          )}

        </div>

      </section> */}


      {/* =================================================
          VIDEO TESTIMONIALS
      ================================================= */}

      <section
        className={
          styles.videoSection
        }
      >

        <div
          className={
            styles.contentContainer
          }
        >

          <div
            className={
              styles.sectionHeading
            }
          >

            <span>
              VIDEO TESTIMONIALS
            </span>

            <h2>
              Watch Our Travel Stories
            </h2>

            <div
              className={
                styles.headingDecoration
              }
            >
              <span />
              <b>✦</b>
              <span />
            </div>

          </div>


          <div
            className={
              styles.videoGrid
            }
          >

            {youtubeVideos.map(
              (video, index) => (

                <div
                  className={
                    styles.videoCard
                  }
                  key={index}
                >

                  <div
                    className={
                      styles.videoWrapper
                    }
                  >

                    {video.videoId ? (

                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                        title={
                          video.title
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />

                    ) : (

                      <a
                        href="https://www.youtube.com/c/ShreejiToursnTravels"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          styles.videoPlaceholder
                        }
                      >

                        <div
                          className={
                            styles.youtubeCircle
                          }
                        >
                          <FaYoutube
                            size={34}
                          />
                        </div>

                        <strong>
                          Watch Shreeji Tours
                          n Travels on YouTube
                        </strong>

                        <span>
                          Open YouTube Channel
                        </span>

                      </a>

                    )}

                  </div>

                </div>

              )
            )}

          </div>


          <div
            className={
              styles.centerButton
            }
          >

            <a
              href="https://www.youtube.com/c/ShreejiToursnTravels"
              target="_blank"
              rel="noopener noreferrer"
              className={
                styles.primaryButton
              }
            >

              <FaYoutube
                size={18}
              />

              VIEW MORE VIDEOS

              <ExternalLink
                size={16}
              />

            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          REVIEWS
      ================================================= */}

      <section
        className={
          styles.reviewsSection
        }
      >

        <div
          className={
            styles.contentContainer
          }
        >

          <div
            className={
              styles.sectionHeading
            }
          >

            <span>
              CUSTOMER REVIEWS
            </span>

            <h2>
              What Our Travellers Say
            </h2>

            <div
              className={
                styles.headingDecoration
              }
            >
              <span />
              <b>✦</b>
              <span />
            </div>

          </div>


          <div
            className={
              styles.reviewSlider
            }
          >

            <button
              type="button"
              className={
                styles.reviewArrow
              }
              onClick={
                previousReview
              }
              aria-label="Previous review"
            >
              <ChevronLeft
                size={22}
              />
            </button>


            <div
              className={
                styles.reviewCard
              }
            >

              <div
                className={
                  styles.googleBadge
                }
              >
                <span>
                  ★
                </span>

                <strong>
                  Customer Review
                </strong>
              </div>


              <div
                className={
                  styles.stars
                }
              >

                {Array.from(
                  { length: 5 },
                  (_, index) => (
                    <Star
                      key={index}
                      size={19}
                      fill="currentColor"
                    />
                  )
                )}

              </div>


              <p>
                “
                {
                  reviews[
                    reviewIndex
                  ].text
                }
                ”
              </p>


              <div
                className={
                  styles.reviewer
                }
              >

                <strong>
                  {
                    reviews[
                      reviewIndex
                    ].name
                  }
                </strong>

                <span>
                  {
                    reviews[
                      reviewIndex
                    ].location
                  }
                </span>

              </div>

            </div>


            <button
              type="button"
              className={
                styles.reviewArrow
              }
              onClick={
                nextReview
              }
              aria-label="Next review"
            >
              <ChevronRight
                size={22}
              />
            </button>

          </div>


          <div
            className={
              styles.reviewDots
            }
          >

            {reviews.map(
              (_, index) => (

                <button
                  key={index}
                  type="button"
                  className={
                    reviewIndex ===
                    index
                      ? styles.reviewDotActive
                      : styles.reviewDot
                  }
                  onClick={() =>
                    setReviewIndex(
                      index
                    )
                  }
                  aria-label={`Show review ${index + 1}`}
                />

              )
            )}

          </div>


          <div
            className={
              styles.reviewFooter
            }
          >

            <p>
              Read more reviews and
              share your experience
              with us.
            </p>

            <div className={styles.reviewButtons}>

  {/* GOOGLE REVIEWS */}
  <a
    href="https://share.google/9jMNip1zmziG87z0T"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.googleButton}
  >
    <span>
      G
    </span>

    VIEW GOOGLE REVIEWS

    <ExternalLink size={16} />
  </a>


  {/* TRIPADVISOR REVIEWS */}
  <a
    href="https://www.tripadvisor.in/Attraction_Review-g304554-d15697131-Reviews-Shreeji_Tours_n_Travels-Mumbai_Maharashtra.html"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.tripadvisorButton}
  >
    <span className={styles.tripadvisorIcon}>
      TA
    </span>

    VIEW TRIPADVISOR REVIEWS

    <ExternalLink size={16} />
  </a>

</div>

          </div>

        </div>

      </section>


      {/* =================================================
          SOCIAL MEDIA
      ================================================= */}

      <section
        className={
          styles.socialSection
        }
      >

        <div
          className={
            styles.contentContainer
          }
        >

          <div
            className={
              styles.sectionHeading
            }
          >

            <span>
              FOLLOW OUR JOURNEY
            </span>

            <h2>
              Connect With Us
            </h2>

            <div
              className={
                styles.headingDecoration
              }
            >
              <span />
              <b>✦</b>
              <span />
            </div>

            <p
              className={
                styles.socialIntro
              }
            >
              Follow Shreeji Tours n Travels
              for travel inspiration,
              updates and recent moments
              from our journeys.
            </p>

          </div>


          <div
            className={
              styles.socialGrid
            }
          >

            {/* FACEBOOK */}

            <div
              className={
                styles.socialCard
              }
            >

              <div
                className={
                  styles.socialHeader
                }
              >

                <div
                  className={
                    `${styles.socialIcon} ${styles.facebookIcon}`
                  }
                >
                  <FaFacebookF
                    size={28}
                  />
                </div>

                <div>

                  <span>
                    FACEBOOK
                  </span>

                  <h3>
                    Shreeji Tours n Travels
                  </h3>

                </div>

              </div>


              <div
                className={
                  styles.socialPreview
                }
              >

                <div
                  className={
                    styles.previewIcon
                  }
                >
                  <FaFacebookF
                    size={42}
                  />
                </div>

                <strong>
                  Follow us on Facebook
                </strong>

                <p>
                  See travel updates,
                  customer moments and
                  company news.
                </p>

              </div>


              <a
                href={
                  socialLinks.facebook
                }
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.socialButton
                }
              >
                VIEW FACEBOOK
                <ExternalLink
                  size={16}
                />
              </a>

            </div>


            {/* INSTAGRAM */}

            <div
              className={
                styles.socialCard
              }
            >

              <div
                className={
                  styles.socialHeader
                }
              >

                <div
                  className={
                    `${styles.socialIcon} ${styles.instagramIcon}`
                  }
                >
                  <FaInstagram
                    size={28}
                  />
                </div>

                <div>

                  <span>
                    INSTAGRAM
                  </span>

                  <h3>
                    @shreejitoursntravels
                  </h3>

                </div>

              </div>


              <div
                className={
                  styles.socialPreview
                }
              >

                <div
                  className={
                    styles.previewIcon
                  }
                >
                  <FaInstagram
                    size={42}
                  />
                </div>

                <strong>
                  Follow Our Travel Moments
                </strong>

                <p>
                  Explore our latest
                  destinations, tours and
                  travel photographs.
                </p>

              </div>


              <a
                href={
                  socialLinks.instagram
                }
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.socialButton
                }
              >
                VIEW INSTAGRAM
                <ExternalLink
                  size={16}
                />
              </a>

            </div>


            {/* X */}

            <div
              className={
                styles.socialCard
              }
            >

              <div
                className={
                  styles.socialHeader
                }
              >

                <div
                  className={
                    `${styles.socialIcon} ${styles.xIcon}`
                  }
                >
                  <span>
                    𝕏
                  </span>
                </div>

                <div>

                  <span>
                    X / TWITTER
                  </span>

                  <h3>
                    @ShreejiTnT
                  </h3>

                </div>

              </div>


              <div
                className={
                  styles.socialPreview
                }
              >

                <div
                  className={
                    styles.previewIcon
                  }
                >
                  <span>
                    𝕏
                  </span>
                </div>

                <strong>
                  Follow Our Updates
                </strong>

                <p>
                  Stay connected with our
                  latest travel news and
                  updates.
                </p>

              </div>


              <a
                href={
                  socialLinks.x
                }
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.socialButton
                }
              >
                VIEW X PROFILE
                <ExternalLink
                  size={16}
                />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

      {/* <section
        className={
          styles.featuresSection
        }
      >

        <div
          className={
            styles.featuresContainer
          }
        >

          {features.map(
            (feature) => {

              const Icon =
                feature.icon;

              return (

                <div
                  className={
                    styles.feature
                  }
                  key={
                    feature.title
                  }
                >

                  <div
                    className={
                      styles.featureIcon
                    }
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div
                    className={
                      styles.featureText
                    }
                  >

                    <strong>
                      {feature.number}
                    </strong>

                    <span>
                      {feature.title}
                    </span>

                  </div>

                </div>

              );

            }
          )}

        </div>

      </section> */}


      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {selectedImage && (

        <div
          className={
            styles.lightbox
          }
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            type="button"
            className={
              styles.closeButton
            }
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close image"
          >
            <X size={26} />
          </button>


          <img
            src={selectedImage}
            alt="Gallery preview"
            className={
              styles.lightboxImage
            }
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}

    </div>
  );
}