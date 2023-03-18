import React from "react";
import { useState ,useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Radio from './Radio';
import './authentification.css'


export default function Authentification() {
    
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [errorpass , setErrorpass] = useState("") ;
    const genderList = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ];
    const [radioButton, setradioButton] = useState({
    gender: null
    });  
    const onValidate = (value, name) => {
        setError((prev) => ({
          ...prev,
          [name]: { ...prev[name], errorMsg: value },
        }));
      };
    
      const [error, setError] = useState({
        gender: {
          isReq: true,
          errorMsg: '',
          onValidateFunc: onValidate,
        }
        
      });
    
      const onHandleChange = useCallback((value, name) => {
        setradioButton((prev) => ({
          ...prev,
          [name]: value,
        }));
        setUser(values => ({...values, [name]: value}))
      }, []);
    
      const validateradioButton = () => {
        let isInvalid = false;
        Object.keys(error).forEach((x) => {
          const errObj = error[x];
          if (errObj.errorMsg) {
            isInvalid = true;
          } else if (errObj.isReq && !radioButton[x]) {
            isInvalid = true;
            onValidate(true, x);
          }
        });
        return !isInvalid;
      };
        

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}));
        console.log(user)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user.password);
        if (user.password === user.confirmation){
            const isValid = validateradioButton();
            if (!isValid) {
            console.error('Invalid radioButton!');
            return false;
            }
            console.log(radioButton.gender);
            axios.post('http://127.0.0.1/orgtime/api/', user).then(function(response){
            console.log("la")
            console.log(user.gender)
            console.log(response.data);
            navigate('/user');
        })
        }else{
            setErrorpass("Verify your password")
        }  
        
    }

    return(
        <>
        <h1 className="h11">Sing Up</h1>
        <form className="formein" onSubmit={handleSubmit}>
        Username: <input type="text" name="userName" className="infosUser" onChange={handleChange} required/> <br/><br/>
        Age  :<br className="br"/> <input type="number" name="age" className="infosUser" onChange={handleChange} required/><br/><br/>
        Email: <br className="br"/><input type="email" placeholder="user@gmail.com" name="email" className="infosUser" required onChange={handleChange}/><br/><br/>
        
        <Radio
          name="gender"
          title="Gender"
          value={radioButton.gender}
          options={genderList}
          onChangeFunc={onHandleChange}
          {...error.gender}
          className="radio"
        />
         <br/><br/>
        Password: <input type="password"  name="password" className="infosUser" onChange={handleChange} required/><br/>{errorpass}<br/>
        Confirmation: <input type="password" name="confirmation" className="infosUser" required onChange={handleChange}/><br/><br/>
        Your Objectif <textarea cols="50" rows="5" name="objectif" className="infosUser" required onChange={handleChange}/><br/><br/>
        <input type="submit" value="Sing Up" className="button1"/>
        
        </form>       
        </>
    )
}