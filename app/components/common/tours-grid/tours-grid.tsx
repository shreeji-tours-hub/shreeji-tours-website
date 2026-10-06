import Link from "next/link";
import { MapPin, CalendarDays } from "lucide-react";
import styles from "./tours-grid.module.css";

type Props = {
  tours: any[];
};

export default function ToursGrid({ tours = [] }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================
            HEADING
        ========================= */}

        <div className={styles.heading}>
          <span>POPULAR PACKAGES</span>

          <h2>Most Popular Tours for Foreigners</h2>

          <div className={styles.decoration}>
            <i />
            <b>◆</b>
            <i />
          </div>
        </div>

        {/* =========================
            TOUR CARDS GRID
        ========================= */}
        {tours.length > 0 ? (
          <div className={styles.grid}>
            {tours.map((tour) => (
              <Link
                key={tour.slug?.current}
                href={`/tours/${tour.slug?.current}`}
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.imageWrap}>
                    <img src={tour.coverImage} alt={tour.title} />

                    <span className={styles.duration}>{tour.duration}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3>{tour.title}</h3>

                    <p className={styles.route}>{tour.location}</p>

                    <div className={styles.info}>
                      <span>
                        <CalendarDays size={15} />
                        {tour.duration}
                      </span>

                      {tour?.tags?.length > 0 && (
                        <span>
                          <MapPin size={15} />
                          {tour.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>◆</div>
            <h3>No tours available</h3>
            <p>
              We couldn't find any tour packages at the moment. Please check
              back soon for new packages.
            </p>
            <Link href="/tours" className={styles.noResultsButton}>
              Explore All Tours
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
