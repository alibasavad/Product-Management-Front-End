/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ name, label, error, ...rest }) => {
    return (
        <React.Fragment>
            <div className="form-group my-2">
                <label className="my-1" htmlFor={name}>
                    {label}
                </label>
                <input id={name} className="form-control" {...rest} />
                {error && <div className="alert alert-danger  ">{error}</div>}
            </div>
        </React.Fragment>
    );
};

export default Input;
