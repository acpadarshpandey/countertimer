import React, {useState} from "react";

const Timer=()=>{
    const [time,setTime]=useState(0);
    const [min,setMin]=useState(0);
    const [seconds,setSeconds]=useState(0);

    let newtime= time*60;

    const upadeteTimer=()=>{
        const min=Math.floor(newtime/60);
        let seconds=newtime%60;
        setMin(min);
        setSeconds(seconds)
         newtime--;
    }
    const add=(e)=>{
        e.preventDefault();
        setInterval(upadeteTimer,1000);
    }

    return(
        <div>
              {`Time will b${time}`}
              <div>
            <input  onChange={(e)=>setTime(e.target.value)}></input>
            <button onClick={add}>Start Timer</button>
            </div>
        </div>
    )

}
export default Timer