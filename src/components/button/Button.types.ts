import { ComponentPropsWithRef, ElementType, MouseEventHandler, ReactNode, Ref } from "react";
import { BaseProps } from "../../types/component";

export type ButtonVariant = "default" | "primary" | "secondary" | "outline" | "invisible";

export type ButtonIntent = "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "square" | "round" | "circle";
export interface ButtonProps extends BaseProps, Omit<ComponentPropsWithRef<"button">, "onClick"> {
    as?: ElementType;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    shape?: ButtonShape;
    disabled?: boolean;
    leadingVisual?: ReactNode;
    trailingVisual?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    inactive?: boolean;
    loding?: boolean;
    block?: boolean;
    ref?: Ref<HTMLButtonElement>;
}
