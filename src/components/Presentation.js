import React from 'react';

const Presentation = () => {
  const heading = 'Hello, I am Bruna.'
  const pText= [
    'I am a full-stack developer based in Halifax, Canada.',
    'Below you can see some of the projects I built and my technical skills.',
    'Also, you can check my resume here.' 
  ]

  return (
    <div className="Presentation">
      <h1>{heading}</h1>
      {pText.map(text => (
        <p>{text}</p>
      ))}
    </div>
  ) 
}

export default Presentation;