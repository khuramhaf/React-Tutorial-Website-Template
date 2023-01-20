import {useEffect} from 'react'
import "./Components.css"


function Reportproblem() {
    useEffect(()=>{
        document.title="Report a Problem"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div  >
      <div>
      <h1>Report a Problem</h1>
      
      <p>
      if you find any errors in the writings or any bug in the App design you can send us an email @ <span style={{color:'blue'}}>contact@musk-technology.com. </span>
Your email subject line should be "problem in the reactdeveloper.pk"
      
      </p>
      
      </div>
          </div>
        );
}

export default Reportproblem;