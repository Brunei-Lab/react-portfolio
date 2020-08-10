import React from 'react';

const Project = ({project}) => {
  console.log(project)
  return (
    <div className="card">
      <div className="card-image">
        image here
      </div>
      <div className="card-description">
        project info here
      </div>
    </div>
  )
}

export default Project;