import React, { useRef, type ForwardedRef } from "react";
import { ClassNames } from "../../utilities/classnames";
import { TextProps } from "./Text.types";
import { useForwardedRef } from "../../hooks/useForwardedRef";
import { PolymorphicForwardRef } from "../../utilities/polymorphic";

function TextBase<As extends React.ElementType = "span">(
    props: TextProps<As>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: ForwardedRef<any>,
) {
    const { as: Component = "span", size, weight, className, ...rest } = props;

    const textRef = useRef<HTMLElement>(null);
    useForwardedRef<HTMLElement>(ref, textRef);

    const classes = ClassNames("tofu-text", className);

    return (
        <Component
            ref={textRef}
            data-size={size}
            data-weight={weight}
            className={classes}
            {...rest}
        />
    );
}

TextBase.displayName = "Text";

export const Text = PolymorphicForwardRef(TextBase);
