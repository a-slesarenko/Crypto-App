import React from "react";
import * as styles from './Main.module.scss'

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
                        <a href="#" className={styles.btn} >Download CV</a>
                    </div>
                </section>
        </main>
    )
}