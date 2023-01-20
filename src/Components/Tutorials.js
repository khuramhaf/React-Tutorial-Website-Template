import {useState, useEffect} from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Tutorialindex from './Tutorials/Tutorialindex'
import "./Components.css"


function Tutorials() {


    const [state, setstate] = useState("block")

    useEffect(()=>{
        document.title="Computer Programming Tutorials"
        document.getElementsByTagName("META")[3].content="Our Computer Programming tutorials are easy to understand and mostly designed for beginners";

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

        <div className="maincomponents">
 <div className="mobileresponsive">
<button id = 'responsive' onClick={myfun}>Click to open Menu</button>
</div>
            <div style={{display:state}} className="blogsidebar">

            <NavLink onClick={myfun1} style={({ isActive }) => ({
    color: isActive ? 'red' : 'blue'
  })} className="bloglink" to="/react-tutorial">React Tutorial</NavLink>
                

            </div>

            <div className="blogsroutes">

<Routes>
    <Route index element={<Tutorialindex/>}></Route>
</Routes>
            </div>
        </div>
     );
}

export default Tutorials;