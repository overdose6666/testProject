import axios from "axios";
import { actionTypes } from "./";

export const initCartData = () => {
  return (dispatch) => {
    axios
      .get("/api/Cart.json")
      .then((res) => {
        const cartList = res.data.data.cartList.map((item) => {
          return { ...item, checked: true };
        });
        const action = {
          type: actionTypes.INIT_CART_DATA,
          cartList,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log("fetch cart data failed", err);
      });
  };
};

export const changeQuant = (newList) => {
  const action = {
    type: actionTypes.CHANGE_QUANT,
    newList,
  };
  return action;
};

export const changePickAll = (checked) => {
  return {
    type: actionTypes.CHANGE_PICK_ALL,
    pickAll: !checked,
  };
};
