import { createSlice } from "@reduxjs/toolkit";


const CounterSlice =createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increase:state=>{state.value +=1},
        decrease:state=>{state.value -=1},
        reset:state=>{state.value =0}
        
    }
})

export const {increase,decrease,reset} =CounterSlice.actions
export default CounterSlice.reducer