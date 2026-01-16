import React from "react";
import type { ButtonProps } from "./Button.types"

import "./Button.css";
import { Spinner, SpinnerSize } from "../spinner/Spinner";
import { ClassNames } from "../../utilities/classnames";

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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            tabIndex,
            className = "",
            disabled,
            id,
            style,
            variant = "solid",
            intent = "info",
            size = "small",
            radius,
            highContrast,
            isLoading = false,
            children,
            ...rest
        },
        ref,
    ) => {
        const variantClass = `tofu-button-${variant}`;
const classes = ClassNames("tofu-button", variantClass, className);
        const isDisabled = !!(disabled || isLoading);
        const spinnerSize = mapButtonSizeToSpinnerSize(size);
        const containerStyle: React.CSSProperties = {
            position: 'relative' as React.CSSProperties['position'],
            ...(style as React.CSSProperties || {}),
        };
        const tokens = String(className).split(/\s+/).filter(Boolean);
        const parseSize = (prefix: 'w' | 'h') => {
            for (const t of tokens) {
                const m1 = t.match(new RegExp(`^${prefix}-\\[(.+)\\]$`));
                if (m1) return m1[1];
                const m2 = t.match(new RegExp(`^${prefix}-(\\d+(?:\\.\\d+)?)$`));
                if (m2) return `${m2[1]}px`;
            }
            return undefined;
        };
        const w = parseSize('w');
        const h = parseSize('h');
        if (w) containerStyle.width = w;
        if (h) containerStyle.height = h;
        if (typeof radius === 'number') {
            containerStyle.borderRadius = radius as number;
        }

        const renderInnerContent = () =>
          isLoading ? (
            <>
              <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
                <span className="btn-label">{children}</span>
              </span>
              <VisuallyHidden>{children}</VisuallyHidden>
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
            <>
              <span className="btn-label">{children}</span>
            </>
          );



        return (
            <button
                ref={ref}
                {...rest}
                data-disabled={isDisabled || undefined}
                data-radius={typeof radius === 'string' ? radius : undefined}
                data-size={size}
                data-intent={intent}
                data-high-contrast={highContrast || undefined}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-disabled={isDisabled}
                tabIndex={tabIndex}
                className={classes}
                disabled={isDisabled}
                id={id}
                style={containerStyle}
            >
              {renderInnerContent()}
            </button>
        );
    },
);

Button.displayName = "Button";