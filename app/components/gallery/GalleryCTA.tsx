"use client";

import styles from "./GalleryCTA.module.css";

import {
  Award,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import {
  galleryCTAData,
} from "./GalleryPageData";


/* =================================================
   FEATURES
================================================= */

const features = [
  {
    number: "1000+",
    title: "Happy Travelers",
    icon: Users,
  },
  {
    number: "15+",
    title: "Years of Experience",
    icon: Award,
  },
  {
    number: "Customised",
    title: "Tour Packages",
    icon: Sparkles,
  },
  {
    number: "Safe & Secure",
    title: "Travel",
    icon: ShieldCheck,
  },
  {
    number: "24×7",
    title: "Customer Support",
    icon: Headphones,
  },
];


export default function GalleryCTA() {
  return (

    <>

      {/* =================================================
          GALLERY CTA
      ================================================= */}

      <section className={styles.section}>

        <div className={styles.container}>

          <div className={styles.content}>

            <h2>
              {galleryCTAData.title}
            </h2>

            <p>
              {galleryCTAData.description}
            </p>

            <a
              href={galleryCTAData.href}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              {galleryCTAData.button}

              <span>
                →
              </span>

            </a>

          </div>


          <div className={styles.images}>

            {galleryCTAData.images.map((image) => (

              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          FEATURES
      ================================================= */}

      <section className={styles.featuresSection}>

        <div className={styles.featuresContainer}>

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                className={styles.feature}
                key={feature.title}
              >

                <div className={styles.featureIcon}>

                  <Icon
                    size={30}
                    strokeWidth={1.7}
                  />

                </div>


                <div className={styles.featureText}>

                  <strong>
                    {feature.number}
                  </strong>

                  <span>
                    {feature.title}
                  </span>

                </div>

              </div>

            );

          })}

        </div>

      </section>

    </>

  );
}