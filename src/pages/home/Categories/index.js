import React, {Component} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import Entryitem from "../Entryitem";

class Categories extends Component{
    categories=[
        {
            id:1,
            name:'海鲜水产',
            image:'images/fish.png',
        },
        {
            id:2,
            name:'美味水果',
            image:'images/fish.png',
        },
        {
            id:3,
            name:'肉禽蛋品',
            image:'images/fish.png',
        },
        {
            id:4,
            name:'乳品冷饮',
            image:'images/fish.png',
        },
        {
            id:5,
            name:'面点速食',
            image:'images/fish.png',
        }
    ]
    render() {
        return(
            <>
                <div className="quick-entry-module-5x">
                    {
                        this.categories.map(p =>{
                            return(
                                <>
                                <Entryitem categories={p} />
                                </>
                            )
                        })
                    }
                </div>
            </>
        );
    }
}
export default Categories