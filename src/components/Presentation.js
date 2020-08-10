import React from 'react';
import '../styles/Presentation.scss';

const Presentation = () => {
  const heading = 'Hello, I am Bruna.'
  const pText= [
    'I am a full-stack developer based in Halifax, Canada.',
    'Below you can see some of the projects I built and my technical skills.',
    'Also, you can check my resume here.' 
  ]

  return (
    <div className="Presentation">
      <h1 className="title">{heading}</h1>
      {pText.map(text => (
        <h5>{text}</h5>
      ))}
    </div>
  ) 
}

export default Presentation;