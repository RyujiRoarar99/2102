import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EquipmentOverview = () => {
    return (
        <Container>
            <Breadcrumb className="mt-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Equipment Overview</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
    );
};

export default EquipmentOverview;
