import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Howtouse() {
    useEffect(()=>{
        document.title="How to use React?"
        document.getElementsByTagName("META")[3].content="React is a component based Javascript library for building user interfaces.";
    
        document.documentElement.scrollTop = 0;
    
      }, [])
      
      const navigate = useNavigate();

   

    function myfun1(){
      navigate("/react-tutorial/what-is-react")
    }


    function myfun2(){
        navigate("/react-tutorial/components-in-react")
      }
        return (
  <div>
    <button className="prevbtn" onClick={myfun1}>Prev</button>

    <button className="nextbtn" onClick={myfun2}>Next</button>

   

<h1>How to use React?</h1>
<p>
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

<br></br>
<br></br>

After creating your app using npx create-react-app, just open your app in your 
favorite code editor. You will see the list of files and folders in your app. 
Just go into the "src" folder and open up "App.js" file. This file is the main 
file where you will start coding. You will also see "index.js" file in "src" folder.
 Now go into the "public" folder and here you will see "index.html" file. The public 
 folder is actually the root folder of your app where "index.html" reside. Now open up your "App.js"
  file again, which is in the "src" folder, remove all the code and paste following code instead.
</p>


<div className="codemain">

<pre>
<code>
<span className="keyword">import </span>
 React
 <span className="keyword"> from</span>
 <span> 'react'</span>


<br></br>
 <span className="keyword">function </span>
 App
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>


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

<p>
Now open your favorite browser and type localhost:3000 in the address bar and you will see a "helloworld" in your browser. Before typing 
  localhost:3000 make sure you have executed the npm start command
</p>


<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    </div>
        );
}

export default Howtouse;