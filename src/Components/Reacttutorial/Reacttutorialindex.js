import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'

function Reacttutorialindex() {

    useEffect(()=>{
        document.title="React.js Tutorial"
        document.getElementsByTagName("META")[3].content="This React.js tutorial is designed for beginners";
        document.documentElement.scrollTop = 0;
    }, [])


    const navigate = useNavigate();

    function myfun1(){
      navigate("/react-tutorial/what-is-react")
    }
    return ( 

      

        <div>

<button className="nextbtn" onClick={myfun1}>Next</button>
            <h1>React.js Tutorial</h1>
<p>
This React Tutorial is designed for beginners. You should have good understanding of HTML, CSS and 
Javascript before taking this tutorial. We will try to use as few dependencies/libraries as much for this tutorial and 
try to cover all topics in pure React for example Routing in pure React and Animation in Pure React. This tutorial will mostly use functional components 
to explain topics but will also use class components if necessary. No prior knowledge of React is required before taking this tutorial
<br></br>

<h2>How to use React?</h2>

There are two ways to use React in your app.
<br></br>
<br></br>
First, use react directly into your HTML using a script tag. 
<br></br>
<br></br>
Second, install Node.js on your computer and use <span style={{color:"blue"}}>npx create-react-app <span>{"<your app name>"}</span></span> command to create a React app. 
<br></br>
<br></br>
We will recommend you use the second option. 
    </p>
    <button className="nextbtn" onClick={myfun1}>Next</button>
        </div>
     );
}

export default Reacttutorialindex;