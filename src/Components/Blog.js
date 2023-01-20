import React,{Suspense, useState, useEffect} from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import "./Components.css"
import { Audio, Circles, ColorRing } from 'react-loader-spinner'
const Blogindex = React.lazy(() => import('./Blogs/Blogindex')) ;
const Reactseo = React.lazy(() => import('./Blogs/Reactseo')) ;
const Howcomputerwroks = React.lazy(() => import('./Blogs/Howcomputerworks')) ;



function Blog() {

    const [state, setstate] = useState("block")

    useEffect(()=>{
        document.title="Blogs"
        document.getElementsByTagName("META")[3].content="Blogs are good way to share knowledge among people";

        window.addEventListener('resize', ()=>{
            if (window.innerWidth <=600){
                setstate("none")
            }

            else{
                setstate("block")
            }
        })

        if(window.innerWidth<=600){
            setstate("none")
        }
    
    }, [])

    function myfun(){
        if (state==="block"){
            setstate("none")
        }

        else{
            setstate("block")
        }
    }

    function myfun1(){
        if(window.innerWidth<=600){
        setstate("none")
    }
    }
    return ( 

        <div>
            <div className="mobileresponsive">
 <button id = 'responsive' onClick={myfun}>Click to open Menu</button>
 </div>
            <div style={{display:state}} className="blogsidebar">

           

                <NavLink onClick={myfun1} style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink" to="react-seo">React Seo</NavLink>
  <NavLink onClick={myfun1} style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink" to="how-computer-works">How Computer Works?</NavLink>

            </div>

            <div className="blogsroutes">

<Routes>

    <Route path="react-seo" element={<React.Suspense fallback={<div style={{paddingTop: '10%', paddingLeft:'40%'}}><ColorRing></ColorRing></div>}>
    <Reactseo/>
            </React.Suspense>}></Route>
            <Route path="how-computer-works" element={<React.Suspense fallback={<div style={{paddingTop: '10%', paddingLeft:'40%'}}><ColorRing></ColorRing></div>}>
    <Howcomputerwroks/>
            </React.Suspense>}></Route>
    <Route index element={<React.Suspense fallback={<>...</>}>
    <Blogindex/>
            </React.Suspense>}></Route>
</Routes>
            </div>
        </div>
     );
}

export default Blog;