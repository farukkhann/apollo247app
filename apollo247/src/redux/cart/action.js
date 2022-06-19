import axios  from "axios";

export const cartActions={
    ADDTO_CART_REQUEST: 'ADDTO_CART_REQUEST',
    ADDTO_CART_SUCCESS: 'ADDTO_CART_SUCCESS',
    ADDTO_CART_FAILURE: 'ADDTO_CART_FAILURE',

    REMOVE_CART_REQUEST: 'REMOVE_CART_REQUEST',
    REMOVE_CART_SUCCESS: 'REMOVE_CART_SUCCESS',
    REMOVE_CART_FAILURE: 'REMOVE_CART_FAILURE',

    GET_CART_REQUEST: 'GET_CART_REQUEST',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_FAILURE: 'GET_CART_FAILURE',
}


export const addToCartRequest = () => ({
    type: cartActions.ADDTO_CART_REQUEST,
});

export const addToCartSuccess = (product) => ({
    type: cartActions.ADDTO_CART_SUCCESS,
    payload: product
});

export const addToCartFailure = (error) => ({
    type: cartActions.ADDTO_CART_FAILURE,
    payload: error
});

//////////////////////////////////////////////////////////////////////////////////////////////
export const getCartRequest = () => ({
    type: cartActions.GET_CART_REQUEST,
});

export const getCartSuccess = (cart) => ({
    type: cartActions.GET_CART_SUCCESS,
    payload: cart
});

export const getCartFailure = (error) => ({
    type: cartActions.GET_CART_FAILURE,
    payload: error
});

//////////////////////////////////////////////////////////////////////////////////////////////
export const removeCartRequest = () => ({
    type: cartActions.REMOVE_CART_REQUEST,
});
export const removeCartSuccess = () => ({
    type: cartActions.REMOVE_CART_SUCCESS,
    // payload: product
}
);
export const removeCartFailure = (error) => ({
    type: cartActions.REMOVE_CART_FAILURE,
    payload: error
}
);



export const    addToCart=(product)=>(dispatch)=>{
    dispatch(addToCartRequest());
    console.log(product)
    return axios.post('http://localhost:8080/cart',product)
    .then(response=>{
        dispatch(addToCartSuccess(response.data));
        
    }).catch(error=>{
        dispatch(addToCartFailure(error));
    }
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////


export const getCartData=()=>(dispatch)=>{
    dispatch(getCartRequest());
    return axios({
        method:"get",
        url:"http://localhost:8080/cart",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        dispatch(getCartSuccess(response.data));
    }
    ).catch(error=>{
        dispatch(getCartFailure(error));
    }
    )
}


//////////////////////////////////////////////////////////////////////////////////////////////


export const removeCart=(id)=>(dispatch)=>{
    dispatch(removeCartRequest());
    return axios({
        method:"delete",
        url:`http://localhost:8080/cart/${id}`,
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        alert("Product Removed from Cart");
        dispatch(removeCartSuccess(response.data));

    })
    .catch(error=>{
        dispatch(removeCartFailure(error));
    }
    )
}

