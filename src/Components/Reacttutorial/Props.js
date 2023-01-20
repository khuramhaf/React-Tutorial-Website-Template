import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Props() {
    useEffect(()=>{
        document.title="Props in React"
      document.getElementsByTagName("META")[3].content="React is a component based Javascript library for building user interfaces.";
    
      document.documentElement.scrollTop = 0;
    
    }, [])

      const navigate = useNavigate()
      function myfun1(){
        navigate("/react-tutorial/state-in-react")
      }
      function myfun2(){
        navigate("/react-tutorial/component-life-cycle")
      }
      
        return (
  <div>
   <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
    <h1>Props in React</h1>
    
    <p>Props is also one of the most important concepts in React. Props are actually 
      the state, but the state of a parent component that is passed down to the 
      child component. In other words, if we pass any state from a parent to a child
       it becomes props for the child. Recall from the state chapter whenever you declare the state 
      in React you declare a variable and a function together. You can pass both function 
      and the variable to the child component, but why do you need to pass the function 
      to the child component? The simple answer is if a child component wants to change 
      the state of the parent component then we call our setState function from the child 
      component or if the child component wants to change the state of the sibling 
      component. Although you can't directly change the state of the sibling component. 
      You need to declare your state in a common ancestor. See the below code for an example 
      of Props
    </p>

    <div>
    
    <div className="codemain">
    
    <pre>
    <code>
    
    //file name: Home.js
    
    <br></br>
    <br></br>
    <span className="keyword">import </span>
     React
     <span className="keyword"> from</span>
     <span> 'react'</span>
    <br></br>
    <span className="keyword">import </span>
    <span className="keyword">{'{'}</span>
     useEffect
     <span className="keyword">{'}'}</span>
     <span className="keyword"> from</span>
     <span> 'react'</span>
    <br></br>
    
    
    <br></br>
     <span className="keyword">function </span>
     Home
     <span> (props</span>
    <span>) </span>
     <span className="keyword">{'{'}</span>
    
    
    <br></br>
    <span className="keyword">return </span>
    <span>(</span>
    <br></br>
    
    
    <span>{'<h1>'}</span>
    <span style={{color:'Goldenrod'}}>{"{props.state}"}</span>
    <span>{"</h1>"}</span>
    <br></br>
    
    <span> );</span>
    <br></br>
    
    <span className="keyword">{'}'}</span>
    <br></br>
    
    <span className="keyword">export </span>
    <span className="keyword">default </span>
    Home;
    </code>
    </pre>
   
    </div>
<div style={{marginTop:10}} className="codemain">

<pre>
<code>

//file name: App.js
<br></br>
<br></br>


<span className="keyword">import </span>
 React
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>
<span className="keyword">import </span>
<span className="keyword">{'{'}</span>
 useEffect
 <span className="keyword">{'}'}</span>
 <span className="keyword"> from</span>
 <span> 'react'</span>
<br></br>

<span className="keyword">import </span>
 Home
 <span className="keyword"> from</span>
 <span> './Home'</span>
<br></br>
<br></br>

<span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">const </span>
<span>{"[state, setState] = useState('red')"} </span>
<br></br>
<br></br>


<span className="keyword">{'}'}</span>
<br></br>




<span className="keyword">return </span>
<span>(</span>
<br></br>
<span>{'<div>'}</span>
<br></br>
<span>{'<Home'}</span>
<span className="property"> state</span>
<span style={{color:'Goldenrod'}}>{"  = {state}"}</span>
<span className="property"> setState</span>
<span style={{color:'Goldenrod'}}>{"  = {setState}"}</span>
<span>{">"}</span>
<span>{"</Home>"}</span>
<br></br>

<span>{'</div>'}</span>
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

</div>

<p>
Here is the code explanation. In the file Home.js we are defining a component named 
Home and we are passing the word "props" in the parentheses. Below is the return 
method, we are declaring an h1 tag and passing "props.state" to it in curly braces.

In App.js file we are declaring the Home component in the return method and passing 
it the App.js component's state. The value of the state is "red". In short, we are passing 
the value red to the Home component's h1 tag. Just remember one thing, passing the state from parent to
a child is actually passing the data from parent to child

</p>




    <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    </div>
        );
}

export default Props;