import React, {Component} from "react";

class Fooditem extends Component{
    render() {
        const{name,image,price}=this.props.fooditem
        return(
            <div className="food-content">
                    <div className="img">
                        <img data-src="done"
                             src={image}/>
                    </div>
                    <div className="name line-clamp-2">{name}</div>
                <div className="price"><span className="sale-price">¥{price}</span></div>
                    <span className="cart active" onClick="javascript: return false" data-sq="true"></span>
            </div>
        )
    }
}
export default Fooditem;