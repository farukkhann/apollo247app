import axios from "axios"
import * as types from "./actiontypes"



export const Registerrequest=()=>{
    return {
        type:types.REGISTER_REQUEST
    }
}
export const RegisterSuccess=(payload)=>{
    return {
        type:types.REGISTER_SUCCESS,
        payload

    }
}
export const RegisterFailure=()=>{
    return {
        type:types.REGISTER_FAILURE
    }
}

export const Register=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(Registerrequest())
   return axios.post("https://shop-clone-api.herokuapp.com/register",data).then((res)=>{
        console.log(res)
        dispatch(RegisterSuccess())
        alert("Register Success")
    }).catch((err)=>{
        dispatch(RegisterFailure)
    })
}