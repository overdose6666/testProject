import { combineReducers } from "redux-immutable";
import { homeReducer } from "../pages/home/store/base";
import { cateReducer } from "../pages/cate/store";

const reducer = combineReducers({
  home: homeReducer,
  cate: cateReducer,
});

export default reducer;
