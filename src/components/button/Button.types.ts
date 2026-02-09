import React, { ComponentPropsWithoutRef, ElementType, Ref, ReactNode } from "react";

export type ButtonShape = "square" | "round" | "circle";
export type ButtonVariant =
    | "default"
    | "primary"
    | "solid"
    | "soft"
    | "surface"
    | "outline"
    | "ghost";
export type ButtonIntent = "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "type" | "color"> {
    as?: ElementType;
    highContrast?: boolean;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    shape?: ButtonShape;
    inactive?: boolean;
    children?: ReactNode;
    leadingVisual?: ReactNode;
    trailingVisual?: ReactNode;
    ref?: Ref<HTMLButtonElement>;
}
