import React from 'react';
import './index.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  return (
    <div>
      <main className='pageContainer'>
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
