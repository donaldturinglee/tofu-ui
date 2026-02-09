import React, { ComponentPropsWithoutRef, ElementType, Ref } from "react";

export type ButtonShape = "square" | "round" | "circle";
export type ButtonVariant = "default" | "primary" | "solid" | "soft" | "surface" | "outline" | "ghost";
export type ButtonIntent = "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";

export interface BaseProps {
    as?: ElementType;
    highContrast?: boolean;
    className?: string;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    disabled?: boolean;
    isLoading?: boolean;
    block?: boolean;
    shape?: ButtonShape;
    inactive?: boolean;
    children?: React.ReactNode;
    leadingVisual?: React.ReactNode;
    trailingVisual?: React.ReactNode;
}

export interface ButtonProps extends BaseProps, Omit<
    ComponentPropsWithoutRef<"button">,
    "type" | "color"
> {
    ref?: Ref<HTMLButtonElement>;
}

