import styles from "./JourneyCTA.module.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function JourneyCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.content}>

          <span>
            LET'S PLAN YOUR NEXT JOURNEY
          </span>

          <h2>
            Your Dream Trip Starts Here
          </h2>

         <p>
  <strong className={styles.companyName}>
    Shreeji Tours & Travels Mumbai – Make Tour Easy
  </strong>{" "}
  was founded with a simple vision — to help travelers discover the true
  beauty, culture, spirituality, and diversity of India.
</p>

          <a
            href="#contact"
            className={styles.button}
          >
            Contact Us
          </a>

        </div>


        <div className={styles.contactCard}>

          <div>
            <Phone />
            <span>
              +91 9969422936
              <br />
              +91 9324622153
            </span>
          </div>

          <div>
            <Mail />
            <span>
              contact@shreejitourstravels.in
              <br />
              shreejitourstravels.in@gmail.com
            </span>
          </div>

          <div>
            <MapPin />
            <span>
              Andheri East, Mumbai,
              Maharashtra, India
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}