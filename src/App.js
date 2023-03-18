import React from 'react';
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Sincrire from './pages/sincrire';
import About from './pages/about';


import Fadback from './pages/fadback';
import Navbar from './pages/navbar';
import Navbard from './pages/navbard';
import Authentification from './pages/authentification';
import NavbarUser from './pages/navbarUser';
import Navbarhome from './pages/navbar';


function App() {
  return (
    
    <>
    <Router>
    <Routes>
      
          <Route path='/'  exact element={<Navbarhome/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/feedback' element={<Fadback/>} />
          <Route path='/login' element={<Sincrire/>} />
          <Route path='/authentification' element={<Authentification/>} />
          <Route path='/user' element={<NavbarUser/>} />
         
        </Routes>
    </Router>
    </>
    
  );
}

export default App;
