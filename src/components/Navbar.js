import React from 'react';
import Logo from '../assets/images/Bruna-logo.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const links = ['Projects', 'Skills', 'Contact']

  return (
    <nav className={styles.Navbar}> 
      <a className={styles.logo} href='logo' key='logo'>
        <img src={Logo} alt="Bruna's logo" />
      </a>
      <div className={styles["navbar-links"]}>
        {links.map((link, index) => (
          <a href={`#${link}`} key={index}>{link}</a>
        ))}
      </div>
    </nav>
    
  )
}

export default Navbar;