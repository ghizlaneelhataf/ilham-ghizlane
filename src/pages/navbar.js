import React from "react";
import './home.css';
// import * as AiIcons from 'react-icons/ai';
import { FiUserPlus } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from './imagelogo.png';
import { useRef } from "react";

import { Link } from 'react-router-dom';
import Navbard from "./navbard";
import Footer from "./footer";
export default function Navbarhome() {
	
    return(
		<>
		<Navbard/>
		<div className="wrapper">
	<main>
		<section className="sec">
			<h3>Welcome to our world</h3>
			<h1> Do wante change <span className="change_content"> </span> <span > </span> </h1>
			<Link  className="btnone btn"
					to="/about"
			       >
				learn more
			</Link>
			<Link   className="btntwo btn"
					to="/login"
			      >
				Sing in
			</Link>
		</section>
	</main>
	</div>
	<Footer/>
	</>
    )
    
}


// import React from "react";
// import './home.css';
// // import * as AiIcons from 'react-icons/ai';
// import { FiUserPlus } from "react-icons/fi";
// import logo from './imagelogo.png'

// import { Link } from 'react-router-dom';
// export default function Navbar() {
//     return(
//       <div className="wrapper">
	
// <nav>
    
// 	<div className="logo"><img className="image"  src={logo}  alt="logo" />  <span  className="h1"> </span><h1  className="h1">   ORGtime </h1> </div>
// 	<div className="menu">
// 		<Link className="a"  
// 		to='/' >Home</Link>
// 		<Link   className="a"
// 		to='/feedback'>Feedback</Link>
// 		<Link  className="a"
// 		to='/about'>About</Link>
// 		<Link  className="a"
// 		to='/authentification'> <span><FiUserPlus/></span></Link>
// 	</div>
// </nav>

// 	<main>
// 		<section>
// 			<h3>Welcome to our world</h3>
// 			<h1> Do wante change <span className="change_content"> </span> <span > </span> </h1>
// 			<Link  className="btnone btn"
// 					to="/about"
// 			       >
// 				learn more
// 			</Link>
// 			<Link   className="btntwo btn"
// 					to="/login"
// 			      >
// 				Log in
// 			</Link>
// 		</section>
// 	</main>

// </div>
//     )
    
// }