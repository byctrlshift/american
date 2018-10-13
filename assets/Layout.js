import React, { Component } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
// import Home from "./homepage/Home";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>

            <BrowserRouter>
                <div>
                    <Header />
                    <Content />
                </div>

            </BrowserRouter>
            <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;