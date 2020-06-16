import React, { Component } from 'react';
import "../../styles/my.scss";
import NavFooter from "../../common/NavFooter";

class My extends Component {
    render(){
        return(
            <>
                <div className="banner " >
                    <div className="nav-box ">
                        <div className="nav-title">个人中心</div>
                        {/*个人信息界面按钮，未登录时单击跳转到登陆界面*/}
                        <div className="nav-right tr pr">
                            <svg className="icon" aria-hidden="true" style={{marginTop:0}}>
                                <use xlinkHref="#icon-chilun"></use>
                            </svg>
                        </div>
                    </div>
                    {/*用户头像图片url：../images/user.png*/}
                    <div className="user-info">
                        <div className="user-logo">
                            <a href="#" className="fk-sa-click"
                            ><img src="#"></img></a>
                        </div>
                        <div className="user-detail">
                            <div className="user-name">
                                {/*未登录，若登录则显示用户名*/}
                                <span>登录/注册</span>
                            </div>
                        </div>
                    </div>
                </div>
       
        <div className="order" >
            <div className="box-title">
                <span>我的订单</span>
                {/*跳转到订单页面*/}
                <a className="fk-sa-click" id="all"
                   href="#"
                   name="allorder">查看全部&nbsp;<svg className="icon" aria-hidden="true"style={{margin:0}}
                >
                    <use xlinkHref="#icon-to-all"></use>
                </svg></a>
            </div>
            <div className="order-list">
                <a href="#"
                   name="waitpay" className="btn fk-sa-click" id="waitPay">
                    <svg className="icon" aria-hidden="true" >
                        <use xlinkHref="#icon-pay"></use>
                    </svg>
                    <span>待支付</span>
                </a>
                <a href="#"
                   name="waitdeliver" className="btn fk-sa-click" id="waitdeliver">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-deliever"></use>
                    </svg>
                    <span>待发货</span>
                </a>
                <a href="#"
                   name="waitget" className="btn fk-sa-click" id="waitReceive">
                    <svg className="icon" aria-hidden="true"
                        >
                        <use xlinkHref="#icon-receive"></use>
                    </svg>
                    <span>待收货</span>
                </a>
                <a href="#"
                   name="waitjudge" className="btn fk-sa-click" id="waitEvaluation">
                    <svg className="icon" aria-hidden="true"
                         >
                        <use xlinkHref="#icon-comment"></use>
                    </svg>
                    <span>待评价</span>
                </a>
                <a href="#"
                   name="aftersale" className="btn fk-sa-click">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-maintain"></use>
                    </svg>
                    <span style={{marginRight:5}}>退换/售后</span>
                </a>
            </div>
        </div>
         <NavFooter history={this.props.history} ></NavFooter>
        </>
        );
    }
}
export default My;
