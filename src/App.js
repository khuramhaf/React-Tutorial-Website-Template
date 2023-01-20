import logo from './logo.svg';
import './App.css';
import React, {Suspense, useState, useEffect} from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './Components/Home';
import Blog from './Components/Blog';
import Tutorials from './Components/Tutorials';
import Writewithus from './Writewithus';
import Reportproblem from './Components/Reportproblem';
import { Audio, Circles, ColorRing } from 'react-loader-spinner'
const  Reacttutorial = React.lazy(()=> import ('./Components/Reacttutorial') );


function App() {
return(

  <div>
    <div className="mainnav">
    <NavLink style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink1" to="/">Home</NavLink>
    <NavLink style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink1" to="/blogs">Blogs</NavLink>
    <NavLink style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink1" to="/programming-tutorials">Tutorials</NavLink>
     <NavLink style={({ isActive }) => ({
    color: isActive ? 'red' : 'green'
  })} className="bloglink1" to="/write-with-me">Write with me</NavLink>

<NavLink style={({ isActive }) => ({
    color: isActive ? 'red' : 'green'
  })} className="bloglink1" to="/reportproblem">Report a problem</NavLink>
    </div>

  <div className="mainroutes">
    <Routes>
      
      <Route path="/" element={<Home/>}></Route>
        <Route path="/blogs/*" element={<Blog/>}></Route>
        <Route path="/programming-tutorials/*" element={<Tutorials/>}></Route>
        <Route path="/react-tutorial/*" element={<React.Suspense fallback={<div style={{paddingTop: '10%', paddingLeft:'40%'}}><ColorRing></ColorRing></div>}>
        <Reacttutorial/>
            </React.Suspense>}></Route>
        <Route path="/write-with-me" element={<Writewithus/>}></Route>

        <Route path="/reportproblem" element={<Reportproblem/>}></Route>
       
      
    </Routes>
    </div>
  </div>
);

}

export default App;
