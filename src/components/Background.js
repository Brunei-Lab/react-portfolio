import React from 'react';
import styles from '../styles/Background.module.scss';
import Geometric from '../assets/images/elements/geometric-bg.png';
import Pink from '../assets/images/elements/pink-bg.png';
import Dotted from '../assets/images/dotted-bg.png';

const Background = ({ background, position }) => {
  const bgStyle = {
    backgroundImage: `url(${background === 'Pink' ? Pink : Geometric})`
  }

  return (
    <div className={styles["bg-container"]} style={{top: position}}>
      <div className={styles.bg} style={bgStyle}/>
    </div>
    )
  }

export default Background;
