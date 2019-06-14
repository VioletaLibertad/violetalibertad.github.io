import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProjectsSkills from './components/ProjectsSkills';
import Contact from './components/Contact';

const App = () => {
  return(
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectsSkills} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
};

export default App;