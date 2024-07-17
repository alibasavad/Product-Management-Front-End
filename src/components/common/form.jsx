/* eslint-disable no-unused-vars */
import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./form-components/input";
import Select from "./form-components/select";
import TextArea from "./form-components/textarea";
import FileUpload from "./form-components/file-upload";

class Form extends Component {
    state = {
        data: {},
        errors: {},
        submitted: false,
        textAreas: [],
    };

    // validate on submit
    validate = () => {
        if (Object.keys(this.state.errors).length > 0) return this.state.errors;
        const { error } = Joi.validate(this.state.data, this.schema, {
            abortEarly: false,
        });

        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    // validate on change
    validateProperty = ({ id, value }) => {
        const obj = { [id]: value };

        const schema = { [id]: this.schema[id] };

        const { error } = Joi.validate(obj, schema);

        if (!error) return null;

        return error.details[0].message;
    };

    handleClear = () => {
        for (let textArea of this.state.textAreas) {
            document.getElementById(textArea).innerHTML = "";
        }
        this.setState({
            data: {},
            errors: {},
            submitted: false,
        });
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };

        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.id] = errorMessage;
        else delete errors[input.id];

        const data = { ...this.state.data };
        data[input.id] = input.value;
        this.setState({
            data,
            errors,
        });
    };

    handleChangeFile = (id, e) => {
        const acceptedTypes = ["png", "jpg", "jpeg"];

        const errors = { ...this.state.errors };

        if (e.target.files) {
            const { name, type, size } = e.target.files[0];

            if (!acceptedTypes.includes(type.split("/")[1]))
                errors[id] = "Type Error";
            else if (size > 2000000) {
                errors[id] = "Size Error";
            } else delete errors[id];

            const data = { ...this.state.data };

            data[id] = name;

            this.setState({
                data,
                errors,
            });
        }

        // const errorMessage = this.validateProperty(input);
        // if (errorMessage) errors[input.id] = errorMessage;
        // else delete errors[input.id];
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();

        this.setState({
            errors: errors || {},
        });
        if (errors) return;

        this.onSubmit();
    };

    renderButton = (label) => {
        return (
            <>
                <button disabled={this.validate()} className="btn btn-primary">
                    {label}
                </button>
            </>
        );
    };

    renderClearButton = (label) => {
        return (
            <input
                className="btn mx-1"
                onClick={this.handleClear}
                type="reset"
                value={label}
            />
        );
    };

    renderInput = (label, name, type = "text") => {
        return (
            <Input
                name={name}
                error={this.state.errors[name]}
                onChange={this.handleChange}
                value={this.state.data[name]}
                label={label}
                type={type}
            />
        );
    };

    renderSelect = (label, name, options) => {
        return (
            <Select
                name={name}
                error={this.state.errors[name]}
                onChange={this.handleChange}
                value={this.state.data[name]}
                label={label}
                options={options}
            />
        );
    };

    renderTextArea = (label, name) => {
        return (
            <TextArea
                name={name}
                error={this.state.errors[name]}
                onChange={this.handleChange}
                value={this.state.data[name]}
                label={label}
            />
        );
    };

    renderFileUpload = (name) => {
        return (
            <FileUpload
                name={name}
                error={this.state.errors[name]}
                onChange={this.handleChangeFile}
                value={this.state.data[name]}
            />
        );
    };
}

export default Form;
