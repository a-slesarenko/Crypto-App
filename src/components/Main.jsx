import React from "react";
import * as styles from './Main.module.scss'
import projectImg1 from './assets/images/01.jpg'
import projectImg2 from './assets/images/02.jpg'
import projectImg3 from './assets/images/03.jpg'
import projectImg4 from './assets/images/04.jpg'
import projectImg5 from './assets/images/05.jpg'
import projectImg6 from './assets/images/06.jpg'

export default function Main() {
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
            <section className={styles.projectsSection}>
                <div className="container">
                    <h2 className={styles.projectsSectionTitle}>Projects</h2>
                    <ul className={styles.projectsList}>
                        <li className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg1} alt="project image" />
                                <h3>Gaming streaming portal</h3>
                            </a>
                        </li>
                        <li className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg2} alt="project image" />
                                <h3>Video service</h3>
                            </a>
                        </li>
                        <li  className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg3} alt="project image" />
                                <h3>Video portal</h3>
                            </a>
                        </li>
                        <li  className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg4} alt="project image" />
                                <h3>Dating app</h3>
                            </a>
                        </li>
                        <li  className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg5} alt="project image" />
                                <h3>Landing</h3>
                            </a>
                        </li>
                        <li  className={styles.projectCard}>
                            <a href="#!">
                                <img src={projectImg6} alt="project image" />
                                <h3>Gaming community</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}