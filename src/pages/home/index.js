import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
// import Base from "./Base";
import Cate from "../cate";
import FoodDetail from "../foodsdetail"
import { TabBar } from "antd-mobile";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: false,
    };
    this.tabbars = [
      {
        icon: "images/index.png",
        selectedIcon: "images/index_active.png",
        title: "首页",
        key: "index",
      },
      {
        icon: "images/cate.png",
        selectedIcon: "images/cate_active.png",
        title: "分类",
        key: "cate",
      },
      {
        icon: "images/cart.png",
        selectedIcon: "images/cart_active.png",
        title: "购物车",
        key: "cart",
      },
      {
        icon: "images/my.png",
        selectedIcon: "images/my_active.png",
        title: "个人中心",
        key: "my",
      },
    ];
  }

  styleImage(url) {
    return (
      <div
        style={{
          width: "22px",
          height: "22px",
          background: "url(" + url + ") center center /  21px 21px no-repeat",
        }}
      />
    );
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ paddingTop: 60 }}>{pageText}</div>
      </div>
    );
  }
  render() {
    return (
      <>
        {/*/!*底部导航*!/*/}
        <div
          style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#949494"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="bottom"
          >
            {this.tabbars.map((v, i) => {
              return (
                <TabBar.Item
                  key={i}
                  title={v.title}
                  icon={this.styleImage(v.icon)}
                  selectedIcon={this.styleImage(v.selectedIcon)}
                  selected={this.state.selectedTab === v.key}
                  onPress={() => {
                    this.setState({
                      selectedTab: v.key,
                    });
                  }}
                  data-seed="logId"
                >
                  <FoodDetail />
                </TabBar.Item>
              );
            })}
          </TabBar>
        </div>
      </>
    );
  }
}

export default connect(null, null)(Home);
