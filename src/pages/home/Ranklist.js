import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import Fooditem from "./Fooditem";

class Ranklist extends Component {
  renderContent = (tab) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "150px",
          backgroundColor: "#fff",
        }}
      >
        {this.props.bestSelling &&
          this.props.bestSelling.map((p) => {
            return p.category !== tab.title ? null : (
              <>
                {p.items.map((item) => {
                  return <Fooditem fooditem={item} />;
                })}
              </>
            );
          })}
      </div>
    );
  };

  render() {
    const tabs = [
      { title: "果蔬" },
      { title: "海鲜" },
      { title: "肉类" },
      { title: "禽蛋" },
      { title: "乳品" },
      { title: "速食" },
    ];
    return (
      <>
        <div className="rank-panel">
          <Tabs
            tabs={tabs}
            renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
          >
            {this.renderContent}
          </Tabs>
          <WhiteSpace />
        </div>
      </>
    );
  }
}
export default Ranklist;
