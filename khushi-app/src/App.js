import React from 'react';
import './App.css';
import NavbarComp from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
    // <div className="app">
    //   <header className="header">
    //     <nav className="nav">
    //     <img src={mountain} alt="Mountain Icon" className="nav-icon" />
    //       <ul className="nav-list">
          // <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
          //     <a href="#home" onClick={() => handleClick('home')}>home</a>
          //   </li>
          //   <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
          //     <a href="#about" onClick={() => handleClick('about')}>about</a>
          //   </li>
          //   <li className={`nav-item ${activeItem === 'portfolio' ? 'active' : ''}`}>
          //     <a href="#portfolio" onClick={() => handleClick('portfolio')}>portfolio</a>
          //   </li>
          //   <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}>
          //     <a href="#contact" onClick={() => handleClick('contact')}>contact</a>
          //   </li>
    //       </ul>
    //     </nav>
    //   </header>
    // </div>
  );
}

export default App;
