import React from "react";
import store from "./store";
import Home from "./pages/home";
import { Provider } from "react-redux";
import "../src/styles/mystyle.scss";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
