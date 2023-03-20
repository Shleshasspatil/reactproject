import React from "react";
 
const Singers=(props)=>{
    return(


<div className="parentBlock">
    <div className="mainBlock">
        <img src={props.payload[0].Songimage} alt=" "/>
        <h1 style={{color:"green"}} >{props.payload[0].SingerName}</h1>
        <h2 style={{color:"orange"}}>{props.payload[0].Profession}</h2>
        <h3 style={{color:"green"}}>{props.payload[0].Songs}</h3>
        <h4 style={{color:"crimson"}}>{props.payload[0].Songduration}</h4>
    </div>



    <div className="mainBlock">
    <img src={props.payload[1].Songimage} alt=" "/>
        <h1 >{props.payload[1].SingerName}</h1>
        <h2>{props.payload[1].Profession}</h2>
        <h3>{props.payload[1].Songs}</h3>
        <h4>{props.payload[1].Songduration}</h4>
    </div>


    <div className="mainBlock">
    <img src={props.payload[2].Songimage} alt=" "/>
        <h1 >{props.payload[2].SingerName}</h1>
        <h2>{props.payload[2].Profession}</h2>
        <h3>{props.payload[2].Songs}</h3>
        <h4>{props.payload[2].Songduration}</h4>
    </div>

    
    <div div className="mainBlock">
    <img src={props.payload[3].Songimage} alt=" "/>
        <h1 >{props.payload[3].SingerName}</h1>
        <h2>{props.payload[3].Profession}</h2>
        <h3>{props.payload[3].Songs}</h3>
        <h4>{props.payload[3].Songduration}</h4>
        </div>


        <div className="mainBlock">
        <img src={props.payload[4].Songimage} alt=" "/>
        <h1 >{props.payload[4].SingerName}</h1>
        <h2>{props.payload[4].Profession}</h2>
        <h3>{props.payload[4].Songs}</h3>
        <h4>{props.payload[4].Songduration}</h4>
        </div>
</div>
    )
}
export default Singers;