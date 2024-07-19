/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Stickybar from "../components/stickybar";
import Home from "../components/home";

class Layout extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Stickybar />
                    <Home />
                </BrowserRouter>
            </>
        );
    }
}

export default Layout;
