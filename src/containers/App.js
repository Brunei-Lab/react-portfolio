import React, { useState, useEffect } from 'react';
import { StaticKitProvider } from '@statickit/react';
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
    { link: "https://www.linkedin.com/in/brunagenz/", icon: FaLinkedin, ref: "linkedin"},
    { link: "https://github.com/bruna-genz", icon: FaGithubSquare, ref: "github"},
    { link: "https://twitter.com/Bruna_GK", icon: FaTwitterSquare, ref: "twitter"},                        
    { link: "mailto:brunagenz92@gmailcom?subject='portfolio contact'", icon: ImMail, ref: "email"},
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

  useEffect(() => {
    const emoji = String.fromCodePoint(0x1F604);
    const message1 = `%cHello, there! I'm %cglad %cyou're here ${emoji}`;
    const message2 = `%cTo see more of my projects, please visit my GitHub: %chttps://github.com/bruna-genz.`
    const messageStyles1 = 'font-size: 15px'
    const messageStyles2 = ['font-size: 15px; color: pink; font-weight: bold'].join(";");
    const messageStyles3 = ['font-size: 15px; color: black'].join(";");
    const messageStyles4 = ['font-size: 15px; color: blue; text-decoration: underline'].join(";");

    console.log(message1, messageStyles1, messageStyles2, messageStyles3)
    console.log(message2, messageStyles1, messageStyles4)
  }, [])

  return (
    loading 
      ? <Loader />
      : ( 
          <StaticKitProvider site="7a1caaf5f8a1">
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
          </StaticKitProvider>
        )
  );
}

export default App;
