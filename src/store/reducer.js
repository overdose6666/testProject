import { combineReducers } from "redux-immutable";
import { homeReducer } from "../pages/home/store/base";
import { cateReducer } from "../pages/cate/store";
import { detailReducer } from "../pages/foodsdetail/store";

const reducer = combineReducers({
  home: homeReducer,
  cate: cateReducer,
  detail: detailReducer,
});

export default reducer;
