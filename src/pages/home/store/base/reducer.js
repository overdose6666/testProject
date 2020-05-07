import { fromJS } from "immutable";
import { actionTypes } from "./";

const defaultState = fromJS({
  bestSelling: [],
  select: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_BASE_DATA:
      return state.merge({
        bestSelling: fromJS(action.bestSelling),
        select: fromJS(action.select),
      });
    default:
      return state;
  }
};
