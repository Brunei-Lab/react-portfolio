import React from 'react';
import styles from '../styles/Loader.module.scss';
import Daisy from '../assets/images/elements/daisy.png';

const Loader = () => (
  <div className={styles.Loader}>
    <div className={styles.spinner}>
      <img className={styles["daisy-one"]} src={Daisy} alt="A watercolor paiting of a Daisy" />
      <img className={styles["daisy-two"]} src={Daisy} alt="A watercolor paiting of a Daisy" />
    </div>
  </div>
)

export default Loader;
