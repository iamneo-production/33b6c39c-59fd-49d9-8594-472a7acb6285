import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './components/Footer'
import {FaBars, FaFilter} from 'react-icons/fa'
import './Home.css'
import { Link } from 'react-router-dom'
import survey from './logo.png';
import { useDispatch,useSelector } from "react-redux";
import { logout,selectUser } from "./userSlice";
function Home()  {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  
    return (
      <div>
        <div className='navbd'>
          <Navbar/>
        </div>
        <div className="whole-page">
          <div className="left-section">
            <div className='image1'><img src="https://www.omniconvert.com/wp-content/uploads/2019/10/new-hero-ab-testing-copy-med.png" width="110%" height="350px" alt=""></img> </div>

          </div>
       
          <div className="right-section">
            <div className='side'>
            <div className='my'>
              <div className='my2'><Link to={"Survey"}><button className='butt'>Create Survey</button></Link></div>
              <div className='my2'><Link to={"AboutUs"}><button className='butt'>About Us</button></Link></div>
              <div className='my2'><Link to={"Contact"}><button className='butt'>Contact</button></Link></div>
              <div className='my2'><Link to={"Analysis"}><button className='butt'>Analysis</button></Link></div>
              <div className='my2'><Link to={"Share"}><button className='butt'>Share</button></Link></div>
            </div>
            </div>
                      
          </div>
          </div>
          <div className='content1'>
              <h1 className='ho'>
                Hello {user.name}...!!
              </h1>
              <p className='hop'>
              Ask the right questions with interactive surveys that engage users and boost completion rates. 
              Once you’ve built a custom survey or questionnaire and collected your responses, 
              you can easily track and analyze your survey data with survey+’s real-time reporting and data analysis tools.
              </p>
        </div>
      </div>
    )
  }

export default Home