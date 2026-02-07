import React from "react";

export type ButtonShape = "square" | "round" | "circle";
export type ButtonVariant = "default" | "primary" | "solid" | "soft" | "surface" | "outline" | "ghost";
export type ButtonIntent = "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonRadius = number | "xs" | "sm" | "md" | "xl" | "full";

type NativeButtonProps = Omit<
    React.ComponentPropsWithRef<"button">,
    "type" | "color"
>;

type ButtonStyleProps = {
    highContrast?: boolean;
    className?: string;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    radius?: ButtonRadius;
    disabled?: boolean;
    isLoading?: boolean;
    block?: boolean;
    shape?: ButtonShape;
    inactive?: boolean;
};

type ButtonContentProps = {
    children?: React.ReactNode;
    leadingVisual?: React.ReactNode;
    trailingVisual?: React.ReactNode;
};

export type ButtonProps = NativeButtonProps & ButtonStyleProps & ButtonContentProps;

export type Button = (props: ButtonProps) => React.ReactElement | null;
