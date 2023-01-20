import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Componentlifecycle() {
    useEffect(()=>{
        document.title="Lifecycle of Component"
      document.getElementsByTagName("META")[3].content="On this page, you will learn more about the component's lifecycle and methods.";
    
      document.documentElement.scrollTop = 0;
    
    }, [])

      const navigate = useNavigate()
      function myfun1(){
        navigate("/react-tutorial/props-in-react")
      }
      function myfun2(){
        navigate("/react-tutorial/conditional-rendering")
      }
      
        return (
  <div>
   <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
    <h1>Lifecycle of Component</h1>
    
    <p>Each component in React has a lifecycle. A component goes through three phases. 
Mounting,
Updating,
Unmounting. Let us discuss each of the events in detail.



    </p>
<h3>Mounting</h3>
<p>Mounting means when the component is loaded into the Dom for the first time.
 But why do we need to care about mounting? Because when you will start creating 
 your app in React you will see in most cases you have to run your code after the 
 component render. For example, if you want to fetch some data from the Database. 
 Or you want to set an event listener on a windows object. </p>

<h3>Updating</h3>
<p>Updating means when you change the state or props of a component and the component 
    re-renders. In some cases, you have to run your code after every re-render. </p>

    <h3>Unmounting</h3>

    <p>Umounting means when the component is removed from the DOM. Remember when the 
        component is unmounted it is no more in the DOM and all the component's states 
        are destroyed when the component is remounted all its states are set to initial 
        states. After this lifecycle event, you can also run code, 
    and most of the code will be the cleanup code.</p>
    <h2>How to run code after every Lifecycle Event?</h2>

<p>In React functional components there is a special hook called useEffect Hook. By 
    using this hook you can run code after every life cycle event. Let us what is useEffect Hook
     and how it works</p>

    <h2>What is useEffect Hook and how it works?</h2>

    <p>
    useEffect is the hook in React by using this hook we can hook into the React 
    lifecycle events. As we discussed there are three lifecycle events in component 
    life. Mounting, Updating, and Unmounting. So we can run our code after every 
    lifecycle event. There are two parameters of a useEffect hook. One is a callback function and the 
    second is a dependency Array. A callback function is used to run any code and a 
    dependency array is used to make your hook dependent on any state or props. 
    Dependency Array plays a major role to control the useEffect hook
</p>

<h4>How to Run code after component Mounting?</h4>

<p>
Computer mount means when your component renders the first time. To run your code after 
the component mounts you just simply need to import useEffect hook from react and 
then provide it a callback and an empty dependency array. See the below code for 
an example
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
 useEffect
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
<br></br>
<br></br>
<span style={{color:'Goldenrod'}}>{"useEffect(()=>{\nconsole.log('helloworld')\n}, [])"} </span>
<br></br>
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

<h4>How to Run code after component Update?</h4>

<p>
Computer update means whenever your component renders. To run your code after 
the component updating you just simply need to import useEffect hook from react and 
then provide it a callback and no second parameter of the dependency Array. Just provide your 
useEffect hook a single parameter of callback function. See the below code for 
an example
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
 useEffect
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
<br></br>
<br></br>
<span style={{color:'Goldenrod'}}>{"useEffect(()=>{\nconsole.log('helloworld')\n})"} </span>
<br></br>
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


<h4>How to run code after component unmount?</h4>

<p>
To run your code after the component unmount you need to return a function from your
 useEffect hook. See the below code for example.
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
 useEffect
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
<br></br>
<br></br>
<span style={{color:'Goldenrod'}}>{"useEffect(()=>{\nconst interval = setInterval()\nreturn () => clearInterval(interval)\n}, [])"} </span>
<br></br>
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


<h4>Run your code after any state or props change</h4>

<p>You can also run some code after any state or props change. Just pass the state or props
    in the dependency Array. See the below code for an example.
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
 useEffect, useState
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
<br></br>
<span className="keyword">const </span>
<span style={{color:'Goldenrod'}}>{"[state, setState] = useState('red')"} </span>
<br></br>
<br></br>
<span style={{color:'Goldenrod'}}>{"useEffect(()=>{\nconsole.log('helloworld')\n}, [state])"} </span>
<br></br>
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

<p>Here is the code explanation. In the upper code whenever we will change the state
     of the component, the useEffect will run. Similarly, you can pass any props to the useEffect Hook.

</p>

    <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    </div>
        );
}

export default Componentlifecycle;