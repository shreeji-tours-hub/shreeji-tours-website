import styles from "./OurStory.module.css";
import { ourStoryData } from "./OurStoryData";

export default function OurStory() {
  return (
    <section
      className={styles.section}
      id="story"
    >

      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.text}>

            <span className={styles.label}>
              {ourStoryData.label}
            </span>

            <h2>
              {ourStoryData.title}
            </h2>

            {ourStoryData.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

          </div>

          <div className={styles.imageWrapper}>

            <img
              src={ourStoryData.image}
              alt="Travelers exploring India"
            />

          </div>

        </div>

      </div>

    </section>
  );
}