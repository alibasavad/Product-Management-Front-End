import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "../services/http-service";

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

        const { data } = await http.post(
            "https://dummyjson.com/products/add",
            postDate
        );

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
        });

        this.props.onNewProduct(data);
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className=" bg-white p-3 m-2   rounded row"
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="text-primary">Creat A New Product</h2>

                    <div className="col-8">
                        {this.renderInput("Product Name", "title")}
                        <div className="row">
                            <span className="col-8">
                                {this.renderInput("Price ($)", "price")}
                            </span>
                            <span className="col-4">
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
                    <div className="col-4 ">
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
