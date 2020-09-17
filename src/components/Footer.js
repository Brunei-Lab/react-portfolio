import React from 'react';
import CanvaLogo from '../assets/images/canva-logo.png';
import styles from '../styles/Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <p>2020 Bruna Genz</p>
    <p>Images by 
      <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
        <img src={CanvaLogo} alt="Canva's logo"/>
      </a>
    </p>
  </div>
)

export default Footer;