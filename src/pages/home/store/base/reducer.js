import { fromJS } from "immutable";
import { actionTypes } from "./";

const defaultState = fromJS({
  bestSelling: [],
  select: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
