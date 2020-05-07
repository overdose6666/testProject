import axios from "axios";

export const initBaseData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3003/foodpanels")
      .then((res) => {
        
      })
      .then(console.log("fetch base data failed"));
  };
};
