import Header from "./Header";
import Great from "./Greet";
import Footer from "./Footer";
import Counter from "./Counter";
import Goal from "./Goal";
import Garage from "./Garage";
import List from "./List";
import Styling from "./Styling";


export default function App(){
  return<>
  <Header/>
  <Great name="Abebe"/>
  <Great name="chala"/>
  <Great name="dawit"/>
  <Footer/>
  <Counter/>
  <Goal isGoal={false}/>
  <Garage cars={["bmw","byd","toyota"]}/>
  <List/>
  <Styling/>
  </>
}