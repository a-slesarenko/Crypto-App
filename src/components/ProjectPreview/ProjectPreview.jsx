import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./ProjectPreview.module.scss";

function ProjectPreview({navId, title, img}) {
    return (
        <li className={styles.projectCard}>
            <NavLink to={`/project/${navId}`} >
                <img src={img} alt="project image" />
                <h3>{title}</h3>
            </NavLink>
        </li>
    )
}

export default ProjectPreview