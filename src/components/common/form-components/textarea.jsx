/* eslint-disable react/prop-types */
import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
    return (
        <React.Fragment>
            <div className="form-group my-2">
                <label className="my-1" htmlFor={name}>
                    {label}
                </label>
                <textarea
                    style={{ resize: "none" }}
                    id={name}
                    className="form-control"
                    rows="4"
                    {...rest}
                />
                {error && <div className="alert alert-danger  ">{error}</div>}
            </div>
        </React.Fragment>
    );
};

export default TextArea;
