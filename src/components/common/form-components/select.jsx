/* eslint-disable react/prop-types */
import React from "react";

const Select = ({ name, label, error, options, ...rest }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <label className="my-1" htmlFor={name}>
                    {label}
                </label>
                <select id={name} className="form-select" {...rest}>
                    <option value="" />
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
                {error && <div className="alert alert-danger  ">{error}</div>}
            </div>
        </React.Fragment>
    );
};

export default Select;
