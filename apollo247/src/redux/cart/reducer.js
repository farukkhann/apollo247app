import { cartActions } from "./action";
const initState = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartActions.ADDTO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartActions.ADDTO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case cartActions.ADDTO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case cartActions.GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartActions.GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case cartActions.GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
