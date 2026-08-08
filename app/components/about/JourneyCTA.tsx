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
            Whether you're looking for a spiritual pilgrimage,
            family vacation, honeymoon, corporate event or
            luxury holiday, we can create the perfect
            itinerary for you.
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