import React from 'react';
import { useState } from 'react';
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import { login } from './userSlice';
import { useDispatch } from "react-redux";
import axios from 'axios'
import { Button, createTheme } from '@mui/material';
function Login() {
    const initValues={email:'',password:''}
    const [username,setUsername]=useState("");
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const navigate= useNavigate();
    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const dispatch=useDispatch();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        dispatch(
            login(
                {
                    name:username
                }
            )
        )
        try{
            const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
                "name":username,
                "password":formValues.password
            });
            navigate('/Home');
            let token=response.data.token;
            let user=response.data.id;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
        }catch(error){
            console.error('Error: ',error);
        }
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Username is Required";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Correct Email-Id is Required";
        
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Password must contain Special Characters, a-z, A-Z, Numbers";
        return errors;
    }


    return ( 
        <div className='top1'>
            <br></br>
            <br></br>
        <div className='topic1'>
            <h1>SURVEY</h1>
        </div>
        <br></br>
        <div className='topic3'>
            <h1>GENERATOR</h1>
        </div>
        <div className='box'>
        <form  onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <h1>Admin Login</h1>
            <div className='row'><br></br>
                <input type="text" id='username' className='input1' placeholder='Username' required value={formValues.username}
                    onChange={(event)=> setUsername(event.target.value)}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>
            <div className='row'><br></br>
                <input type="email" id='email' className='input1' required placeholder='email' value={formValues.email}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'><br></br>
                <input type="password" id='password' className='input1' required placeholder='Password' value={formValues.password}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>

            <div className='row'>
                <button className='btn-btn-primary'>Login</button>
            </div>
            <br></br>
            <h2>.......or.......</h2>
            <br></br>
            <div>
            <Link to="Signup">SIGNUP</Link>
            </div>
        </form>
        </div>
        </div>
     );
}

export default Login