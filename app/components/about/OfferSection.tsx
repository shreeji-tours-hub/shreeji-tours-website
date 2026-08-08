import styles from "./OfferSection.module.css";
import { offerData } from "./OfferData";

export default function OfferSection() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>

          <span>
            WHAT WE OFFER
          </span>

          <h2>
            Travel Experiences Designed Around You
          </h2>

        </div>

        <div className={styles.grid}>

          {offerData.map((item) => (

            <article
              className={styles.card}
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className={styles.content}>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}