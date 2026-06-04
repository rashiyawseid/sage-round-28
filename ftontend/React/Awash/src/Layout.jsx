import {outlet} from "react-router-dom";
import NavBar from "./Component/NavBar";
export default function Layout(){
    return<>
    <NavBar/>
    <outlet/>
    <h1>Footer</h1>
    </>
}