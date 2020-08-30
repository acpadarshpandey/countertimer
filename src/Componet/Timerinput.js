import React from "react";
const TimerInput=(props)=> {
    
      return (
       <div>
          <h3>Input your desired time</h3>
          <input type="number" placeholder="Enter minutes" minutes={props.minutes} 
          onChange={props.handleChange}
          required />
      </div>
         );
       
    }
    export default TimerInput;