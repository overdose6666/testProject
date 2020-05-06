import React, { Component } from 'react';
import Autoplay from './Autoplay'
import Categories from './Categories'
import FoodPanels from "./FoodPanels"
import TopBar from '../../common/TopBar'
import Searchbar from "../../common/Searchbar";
import Ranklist from './Ranklist'
import '../../styles/home.scss'
import axios from 'axios';


class Base extends Component {
    foodpanels=[
        {
            id: 1,
            image: 'images/food_fruit.png',
            context:[
                {
                    id: 1,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'true'

                },
                {
                    id: 2,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'true'
                },
                {
                    id: 3,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'true'
                },
                {
                    id: 4,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'true'
                },
                {
                    id: 5,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'true'
                },
                {
                    id: 6,
                    name: '泰国金枕头榴莲',
                    image: 'images/foods_fruit.png',
                    price:'12.3',
                    store:'false'
                }
            ]
        },
        {
            id: 2,
            image: 'images/food_fish.png',
            context:[
                {
                    id: 1,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'true'

                },
                {
                    id: 2,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'true'
                },
                {
                    id: 3,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'true'
                },
                {
                    id: 4,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'true'
                },
                {
                    id: 5,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'true'
                },
                {
                    id: 6,
                    name: '厄瓜多尔白虾原装进口',
                    image: 'images/foods_fish.png',
                    price:'100',
                    store:'false'
                }
            ]
        },
        {
            id: 3,
            image: 'images/food_meat.png',
            context:[
                {
                    id: 1,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'true'

                },
                {
                    id: 2,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'true'
                },
                {
                    id: 3,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'true'
                },
                {
                    id: 4,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'true'
                },
                {
                    id: 5,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'true'
                },
                {
                    id: 6,
                    name: '澳洲原切眼肉牛排',
                    image: 'images/foods_meat.png',
                    price:'112.3',
                    store:'false'
                }
            ]
        },
        {
            id: 4,
            image: 'images/food_egg.png',
            context:[
                {
                    id: 1,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'true'

                },
                {
                    id: 2,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'true'
                },
                {
                    id: 3,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'true'
                },
                {
                    id: 4,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'true'
                },
                {
                    id: 5,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'true'
                },
                {
                    id: 6,
                    name: '鲜鸡蛋 六无安全蛋',
                    image: 'images/foods_egg.png',
                    price:'55',
                    store:'false'
                }
            ]
        },

        {
            id: 5,
            image: 'images/food_milk.png',
            context:[
                {
                    id: 1,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'true'

                },
                {
                    id: 2,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'true'
                },
                {
                    id: 3,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'true'
                },
                {
                    id: 4,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'true'
                },
                {
                    id: 5,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'true'
                },
                {
                    id: 6,
                    name: '新疆特色天润奶啤',
                    image: 'images/foods_milk.png',
                    price:'72',
                    store:'false'
                }
            ]
        },
        {
            id: 6,
            image: 'images/food_fastfood.png',
            context:[
                {
                    id: 1,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'true'

                },
                {
                    id: 2,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'true'
                },
                {
                    id: 3,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'true'
                },
                {
                    id: 4,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'true'
                },
                {
                    id: 5,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'true'
                },
                {
                    id: 6,
                    name: '桃花点点鲜汁肉包',
                    image: 'images/foods_fastfood.png',
                    price:'32.3',
                    store:'false'
                }
            ]
        }
    ]
    state={
        foodpanels:[]
    };
    componentDidMount() {
        axios.get('http://localhost:3003/foodpanels').then(response => {
            this.setState({
                foodpanels:response.data
            })
        })
    }
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
                <div className="title-wrap">
                    <div
                        className="home-item-title"
                        data-resize="1">热卖榜单</div>
                </div>
                <Ranklist />
                <div className="title-wrap">
                    <div className="home-item-title" data-resize="1">生鲜精选</div>
                </div>
                {/*/!*商品分类展示*!/*/}
                {
                    this.state.foodpanels.map(p => {
                        return (
                            <div>
                                <FoodPanels foodpanel={p}/>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Base;