import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Index from './pages/home/index'
import Cate from './pages/cate/index'
import My from './pages/my/index'
import Cart from './pages/cart/index'
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";

//设置不同组件的路由
class Router extends Component {
    render(){
        return (
            <BrowserRouter>
        <Switch>
            {/*exact:精确匹配*/}
            <Route path="/index" component={Index} />
            <Route path="/cate" component={Cate} />
            <Route path="/my" component={My} />
            <Route path="/cart" component={Cart} />
            {/*<Route path="/login" exact component={Login} />*/}
            {/*<Route component={Index} />*/}
        </Switch>
            </BrowserRouter>
          )
       }
}

export default Router;