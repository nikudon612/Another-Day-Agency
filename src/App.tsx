import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Work />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
