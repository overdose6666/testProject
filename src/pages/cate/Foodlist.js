import React, { Component } from 'react';


class Foodlist extends Component {
    render() {
        // cate_food1.png,cate_food2.png是这里的图片
        return(
            <>
                <div className="food-con-item">
                    <img src="https://image2.suning.cn/uimg/cms/img/157535452617567595.png" />
                    <em>车厘子</em>
                </div>
            </>
        );
    }

}
export default Foodlist;