import axios from "axios";
import { actionTypes } from "./";

export const initBaseData = () => {
  return (dispatch) => {
    axios
      .get("/api/Home.json")
      .then((res) => {
        const action = {
          type: actionTypes.REQUEST_BASE_DATA,
          bestSelling: res.data.data.bestSelling,
          select: res.data.data.select,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log("fetch base data failed", err);
      });
  };
};
