import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartData } from "../redux/cart/action"


export const Cartcomo=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCartData())
    },[])
    const data=useSelector((state)=>state.cart)
    console.log(data)
    return <>
    <h1>cart here</h1>
    </>

}