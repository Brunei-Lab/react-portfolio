import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/bruna-logo.png';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({ contactLinks }) => {
  const [prevScrollPos, setScrollPos] = useState(window.pageYOffset);
  const [visible, setVisibility] = useState(true);

  console.log(visible)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisibility(currentScrollPos < prevScrollPos);

    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <nav className={`${styles.Navbar} ${!visible && styles["Navbar-hidden"]}`}> 
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
}

export default Navbar;