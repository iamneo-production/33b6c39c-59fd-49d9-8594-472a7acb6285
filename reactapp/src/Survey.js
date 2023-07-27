import React,{Component} from 'react';
import './Survey.css'
import { Checkbox } from '@mui/material';
import { FaStar } from "react-icons/fa";
import {Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Home, Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import survey from './logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Survey extends Component{


    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            phoneno:'',
            qone:'',
            qtwo:'',
            qthree:'',
            qfour:'',
            qfive:'',
            qsix:'',
            qseven:'',
            qeight:'',
            qnine:'',
            qten:'',
            qeleven:'',
        };
    }

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    };
    handlePhonenoChange=(event)=>{
        this.setState({phoneno:event.target.value})
    };
    handleQoneChange=(event)=>{
        this.setState({qone:event.target.value})
    };
    handleQtwoChange=(event)=>{
        this.setState({qtwo:event.target.value})
    };
    handleQthreeChange=(event)=>{
        this.setState({qthree:event.target.value})
    };
    handleQfourChange=(event)=>{
        this.setState({qfour:event.target.value})
    };
    handleQfiveChange=(event)=>{
        this.setState({qfive:event.target.value})
    };
    handleQsixChange=(event)=>{
        this.setState({qsix:event.target.value})
    };
    handleQsevenChange=(event)=>{
        this.setState({qseven:event.target.value})
    };
    handleQeightChange=(event)=>{
        this.setState({qeight:event.target.value})
    };
    handleQnineChange=(event)=>{
        this.setState({qnine:event.target.value})
    };
    handleQtenChange=(event)=>{
        this.setState({qten:event.target.value})
    };
    handleQelevenChange=(event)=>{
        this.setState({qeleven:event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phoneno: this.state.phoneno,
            qone: this.state.qone,
            qtwo: this.state.qtwo,
            qthree: this.state.qthree   ,
            qfour: this.state.qfour   ,
            qfive: this.state.qfive   ,
            qsix: this.state.qsix   ,
            qseven: this.state.qseven   ,
            qeight: this.state.qeight   ,
            qnine: this.state.qnine   ,
            qten: this.state.qten   ,
            qeleven: this.state.qeleven   ,
        };
        console.log(data);
         axios.post('http://localhost:8082/api/v1/user/post', data)
    }
    
    render(){
        return(
    
            <body>
                
                <nav className='a5'>
            <img src={survey} height="60" width="90" alt=""></img>
                <ul id="navbar">
                    <li><a className="active" href="/Home/Survey">Survey</a></li>
                     <Box sx={{ flexGrow: 0 }}>
                     <li>
            
                      <Avatar onClick={"/Signin"}sx={{ width: 42, height: 42  }}></Avatar>
                      </li></Box>
                </ul>
                
                </nav>

            <div className='container5'>
            <div className='contain'>
            <form  onSubmit={this.handleSubmit}>
                <h1>Hotel Survey</h1>
                <h4>Refine Experiences, with better way</h4>
                <div className='row1'>
                    <label>1. Name                : </label>
                    <input type="text" id='name' placeholder='  Enter your Name...' value={this.state.name}
                        onChange={this.handleNameChange} required/>
                </div>
                <div className='row1'>
                    <label>2. Email : </label>
                    <input type="email" id='email' placeholder='  Enter your Email...' value={this.state.email}
                        onChange={this.handleEmailChange} required/>
                </div>
                <div className='row1'>
                    <label>3. Phone Number : </label>
                    <input type="tel" id='tel' placeholder='  Enter your Phone No...' value={this.state.phoneno}
                        onChange={this.handlePhonenoChange} required/>
                </div>

                <div className='row1'>
                    <label>4. Restaurant Name : </label><br></br><br></br>
                    <center>
                    <select value={this.setState.qone} onChange={this.handleQoneChange} required>
                        <option value="" disabled selected>Select</option> 
                        <option value={"Saravana Bhavan"} >Saravana Bhavan</option> 
                        <option value={"Sree Annapoorna"} >Sree Annapoorna</option> 
                        <option value={"Cockaraco"} >Cockaraco</option> 
                        <option value={"A2B"} >A2B</option> 
                        <option value={"Shree Aanandhas"}>Shree Aanandhas</option> 
                    </select>
                    </center>
                    {/* <input type="tel" id='tel' placeholder='  Enter your Phone No...' value={this.state.phoneno}
                        onChange={this.handlePhonenoChange}/> */}
                </div>
    
                <div className='row1'>
                    <label>5. In a typical month, how often do you visit this Restaurant :</label><br></br>
                    <input type="radio" name="uni" className="check" id="q1"  value={this.setState.qtwo="First time"} onChange={this.handleQtwoChange} required/>
                    <label for="q1">First time</label><br></br>
                    <input type="radio"  name="uni"  className="check" id="q2"  value={this.setState.qtwo="Twice or Thrice"} onChange={this.handleQtwoChange} required/>
                    <label for="q2">Twice or Thrice</label><br/>
                    <input type="radio"  name="uni"  className="check" id="q3"  value={this.setState.qtwo="More than 3 times"} onChange={this.handleQtwoChange} required/>
                    <label for="q3">More than 3 times</label><br/>
                </div>
    
                <div className='row1'>
                <label>6. How promptly were you greeted on arrival? </label><br></br>
                <div className="container10">
            {[...Array(5)].map((item, index) => {
              const givenRating = index + 1;
              return (
                <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQthreeChange}
                            onClick={() => {
                              this.setState.qthree=givenRating;
                              
                            }}
                            
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qthree || givenRating-1 === this.state.qthree 
                                    ? "#e8175d"
                                    : "rgb(192,192,192)"
                                  }
                                  />
                        </div>
                    </label>
                );
              })}
        </div>
                </div>

                <div className='row1'>
                    <label>7. How long did you have to wait before you were seated?</label><br></br><br></br>
                    <center>
                    <select value={this.setState.qfour} onChange={this.handleQfourChange} required>
                        <option value="" disabled selected>Select</option> 
                        <option value={"It was quick & prompt"} >It was quick & prompt</option> 
                        <option value={"The wait was long"} >The wait was long</option> 
                        <option value={"There is scope for improvement"} >There is scope for improvement</option> 
                    </select>
                    </center>
                </div>


                <div className='row1'>
                <label>8. How would you rate the attentiveness of the staff and the service extended? </label><br></br>
                <div className="container10" >
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label >
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQfiveChange}
                            onClick={() => {
                              this.setState.qfive=givenRating;
                                
                            }}
                            
                            />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qfive || givenRating-1 === this.state.qfive 
                                    ? "#e8175d"
                                        : "rgb(192,192,192)"
                                }
                                />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row1'>
                    <label>9. What did you think of the food menu?</label><br></br>
                    <input type="radio" name="un" className="check" id="q1"  value={this.setState.qsix="Satisfactory"} onChange={this.handleQsixChange} required/>
                    <label for="q1">Satisfactory</label><br></br>
                    <input type="radio"  name="un"  className="check" id="q2"  value={this.setState.qsix="Good"} onChange={this.handleQsixChange} required/>
                    <label for="q2">Good</label><br/>
                    <input type="radio"  name="un"  className="check" id="q3"  value={this.setState.qsix="Excellent"} onChange={this.handleQsixChange} required/>
                    <label for="q3">Excellent </label><br/>
                </div>

                <div className='row1'>
                <label>10. How happy are you with the quality & taste of the food? </label><br></br>
                <div className="container10">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQsevenChange}
                            onClick={() => {
                              this.setState.qseven=givenRating;
                              
                            }}
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                  givenRating-1 < this.state.qseven || givenRating-1 === this.state.qseven 
                                        ? "#e8175d"
                                        : "rgb(192,192,192)"
                                      }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
                </div>

                <div className='row1'>
                    <label>11. Any particular dish that made your heart sing? </label><br></br>
                    <input type="text" id='name' placeholder='  Enter the Dish name...' value={this.state.qeight}
                        onChange={this.handleQeightChange} required/>
                </div>

                <div className='row1'>
                    <label>12. How would you rate the overall cleanliness & hygiene?</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Worst"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Worst</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Bad"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Bad</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Satisfactory"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Satisfactory</label><br></br>
                    <input type="radio" name="unii" className="check" id="q1"  value={this.setState.qnine="Good"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Good</label><br></br>
                    <input type="radio" name="uni" className="check" id="q1"  value={this.setState.qnine="Excellent"} onChange={this.handleQnineChange} required/>
                    <label for="q1">Excellent</label><br></br>
                </div>

                <div className='row1'>
                <label>13. How happy are you with the quality & taste of the food? </label><br></br>
                <div className="container10">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <input className='Radio'
                            type="radio"
                            value={givenRating}
                            onChange={this.handleQtenChange}
                            onClick={() => {
                              this.setState.qten=givenRating;
                              
                            }}
                        />
                        <div className='Rating'>
                            <FaStar size={30}
                                color={
                                    givenRating-1 < this.state.qten || givenRating-1 === this.state.qten 
                                        ? "#e8175d"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
              })}
        </div>
                </div>

                <div className='row1'>
                    <label>14. Any Constructive/ Destructive Comments on our Restaurant? (Optional) </label><br></br>
                    <input type="text" id='name' maxLength="30" placeholder=' Comments less than 30 words' value={this.state.qeleven}
                        onChange={this.handleQelevenChange}/>
                </div>
    
                {/* <div className='row1'>
                   <center><Link to={"Share"}> <button className='btnr'>Submit</button></Link></center>
                </div> */}
            </form>
            <div className='row8'><Link to={"Share"}><button className='btnr'>GENERATE LINK</button></Link></div>
            </div>
            </div>
            </body>
         );
    }
}

export default Survey