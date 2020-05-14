import { fromJS } from "immutable";
import { actionTypes } from "./";

const defaultState = fromJS({
  cateList: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATE_DATA:
      return state.merge({
        cateList: fromJS(action.cateList),
      });
    default:
      return state;
  }
};
