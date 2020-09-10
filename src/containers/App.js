import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import ProjectsContainer from '../components/ProjectsWrapper';
import Background from '../components/Background';
import Skills from './SkillsContainer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import Loader from '../components/Loader';

function App() {
  const contactLinks = [
    { link: "https://www.linkedin.com/in/brunagenz/", icon: FaLinkedin },
    { link: "https://github.com/bruna-genz", icon: FaGithubSquare },
    { link: "https://twitter.com/Bruna_GK", icon: FaTwitterSquare },                        
    { link: "mailto:brunagenz92@gmailcom?subject='portfolio contact'", icon: ImMail },
  ]

  const url = "https://gentle-atoll-70907.herokuapp.com/projects";
  const [projects, setProjects] = useState([]);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProjects(data);
      setLoader(false);
    }
    getData();
  }, []);

  return (
    loading 
      ? <Loader />
      : ( 
          <div className="App">
            <Navbar contactLinks={contactLinks} />
            <Presentation />
            <Background background="Pink" />
            <ProjectsContainer projects={projects} />
            <Background background="Geometric" />
            <Skills />
            <Contact contactLinks={contactLinks} />
            <Background background="Daisys" />
            <Footer />
          </div>
        )
  );
}

export default App;
