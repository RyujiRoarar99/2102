import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownComponent = (props) => {
    const optionHandler = (event) => {
        props.onSelectOption(event);
    };

    const dropdownTitle = props.dropdownContents.filter((i, index) => {
        if (index === 0) {
            return i;
        }
    });

    const dropdownItems = props.dropdownContents.filter((i, index) => {
        if (index !== 0) {
            return i;
        }
    });

    return (
        <div>
            <DropdownButton
                id="dropdown-basic-button"
                title={dropdownTitle[0]}
                onSelect={optionHandler}
            >
                {dropdownItems.map((i) => (
                    <Dropdown.Item key={i} eventKey={i}>
                        {i}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};

export default DropdownComponent;
