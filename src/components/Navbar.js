import React from 'react';
import Logo from '../assets/images/Bruna-logo.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({ contactLinks }) => (
  <nav className={styles.Navbar}> 
    <a className={styles.logo} href='logo' key='logo'>
      <img src={Logo} alt="Bruna's logo" />
    </a>
    <div className={styles["navbar-links"]}>
      {contactLinks.map((link, index) => (
        <a href={link.link} key={index}>< link.icon /></a>
      ))}
    </div>
  </nav> 
)

export default Navbar;