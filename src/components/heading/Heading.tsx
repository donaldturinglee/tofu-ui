import React, { useRef } from "react";
import { ClassNames } from "../../utilities/classnames";
import { HeadingProps } from "./Heading.types";
import "./Heading.css";
import { useForwardedRef } from "../../hooks/useForwardedRef";
import { PolymorphicForwardRef } from "../../utilities/polymorphic";

function HeadingBase<As extends React.ElementType = "h1">(
    props: HeadingProps<As>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.ForwardedRef<any>,
) {
    const { as: Component = "h1", variant, className, ...rest } = props;

    const headingRef = useRef<HTMLHeadingElement>(null);
    useForwardedRef<HTMLHeadingElement>(ref, headingRef);

    const classes = ClassNames("tofu-heading", className);

    return <Component ref={headingRef} data-variant={variant} className={classes} {...rest} />;
}

HeadingBase.displayName = "Heading";

export const Heading = PolymorphicForwardRef(HeadingBase);
