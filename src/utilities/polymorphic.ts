import { forwardRef, type ComponentPropsWithRef, type ElementType } from "react";

type PolymorphicForwardRef = <T, U = object>(
    render: (props: U, ref: React.Ref<T>) => React.ReactNode,
) => (props: U & React.RefAttributes<T>) => React.ReactNode;

export const PolymorphicForwardRef = forwardRef as PolymorphicForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends unknown
    ? Omit<T, TOmitted>
    : never;

export type PolymorphicProps<
    TAs extends ElementType,
    TDefaultElement extends ElementType = "div",
    Props = object,
> = DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? TDefaultElement : TAs> & Props,
    "as"
> & {
    as?: TAs;
};
