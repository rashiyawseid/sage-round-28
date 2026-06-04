import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reseat } from "./redux/CounterSlice";


export default function App(){
  const count =useSelector (state=> state.counter.value);
  const dispatch =useDispatch();
  return<>
  <h1>{count}</h1>
  <button onClick={()=>dispatch(Increment())}>Increment</button>
  <button onClick={()=>dispatch(Decrement())}>Decrement</button>
  <button onClick={()=>dispatch(Reseat())}>Reseat</button>
  </>
}