import React from 'react';
 const Cancel =()=>{

    const cancel=()=>{
        window.location.reload(false);
    }
     return(
         <button style={{margin:"2px",height:"30px",width:"80px",border:"1px solid black",borderRadius:"5px", backgroundColor:"white"}} onClick={cancel}>Cancel</button>
     )
 }
 export default Cancel;