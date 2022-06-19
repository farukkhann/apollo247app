

import {legacy_createStore} from "redux"
import { combineReducers } from "redux"
import { compose } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { loginReducer } from "./auth/login/loginReducer"
import { RegisterReducer } from "./auth/register/registerReducer"
import { cartReducer } from "./cart/reducer"
import { ProductsReducer } from "./products/reducer"


let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
    // ...your other reducers here
    products: ProductsReducer,
    cart:cartReducer,
    register:RegisterReducer,
    login:loginReducer

})

export const store=legacy_createStore(rootReducer,enhancer)
