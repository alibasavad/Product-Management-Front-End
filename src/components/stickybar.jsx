import React, { Component } from "react";

class Stickybar extends Component {
    state = {};

    renderNavbar = () => {
        const navbar = document.getElementById("navbar");
        const pageSize = window.innerWidth;
        if (!navbar.style.display && pageSize <= 700) {
            navbar.style.display = "block";
            navbar.style.zIndex = "3";
            document.getElementById("root").style.height = "100vh";
            document.getElementById("root").style.overflow = "hidden";
        } else if (navbar.style.zIndex == 3) {
            document.getElementById("root").style.height = "auto";
            document.getElementById("root").style.overflow = "auto";
            navbar.style = { display: "none", zIndex: 4 };
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="navbar stickybar-project  ">
                    <ul className="navbar-nav col " onClick={this.renderNavbar}>
                        <li className="nav-item  ">
                            <img src="/image/Group 65138.png" alt="home-icon" />
                        </li>
                    </ul>

                    <ul
                        style={{ flexDirection: "row-reverse" }}
                        className="navbar-nav col  "
                    >
                        <li className="nav-item admin-text ">
                            <img
                                className="admin-icon"
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
