import { CSSProperties, ReactNode } from "react";

export interface BaseProps {
    id?: string;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}