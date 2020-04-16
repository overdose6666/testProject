import React, { Component } from 'react';
import Autoplay from './Autoplay'
import Categories from './Categories'
import FoodPanels from "./FoodPanels"
import TopBar from '../../common/TopBar'
import Searchbar from "../../common/Searchbar";
import Ranklist from './Ranklist'
import '../../styles/home.scss'


class Base extends Component {
    render() {
        return(
            <>
                <TopBar />
                <Searchbar />
                {/*轮播图*/}
                <Autoplay />
                {/*商品分类*/}
                <Categories />
                {/*/!*销量榜单*!/*/}
                <Ranklist />
                {/*/!*商品分类展示*!/*/}
                <FoodPanels />
            </>
        );
    }
}

export default Base;