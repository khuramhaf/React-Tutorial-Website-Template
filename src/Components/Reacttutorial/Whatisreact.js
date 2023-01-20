import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Whatisreact() {
    useEffect(()=>{
        document.title="What is React"
        document.getElementsByTagName("META")[3].content="React is a component based Javascript library for building user interfaces.";
        document.documentElement.scrollTop = 0;
      }, [])
      
      const navigate = useNavigate();

  

    function myfun1(){
      navigate("/react-tutorial")
    }

    function myfun2(){
      navigate("/react-tutorial/how-to-use")
    }
        return (
  <div>
    <button className="prevbtn" onClick={myfun1}>Prev</button>

    <button className="nextbtn" onClick={myfun2}>Next</button>

    <h1>What is React?</h1>
    
    <p>React is a component-based declarative Javascript library for building user interfaces. We call React declarative because in React we mostly focus on what to do rather than how to do it. 
      We mostly create single-page apps (SPAs) in React. A SPA is an app in which all the HTML rendering is done on the client side. In other words, we use Browser side Javascript to build our full app. 
      MERN stack is the most popular stack in React ecosystem. MERN stands for MongoDB, Express, React, and Node.js. Facebook is one of the most popular apps developed on React. The state is the most fundamental concept in React. 
      You will learn more about State in the upcoming chapters.
</p>

<h2>React is a Library and not a Framework</h2>

<p>React is a library and not a framework because React only solves certain problems 
  in the development phase. React only care about the view layer of the App. Let us 
  take an example. In general, if you are doing some rendering using Javascript there 
  are following few steps you take.

You select the HTML element by using "document.getElementById" or similar functions. 
Then you use the dot operator to select the property of the element and, change it. On 
other hand, React makes it straightforward to do all this stuff. 
You only save the element property in the React State and bind your state with 
the property now you only change the state whenever you want to change the property of 
the element.</p>
<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    </div>
        );
}

export default Whatisreact;