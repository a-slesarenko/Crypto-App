import React from "react";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { projects } from "../../helpers/projectsData";
import * as styles from "./Projects.module.scss";

function Projects() {
  return (
    <main>
      <section className={styles.projectsSection}>
        <div className="container">
          <h2 className={styles.projectsSectionTitle}>Projects</h2>
          <ul className={styles.projectsList}>
            {projects.map((item, index) => {
              return (
                <ProjectPreview
                  key={item.title}
                  navId={index}
                  img={item.img}
                  title={item.title}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Projects;
