import axios from "axios";


export const ProductsAction={
    GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',

    GET_FILTERED_PRODUCTS_SUCCESS: 'GET_FILTERED_PRODUCTS_SUCCESS',
}



export const getProductsRequest = () => ({
    type: ProductsAction.GET_PRODUCTS_REQUEST
});

export const getProductsSuccess = (products) => ({
    type: ProductsAction.GET_PRODUCTS_SUCCESS,
    payload: products
});

export const getProductsFailure = (error) => ({
    type: ProductsAction.GET_PRODUCTS_FAILURE,
    payload: error
});

export const getFilteredProductsSuccess= (payload) => ({
    type: ProductsAction.GET_FILTERED_PRODUCTS_SUCCESS,
    payload: payload
});



export const getProducts=()=>(dispatch)=>{
    dispatch(getProductsRequest());
    return axios({
        method:"get",
        url:"http://localhost:8080/products",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{

        dispatch(getProductsSuccess(response.data));
        
    }).catch(error=>{
        dispatch(getProductsFailure(error));
    }
    )
}


export const getFilteredProducts=(payload)=>(dispatch)=>{
    // dispatch(getFilteredProductsRequest(payload));
    return axios({
        method:"get",
        url:"http://localhost:8080/products",
        params:{
            category:payload
        }
    }).then(response=>{
        console.log(response.data);
        dispatch(getFilteredProductsSuccess(response.data));
    }
    )
}

