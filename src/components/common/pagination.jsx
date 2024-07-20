/* eslint-disable react/prop-types */
import React, { Component } from "react";

class Pagination extends Component {
    style = {
        btn: {
            backgroundColor: "#F3F4F9",
            borderRadius: "25px",
            alignSelf: "center",
        },
        select: {
            border: "none",
            backgroundColor: "inherit",
            fontSize: "0.8rem",
            alignSelf: "start",
        },
    };

    render() {
        const { currentPage, totalPage, onPagination } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div
                        style={{ flexDirection: "row-reverse" }}
                        className="  d-flex"
                    >
                        {" "}
                        <a
                            onClick={onPagination.handleNextPage}
                            style={this.style.btn}
                            className="btn mx-1"
                        >
                            {">"}
                        </a>{" "}
                        <a
                            onClick={onPagination.handlePreviousPage}
                            style={this.style.btn}
                            className="btn mx-1"
                        >
                            {"<"}
                        </a>
                        <p className="mx-4 ho-550">
                            {currentPage} - {totalPage}
                        </p>
                        <select
                            className="ho-550"
                            onChange={(e) => {
                                onPagination.handleRowPerPage(e);
                            }}
                            style={this.style.select}
                            name="rows"
                            id="rows"
                        >
                            <option value="5"> 5</option>
                            <option value="10"> 10</option>
                            <option value="15"> 15</option>
                            <option value="20"> 20</option>
                        </select>
                        <label
                            className="ho-550"
                            style={{ fontSize: "0.8rem" }}
                            htmlFor="rows"
                        >
                            Rows per page :
                        </label>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Pagination;
