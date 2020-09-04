import React from 'react';
import styles from '../styles/Presentation.module.scss';

const Presentation = () => {
  const pText= [
    'Below you can see some of the projects I built and my technical skills.',
    'Also, you can check my resume here.' 
  ]

  return (
    <div className={styles.Presentation}>
      <h1 className={styles.title}>Hello, I'm <span>Bruna</span>.</h1>
      <h3 className={styles.subtitle}>I am a <span>full-stack developer</span> based in Halifax, Canada.</h3>
      {pText.map((text, i) => (
        <h5 key={i}>{text}</h5>
      ))}      
    </div>
  ) 
}

export default Presentation;