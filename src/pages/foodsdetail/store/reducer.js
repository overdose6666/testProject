import { fromJS } from "immutable";
import { actionTypes } from "./";

const defaultState = fromJS({
  detailData: {},
  norm: "",
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_DETAIL_DATA:
      return state.merge({
        detailData: fromJS(action.detailData),
      });
    case actionTypes.CHANGE_NORM:
      return state.merge({
        norm: fromJS(action.norm),
      });
    default:
      return state;
  }
};
