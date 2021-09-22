import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  loading: true,
  cartAmount: 0,
  cartCleared: false,
  cartTotalAmount: 0,
};
// destructured action to type and payload instead
export const productReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case ActionTypes.INCREASE_AMOUNT:
      return {
        ...state,
        cartAmount: state.cartAmount + payload,
        cartTotalAmount:
          state.cartTotalAmount + payload * state.products[id].price,
      };
    case ActionTypes.DECREASE_AMOUNT:
      if (
        state.cartAmount <= 0 ||
        state.cartTotalAmount - payload * state.products[id].price <= 0
      ) {
        return {
          ...state,
          cartAmount: 0,
          cartTotalAmount: 0,
        };
      } else {
        return {
          ...state,
          cartAmount: state.cartAmount - payload,
          cartTotalAmount:
            state.cartTotalAmount - payload * state.products[id].price,
        };
      }
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
        cartCleared: true,
        cartAmount: 0,
        cartTotalAmount: 0,
      };
    default:
      return state;
  }
};
