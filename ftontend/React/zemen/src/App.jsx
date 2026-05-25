import {useState} from "react"

export default function App(){
  const [counter,setcounter]=useState(0)
  return<>
  <h1>{counter}</h1>
  <h2>on</h2>
  <button onClick={()=>{setchange(change)}}>on</button>
  <button onClick={()=>{setcounter(counter+1)}}>add</button>
  <button onClick={()=>{setcounter(counter-1)}}>subtract</button>
  <button onClick={()=>{setcounter(0)}}>reseat</button>
  </>
  
}

