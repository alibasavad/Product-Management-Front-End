/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

class FileUpload extends Component {
    state = {
        noImage: true,
    };

    displaySelectedImage = (event, elementId) => {
        const selectedImage = document.getElementById(elementId);
        const fileInput = event.target;

        if (fileInput.files && fileInput.files[0]) {
            this.setState({
                noImage: false,
            });
            const reader = new FileReader();

            reader.onload = function (e) {
                selectedImage.src = e.target.result;
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    };

    mainImageClass = () => {
        const { noImage } = this.state;
        if (noImage || !this.props.value) return "d-none";
        return "upload-image";
    };

    handleClear = () => {
        console.log("clear");
    };

    render() {
        const { noImage } = this.state;
        const { name, error, onChange, value, ...rest } = this.props;
        return (
            <React.Fragment>
                <div>
                    <div className="d-flex justify-content-center">
                        <label className=" text-center m-1" htmlFor={name}>
                            {(noImage || !value) && (
                                <div className="new-image">
                                    <img
                                        style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                        }}
                                        className="d-block"
                                        src="/image/img.png"
                                        alt=""
                                    />{" "}
                                    <span className="text-secondary">
                                        Drop your image here, or select{" "}
                                    </span>
                                    <span className="text-primary">
                                        Click to browse
                                    </span>
                                </div>
                            )}

                            <img
                                className={this.mainImageClass()}
                                id="selectedImage"
                                src=""
                                alt="example placeholder"
                            />
                        </label>
                        <input
                            type="file"
                            className="form-control d-none"
                            id={name}
                            {...rest}
                            onChange={(event) => {
                                this.displaySelectedImage(
                                    event,
                                    "selectedImage"
                                );
                                onChange(name, event);
                            }}
                        />
                    </div>
                    {error && (
                        <small className="font-size-small font-weight-light text-danger">
                            {"- "}
                            {error}
                        </small>
                    )}
                    <p style={{ fontSize: "0.8rem", margin: "0" }}>
                        File types :
                        <span className="text-secondary"> .jpg , .png</span>
                    </p>
                    <p style={{ fontSize: "0.8rem", margin: "0" }}>
                        {" "}
                        File size<span className="text-secondary"> 2mb</span>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}
export default FileUpload;
