import React from "react";
import axios from "axios"
import {useState , useEffect} from "react";
import { TfiFacebook,TfiTwitterAlt,TfiGoogle,TfiInstagram,TfiLinkedin } from "react-icons/tfi";
import './sincrire.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Sincrire() {
   const [users, setUsers] = useState([]);
    const navigate = useNavigate();
   
   // useEffect(() => {
     
   //   }, []);
 
   const handelSubmit = (e)=> {
     e.preventDefault();
     
     var {email , password}=document.forms[0]
     console.log(email.value)
     axios.get('http://127.0.0.1/orgtime/api/').then(function(response) {
               console.log(response.data);
               setUsers(response.data);
           });
 
     users.forEach((user)=>{
      if (email.value === user.email && password.value === user.password){
         console.log("successfully") 
          navigate('/user')
       }
     })
      
     
   }

   return(
      <div>
    {/* <Navbard/> */}
    
    <form className="form" onSubmit={handelSubmit}> <br/>
        <h1 className="h1"> Login </h1><br></br><br></br>
        <label>Email</label> <br></br><br></br>
        <input type="text" name="email"  className="input"/> <br></br> 
        <label>Password</label><br></br><br></br>
        <input type="password" name="password" className="input"/><br></br> <br></br>
        <button> Sing in</button><br></br> <br></br><br></br> <br></br>
        <div className="div">
         <Link to='/authentification'
         
         > Create an acount ? </Link> </div>
         <Link className="icons"><TfiFacebook/></Link> <span>{"  "}</span>
         <Link className="icons"><TfiTwitterAlt/></Link><span>{"  "}</span>
         <Link  className="icons"><TfiGoogle/></Link>
         
     </form>
     </div>
    
   ) 
}