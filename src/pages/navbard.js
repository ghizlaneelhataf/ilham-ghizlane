import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import "./navbard.css";

const Navbard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
       {/* <img className="image"  src={logo}  alt="logo" /> */}
      <span className="nav-logo">ORGTime</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link  className="a"
        to="/">Home</Link>
        <Link className="a"
        to="/about">About</Link>
        <Link className="a"
        to="/feedback">Feedback</Link>
        <Link className="a"
        to="/authentification"><span><FiUserPlus/></span></Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbard;





// import React from "react";
// import { Link } from 'react-router-dom';
// import './navbard.css';
// // import * as AiIcons from 'react-icons/ai';
// import { FiUserPlus } from "react-icons/fi";
// import logo from './imagelogo.png'
// export default function Navbard() {
//     return(
//         <Navbar/>
        // <nav>
        //     <div className="logo"><img className="image"  src={logo}  alt="logo" /> <span  className="h1"></span><h1  className="h1">   ORGtime </h1> </div>
        //     <div className="menu">
        //         <Link   className="a"
        //                 to='/' >Homei</Link>
        //         <Link   className="a"
        //                 to='/feedback'>Feedback</Link>
        //         <Link  className="a"
        //                 to='/about'>About</Link>
        //         <Link  className="a"
        //                 to='/authentification'> <span><FiUserPlus/></span></Link>
        //     </div>
        // </nav>
        
        
//     )
// }