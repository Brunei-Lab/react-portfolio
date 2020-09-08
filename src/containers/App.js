import React from 'react';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import ProjectsContainer from './ProjectsContainer';
import Background from '../components/Background';
import Skills from './SkillsContainer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Elements from '../components/Elements';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

function App() {
  const contactLinks = [
    { link: "https://www.linkedin.com/in/brunagenz/", icon: FaLinkedin },
    { link: "https://github.com/bruna-genz", icon: FaGithubSquare },
    { link: "https://twitter.com/Bruna_GK", icon: FaTwitterSquare },                        
    { link: "mailto:brunagenz92@gmailcom?subject='portfolio contact'", icon: ImMail },
  ]

  return (
    <div className="App">
      < Navbar contactLinks={contactLinks} />
      < Presentation />
      < Elements />
      < Background background="Pink" position="760px" />
      < ProjectsContainer />
      < Background background="Geometric" position="3575px"/>
      < Skills />
      < Contact contactLinks={contactLinks} />
      < Footer />
    </div>
  );
}

export default App;
