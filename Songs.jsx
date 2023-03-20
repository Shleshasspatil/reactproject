import React from "react";
import Singers from "./Singers";
import JSON from "./Singersdata.json" 
import "./song.css"


const Songs =()=>{
  return(
<Singers payload={JSON}/>
  )  
}
export default Songs;