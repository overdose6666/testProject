import React, {Component} from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import Fooditem from "./Fooditem";

class Ranklist extends Component{
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>
                <Fooditem />
                <Fooditem />
                <Fooditem />
                <Fooditem /></p>
        </div>);
    render() {
        const tabs = [
            { title: '海鲜' },
            { title: '水果' },
            { title: '蔬菜' },
            { title: '肉类' },
            { title: '冷冻食品' },
            { title: '乳品' },
        ];
        return(
            <>
                <div className="title-wrap">
                    <div
                        className="home-item-title"
                        data-resize="1">热卖榜单</div>
                </div>
                <div className="rank-panel">
                        <WhiteSpace />
                        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4}  />} >
                            {this.renderContent}
                        </Tabs>
                        <WhiteSpace />
                </div>
            </>
        );
    }
}
export default Ranklist;