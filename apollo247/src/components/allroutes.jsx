import {Route,Routes} from "react-router-dom"
import { Cartcomo } from "./cart"
import { CheckOutCompo } from "./checkout"
import { Home } from "./home"
import Logincompo from "./login"
import { ProductsCompo } from "./Products"
import RegisterCompo from "./Register"
import { Thankyou } from "./Thankyou"

// import {  MainCompoCart, MainCompoHome } from "./maincompo"
export const AllRoutes=()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cartcomo/>}></Route>
        <Route path="/product" element={<ProductsCompo/>}></Route>
        <Route path="/login" element={<Logincompo/>}></Route>
        <Route path="/register" element={<RegisterCompo/>}></Route>
        <Route path="/checkout" element={<CheckOutCompo/>} ></Route>
        <Route path="/thankyou" element={<Thankyou/>}></Route>
    </Routes>
    </>
}