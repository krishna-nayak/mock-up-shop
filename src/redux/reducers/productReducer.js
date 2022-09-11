import { ActionTypes } from "../contants/action-types";

const initail = { products: [] };
export const productReducer = (state = initail, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
