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
                {error && (
                    <small className="font-size-small font-weight-light text-danger">
                        {"- "}
                        {error}
                    </small>
                )}
            </div>
        </React.Fragment>
    );
};

export default Input;
