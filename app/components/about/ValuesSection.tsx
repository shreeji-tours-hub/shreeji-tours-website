import styles from "./ValuesSection.module.css";
import { valuesData } from "./ValuesData";
import {
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Lightbulb,
  Star,
  Handshake,
} from "lucide-react";

export default function ValuesSection() {
  const icons = [
    ShieldCheck,
    Heart,
    Lightbulb,
    Handshake,
    Star,
    Heart,
  ];

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.left}>

          <div className={styles.box}>

            <Target />

            <h3>
              {valuesData.mission.title}
            </h3>

            <p>
              {valuesData.mission.text}
            </p>

          </div>

          <div className={styles.box}>

            <Eye />

            <h3>
              {valuesData.vision.title}
            </h3>

            <p>
              {valuesData.vision.text}
            </p>

          </div>

        </div>

        <div className={styles.values}>

          <span>
            OUR CORE VALUES
          </span>

          <h2>
            What We Stand For
          </h2>

          <div className={styles.valueList}>

            {valuesData.values.map((value, index) => {

              const Icon = icons[index];

              return (
                <div
                  className={styles.value}
                  key={value.title}
                >

                  <Icon size={18} />

                  <p>
                    <strong>
                      {value.title}
                    </strong>{" "}
                    – {value.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}