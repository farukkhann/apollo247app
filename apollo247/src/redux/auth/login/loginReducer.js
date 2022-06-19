 
import * as types from "./actiontypes"
const initState={
   isLoggingin:false,
   LoginSuccess:false,
   LoginFailed:false,
   user:[]
}

export const loginReducer=(state=initState,{type,payload})=>{
        
       switch(type){
           case types.LOGIN_REQUEST:{
               return{
                   ...state,
                   isLoggingin:true
               }
           }
           case types.LOGIN_SUCCESS:{
               return{
                   ...state,
                  LoginSuccess:true,
                  user:payload
               }
           }
           case types.LOGIN_FAILURE:{
               return{
                   ...state,
                 LoginFailed:true,
                 LoginSuccess:false,
               }
           }
           default:{
            return{
                state
            }
           }
       }
}