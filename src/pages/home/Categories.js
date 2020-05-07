import React, { Component } from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import Entryitem from "./Entryitem";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.categories = [
      {
        id: 1,
        name: "海鲜水产",
        image: "images/fish.png",
      },
      {
        id: 2,
        name: "新鲜果蔬",
        image: "images/fruit.png",
      },
      {
        id: 3,
        name: "肉禽蛋品",
        image: "images/meat.png",
      },
      {
        id: 4,
        name: "乳品冷饮",
        image: "images/milk.png",
      },
      {
        id: 5,
        name: "方便速食",
        image: "images/fastfood.png",
      },
    ];
  }

  render() {
    return (
      <>
        <div className="quick-entry-module-5x">
          {this.categories &&
            this.categories.map((p) => {
              return (
                <>
                  <Entryitem categories={p} />
                </>
              );
            })}
        </div>
      </>
    );
  }
}
export default Categories;
