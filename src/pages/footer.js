import React from "react"
import './footer.css'
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TfiFacebook,TfiTwitterAlt,TfiGoogle,TfiInstagram,TfiLinkedin } from "react-icons/tfi";


export default function Footer(){
  return(
<div>
    <section className="footer">
        <div className="main-footer">
                <div className="logoinfo" >

                        <div className="contact-details">
                            <h5>Contact Us</h5>
                            <li>
                                <div className="fa fa-phone"></div><a href="tel:+910000000000">0000000000</a>
                            </li>
                            <li><div className="fa fa-envelope"></div><a href="mailto:arorahemant75@gmail.com">orgTime@gmail.com</a></li>
                            
                        </div>
                </div>

                <div className="com" >
                    <h5>ORGTime</h5>
                    <ul>
                    
                  <li> 
                    <Link  className="a"
                        to="/">Home</Link>
                  </li>
                  <li> 
                    <Link className="a"
                        to="/about">About</Link>
                  </li>
                  <li> 
                    <Link className="a"
                        to="/feedback">Feedback</Link>
                  </li>
                  <li> 
                    <Link className="a"
                        to="/authentification"><span><FiUserPlus/></span></Link>
                  </li>
                </ul>   
                </div>

            <div className="info" >
                <h5>Social Media</h5>
                <div className="sociallogos">
                    <div className="logobox">
                    <Link className="icons"><TfiFacebook/></Link> <span>{"  "}</span>
                    <Link className="icons"><TfiTwitterAlt/></Link><span>{"  "}</span>
                    <Link  className="icons"><TfiGoogle/></Link>
                    </div>
                </div>
            </div>

        </div>
        <footer> Your Copyright 2023 All Rights Reserved</footer>
        
    </section>
    </div>
    )
  }