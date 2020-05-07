import React, { Component } from "react";
import Fooditem from "./Fooditem";

class FoodPanels extends Component {
  render() {
    const { items, category } = this.props.foodpanel;
    return (
      <>
        <div className="food-panel">
          <div className="top">
            <img data-src="done" className="opa1" src={images[category]}></img>
          </div>
          <div className="content">
            {items &&
              items.map((item) => {
                return (
                  <div>
                    <Fooditem fooditem={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default FoodPanels;

const images = {
  "果蔬": "images/food_fruit.png",
  "海鲜": "images/food_fish.png",
  "肉类": "images/food_meat.png",
  "禽蛋": "images/food_egg.png",
  "乳品": "images/food_milk.png",
  "速食": "images/food_fastfood.png"
}
