import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      <Contact />
      
      {/* <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='about' element={  <AboutMe />}/>
        <Route path='resume' element={ <Resume />}/>
        <Route path='contact' element={ <Contact />}/>
      </Routes> */}
    </div>
  );
}

export default App;
