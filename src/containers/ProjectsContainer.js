import React, { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.scss';
import Project from '../components/Project';

const ProjectsContainer = () => {
  const url = "https://gentle-atoll-70907.herokuapp.com/projects"
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  return (
    <div className={styles.ProjectsContainer} id="Projects">
      <h1 className={styles.title}>Selected projects</h1>
      <div className={styles["projects-wrapper"]} >
        { projects.map(project => (
          < Project key={project.title} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default ProjectsContainer;