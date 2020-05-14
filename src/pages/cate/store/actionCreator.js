import axios from "axios";
import { actionTypes } from "./";

export const initCateData = () => {
  return (dispatch) => {
    axios
      .get("/api/Cate.json")
      .then((res) => {
        const action = {
          type: actionTypes.INIT_CATE_DATA,
          cateList: res.data.data.cateList,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log("fetch cate data failed", err);
      });
  };
};
