import { useEffect } from "react";


function Howcomputerworks() {

    useEffect(()=>{
        document.title="How Computer Works?"
        document.getElementsByTagName("META")[3].content="In this article, you will learn the internal functionality of a Computer";
        document.documentElement.scrollTop = 0;
    }, [])

    return ( 

        <div>

            <h1 >How Computer works?</h1>
<p>
There are actually two major parts of a computer. Processor and RAM. RAM stores data 
and Processor retrieve this data from the RAM and processes it. Now we will see the 
functionality of each part in Detail. 
 </p>


 <h2>RAM (Random Access Memory)</h2>
<p>
RAM consists of small cells which contain data and instructions. Each cell has an address. Each cell in 
RAM consists of devices that stores electric current. If the current is present it means 
On and if the current is not present it means Off. In other words, each device represents 
the two values 0 and 1. Now if we want to represent values of more than two then we need 
more of these kinds of devices for example with two devices we can represent 4 values. 
With three devices we can represent 8 values. This value representation is the core concept of every computer.
 We mostly have data in the form of Numbers, and Letters, So each device can represent 
 two Numbers or Two letters and to represent more numbers we need more devices. 
 So in a nutshell RAM is the place where we store our data and instructions in the computer. 
 </p>

 <h2>Processor</h2>
 <p>
 The processor is another important part of the computer, in fact, it is the most 
 important part of the computer. Processor process the data. It performs arithmetic 
 operations on the data. It can also transfer data from one part of the RAM to another 
 part.  Most of the processors understand some general instructions like moving data from 
 one part to another or addition and subtraction. Processors also contain internal storage 
 called registers where they store data before and after processing before putting it 
 into RAM. Processors can access any part of RAM using the RAM address. There are 
 instructions like Jump and Call by using these instructions processor can access 
 any address in the RAM. 
 </p>
        </div>
     );
}

export default Howcomputerworks;