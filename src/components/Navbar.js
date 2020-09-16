import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/bruna-logo.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({ contactLinks }) => {
  const [prevScrollPos, setScrollPos] = useState(window.pageYOffset);
  const [visible, setVisibility] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisibility(currentScrollPos < prevScrollPos);

    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    }
  })

  return (
    <nav className={`${styles.Navbar} ${!visible && styles["Navbar-hidden"]}`}> 
      <a className={styles.logo} href='#root' key='logo'>
        <img src={Logo} alt="Bruna's logo" />
      </a>
      <div className={styles["navbar-links"]}>
        {contactLinks.map((link, index) => (
          <a href={link.link} key={index} target="_blank" rel="noopener noreferrer">< link.icon /></a>
        ))}
      </div>
    </nav>
  ) 
}

export default Navbar;