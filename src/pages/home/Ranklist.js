import React, {Component} from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import Fooditem from "./Fooditem";
import axios from "axios";

class Ranklist extends Component{
    state={
        rank_foods:[]
    };
    componentDidMount() {
        axios.get('http://localhost:3003/rank_foods').then(response => {
            this.setState({
                rank_foods:response.data
            })
        })
    }

    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                {
                    this.state.rank_foods.map(p => {
                        return (
                            <div>
                                <Fooditem fooditem={p}/>
                            </div>
                        )
                    })
                }
        </div>);
    render() {
        const tabs = [
            { title: '果蔬' },
            { title: '海鲜' },
            { title: '肉类' },
            { title: '禽蛋' },
            { title: '乳品' },
            { title: '速食' },

        ];
        return(
            <>
                <div className="rank-panel">
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