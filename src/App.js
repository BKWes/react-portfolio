import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [categories] = useState([
    { name: "About", description: "Introduction" },
    { name: "Projects", description: "My top apps from Github" },
    { name: "Contact", description: "Different methods of communicating with me" }
  ])
  const [currentCategory, setCurrentCategory] = useState("About");

  return (
    <div className='App'>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          />
        {currentCategory === 'About' && <About />}
        {currentCategory === 'Projects' && <Projects />}
        {currentCategory === 'Contact' && <Contact />}
        <Footer />
    </div>
  );
}

export default App;
