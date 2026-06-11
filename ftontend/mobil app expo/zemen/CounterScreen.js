import { View,Text,Button } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { increase,decrease,reset } from "./redux/CounterSlice";

export default function CounterScreen(){
    const counter=useSelector(state=> state.counter.value)
    const dispatch=useDispatch()
    return<View>
        <Text style={{fontSize:60,textAlign:"center"}}>{counter}</Text>

        <Button title="increament" onPress={()=>dispatch(increase())}/>
        <Button title="decreament" onPress={()=>dispatch(decrease())}/>
        <Button title="reset" onPress={()=>dispatch(reset())}/>
    </View>
}