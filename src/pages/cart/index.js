import React, { Component } from 'react';
import "../../styles/cart.scss";
import NavFooter from "../../common/NavFooter";
import {Icon, NavBar} from "antd-mobile";

class Cart extends Component {
    render(){
        return(
            <>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >我的购物车</NavBar>
                <div className="body">
                {/*没登录*/}
                <div className="login">
                    <p>登录后同步电脑与手机购物车的商品</p>
                    <a>去登录</a>
                </div>
                {/*购物车里没东西 去首页*/}
                <div className="cart-content-empty">
                    <span class="empty-cart-tip">购物车还空空如也哦，快去逛逛吧</span>
                    <div className="lead">
                        <a className="lead-click" href="//m.suning.com">去逛逛</a>
                    </div>
                </div>
                </div>
                <NavFooter history={this.props.history} ></NavFooter>
            </>
        );
    }
}
export default Cart;