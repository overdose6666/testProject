import React, {Component} from "react";
import { NavBar, Icon } from 'antd-mobile';

class TopBar extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >生鲜超市</NavBar>
            </div>
        );
    }
}
export default TopBar;

