/* eslint-disable react/prop-types */
import React from "react";

const TableHead = ({ headers }) => {
    const renderHeader = () => {
        return headers.map((header) => {
            return (
                <th
                    key={header}
                    style={{ backgroundColor: "inherit" }}
                    className="text-secondary"
                    scope="col"
                >
                    {header}
                </th>
            );
        });
    };

    return (
        <React.Fragment>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
        </React.Fragment>
    );
};

export default TableHead;
