import React from 'react';
import styles from '../styles/Presentation.module.scss';
import Elements from '../components/Elements';

const Presentation = () => (
  <div className={styles.Presentation}>
    <div className={styles.text}>
      <h1 className={styles.title}>Hello, I'm <span>Bruna</span>.</h1>
      <h3 className={styles.subtitle}>I'm a veterinarian turned <span>full-stack developer</span> based in Halifax, Canada.</h3>
      <h3 className={styles.subtitle}>I love podcasts, books, and elegant UX/UI. Also, I'm a graphic design enthusiast.</h3>
      <h3 className={styles.subtitle}>Open to <span className={styles.black}>freelance</span> and <span className={styles.black}>remote work</span>.</h3>
      <a className={styles.button} href='#Projects'>See my projects</a>
    </div>
    <div className={styles["elements-container"]}>
      <Elements />
    </div>
  </div>
)

export default Presentation;