import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Conditionalrendering() {

    useEffect(()=>{
        document.title="Conditional Rendering in React"
      document.getElementsByTagName("META")[3].content="In this chapter we will take a look on Conditional Rendering in React.";
    
      document.documentElement.scrollTop = 0;
    
    }, [])

      const navigate = useNavigate()
      function myfun1(){
        navigate("/react-tutorial/component-life-cycle")
      }
      function myfun2(){
        navigate("/react-tutorial/react-routing")
      }


    return ( 


        <div>

<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
            <h1>Conditional Rendering in React</h1>

            <p>Conditional rendering is a very powerful feature of React. Conditional 
                rendering is actually the state or props-based rendering. We render 
                components based on the component state or props. For example, if you 
                have two components a Home component and About component and there are 
                two buttons in the App. Now you want to show the Home page when the user 
                clicks on the Home button and the About page when the user clicks on the 
                About button then we use conditional rendering to achieve this. Let us 
                see an example.</p>

<div className="codemain">
<pre>
    <code>

        //filename: div1

        <br></br>
<br></br>
    <span className="keyword">function </span>
 Home
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>

<span>{'<h1>'}</span>
<span style={{color:'Goldenrod'}}>{"Home"}</span>
<span>{"</h1>"}</span>
<br></br>



<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>


<br></br>


<span className="keyword">function </span>
About
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>

<span>{'<h1>'}</span>
<span style={{color:'Goldenrod'}}>{"About"}</span>
<span>{"</h1>"}</span>
<br></br>



<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>

    </code>
</pre>



</div>


<div style={{marginTop:20}} className="codemain">


    <pre>
        <code>
//file name: Render.js
<br></br>
<br></br>
        <span className="keyword">function </span>
 Render
 <span> (props</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">if</span>
<span>{"(props.state===1)"}</span>
<span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">return </span>
<span>(</span>
<br></br>
<span>{"<Home/>"}</span>
<br></br>
<span>)</span>
<br></br>
<span className="keyword">{'}'}</span>

<br></br>
<br></br>
<span className="keyword">else</span>
<span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">return </span>
<span>(</span>
<br></br>
<span>{"<About/>"}</span>
<br></br>
<span>)</span>
<br></br>
<span className="keyword">{'}'}</span>
<br></br>

<span className="keyword">{'}'}</span>

        </code>
    </pre>
</div>

                <div style={{marginTop:20}} className="codemain">

<pre>
<code>

    //filename: App.js
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
 Render
 <span className="keyword"> from</span>
 <span> './Render'</span>
<br></br>
<br></br>
<span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">const </span>
<span>{"[state, setState] = useState(1)"} </span>
<br></br>
<br></br>

<span className="keyword">function </span>
 myfun1
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span style={{color:'Goldenrod'}}>{"setState(1)"}</span>
<br></br>


<span className="keyword">{'}'}</span>
<br></br>


<span className="keyword">function </span>
 myfun2
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span style={{color:'Goldenrod'}}>{"setState(2)"}</span>
<br></br>


<span className="keyword">{'}'}</span>
<br></br>




<span className="keyword">return </span>
<span>(</span>
<br></br>

<span>{"<div>"}</span>
<br></br>
<span>{'<Render'}</span>
<span className="property"> state</span>
<span style={{color:'Goldenrod'}}>{"  = {state}"}</span>
<span>{"/>"}</span>
<br></br>

<span>{'<button'}</span>
<span className="property"> onClick</span>
<span style={{color:'Goldenrod'}}>{" = {myfun1}"}</span>
<span>{">"}</span>
<span>{"Home"}</span>
<span>{"</button>"}</span>
<br></br>

<span>{'<button'}</span>
<span className="property"> onClick</span>
<span style={{color:'Goldenrod'}}>{" = {myfun2}"}</span>
<span>{">"}</span>
<span>{"About"}</span>
<span>{"</button>"}</span>
<br></br>

<span>{"</div>"}</span>
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

<p>Here is the code explanation. In the div1 file, we are creating two components, 
    Home and About. 
    <br></br>
    In the Render.js file, we are using these components to render them 
    conditionally. We are using the "if" statement to say if "props.state" is "1" render
     Home otherwise Render About.
     <br></br>
In App.js file we are declaring our Home component and passing it the state of App.js 
component. Below this, we are declaring two buttons and binding their onClick events 
with two methods. Whenever there is a click on a button the state will change and 
when the state will change the Render component will re-render. When you click on Home 
button the Home component will render and when you click on About button the About
 component will render. 
</p>

<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
        </div>

     );
}

export default Conditionalrendering;