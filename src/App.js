import React, { Component } from "react";
import store from "./store";
import Home from "./pages/home";
import { Provider } from "react-redux";
import "../src/styles/mystyle.scss";
import Router from './Router'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router></Router>
      </Provider>
    );
  }
}

export default App;
