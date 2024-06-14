import React from "react";
import * as styles from './Home.module.scss'

function Home() {
    return (
        <main>
            <section className={styles.heroSection}>
                    <div className={styles.heroContainer}>
                        <h1 className={styles.heroTitle}><strong>Hi, my name is <em>Andrei</em></strong> <br />
                                a frontend developer
                        </h1>
                        <div className={styles.heroText}>
                            <p>with passion for learning and creating.</p>
                        </div>
                        <a href="#!" className={styles.btn} >Download CV</a>
                    </div>
            </section>
            <section className={styles.aboutSection}>
                <div className="container">
                    <ul className={styles.aboutList}>
                        <li className={styles.contentListItem}>
                            <h2 className={styles.aboutListItemTitle}>Frontend</h2>
                            <p>
                                JavaScript, TypeScript, ReactJS, Angular, Redux,
                                HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
                                TailwindCSS, StyledComponents
                            </p>
                        </li>
                        <li className={styles.contentListItem}>
                            <h2 className={styles.aboutListItemTitle}>Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home