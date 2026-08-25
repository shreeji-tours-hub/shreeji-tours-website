import styles from "./OurStory.module.css";
import { ourStoryData } from "./OurStoryData";

export default function OurStory() {
  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>

        <div className={styles.content}>

          {/* TEXT CONTENT */}
          <div className={styles.text}>

            {/* LABEL */}
            <span className={styles.label}>
              {ourStoryData.label}
            </span>

            {/* TITLE */}
            <h2>
              {ourStoryData.title}
            </h2>

            {/* PARAGRAPHS */}
            {ourStoryData.paragraphs.map((paragraph, index) => {
              const phrase = "Shreeji Tours n Travels";

              /*
                If the paragraph does not contain
                "Shreeji Tours n Travels", display it normally.
              */
              if (!paragraph.includes(phrase)) {
                return (
                  <p key={index}>
                    {paragraph}
                  </p>
                );
              }

              /*
                Split the paragraph around
                "Shreeji Tours n Travels"
              */
              const parts = paragraph.split(phrase);

              return (
                <p key={index}>
                  {parts.map((part, partIndex) => (
                    <span key={partIndex}>

                      {/* BOLD COMPANY NAME + TAGLINE */}
                      {partIndex > 0 && (
                        <strong>
                          {phrase} (Make Tour Easy)
                        </strong>
                      )}

                      {part}
                    </span>
                  ))}
                </p>
              );
            })}

          </div>

          {/* IMAGE */}
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