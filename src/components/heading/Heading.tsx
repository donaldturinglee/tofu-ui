import React from "react";
import { ClassNames } from "../../utilities/classnames";
import { HeadingProps } from "./Heading.types";
import "./Heading.scss";

export const Heading = ({
    as: Component = "h1",
    variant = "medium",
    children,
    ref,
    ...props
}: HeadingProps) => {
    const classes = ClassNames("tofu-heading");

    return (
        <Component ref={ref} className={classes} data-variant={variant} {...props}>
            {children}
        </Component>
    );
};

Heading.displayName = "Heading";
