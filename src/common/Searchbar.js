import React, {Component} from "react";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import Ranklist from "../pages/home/Ranklist";

class Searchbar extends Component {
    // componentDidMount() {
    //     this.autoFocusInst.focus();
    // }
    // onChange= (value) => {
    //     this.setState({ value });
    // };
    // clear = () => {
    //     this.setState({ value: '' });
    // };
    // handleClick = () => {
    //     this.manualFocusInst.focus();
    // }
    render() {
        return (<div>
            <SearchBar placeholder="Search" maxLength={8} className="my-search" />
            <WhiteSpace />
        </div>);
    }
}

export default Searchbar;