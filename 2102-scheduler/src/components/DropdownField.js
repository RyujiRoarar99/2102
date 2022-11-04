import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownField = (props) => {
    const optionHandler = (event) => {
        console.log(event);
        props.onSelectOption(event);
    };
    return (
        <div>
            <DropdownButton
                id="dropdown-basic-button"
                title="Select Equipment"
                onSelect={optionHandler}
            >
                <Dropdown.Item eventKey="Scopes">Scopes</Dropdown.Item>
                <Dropdown.Item eventKey="Washer">Washer</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default DropdownField;
