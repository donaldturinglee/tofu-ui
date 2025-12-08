import React from "react";
import { PolymorphicProps } from "../../utilities/polymorphic";

export type TextProps<As extends React.ElementType = "span"> = PolymorphicProps<
    As,
    "span",
    {
        size?: "small" | "medium" | "large";
        weight?: "light" | "normal" | "medium" | "semibold" | "bold";
        className?: string;
    }
>;
