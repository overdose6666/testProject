import React, {Component} from 'react'

class Entryitem extends Component{
    constructor(props) {
        super(props);
        this.state={
            narrow:false
        }
    }
    componentWillMount(){
        this.setState({
            narrow:(this.props.categories.id % 5 === 0 && this.props.categories.id!==0)
        })
    }
    render() {
        const{name,image}=this.props.categories
        return(
            <>
                {this.state.narrow
                    ?<div className="entry-item" style={{marginRight:0}}>
                        <a href="//pro.m.jd.com/mall/active/3ys5s8Q4zsy6HEC48XEiaUBcDKhD/index.html" target="_self"
                           className="expo">
                            <div className="entry-item-img">
                                <img
                                    src={image}
                                    className="lazyload-img big-width loaded" data-resize="1"
                                    style={{backgroundColor: 'transparent',backgroundImage: 'none'}}
                                />
                            </div>
                            <div className="entry-item-name">
                                <span style={{color:'#4a4a4a'}}>{name}</span>
                            </div>
                        </a>
                    </div>
                    :<div className="entry-item">
                        <a href="//pro.m.jd.com/mall/active/3ys5s8Q4zsy6HEC48XEiaUBcDKhD/index.html" target="_self"
                           className="expo">
                            <div className="entry-item-img">
                                <img
                                    src={image}
                                    className="lazyload-img big-width loaded" data-resize="1"
                                    style={{backgroundColor: 'transparent',backgroundImage: 'none'}}
                                />
                            </div>
                            <div className="entry-item-name">
                                <span style={{color:'#4a4a4a'}}>{name}</span>
                            </div>
                        </a>
                    </div>
                }
            </>
        );
    }
}
export default Entryitem;