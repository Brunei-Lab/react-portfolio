import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import ProjectsContainer from '../containers/ProjectsContainer';
import Background from '../components/Background';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Presentation />
      < Background background="watercolor-bg"/>
      < ProjectsContainer />
    </div>
  );
}

export default App;
