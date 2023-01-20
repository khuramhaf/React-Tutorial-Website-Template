import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Components() {
    useEffect(()=>{
        document.title="Components in React"
        document.getElementsByTagName("META")[3].content="Components are the building blocks in React.";
        document.documentElement.scrollTop = 0;
    
      }, [])

      const navigate = useNavigate()


      function myfun1(){
        navigate("/react-tutorial/how-to-use")
      }
      function myfun2(){
        navigate("/react-tutorial/state-in-react")
      }
      
        return (
  <div>

    <button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    <h1>Components in React?</h1>
    
    <p>Components are the building block in React. In React we divide the User interface into components.
        For example, a website might have a "Home" component or an "About" component. We can also divide a single page into parts/components. 
        For example on a page, we might have a "search" component or "cards" component. Components are very useful for code reuse. There are two types of components that we can make in React. Function components and Class components. Functional components are easy to handle as compared to class components. We will use functional components for this course.
</p>
<h2>Render Method and JSX</h2>
<p>
Functional components in React contain a special method of "return". In this return method, we put all the JSX.</p>

 <h3>What is jsx?</h3>
 
 <p>JSX is similar to HTML but you can say it is HTML written in Javascript. It is called JSX because it is a syntax extension to javascript. 
React component is designed in an object-oriented way like in OOP we group data and methods. In React we do the same thing. we combine component data and methods together. The return method is one of the methods that is required to Render HTML on the screen. Similar to HTML JSX elements also have properties and can listen to events.
Below is the example which shows how you write component in React App

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
 Home
 <span> (</span>
<span>) </span>
 <span className="keyword">{'{'}</span>


<br></br>
<span className="keyword">return </span>
<span>(</span>
<br></br>


<span>{'<h1'}</span>
<span className="property"> className </span>
<span>{"= 'demo'"}</span>
<span className="property"> onClick </span>
<span>{"= {myfun}>"}</span>
<span>{"Helloworld</h1>"}</span>
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

<p>Here is the code explanation. The first line of code is an import statement. In this line, we
  are importing React object from the "react". The second line is a function keyword with a component name. In this case, 
  it is "Home". In the third line, we are using a return keyword. This is the render method that 
  returns JSX. In the last line, we are exporting the component so that other files in the App can import it and use it.
</p>
<p>
Remember one thing most of the JSX properties are camelcase as you can see in the above code 
    we are declaring an h1 tag with a property className and onClick both are camelcase.
</p>

<button className="prevbtn" onClick={myfun1}>Prev</button>
    <button className="nextbtn" onClick={myfun2}>Next</button>

    </div>
        );
}

export default Components;