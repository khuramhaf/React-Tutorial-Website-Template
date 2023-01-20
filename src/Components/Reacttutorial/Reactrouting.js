import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Reactrouting () {

    useEffect(()=>{
        document.title="React Routing"
      document.getElementsByTagName("META")[3].content="In this chapter, we will discuss the Routing in React.";
    
      document.documentElement.scrollTop = 0;
    
    }, [])

      const navigate = useNavigate()
      function myfun1(){
        navigate("/react-tutorial/conditional-rendering")
      }
      function myfun2(){
        
      }


    return ( 


        <div>

<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
            <h1>React Routing</h1>

            <p>Routing is a process to change the pages/components according to 
                state/paths. There are routing libraries that are widely used 
                to perform routing in React but as we promised that we will use as 
                few dependencies as we can and try to cover all the topics in pure 
                react. So in this chapter, we will take a look that How we can perform 
                routing in Pure React? In the conditional rendering chapter, you might have 
                seen the code. We will extend the same example further. What we are actually 
                going to do. We are going to make 4 components. Home, About, Services, and 
                Contact. Then we will do conditional rendering to render these components on 
                button click. See the below code for an example.</p>

<div className="codemain">
<pre>
    <code>

        //filename: Components

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




<br></br>


<br></br>


<span className="keyword">function </span>
Services
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>

<span>{'<h1>'}</span>
<span style={{color:'Goldenrod'}}>{"Services"}</span>
<span>{"</h1>"}</span>
<br></br>



<span> );</span>
<br></br>

<span className="keyword">{'}'}</span>
<br></br>




<br></br>


<br></br>


<span className="keyword">function </span>
Contact Us
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>


<span className="keyword">return </span>
<span>(</span>
<br></br>

<span>{'<h1>'}</span>
<span style={{color:'Goldenrod'}}>{"Contact Us"}</span>
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
<span className="keyword">else if</span>
<span>{"(props.state===2)"}</span>
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

<span className="keyword">else if</span>
<span>{"(props.state===3)"}</span>
<span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">return </span>
<span>(</span>
<br></br>
<span>{"<Services/>"}</span>
<br></br>
<span>)</span>
<br></br>
<span className="keyword">{'}'}</span>
<br></br>

<br></br>
<br></br>
<span className="keyword">else</span>
<span className="keyword">{'{'}</span>
<br></br>

<span className="keyword">return </span>
<span>(</span>
<br></br>
<span>{"<Contact/>"}</span>
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


<span className="keyword">function </span>
 myfun3
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span style={{color:'Goldenrod'}}>{"setState(3)"}</span>
<br></br>


<span className="keyword">{'}'}</span>
<br></br>



<span className="keyword">function </span>
 myfun4
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>
<br></br>

<span style={{color:'Goldenrod'}}>{"setState(1)"}</span>
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


<span>{'<button'}</span>
<span className="property"> onClick</span>
<span style={{color:'Goldenrod'}}>{" = {myfun3}"}</span>
<span>{">"}</span>
<span>{"Services"}</span>
<span>{"</button>"}</span>
<br></br>

<span>{'<button'}</span>
<span className="property"> onClick</span>
<span style={{color:'Goldenrod'}}>{" = {myfun4}"}</span>
<span>{">"}</span>
<span>{"Contact"}</span>
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

<p>Here is the code explanation. In the Component file, we are creating four components, 
    Home, About, Services and Contact. 
    <br></br>
    In the Render.js file, we are using these components to render them 
    conditionally. We are using the "if" statement to say if "props.state" is "1" render
     Home, If props.state is "2" render About and so on.
     <br></br>
     In App.js file we are declaring our Render component and passing it the state of App.js 
component. Below this, we are declaring four buttons and binding their onClick events 
with four methods. You can only declare one method and set Id property to your button element
 and then pass this id property to the on click callback function and can perform your rendering according to the Id but we
  want to make it simple so we are using four functions instead of one.
   Whenever there is a click on a button the state will change and 
when the state will change the Render component will re-render. When you click on Home 
button the Home component will render and when you click on About button the About
 component will render and so on. 
</p>

<p>By using this way you can perform the routing in React. You can also use History API's "pushState"
     to change the pathname on click, and  "popstate", to listen to the back button click. Rather than 
     using buttons, you can use anchor tags. Although it is not a widely used 
    way to perform routing in React. In most cases, the Routing Libraries work well and by
     using these libraries you can do routing quickly. 
</p>

<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>
        </div>

     );
}

export default Reactrouting;