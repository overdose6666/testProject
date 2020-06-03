import React, { Component } from "react";
import "../../styles/cart.scss";
import NavFooter from "../../common/NavFooter";
import { Icon, NavBar, WhiteSpace } from "antd-mobile";
import Cartitem from "./Cartitem";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Cart extends Component {
  componentDidMount = () => {
    this.props.initCartData();
  };

  handlePlus = (id, value) => {
    let newList = this.props.cartList.toJS().map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        if (item.quant + value !== 0) {
          return { ...item, quant: item.quant + value };
        }
      }
    });
    newList = newList.filter((item) => item !== undefined);
    this.props.changeQuant(newList);
  };

  handleCheck = (id) => {
    let newList = this.props.cartList.toJS().map((item) => {
      return item.id !== id ? item : { ...item, checked: !item.checked };
    });
    this.props.changeQuant(newList);
  };

  handlePickAll = (checked) => {
    this.props.changePickAll(checked);
    let newList = this.props.cartList.toJS().map((item) => {
      return { ...item, checked: !checked };
    });
    this.props.changeQuant(newList);
  };

  render() {
    return (
      <>
        <NavBar mode="light" rightContent={[<Icon key="1" type="ellipsis" />]}>
          我的购物车
        </NavBar>
        <div className="body">
          {/*没登录*/}
          {/* <div className="login">
            <p>登录后同步电脑与手机购物车的商品</p>
            <a>去登录</a>
          </div> */}
          {/*购物车里没东西 去首页*/}
          {/* <div className="cart-content-empty">
            <span class="empty-cart-tip">购物车还空空如也哦，快去逛逛吧</span>
            <div className="lead">
              <a className="lead-click" href="//m.suning.com">
                去逛逛
              </a>
            </div>
          </div> */}
          <WhiteSpace size="lg" />
          <div className="cart-cart-wrapper">
            {this.props.cartList &&
              this.props.cartList.toJS().map((item) => {
                return (
                  <Cartitem
                    key={item.id}
                    item={item}
                    handlePlus={this.handlePlus}
                    handleCheck={this.handleCheck}
                  />
                );
              })}
          </div>
          <div className="cart-account-wrapper">
            <div className="cart-total">
              {this.props.pickAll && (
                <input
                  type="checkbox"
                  name="pickAll"
                  checked
                  onClick={() => this.handlePickAll(this.props.pickAll)}
                />
              )}
              {!this.props.pickAll && (
                <input
                  type="checkbox"
                  name="pickAll"
                  onClick={() => this.handlePickAll(this.props.pickAll)}
                />
              )}
              <span>
                全选（{this.props.cartList && this.props.cartList.toJS().length}
                ）
              </span>
              <span>合计: </span>
              <span>￥</span>
              <span>
                {this.props.cartList &&
                  Math.round(
                    this.props.cartList.toJS().reduce((prev, cur) => {
                      if (cur.checked) {
                        return prev + cur.price * cur.quant;
                      } else {
                        return prev + 0;
                      }
                    }, 0) * 100
                  ) / 100}
              </span>
            </div>
            <div className="cart-account-btn">结算</div>
          </div>
        </div>
        <NavFooter history={this.props.history} />
      </>
    );
  }
}

const mapState = (state) => ({
  cartList: state.getIn(["cart", "cartList"]),
  pickAll: state.getIn(["cart", "pickAll"]),
});

const mapDispatch = (dispatch) => ({
  initCartData: () => {
    dispatch(actionCreators.initCartData());
  },
  changeQuant: (newList) => {
    dispatch(actionCreators.changeQuant(newList));
  },
  changePickAll: (checked) => {
    dispatch(actionCreators.changePickAll(checked));
  },
});

export default connect(mapState, mapDispatch)(Cart);
