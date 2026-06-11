import{View,Button} from "react-native"

export default function Homescreen({navigation}){
    return<View>
        <Button title="Go to Details Screen" onPress={()=>navigation.navigate("details")}
            />
             <Button title="Go to FlatListScreen" onPress={()=>navigation.navigate("FlatListScreen")}
             />
             <Button title="Go to ApiCall" onPress={()=>navigation.navigate("ApiCall")}
             />
             <Button title="Go to CounterScreen" onPress={()=>navigation.navigate("CounterScreen")}
             />
    </View>
}