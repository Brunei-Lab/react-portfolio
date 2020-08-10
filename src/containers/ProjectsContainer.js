import React, { useState, useEffect } from 'react';
import '../styles/Projects.scss';
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
    <div className="ProjectsContainer" id="Projects">
      <h1>Selected Projects</h1>
      <hr />
      { projects.map(project => (
        < Project key={project.title} project={project}/>
      ))}
    </div>
  )
}

export default ProjectsContainer;