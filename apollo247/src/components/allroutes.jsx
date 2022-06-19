import {Route,Routes} from "react-router-dom"
import { Cartcomo } from "./cart"
import { Home } from "./home"
import Login from "./login"
import { ProductsCompo } from "./Products"
import Register from "./Register"
// import {  MainCompoCart, MainCompoHome } from "./maincompo"
export const AllRoutes=()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cartcomo/>}></Route>
        <Route path="/product" element={<ProductsCompo/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
}