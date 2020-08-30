import React, { useState } from 'react';
import TimerInput from "./Componet/Timerinput";
import Timer from "./Componet/Timer";
import  StartButton from "./Componet/StartButton";
import Cancel from "./Componet/Cancel"

import './App.css';

function App() {
  const[minutes,setMinutes]=useState('00');
  const[seconds,setSeconds]=useState('00');
  const handleChange=(event)=> {
    setMinutes( event.target.value
    )
 }
 let secondsRemaining;
 let intervalHandle;
 const tick=() =>{
  let min = Math.floor(secondsRemaining / 60);
  let sec = secondsRemaining - (min * 60);
 setMinutes(min);
 setSeconds(sec);
  if (sec < 10) {
    setSeconds("0",sec)
    
  }
  if (min < 10) {
    setMinutes("0",min)
  }
  if (min === 0 & sec === 0) {
  clearInterval(intervalHandle);
  }
  secondsRemaining--
  }
  const startCountDown=()=> {
    intervalHandle = setInterval(tick, 1000);
    let time = minutes;
    secondsRemaining = time * 60;
    }
     
  return (
    <div className="App">
     <TimerInput minutes={minutes} handleChange={handleChange}/>
       <Timer minutes={minutes} seconds={seconds}/>
       <StartButton startCountDown={startCountDown}/>
       <Cancel/>
    </div>
  );
}

export default App;
