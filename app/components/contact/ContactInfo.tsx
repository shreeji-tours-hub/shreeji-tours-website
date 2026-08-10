"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import styles from "./ContactInfo.module.css";

import { contactInfoData } from "./ContactInfoData";

const icons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  time: Clock3,
};

export default function ContactInfo() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.heading}>

          <span>
            GET IN TOUCH
          </span>

          <h2>
            We'd Love to Hear From You!
          </h2>

          <p>
            Whether you're planning a family vacation,
            a spiritual journey, a corporate trip,
            or need cab services in Mumbai —
            we're just a message away.
          </p>

        </div>


        <div className={styles.grid}>

          {contactInfoData.map((item) => {

            const Icon =
              icons[item.type as keyof typeof icons];

            return (
              <div
                className={styles.card}
                key={item.title}
              >

                <div className={styles.icon}>
                  <Icon size={24} />
                </div>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  {item.lines.map((line) => (
                    <p key={line}>
                      {line}
                    </p>
                  ))}

                  {item.note && (
                    <small>
                      {item.note}
                    </small>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}