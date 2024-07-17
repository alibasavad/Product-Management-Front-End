import React from "react";
import Form from "./form";
import Joi from "joi-browser";

class Searchbar extends Form {
    state = {
        data: {
            name: "",
        },
        errors: {},
        submitted: false,
        textAreas: [],
    };

    schema = {
        name: Joi.string(),
    };

    render() {
        return (
            <React.Fragment>
                <form className="form-inline my-2 my-lg-0  ">
                    <input
                        onChange={this.props.onChange}
                        value={this.props.value}
                        style={{
                            backgroundColor: "#F3F3F8",
                            borderRadius: "15px",
                        }}
                        className="form-control mr-sm-2  "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </React.Fragment>
        );
    }
}

export default Searchbar;
