/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Searchbar from "./common/searchbar";
import TableHead from "./common/table-head";
import TableBody from "./common/table-body";
import Pagination from "./common/pagination";
import { pagination } from "../utils/pagination";

class Products extends Component {
    state = {
        headers: ["", "Name", "Category", "Brand", "Price", "Discount(%)"],
    };

    style = {
        table: {
            borderCollapse: "separate",
            borderSpacing: "0 12px",

            verticalAlign: "middle",
        },
    };

    handleProducts = () => {
        const { currentPage, rowPerPage, searchPhrase } = this.props;

        let searched = this.props.products;

        if (searchPhrase !== "")
            searched = searched.filter((item) =>
                item.title.toLowerCase().includes(searchPhrase.toLowerCase())
            );

        return pagination(searched, currentPage, rowPerPage);
    };

    render() {
        const { currentPage, totalPage, searchPhrase } = this.props;
        const { headers } = this.state;
        const products = this.handleProducts();

        return (
            <React.Fragment>
                <div className=" ">
                    <div className=" column-550 p-3 row ">
                        <h4 className="text-secondary col-6">Products</h4>
                        <div className="col-6 w-100-550">
                            <Searchbar
                                value={searchPhrase}
                                onChange={this.props.onSearch}
                            />
                        </div>
                    </div>
                    <table
                        style={this.style.table}
                        className="table table-hover table-borderless "
                    >
                        <TableHead headers={headers} />
                        <TableBody items={products} />
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPage={totalPage}
                        onPagination={this.props.onPagination}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Products;
