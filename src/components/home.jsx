import React, { Component } from "react";
import NewProduct from "./new-product";
import Products from "./products";
import http from "../utils/http-service";
import Navbar from "./navbar";

class Home extends Component {
    state = {
        products: [],
        totalPage: 1,
        rowPerPage: 5,
        currentPage: 1,
        searchPhrase: "",
        categories: [],
    };

    async componentDidMount() {
        const { rowPerPage } = this.state;

        let products = await http.get("https://dummyjson.com/products");

        const categories = await http.get(
            "https://dummyjson.com/products/categories"
        );

        const categoryResult = [];

        for (let category of categories.data) {
            categoryResult.push(category.name);
        }

        products = products.data.products;

        this.setState({
            totalPage: Math.ceil(products.length / rowPerPage),
            products: products,
            categories: categoryResult,
        });
    }

    handleNewProduct = (newProduct) => {
        const products = [newProduct, ...this.state.products];

        this.setState({
            products: products,
            totalPage: Math.ceil(products.length / this.state.rowPerPage),
        });
    };

    handlePagination = {
        handleRowPerPage: (e) => {
            this.setState({
                currentPage: 1,
                rowPerPage: +e.currentTarget.value,
                totalPage: Math.ceil(
                    this.state.products.length / +e.currentTarget.value
                ),
            });
        },
        handleNextPage: () => {
            const nextPage = this.state.currentPage + 1;

            if (nextPage <= this.state.totalPage)
                this.setState({
                    currentPage: nextPage,
                });
        },
        handlePreviousPage: () => {
            const previousPage = this.state.currentPage - 1;

            if (previousPage > 0)
                this.setState({
                    currentPage: previousPage,
                });
        },
    };

    handleSearch = ({ currentTarget: input }) => {
        const searched = this.state.products.filter((item) => {
            const searchPhrase = input.value.toLowerCase();
            const title = item.title.toLowerCase();
            return title.includes(searchPhrase);
        });

        this.setState({
            searchPhrase: input.value,
            currentPage: 1,
            totalPage: Math.ceil(searched.length / this.state.rowPerPage),
        });
    };

    render() {
        const {
            categories,
            totalPage,
            currentPage,
            rowPerPage,
            searchPhrase,
            products,
        } = this.state;
        return (
            <React.Fragment>
                <div style={{ position: "relative" }} className="row ">
                    <div id="navbar" className="col-1 navbar-div">
                        <Navbar />
                    </div>

                    <div className="row col responsive">
                        <div className="col-6 responsive">
                            <NewProduct
                                categories={categories}
                                onNewProduct={this.handleNewProduct}
                            />
                        </div>
                        <div className="col-6 responsive">
                            <Products
                                searchPhrase={searchPhrase}
                                currentPage={currentPage}
                                totalPage={totalPage}
                                rowPerPage={rowPerPage}
                                onPagination={this.handlePagination}
                                onSearch={this.handleSearch}
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
