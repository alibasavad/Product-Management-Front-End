import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="  navbar-project img-hover   ">
                    <ul className="navbar-nav my-4   ">
                        <li className="nav-item  ">
                            <NavLink className="nav-item nav-link " to="#">
                                <img
                                    src="/image/space_dashboard_black_24dp.svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav my-4  ">
                        <li className="nav-item  ">
                            <NavLink className="nav-item nav-link " to="#">
                                <img
                                    src="/image/local_offer_black_24dp.svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-4 selected ">
                        <li className="nav-item  ">
                            <NavLink className="nav-item nav-link " to="/">
                                <img
                                    src="/image/inventory_2_black_24dp (2).svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-4  ">
                        <li className="nav-item  ">
                            <NavLink className="nav-item nav-link " to="#">
                                <img
                                    src="/image/assessment_black_24dp.svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-4  ">
                        <li className="nav-item  ">
                            <NavLink className="nav-item nav-link " to="#">
                                <img
                                    src="/image/settings_black_24dp (1).svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
