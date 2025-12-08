import React from "react";
import { PolymorphicProps } from "../../utilities/polymorphic";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps<As extends React.ElementType = HeadingLevel> = PolymorphicProps<
    As,
    HeadingLevel,
    {
        variant?: "small" | "medium" | "large";
        className?: string;
    }
>;
