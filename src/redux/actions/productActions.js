import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const increaseAmount = (id) => {
  return {
    type: ActionTypes.INCREASE_AMOUNT,
    payload: 1,
    id: id,
  };
};

export const decreaseAmount = (id) => {
  return {
    type: ActionTypes.DECREASE_AMOUNT,
    payload: 1,
    id: id,
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};
