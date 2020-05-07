import React, { Component } from "react";
import Fooditem from "./Fooditem";

class FoodPanels extends Component {
  render() {
    console.log(123321)
    console.log(this.props)
    const { image, context } = this.props.foodpanel;
    return (
      <>
        <div className="food-panel">
          <div className="top">
            <img data-src="done" className="opa1" src={image}></img>
          </div>
          <div className="content">
            {this.props.foodpanel.context.map((p) => {
              return (
                <div>
                  <Fooditem fooditem={p} />
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
