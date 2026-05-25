import React,{useState} from "react";

export default function Counter(){
    const[Counter,setCounter]=useState(0)

    return<>
    <h1>{Counter}</h1>
    <button onClick={()=>{setCounter(Counter+1)}}>Add</button>
    <button onClick={()=>{setCounter(Counter-1)}}>subtract</button>
    </>
}