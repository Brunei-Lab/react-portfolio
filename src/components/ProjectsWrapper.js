import React from 'react';
import styles from '../styles/Projects.module.scss';
import Project from './Project';

const ProjectsContainer = ({ projects }) => (
  <div className={styles.ProjectsContainer} id="Projects">
    <h1 className={styles.title}>Selected projects</h1>
    <div className={styles["projects-wrapper"]} >
      { projects.map(project => (
        < Project key={project.title} project={project}/>
      ))}
    </div>
  </div>
)

export default ProjectsContainer;