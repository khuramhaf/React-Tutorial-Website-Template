import {useEffect} from 'react'
import "./Components.css"


function Home() {
    useEffect(()=>{
        document.title="reactdeveloper.pk"
        document.getElementsByTagName("META")[3].content="I am a React developer who can develop complex user interfaces for the web. You can contact me at +92 310 4864308";
      }, [])
      
        return (
          <div>
      <div>
      <h1>React.js Developer</h1>
      
      <p>

      Hello and Welcome, My name is Khuram Hafeez and I am from Lahore Pakistan and I am a react developer.
I always keep my eye on the evolving nature of Web Development and enjoy making apps having a better user interface.
I mostly like to work on Single-page apps using the technique of lazy loading. I can make complex UI using custom routing in React.

      
      </p>

      <p>You can check my Github account @ <a href="https://github.com/khuramhaf">Github</a></p>
      <p>Here is the link to my youtube channel <a href="https://www.youtube.com/channel/UCq11-ZWOpdxefM637LElxDg">YouTube</a></p>
      
      <p style={{fontSize: 20}}>
        Contact me <br/>
        Email: contact@musk-technology.com
        <br/>
        Mob & whatsapp: +92 310 4864308
      </p>
      
      </div>
          </div>
        );
}

export default Home;