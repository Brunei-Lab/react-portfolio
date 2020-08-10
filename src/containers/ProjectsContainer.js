import React from 'react';
import '../styles/Projects.scss';
import Project from '../components/Project';

const ProjectsContainer = () => {
  return (
    <div className="ProjectsContainer" id="Projects">
      <h1>Selected Projects</h1>
      <hr />
      < Project />
    </div>
  )
}

export default ProjectsContainer;