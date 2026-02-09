import React from "react";
import type { ButtonProps } from "./Button.types"
import { Spinner, SpinnerSize } from "../spinner/Spinner";
import { ClassNames, parseSizeFromClassName} from "../../utilities/classnames";

const VisuallyHidden: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    }}
  >
    {children}
  </span>
);

const mapButtonSizeToSpinnerSize = (size: "small" | "medium" | "large"): SpinnerSize => size;

export function Button({
        ref: buttonRef,
        "aria-label": ariaLabel,
        tabIndex,
        className = "",
        disabled,
        id,
        style,
        variant = "solid",
        intent = "info",
        size = "small",
        shape = "round",
        highContrast,
        inactive,
        onClick,
        isLoading = false,
        block = false,
        leadingVisual,
        trailingVisual,
        children,
        ...rest
    }: ButtonProps) {

        const variantClass = `tofu-button-${variant}`;
        const classes = ClassNames("tofu-button", variantClass, className);
        const isDisabled = !!(disabled || isLoading);
        const isInactive = !!inactive;
        const spinnerSize = mapButtonSizeToSpinnerSize(size);
        const styleWidth = (style as React.CSSProperties | undefined)?.width;
        const containerStyle: React.CSSProperties = {
            position: 'relative' as React.CSSProperties['position'],
            ...(style as React.CSSProperties || {}),
        };

        const w = parseSizeFromClassName(className, "w");
        const h = parseSizeFromClassName(className, "h");
        if (w) containerStyle.width = w;
        if (h) containerStyle.height = h;

        const shouldBlock = block && !w && styleWidth == null;


        const renderVisual = (visual: React.ReactNode) =>
          visual != null ? (
            <span aria-hidden className="tofu-button__visual">
              {visual}
            </span>
          ) : null;

        const renderInner = () => (
          <span className="tofu-button__inner">
            {renderVisual(leadingVisual)}
            {children != null ? <span className="button-label">{children}</span> : null}
            {renderVisual(trailingVisual)}
          </span>
        );

        const renderContent = () =>
          isLoading ? (
            <>
              <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
                {renderInner()}
              </span>
              <VisuallyHidden>{ariaLabel ?? children}</VisuallyHidden>
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Spinner size={spinnerSize} />
              </span>
            </>
          ) : (
            renderInner()
          );



        return (
            <button
                ref={buttonRef}
                {...rest}
                data-disabled={isDisabled || undefined}
                data-shape={shape}
                data-size={size}
                data-intent={intent}
                data-high-contrast={highContrast || undefined}
                data-block={shouldBlock || undefined}
                aria-label={ariaLabel}
                aria-disabled={isDisabled || isInactive}
                data-inactive={isInactive}
                tabIndex={tabIndex}
                className={classes}
                disabled={isDisabled}
                onClick={isInactive ? (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                } : onClick}
                id={id}
                style={containerStyle}
            >
              {renderContent()}
            </button>
        );
}

Button.displayName = "Button";