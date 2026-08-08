"use client";

import styles from "./ForeignToursSection.module.css";

const foreignTours = [
  {
    title: <>Mumbai<br />Sightseeing Tours</>,
    description: "Explore the vibrant city of Mumbai",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: <>Elephanta Caves<br />Tours</>,
    description: "UNESCO World Heritage Site Experience",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: <>Food & Culture<br />Tours</>,
    description: "Taste India's rich culture & food",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: <>Bollywood<br />Experience</>,
    description: "Step into the world of Indian cinema",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: <>Golden Triangle<br />Tours</>,
    description: "Delhi – Agra – Jaipur Experience",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: <>Customize Your<br />Own Tour</>,
    description: "We create tours as per your interest",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ForeignToursSection() {
  return (
    <section
      className={styles.section}
      id="foreigners"
    >

      <div className={styles.container}>

        <div className={styles.heading}>

          <span className={styles.headingLabel}>
            TOURS FOR FOREIGNERS
          </span>

          <h2 className={styles.headingTitle}>
            Specially Designed for International Travelers
          </h2>

          <div className={styles.decoration}>
            <i></i>
            <b>○</b>
            <i></i>
          </div>

        </div>


        <div className={styles.grid}>

          {foreignTours.map((tour, index) => (

            <div
              className={styles.card}
              key={index}
            >

              <img
                className={styles.image}
                src={tour.image}
                alt="India tour"
              />

              <div className={styles.cardContent}>

                <h3 className={styles.cardTitle}>
                  {tour.title}
                </h3>

                <p className={styles.cardDescription}>
                  {tour.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}