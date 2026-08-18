import styles from "./WhyChooseUs.module.css";
import {
  whyChooseUsData,
  achievementsData,
} from "./WhyChooseUsData";
import { CheckCircle, Award } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.choose}>

          <span>
            WHY CHOOSE US
          </span>

          <h2>
            Your Journey, Our Responsibility
          </h2>

          <div className={styles.list}>

            {whyChooseUsData.map((item) => (

              <div
                className={styles.item}
                key={item}
              >

                <CheckCircle size={18} />

                <p>
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>


        <div className={styles.achievement}>

          <span>
            OUR ACHIEVEMENTS
          </span>

          

          <div className={styles.stats}>

            {achievementsData.map((item) => (

              <div
                className={styles.stat}
                key={item.label}
              >

                <Award size={21} />

                <div>
                  <strong>
                    {item.number}
                  </strong>

                  <small>
                    {item.label}
                  </small>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}