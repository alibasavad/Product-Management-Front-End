/* eslint-disable react/prop-types */
import React from "react";

const TableBody = ({ items }) => {
    const renderBody = () => {
        return items.map((item) => {
            return (
                <tr
                    style={{ height: "80px", fontSize: "90%" }}
                    key={item.title}
                    scope="col "
                >
                    <td className=" rounded">{renderImage(item.images)} </td>
                    <td>{item.title}</td>
                    <td className="ho-550 ">{item.category}</td>
                    <td className="ho-550">{item.brand}</td>
                    <td className="ho-550">{item.price + " $"}</td>
                    <td className=" rounded ho-550">
                        {item.discountPercentage
                            ? item.discountPercentage + " %"
                            : "0"}
                    </td>
                </tr>
            );
        });
    };

    const renderImage = (path) => {
        if (!Array.isArray(path))
            return (
                <>
                    <img
                        style={{
                            maxHeight: "60px",
                            maxWidth: "60px",
                        }}
                        src={`/image/${path}`}
                        alt=""
                    />
                </>
            );
        else
            return (
                <>
                    <img
                        style={{
                            maxHeight: "60px",
                            maxWidth: "60px",
                        }}
                        src={`/image/img.png`}
                        alt=""
                    />
                </>
            );
    };

    return (
        <React.Fragment>
            <tbody className="">{renderBody()}</tbody>
        </React.Fragment>
    );
};

export default TableBody;
