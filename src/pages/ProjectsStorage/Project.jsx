import React from "react"
import { useParams } from "react-router-dom"
import * as styles from "./Project.module.scss"
import GithubButton from "../../components/GithubButton/GithubButton"
import { projects } from "../../helpers/projectsData"

function Project() {
    const {id} = useParams();
    const project = projects[id];

    return(
        <main>
			<section className={styles.projectSection}>
                <div className="container">
                    <div className={styles.projectDetails}>
                        <h1 className={styles.projectTitle1}>{project.title}</h1>
                        <img
                            src={project.imgBig}
                            alt="Заголовок проекта"
                            className={styles.projectImage}
                        />
                        <div className={styles.projectDescription}>
                            <p>Skills: {project.skills}</p>
                        </div>
                        <GithubButton link={project.gitHubLink} />
                    </div>
                </div>
            </section>
		</main>
    )
}

export default Project