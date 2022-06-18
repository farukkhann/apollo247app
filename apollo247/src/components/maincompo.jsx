import { Navbar } from "./navbar"
import "./mainCompo.css"
import {Heading} from "@chakra-ui/react"
import { Home } from "./home"

export const MainCompo=()=>{
    return <div id="mainOut">
    <Navbar/>
    <Home/>
    </div>
}

