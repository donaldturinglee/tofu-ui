import type { ForwardedRef, RefObject } from "react";
import { useImperativeHandle } from "react";

export const useForwardedRef = <T>(
    forwardedRef: ForwardedRef<T>,
    refObject: RefObject<T | null>,
): void => {
    useImperativeHandle<T | null, T | null>(forwardedRef, () => refObject.current);
};
