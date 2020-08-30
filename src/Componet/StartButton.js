import React from "react";
import './whole.css';
const StartButton=(props)=> {
    
    return(
        <div>
         <button onClick={props.startCountDown} 
         style={{margin:"2px",height:"30px",width:"80px",border:"1px solid black",borderRadius:"5px", backgroundColor:"white"}}
         >Start</button>
       </div>
        );
       
    }
    export default StartButton;
