import styles from "./TourDetail.module.css";

import type { TourDetail as TourDetailType } from "./TourDetailsData";

interface Props {
  tour: TourDetailType;
}

export default function TourDetail({ tour }: Props) {
  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <img
          src={tour.image}
          alt={tour.title}
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.label}>
            INDIA TOUR
          </span>

          <h1>{tour.title}</h1>

          <p>{tour.duration}</p>
        </div>
      </section>


      {/* INTRO */}

      <section className={styles.intro}>
        <div className={styles.container}>

          <div className={styles.introMain}>

            <span className={styles.sectionLabel}>
              ABOUT THE TOUR
            </span>

            <h2>
              Discover the beauty of India
            </h2>

            <p>
              {tour.description}
            </p>

          </div>

          <div className={styles.destinations}>

            <h3>
              Destinations
            </h3>

            {tour.destinations.map((destination) => (
              <span key={destination}>
                {destination}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* HIGHLIGHTS */}

      <section className={styles.highlights}>
        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            TOUR HIGHLIGHTS
          </span>

          <h2>
            What you'll experience
          </h2>

          <div className={styles.highlightGrid}>

            {tour.highlights.map((highlight, index) => (
              <div
                className={styles.highlight}
                key={highlight}
              >
                <span>
                  0{index + 1}
                </span>

                <p>
                  {highlight}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ITINERARY */}

      <section className={styles.itinerary}>
        <div className={styles.container}>

          <div className={styles.heading}>
            <span className={styles.sectionLabel}>
              YOUR JOURNEY
            </span>

            <h2>
              Tour Itinerary
            </h2>
          </div>

          <div className={styles.timeline}>

            {tour.itinerary.map((item) => (

              <div
                className={styles.day}
                key={item.day}
              >

                <div className={styles.dayNumber}>
                  {item.day}
                </div>

                <div className={styles.dayContent}>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* INCLUSIONS */}

      <section className={styles.info}>
        <div className={styles.container}>

          <div className={styles.infoColumn}>

            <span className={styles.sectionLabel}>
              INCLUDED
            </span>

            <h2>
              What's Included
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


          <div className={styles.infoColumn}>

            <span className={styles.sectionLabel}>
              NOT INCLUDED
            </span>

            <h2>
              What's Excluded
            </h2>

            <ul>
              {tour.exclusions.map((item) => (
                <li key={item}>
                  <span>×</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className={styles.cta}>

        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            READY TO EXPLORE?
          </span>

          <h2>
            Start your journey
          </h2>

          <p>
            Get in touch with us to plan your perfect
            India tour.
          </p>

          <button>
            Enquire Now →
          </button>

        </div>

      </section>

    </main>
  );
}