import React from 'react';
import store from "./store";
import Home from "./pages/home";
import { Provider } from "react-redux";


class App extends React.Component{
    render() {
        return (
            <>
                <Home />
            </>
        );
    }
}

export default App;