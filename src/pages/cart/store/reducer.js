import { fromJS } from "immutable";
import { actionTypes } from "./";

const defaultState = fromJS({
  cartList: [],
  pickAll: true,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CART_DATA:
      return state.merge({
        cartList: fromJS(action.cartList),
      });
    case actionTypes.CHANGE_QUANT:
      return state.merge({
        cartList: fromJS(action.newList),
      });
    case actionTypes.CHANGE_PICK_ALL:
      return state.merge({
        pickAll: fromJS(action.pickAll),
      });
    default:
      return state;
  }
};
