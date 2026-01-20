import React from "react";

export type ButtonVariant = "default" | "primary" | "solid" | "soft" | "surface" | "outline" | "ghost";
export type ButtonIntent = "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonRadius = number | "xs" | "sm" | "md" | "xl" | "full";

type CommonButtonBaseProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "color"
> & {
    highContrast?: boolean;
    className?: string;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    radius?: ButtonRadius;
    disabled?: boolean;
    isLoading?: boolean;
};

export type ButtonProps = CommonButtonBaseProps & { children?: React.ReactNode };

export type Button = React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
>;
