import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function State() {
    useEffect(()=>{
        document.title="State in React"
      
        document.getElementsByTagName("META")[3].content="React is a component based Javascript library for building user interfaces.";

        document.documentElement.scrollTop = 0;
      }, [])

      const navigate = useNavigate()

      function myfun1(){
        navigate("/react-tutorial/components-in-react")
      }
      function myfun2(){
        navigate("/react-tutorial/props-in-react")
      }
      
        return (
  <div>

    <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
   

    <h1>State in React?</h1>
    
    <p>The State is the most important concept in React. A state is an object in a 
      component that stores component data. The state has a special relationship with 
      component rendering. Whenever the component state changes the component rerenders. 
      
      
    </p>
<h2>Declaring a State in React using useState Hook</h2>

<p>
There is a special way to declare a state in React. For this purpose, we use a 
      useState Hook. If you are wondering what these Hooks are? Hooks are functions and to declare 
      a state in React we need a specific type of Hook called useState. When we declare a state
      we declare a variable and a function together. A variable is declared to store
      data and a function is declared to change this data. Below is the code 
      which shows how you can declare a state in React
      </p>
    <div className="codemain">

<pre>
<code>
<span className="keyword">import </span>
 React
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>


<span className="keyword">import </span>
<span className="keyword">{'{'}</span>
 useState
 <span className="keyword">{'}'}</span>
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>



 <span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">const </span>
<span style={{color:"Goldenrod"}}>{"[state, setState] = useState('red')"} </span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>


<span>{'<h1>'}</span>
<span>{"Helloworld</h1>"}</span>
<br></br>

<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>

<span className="keyword">export </span>
<span className="keyword">default </span>
App;
</code>
</pre>

</div>


<p>Here is the explanation of the code. In line two we are importing the "useState" hook from the react and in line 4 we are declaring the state. 
  You will notice the parentheses with the value of red "('red')" at the end of the useState. You can put your component data in these parentheses. 
  In our case, it is a string with the value of "red"</p>
<h2>Binding State with JSX Element</h2>

  <p>You can bind your state data with any JSX element property that takes data. See the below code for an example. </p>

  <div className="codemain">

<pre>
<code>
<span className="keyword">import </span>
 React
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>


<span className="keyword">import </span>
<span className="keyword">{'{'}</span>
 useState
 <span className="keyword">{'}'}</span>
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>



 <span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">const </span>
<span style={{color:'Goldenrod'}}>{"[state, setState] = useState('red')"} </span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>


<span>{'<h1'}</span>
<span className="property"> style</span>
<span style={{color:'Goldenrod'}}>{"  = {{color:state}}"}</span>
<span>{">"}</span>
<span style={{color:'Goldenrod'}}>{"{state}"}</span>
<span>{"</h1>"}</span>
<br></br>

<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>

<span className="keyword">export </span>
<span className="keyword">default </span>
App;
</code>
</pre>

</div>

<p>Here is the code explanation. In line six we are declaring an h1 tag and binding 
  our state with two properties, the color property in style and the innerHTML 
  property. You might have noticed that we are using curly braces to bind our 
  state with properties. React works in this way.</p>


  <h2>Changing State of a Component</h2>
  <p>You cannot directly mutate the state in React. For example, you cannot say 'state = "blue"' rather you use a special function that we declare with our state
     You have seen a setState function in the above code. This is the function that we use to change the state. You can give any name to this function. We normally change the state on events. There are two types of events in React, Hardware, and Software events. You 
      might need to change the background color of a button on click or you might need to change the class 
      of an element on window resize. So in a nutshell we normally change the state on events. See the below code example
  </p>


  <div className="codemain">

<pre>
<code>
<span className="keyword">import </span>
 React
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>


<span className="keyword">import </span>
<span className="keyword">{'{'}</span>
 useState
 <span className="keyword">{'}'}</span>
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>


<span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">const </span>
<span style={{color:'Goldenrod'}}>{"[state, setState] = useState('red')"} </span>
<br></br>
<br></br>

<span className="keyword">function </span>
 myfun
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span style={{color:'Goldenrod'}}>{"setState('blue')"}</span>
<br></br>


<span className="keyword">{'}'}</span>
<br></br>




<span className="keyword">return </span>
<span>(</span>
<br></br>


<span>{'<div><h1'}</span>
<span className="property"> style</span>
<span style={{color:'Goldenrod'}}>{"  = {{color:state}}"}</span>
<span>{">"}</span>
<span style={{color:'Goldenrod'}}>{"{state}"}</span>
<span>{"</h1>"}</span>
<br></br>


<span>{'<button'}</span>
<span className="property"> onClick</span>
<span style={{color:'Goldenrod'}}>{" = {myfun}"}</span>
<span>{">"}</span>
<span>{"Click me"}</span>
<span>{"</button></div>"}</span>
<br></br>


<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>

<span className="keyword">export </span>
<span className="keyword">default </span>
App;








</code>
</pre>

</div>


<p>Here is the explanation of code. We are defining a function with the name of myfun and binding it to the button's on click property. In this myfun function, we are calling "setState" 
  function and passing it "blue" as a value. Now when we click on the button the h1 color and text will be changed. In a nutshell whenever we change the state the UI change</p>


  <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
    </div>

   
        );
}

export default State;