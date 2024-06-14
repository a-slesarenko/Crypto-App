import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from './Projects.module.scss'
import projectImg1 from '../components/assets/images/01.jpg'
import projectImg2 from '../components/assets/images/02.jpg'
import projectImg3 from '../components/assets/images/03.jpg'
import projectImg4 from '../components/assets/images/04.jpg'
import projectImg5 from '../components/assets/images/05.jpg'
import projectImg6 from '../components/assets/images/06.jpg'

export default function Projects() {
    return(
        <main>
        <section className={styles.projectsSection}>
            <div className="container">
                <h2 className={styles.projectsSectionTitle}>Projects</h2>
                <ul className={styles.projectsList}>
                    <li className={styles.projectCard} key={1}>
                        <NavLink to="/project/0" >
                            <img src={projectImg1} alt="project image" />
                            <h3>Gaming streaming portal</h3>
                        </NavLink>
                    </li>
                    <li className={styles.projectCard}>
                        <NavLink to="/project/1">
                            <img src={projectImg2} alt="project image" />
                            <h3>Video service</h3>
                        </NavLink>
                    </li>
                    <li  className={styles.projectCard}>
                        <NavLink to="/project/2">
                            <img src={projectImg3} alt="project image" />
                            <h3>Video portal</h3>
                        </NavLink>
                    </li>
                    <li  className={styles.projectCard}>
                        <NavLink to="/project/3">
                            <img src={projectImg4} alt="project image" />
                            <h3>Dating app</h3>
                        </NavLink>
                    </li>
                    <li  className={styles.projectCard}>
                        <NavLink to="/project/4">
                            <img src={projectImg5} alt="project image" />
                            <h3>Landing</h3>
                        </NavLink>
                    </li>
                    <li  className={styles.projectCard}>
                        <NavLink to="/project/5">
                            <img src={projectImg6} alt="project image" />
                            <h3>Gaming community</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    )
}