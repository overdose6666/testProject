import React, {Component} from "react";
import Fooditem from "./Fooditem"

class FoodPanels extends Component{
    foods=[]
    render() {
        return(
        <>
            <div className="title-wrap">
                <div
                    className="home-item-title"
                    data-resize="1">生鲜精选</div>
            </div>
            <div className="food-panel">
                <div className="top">

                </div>
                <div className="content">
                    <Fooditem />
                    <Fooditem />
                    <Fooditem />
                    <Fooditem />
                    {/*    this.foods.map(p => {*/}
                    {/*        return (*/}
                    {/*            <div className="column is-3">*/}
                    {/*                <Fooditem product={p}/>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        </>
        );
    }
}
export default FoodPanels;