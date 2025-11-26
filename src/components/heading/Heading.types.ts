import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /**
     * HTML element type for the heading
     */
    as?: HeadingLevel;
    /**
     * Heading size variants
     */
    variant?: "small" | "medium" | "large";
    /**
     * Heading content
     */
    children: React.ReactNode;
    /**
     * Ref to the heading element
     */
    ref?: React.Ref<HTMLHeadingElement>;
}
