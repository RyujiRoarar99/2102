import React from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadcrumbComponent = (props) => {
    const root_crumb = props.breadcrumbs.filter((i, index) => {
        if (index === 0) {
            return i;
        }
    });

    const leaf_crumbs = props.breadcrumbs.filter((i, index) => {
        if (index !== 0 && index !== props.breadcrumbs.length - 1) {
            return i;
        }
    });

    const node_crumb = props.breadcrumbs.filter((i, index) => {
        if (index === props.breadcrumbs.length - 1) {
            return i;
        }
    });

    return (
        <Breadcrumb className="mt-5">
            {root_crumb.map((i) => (
                <Breadcrumb.Item key={i} href="/">
                    {i}
                </Breadcrumb.Item>
            ))}

            {leaf_crumbs.map((i) => (
                <Breadcrumb.Item key={i} href={"/" + i}>
                    {i}
                </Breadcrumb.Item>
            ))}
            {node_crumb.map((i) => (
                <Breadcrumb.Item key={i} active>
                    {i}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
