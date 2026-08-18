import styles from "./OurStory.module.css";
import { ourStoryData } from "./OurStoryData";

export default function OurStory() {
  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.text}>

            <span className={styles.label}>
              {ourStoryData.label}
            </span>

            <h2>
              {ourStoryData.title}
            </h2>

            {ourStoryData.paragraphs.map((paragraph, index) => {
              const phrase = "Shreeji Tours n Travels";

              if (!paragraph.includes(phrase)) {
                return (
                  <p key={index}>
                    {paragraph}
                  </p>
                );
              }

              const parts = paragraph.split(phrase);

              return (
                <p key={index}>
                  {parts.map((part, partIndex) => (
                    <span key={partIndex}>
                      {partIndex > 0 && (
                        <>
                          <span>{phrase}</span>{" "}
                          <strong>(make tour easy)</strong>
                        </>
                      )}

                      {part}
                    </span>
                  ))}
                </p>
              );
            })}

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