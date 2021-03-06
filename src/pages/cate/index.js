import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import TopBar from "../../common/TopBar";
import Searchbar from "../../common/Searchbar";
import { Tabs, WhiteSpace } from "antd-mobile";
import "../../styles/cate.scss";
import CateItem from "./CateItem";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import NavFooter from "../../common/NavFooter";

class Cate extends Component {
  componentDidMount = () => {
    this.props.initCateData();
  };

  renderContent = (tab) => (
    <div
      style={{
        display: "flex",
        alignItems: "left",
        justifyContent: "space-around",
        height: "500px",
        backgroundColor: "#fff",
      }}
    >
      <div className="list-con">
        <div className="con-box">
          <div className="title">
            <span className="module-title">{tab.title}</span>
          </div>
          <div className="food-con">
            {this.props.cateList &&
              this.props.cateList.toJS().map((list) => {
                return list.category !== tab.title ? null : (
                  <>
                    {list.foodlist.map((food) => {
                      return <CateItem key={food.id} food={food} />;
                    })}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    const tabs = [
      { title: "热门推荐", key: "t1" },
      { title: "美味水果", key: "t2" },
      { title: "新鲜蔬菜", key: "t3" },
      { title: "精选肉类", key: "t4" },
      { title: "海鲜水产", key: "t5" },
      { title: "乳品冷饮", key: "t6" },
      { title: "方便速食", key: "t7" },
    ];
    return (
      <>
        <TopBar />
        <Searchbar />
        <div>
          <WhiteSpace />
          <Tabs
            tabs={tabs}
            initialPage={"t1"}
            tabBarPosition="left"
            tabDirection="vertical"
            tabBarUnderlineStyle={{ borderColor: "#32cd32" }}
            // renderTabBar:右侧内容区渲染函数
            renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={7} />}
          >
            {this.renderContent}
          </Tabs>
          <WhiteSpace />
        </div>
          <NavFooter history={this.props.history} ></NavFooter>
      </>
    );
  }
}

const mapState = (state) => ({
  cateList: state.getIn(["cate", "cateList"]),
});

const mapDispatch = (dispatch) => ({
  initCateData: () => {
    dispatch(actionCreators.initCateData());
  },
});

export default connect(mapState, mapDispatch)(Cate);
