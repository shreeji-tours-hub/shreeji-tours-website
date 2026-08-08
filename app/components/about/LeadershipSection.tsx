import styles from "./LeadershipSection.module.css";
import { leadershipData } from "./LeadershipData";

export default function LeadershipSection() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>
          <span>
            MEET OUR LEADERSHIP
          </span>

          <h2>
            The People Behind Your Journey
          </h2>
        </div>

        <div className={styles.grid}>

          {leadershipData.map((person) => (

            <div
              className={styles.card}
              key={person.name}
            >

              <img
                src={person.image}
                alt={person.name}
              />

              <div className={styles.info}>

                <h3>
                  {person.name}
                </h3>

                <strong>
                  {person.role}
                </strong>

                <p>
                  {person.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}