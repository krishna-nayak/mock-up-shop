import { ActionTypes } from "../contants/action-types";

const initail = [{ id: 1, title: "First Product", category: "Category 1" }];
export const productReducer = (state = initail, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
