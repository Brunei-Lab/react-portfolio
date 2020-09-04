import React from 'react';
import Logo from '../images/Bruna-logo.png';
import '../styles/Navbar.scss';

const Navbar = () => {
  const links = ['Projects', 'Skills', 'Contact']

  return (
    <nav className="Navbar gradient-border"> 
      <a className="logo" href='logo' key='logo'>
        <img src={Logo} alt="Bruna's logo" />
      </a>
      <div className="navbar-links">
        {links.map((link, index) => (
          <a href={`#${link}`} key={index}>{link}</a>
        ))}
      </div>
    </nav>
    
  )
}

export default Navbar;