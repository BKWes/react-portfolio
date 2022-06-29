import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
