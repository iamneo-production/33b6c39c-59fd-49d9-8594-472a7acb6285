import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Survey from './Survey';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Analysis from './Analysis';
import Share from './Share';
import User from './User';
import Responce from './Responce';
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/User" element={<User/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
           <Route path="/Home/AboutUs" element={<AboutUs/>}></Route>
           <Route path="/Home/Survey" element={<Survey/>}></Route>
           <Route path="/Home/Survey/Share" element={<Share/>}></Route>
           <Route path="/Responce" element={<Responce/>}></Route>
           <Route path="/Home/Contact" element={<Contact/>}></Route>
           <Route path="/Home/Analysis" element={<Analysis/>}></Route>
           <Route path="/Home/Share" element={<Share/>}></Route>
        </Routes>  
     </div>
  </Router>
  );
}

export default App;