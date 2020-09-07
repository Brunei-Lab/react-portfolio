import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import ProjectsContainer from '../containers/ProjectsContainer';
import Background from './Background';
import Skills from '../containers/SkillsContainer';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Presentation />
      < Background background="Geometric" position="760px" />
      < ProjectsContainer />
      < Background background="Dotted" position="3500px"/>
      < Skills />
      < Contact />
    </div>
  );
}

export default App;
