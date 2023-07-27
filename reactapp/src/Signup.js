import React from 'react'
    import { useState } from 'react';
    import './Signup.css';
    import axios from 'axios';
import { useNavigate } from 'react-router-dom';
    function Signup() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmpassword, setConfirmPassword] = useState('');
        const [mobile, setMobile] = useState('');
        // const [registrationError,setRegistrationError] = useState('');
        const navigate=useNavigate();
    
        const checkPassword = (e) =>{
          const mobileRegex=/^\d{10}$/;
          const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
          if(!mobileRegex.test(mobile)){
            window.alert(
              "Mobile number must contain 10 Numbers."
            );
            initialize3()
            return;
          }
          else if (!passwordRegex.test(password)) {
            window.alert(
              "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
            );
            initialize1()
            return;
          }
          else if (password !== confirmpassword) {
            window.alert("Passwords do not match.");
            initialize2()
            return;
          }
          else{
            window.alert("Registration Successful !!!");
          }
        }
        const initialize1 = () =>{
          setPassword('')
          setConfirmPassword('')
        }
        const initialize2 = () =>{
          setConfirmPassword('')
        }
        const initialize3 = () =>{
          setMobile('')
        }
      
        const handleNameChange = (event) => {
            setName(event.target.value);
          };
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
        };
        
        const handleConfirmPasswordChange = (event) => {
          setConfirmPassword(event.target.value);
        };
    
        const handleMobileChange = (event) => {
          setMobile(event.target.value);
        };
    
        const handleSubmit= async (e)=>{
          e.preventDefault();
          try {
            const response = await axios.post(
              "http://localhost:8081/api/v1/auth/register",
              {
                name,
                email,
                mobile,
                password,
                // confirmpassword,
              },
            );
      
            console.log("Sign in successful");
            console.log(response.data); 
            navigate("/");
      
            setName("");
            setEmail("");
            setMobile("");
            setPassword("");
            // setRegistrationError("");
          } catch (error) {
            console.error("Registration failed");
            console.error(error); 
      
          }
        }
        return ( 
            <div className='top'>
                <br></br>
                <br></br>
            <div className='topic'>
                <h1>SURVEY</h1>
            </div>
            <br></br>
            <div className='topic2'>
                <h1>GENERATOR</h1>
            </div>
            <div className='container'>
            <form onSubmit={handleSubmit}>
            <br></br>
                <br></br>
                <h1>REGISTER</h1>
                
                <div className='row3'><br></br>
                    <input type="text" id='name' required className='input2' placeholder='UserName' value={name}
                        onChange={handleNameChange}/>
                </div>

                <div className='row3'><br></br>
                    <input type="email" id='email' required className='input2' placeholder='Email-id...' value={email}
                        onChange={handleEmailChange}/>
                </div>
                <div className='row3'><br></br>
                    <input type="tel" id='mobile' required className='input2' placeholder='MobileNumber' value={mobile}
                        onChange={handleMobileChange}/>
                </div>

                <div className='row3'><br></br>
                    <input type="password" id='password' required className='input2' placeholder='Password' value={password}
                        onChange={handlePasswordChange}/>
                </div>
                <div className='row3'><br></br>
                    <input type="password" id='confirmpassword' required className='input2' placeholder='Confirm Password' value={confirmpassword}
                        onChange={handleConfirmPasswordChange}/>
                </div>

                <div className='row3'>
                    <button type="submit" onClick={checkPassword} className='btn-btn-primary1'>CREATE</button>
                </div>
            </form>
            </div>
            </div>
        );
    }

    export default Signup