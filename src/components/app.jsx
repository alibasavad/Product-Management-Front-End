/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Stickybar from "./stickybar";
import Home from "./home";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Stickybar />

                    <div className=" ">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
