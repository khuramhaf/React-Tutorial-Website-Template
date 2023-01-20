import { useEffect } from "react";


function Writewithus() {


    useEffect(()=>{
        document.title="Write with me"
        document.getElementsByTagName("META")[3].content="You can write with me on profit sharing";
      }, [])
    return ( 
<div  >
      <div>
      <h1>Write with me</h1>
      
    

      <p>
    If you are a passionate writer and can write blogs and tutorials on Computer Science. I encourage you to join my team.
I work on Profit sharing model. You can work part time as well as full time with the company. Feel free to contact me.

     </p> 


     <p style={{fontSize: 20}}>
        Contact information <br/>
        Email: contact@musk-technology.com
        <br/>
        Mob & whatsapp: +92 310 4864308
      </p>



     
      </div>
          </div>






     );
}

export default Writewithus;