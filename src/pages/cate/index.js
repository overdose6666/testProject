import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import TopBar from '../../common/TopBar'
import Searchbar from "../../common/Searchbar"
import { Tabs, WhiteSpace } from 'antd-mobile';
import "../../styles/cate.scss";
import Foodlist from "./Foodlist";


class Cate extends Component {
    foodcontent=[
        {
            id:1,
            category:'热门推荐',
            foodlist:[
                {
                    id:1,
                    name:'车厘子',
                    imgUrl: 'images/cate_food1.png'
                },
                {
                    id:2,
                    name:'鸡翅',
                    imgUrl: 'images/cate_food2.png'
                }
            ]
        },
        {
            id:2,
            category:'新鲜水果',
            foodlist:[
                {
                    id:1,
                    name:'车厘子',
                    imgUrl: 'images/cate_food1.png'
                },
                {
                    id:2,
                    name:'鸡翅',
                    imgUrl: 'images/cate_food2.png'
                }
            ]
        },
    ]
    renderContent = tab =>
        (<div style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            height: '400px',
            backgroundColor: '#fff'
        }}
        >
            <div className="list-con">
                <div className="con-box">
                    <div className="title">
                        <span className="module-title">热门精选</span>
                    </div>
                    <div className="food-con">
                       <Foodlist />
                       <Foodlist />
                       <Foodlist />
                    </div>
                </div>
            </div>
        </div>);


    render() {
        const tabs = [
            { title: '热门推荐', key: 't1' },
            { title: '美味水果', key: 't2' },
            { title: '新鲜蔬菜', key: 't3' },
            { title: '精选肉类', key: 't4' },
            { title: '海鲜水产', key: 't5' },
            { title: '乳品冷饮', key: 't6' },
            { title: '方便速食', key: 't7' }
        ]
        return(
            <>
                <TopBar />
                <Searchbar />
                <div>
                    <WhiteSpace />
                    <Tabs tabs={tabs}
                          initialPage={'t1'}
                          tabBarPosition="left"
                          tabDirection="vertical"
                          // renderTabBar:右侧内容区渲染函数
                          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={7} />}
                    >
                            {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
                </div>
            </>
        );
    }
}
export default Cate;