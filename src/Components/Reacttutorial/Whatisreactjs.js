import {useEffect} from 'react'


function Whatisreactjs() {


    useEffect(()=>{
        document.title="What is React?"
        document.getElementsByTagName("META")[3].content="React.js is a Javascript Library to build user interfaces. In React we can divide user interfaces into components.";
      }, [])


    return ( 

        <div  style ={{padding: 20, paddingTop:0, paddingTop:50}}>
<h1>

    What is React?
</h1>

<p>
React.js is a Javascript Library to build user interfaces. In React we can divide user interfaces into components. Each component has a state object. When we change the state of a React component the component re renders.
</p>

        </div>
     );
}

export default Whatisreactjs;