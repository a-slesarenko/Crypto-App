import React from "react";
import * as styles from "./Home.module.scss";

function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            <strong>
              Hi, my name is <em>Andrei</em>
            </strong>{" "}
            <br />a frontend developer
          </h1>
          <div className={styles.heroText}>
            <p>with passion for learning and creating.</p>
          </div>
          <a
            href="https://hh.ru/resume/4b1f35c3ff0d541e440039ed1f4c6a466f7752"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            View resume
          </a>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className="container">
          <ul className={styles.aboutList}>
            <li className={styles.contentListItem}>
              <h2 className={styles.aboutListItemTitle}>Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, React Router, Redux, HTML, CSS,
                SCSS/SASS, NPM/Yarn, MaterialUI, clsx
              </p>
            </li>
            <li className={styles.contentListItem}>
              <h2 className={styles.aboutListItemTitle}>Project assembly</h2>
              <p>Webpack</p>
            </li>
            <li className={styles.contentListItem}>
              <h2 className={styles.aboutListItemTitle}>
                Version control system & Repository
              </h2>
              <p>Git & GitHub</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
