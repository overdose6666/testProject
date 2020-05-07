import React, { Component } from "react";
import Autoplay from "./Autoplay";
import Categories from "./Categories";
import FoodPanels from "./FoodPanels";
import TopBar from "../../common/TopBar";
import Searchbar from "../../common/Searchbar";
import Ranklist from "./Ranklist";
import "../../styles/home.scss";
import axios from "axios";
import { connect } from "react-redux";
import { actionCreators } from "./store/base";

class Base extends Component {
  state = {
    foodpanels: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3003/foodpanels").then((response) => {
      this.setState({
        foodpanels: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <TopBar />
        <Searchbar />
        {/*轮播图*/}
        <Autoplay />
        {/*商品分类*/}
        <Categories />
        {/*/!*销量榜单*!/*/}
        <div className="title-wrap">
          <div className="home-item-title" data-resize="1">
            热卖榜单
          </div>
        </div>
        <Ranklist />
        <div className="title-wrap">
          <div className="home-item-title" data-resize="1">
            生鲜精选
          </div>
        </div>
        {/*/!*商品分类展示*!/*/}
        {this.state.foodpanels.map((p) => {
          return (
            <div>
              <FoodPanels foodpanel={p} />
            </div>
          );
        })}
      </>
    );
  }
}

const mapDispatch = (dispatch) => ({
  initBaseData: () => {
    dispatch(actionCreators.initBaseData());
  },
});

export default connect(null, mapDispatch)(Base);
