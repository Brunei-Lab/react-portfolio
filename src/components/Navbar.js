import React from 'react';
import Logo from '../images/logo2.png';
import '../styles/Navbar.scss';

const Navbar = () => {
  const links = ['Projects', 'Skills', 'Contact']

  return (
    <nav className="Navbar shadow"> 
      <a className="logo" href='logo' key='logo'>
        <img src={Logo} alt="Bruna's logo" />
      </a>
      {links.map((link, index) => (
        <a href={`#${link}`} key={index}>{link}</a>
      ))}
    </nav>
    
  )
}

export default Navbar;