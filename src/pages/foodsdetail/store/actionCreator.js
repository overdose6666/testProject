import axios from "axios";
import { actionTypes } from "./";

//then:请求url的返回结果 dispatch(action)：将action传给reducer.js
export const initDetailData = () => {
  return (dispatch) => {
    axios
      .get("/api/Detail.json")
      .then((res) => {
        const action = {
          type: actionTypes.INIT_DETAIL_DATA,
          detailData: res.data.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log("fetch cate data failed", err);
      });
  };
};

export const changeNorm = (norm) => {
  const action = {
    type: actionTypes.CHANGE_NORM,
    norm,
  };
  return action;
};
