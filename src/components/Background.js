import React from 'react';
import styles from '../styles/Background.module.scss';
import Geometric from '../assets/images/elements/geometric-bg.png';
import Pink from '../assets/images/elements/pink-bg.png';
import Daisys from '../assets/images/elements/daisys-bg.png';

const Background = ({ background }) => {
  const bgOptions = {
    'Geometric': Geometric,
    'Pink': Pink,
    'Daisys': Daisys
  }

  const bgStyle = {
    backgroundImage: `url(${bgOptions[background]})`
  }

  return (
    <div className={`${styles["bg-container"]} ${styles[background]}`}>
      <div className={styles.bg} style={bgStyle}/>
    </div>
    )
  }

export default Background;
