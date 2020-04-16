import React, {Component} from "react";

class Fooditem extends Component{
    render() {
        return(
            <>
                <div className="food-content">
                    <div className="img">
                        <img data-src="done"
                             src="//imgservice5.suning.cn/uimg1/b2c/image/QQENe0wmxn2K2g49zlyKNA.jpg?format=400h_400w_4e_80q.webp"/>
                    </div>
                    <div className="name line-clamp-2">苹果</div>
                    <div className="price">123</div>
                </div>
            </>
        );
    }
}
export default Fooditem;