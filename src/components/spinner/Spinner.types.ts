import { ElementType, Ref } from "react";
import { BaseProps } from "../../types/component";

export interface SpinnerProps extends BaseProps {
    icon?: ElementType;
    size?: string | number;
    ref?: Ref<HTMLElement>;
    color?: string;
}
