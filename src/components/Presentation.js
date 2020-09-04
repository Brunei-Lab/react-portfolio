import React from 'react';
import styles from '../styles/Presentation.module.scss';
import Resume from '../assets/files/Bruna-resume.pdf';

const Presentation = () => (
  <div className={styles.Presentation}>
    <h1 className={styles.title}>Hello, I'm <span>Bruna</span>.</h1>
    <h3 className={styles.subtitle}>I am a <span>full-stack developer</span> based in Halifax, Canada.</h3>
    <h5>Below you can see some of the projects I built and my technical skills.</h5>
    <h5>Also, you can check my resume <a href={Resume} target="_blank" rel="noopener noreferrer">here</a>.</h5>     
  </div>
)

export default Presentation;