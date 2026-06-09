import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homescreen from "./Homescreen"
import Detailscreen from "./Detailscreen"
import FlatListScreen from "./FlatListScreen"

const stack= createNativeStackNavigator()

export default function App(){

  return<NavigationContainer>
  <stack.Navigator initialRouteName="home">
    <stack.Screen name="home" component ={Homescreen}/>
    <stack.Screen name="details" component ={Detailscreen}/>
    <stack.Screen name="FlatListScreen" component ={FlatListScreen}/>
    </stack.Navigator>

  </NavigationContainer>
}
