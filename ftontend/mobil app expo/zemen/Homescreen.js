import{View,Button} from "react-native"

export default function Homescreen({navigation}){
    return<View>
        <Button title="Go to Details Screen" onPress={()=>navigation.navigate("details")}
            />
             <Button title="Go to FlatListScreen" onPress={()=>navigation.navigate("FlatListScreen")}
             />
    </View>
}