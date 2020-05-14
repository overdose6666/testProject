import React, { Component } from "react";

class CateItem extends Component {
  render() {
    // cate_food1.png,cate_food2.png是这里的图片
    const { name, imgUrl } = this.props.food;
    return (
      <>
        <div className="food-con-item">
          <img src={imgUrl} />
          <em>{name}</em>
        </div>
      </>
    );
  }
}
export default CateItem;
