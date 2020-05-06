import React, {Component} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import Entryitem from "./Entryitem";
import axios from 'axios';

class Categories extends Component{
    state={
        categories:[]
    };
    componentDidMount() {
        axios.get('http://localhost:3003/categories').then(response => {
            this.setState({
                categories:response.data
            })
        })
    }

    render() {
        return(
            <>
                <div className="quick-entry-module-5x">
                    {
                        this.state.categories.map(p =>{
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