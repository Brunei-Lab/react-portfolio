import React from 'react';
import styles from '../styles/Background.module.scss';
import Geometric from '../assets/images/elements/geometric-bg.png';
import Pink from '../assets/images/elements/pink-bg.png';
import Daisys from '../assets/images/elements/daisys-bg.png';

const Background = ({ background, position }) => {
  const bgOptions = {
    'Geometric': Geometric,
    'Pink': Pink,
    'Daisys': Daisys
  }

  const containerStyle = {
    top: position
  }

  const bgStyle = {
    backgroundImage: `url(${bgOptions[background]})`
  }

  if (background === 'Daisys') {
    bgStyle["borderRadius"] = "50% 50% 0 0 / 50%"
    containerStyle.height = 299;
  }

  return (
    <div className={styles["bg-container"]} style={containerStyle}>
      <div className={styles.bg} style={bgStyle}/>
    </div>
    )
  }

export default Background;
