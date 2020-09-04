import React from 'react';
import styles from '../styles/Background.module.scss';

const Background = ({ background }) => (
  <div className={styles["bg-container"]}>
    <div className={styles[background]} />
  </div>
)

export default Background;
