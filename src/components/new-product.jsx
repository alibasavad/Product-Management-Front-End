import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "../utils/http-service";
import Loading from "./common/loading";

class NewProduct extends Form {
    state = {
        data: {
            title: "",
            price: "",
            discount: "",
            category: "",
            brand: "",
            description: "",
            image: "",
        },
        errors: {},
        submitted: false,
        textAreas: ["description"],
        loading: "none",
    };

    schema = {
        title: Joi.string().max(50).required().label("Name"),
        price: Joi.number().required().label("Price"),
        discount: Joi.number().min(0).max(100).required().label("Discount"),
        category: Joi.string().required().label("Category"),
        brand: Joi.string().required().label("Brand"),
        description: Joi.string().max(100).allow("").label("Description"),
        image: Joi.string().allow("").label("Image"),
    };

    onSubmit = async () => {
        const postDate = { ...this.state.data };

        postDate.discountPercentage = postDate.discount;
        postDate.images = postDate.image;

        for (let textArea of this.state.textAreas) {
            document.getElementById(textArea).innerHTML = "";
        }
        this.setState({
            data: {
                title: "",
                price: "",
                discount: "",
                category: "",
                brand: "",
                description: "",
                image: "",
            },
            errors: {},
            submitted: false,
            loading: "block",
        });

        try {
            const { data } = await http.post(
                "https://dummyjson.com/products/add",
                postDate
            );

            this.setState({
                loading: "none",
            });

            this.props.onNewProduct(data);
        } catch (error) {
            this.setState({
                loading: "none",
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.loading }}>
                    <Loading />
                </div>
                <form
                    className=" bg-white p-3 m-2 column-550 rounded row"
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="text-primary">Creat A New Product</h2>

                    <div className="col-8 w-100-550">
                        {this.renderInput("Product Name", "title")}
                        <div className="row ">
                            <span className="col-8 p-0 w-100-550">
                                {this.renderInput("Price ($)", "price")}
                            </span>
                            <span
                                style={{ paddingRight: "0" }}
                                className="col-4 w-100-550 "
                            >
                                {this.renderInput("Discount (%)", "discount")}
                            </span>
                        </div>

                        {this.renderSelect(
                            "Category",
                            "category",
                            this.props.categories
                        )}
                        {this.renderSelect("Brand", "brand", [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                        ])}
                        {this.renderTextArea("Description", "description")}

                        <p
                            className="text-secondary"
                            style={{ fontSize: "0.8rem" }}
                        >
                            Do not exeed 100 characters
                        </p>
                    </div>
                    <div
                        style={{ margin: "2.2rem 0 0 " }}
                        className="col-4 w-100-550 "
                    >
                        <div className="h-75 d-block">
                            {this.renderFileUpload("image")}
                        </div>

                        {this.renderClearButton("Clear")}

                        {this.renderButton("Submit")}
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default NewProduct;
