import {useEffect} from 'react'


function Tutorialindex() {

    useEffect(()=>{
        document.title="Computer Programming Tutorials"
        document.getElementsByTagName("META")[3].content="Our Programming tutorials are easy to understand and mostly designed for beginners";
      }, [])
    return ( 

        <div>

            <h1>Programming Tutorials</h1>
<p>
Our tutorials are mostly designed for beginners. We mostly produce tutorials for web development but 
also touch the desktop development as well as well as other computer science topics.
    </p>

        </div>
     );
}

export default Tutorialindex;