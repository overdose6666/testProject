import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { TabBar } from "antd-mobile";

class NavFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "index",
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
                    width: "2.5rem",
                    height: "1.5rem",
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
                    style={{ position: "fixed",  width: "100%", bottom: 0 }}
                >
                    <TabBar
                        noRenderContent="true"
                        unselectedTintColor="#222222"
                        tintColor="#222222"
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
                                        this.props.history.push('/'+v.key)
                                        // this.props.router.changePath('/'+v.key)
                                        sessionStorage.setItem('__search_prev_path__','/'+v.key)
                                    }}
                                >
                                    {/*<FoodDetail />*/}
                                </TabBar.Item>
                            );
                        })}
                    </TabBar>
                </div>
            </>
        );
    }
}
export default NavFooter;