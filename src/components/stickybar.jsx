import React, { Component } from "react";

class Stickybar extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="navbar stickybar-project  ">
                    <ul className="navbar-nav col ">
                        <li className="nav-item  ">
                            <img src="/image/Group 65138.png" alt="home-icon" />
                        </li>
                    </ul>

                    <ul
                        style={{ flexDirection: "row-reverse" }}
                        className="navbar-nav col-4"
                    >
                        <li className="nav-item  ">
                            <img
                                src="/image/blank-profile-picture-973460_1280.png"
                                alt="profile-icon"
                            />{" "}
                            Admin <span className="rotate90"> &#x27A4;</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Stickybar;
