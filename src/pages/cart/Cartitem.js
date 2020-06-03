import React, { Component } from "react";
import "../../styles/cart.scss";
import { WhiteSpace, Button } from "antd-mobile";

class Cartitem extends Component {
  render() {
    const { id, title, norm, imgUrl, price, quant, checked } = this.props.item;
    return (
      <>
        <div className="cart-card">
          <div className="card-delete">
            {this.props.item.checked && (
              <input
                type="checkbox"
                name="cartItem"
                checked
                onClick={() => {
                  this.props.handleCheck(id);
                }}
              />
            )}
            {!this.props.item.checked && (
              <input
                type="checkbox"
                name="cartItem"
                onClick={(e) => {
                  this.props.handleCheck(id);
                }}
              />
            )}
          </div>
          <div className="cart-item-img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="cart-item-info">
            <div className="cart-item-title">{title}</div>
            <span className="cart-item-norm">{norm}</span>
            <div className="cart-item-pbox">
              <div className="cart-item-price">
                <span>￥</span>
                {price}
              </div>
              <div className="cart-item-quant">
                <Button
                  type="ghost"
                  inline
                  size="small"
                  className="cart-item-button"
                  activeStyle={false}
                  onClick={() => {
                    this.props.handlePlus(id, -1);
                  }}
                >
                  -
                </Button>
                <div className="cart-item-input">
                  <input type="text" value={quant} />
                </div>
                <Button
                  type="ghost"
                  inline
                  size="small"
                  className="cart-item-button"
                  activeStyle={false}
                  onClick={() => {
                    this.props.handlePlus(id, 1);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <WhiteSpace size="lg" />
      </>
    );
  }
}

export default Cartitem;
