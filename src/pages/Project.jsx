import React from "react"
import projectImage from "../components/assets/images/01-big.jpg"
import * as styles from "./Project.module.scss"
import GithubButton from "../components/GithubButton/GithubButton"

export default function Project() {
    return(
        <main>
			<section className={styles.projectSection}>
                <div className="container">
                    <div className={styles.projectDetails}>
                        <h1 className={styles.projectTitle1}>Gaming streaming portal</h1>
                        <img
                            src={projectImage}
                            alt="Заголовок проекта"
                            className={styles.projectImage}
                        />
                        <div className={styles.projectDescription}>
                            <p>Skills: React, Node.js, MongoDB</p>
                        </div>
                        <GithubButton link="https://github.com" />
                    </div>
                </div>
            </section>
		</main>
    )
}