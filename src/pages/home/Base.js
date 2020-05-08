import React, { Component } from "react";
import Autoplay from "./Autoplay";
import Categories from "./Categories";
import FoodPanels from "./FoodPanels";
import TopBar from "../../common/TopBar";
import Searchbar from "../../common/Searchbar";
import Ranklist from "./Ranklist";
import "../../styles/home.scss";
import { connect } from "react-redux";
import { actionCreators } from "./store/base";
import "../../styles/home.scss";

class Base extends Component {
  componentDidMount() {
    this.props.initBaseData();
  }

  render() {
    console.log(this.props);
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
        {this.props.bestSelling && (
          <Ranklist bestSelling={this.props.bestSelling.toJS()} />
        )}
        <div className="title-wrap">
          <div className="home-item-title" data-resize="1">
            生鲜精选
          </div>
        </div>
        {/*/!*商品分类展示*!/*/}
        {this.props.select &&
          this.props.select.toJS().map((p) => {
            return (
              <div>
                <FoodPanels foodpanel={p} key={p.category} />
              </div>
            );
          })}
      </>
    );
  }
}

const mapState = (state) => ({
  bestSelling: state.getIn(["home", "bestSelling"]),
  select: state.getIn(["home", "select"]),
});

const mapDispatch = (dispatch) => ({
  initBaseData: () => {
    dispatch(actionCreators.initBaseData());
  },
});

export default connect(mapState, mapDispatch)(Base);
