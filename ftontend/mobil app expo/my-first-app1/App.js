import { View, Text, Button, Image, ScrollView, TextInput, Pressable, ActivityIndicator, Switch } from "react-native"
import { useState } from "react"
import Greet from './Greet'

export default function App() {
  const [isOn,setIsOn] = useState(false)
  return <ScrollView>
    <View style={{
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{ color: "blue", fontSize: '30px' }}>my first app</Text>
      <Button title="Click" onPress={()=>alert("button clicked")}/>

      <Image
        source={{ uri: "https://www.sageethiopia.com/_next/image?url=%2Fimages%2Faccounting.jpg&w=3840&q=75" }}
        style={{ width: 150, height: 150 }}
      />

      <Image
        source={require("./assets/image.png")}
        style={{ width: 150, height: 150 }}
      />
      <TextInput placeholder="Enter your name" 
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          backgroundColor:"pink"
        }}
      />
      <Pressable onPress={()=>alert("Pressable clicked!!")}>
        <Text
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: "pink"
          }}
        >Click</Text>

      </Pressable>
      <ActivityIndicator size="large" color="white" />
      <Switch value={isOn} onValueChange={setIsOn}/>
      <Greet name="Abebe"/>
      <Greet name="Kebede"/>
      <Greet name="chala"/>
    </View>
  </ScrollView>
}
