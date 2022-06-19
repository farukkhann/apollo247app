const iniState={
    products:[],
    loading:false,
    error:null
}
import {ProductsAction} from "./action"

export const ProductsReducer=(state=iniState,action)=>{
    switch(action.type){
        case ProductsAction.GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case ProductsAction.GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case ProductsAction.GET_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

            case ProductsAction.GET_FILTERED_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                products:action.payload
            }

        default: return state
    }
}

