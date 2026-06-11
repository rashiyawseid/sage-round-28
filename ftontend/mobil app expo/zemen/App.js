import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homescreen from "./Homescreen"
import Detailscreen from "./Detailscreen"
import FlatListScreen from "./FlatListScreen"
import ApiCall from "./ApiCall"
import CounterScreen from "./CounterScreen"
import { Provider } from "react-redux"
import { Store } from "./redux/Store"


const Stack= createNativeStackNavigator()

export default function App(){

  return<Provider store ={Store}>
  <NavigationContainer>
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="home" component ={Homescreen}/>
    <Stack.Screen name="details" component ={Detailscreen}/>
    <Stack.Screen name="FlatListScreen" component ={FlatListScreen}/>
    <Stack.Screen name="ApiCall" component ={ApiCall}/>
    <Stack.Screen name="CounterScreen" component ={CounterScreen}/>
    </Stack.Navigator>

  </NavigationContainer>
  </Provider>
}
