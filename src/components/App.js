import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import ProjectsContainer from '../containers/ProjectsContainer';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Presentation />
      < ProjectsContainer />
    </div>
  );
}

export default App;
