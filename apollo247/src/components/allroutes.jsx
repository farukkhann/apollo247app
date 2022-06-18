import {Route,Routes} from "react-router-dom"
import { Cartcomo } from "./cart"
import { Home } from "./home"
// import {  MainCompoCart, MainCompoHome } from "./maincompo"
export const AllRoutes=()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cartcomo/>}></Route>
    </Routes>
    </>
}