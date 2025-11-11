import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccessibilityIcon } from "./Icon";

describe("Icon Component", () => {
    describe("Rendering", () => {
        it("renders icon", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toBeInTheDocument();
        });

        it("renders with default size", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("height", "16");
        });

        it("has correct display name", () => {
            expect(AccessibilityIcon.displayName).toBe("AccessibilityIcon");
        });

        it("has correct default class", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveClass("icon");
            expect(svg).toHaveClass("icon-accessibility");
        });
    });

    describe("Sizes", () => {
        it("renders with custom size", () => {
            const { container } = render(<AccessibilityIcon size={24} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("height", "24");
        });

        it("renders with small size", () => {
            const { container } = render(<AccessibilityIcon size={12} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("height", "12");
        });

        it("calculates width based on natural aspect ratio", () => {
            const { container } = render(<AccessibilityIcon size={16} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("width", "16");
        });
    });

    describe("Colors", () => {
        it("renders with default fill", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("fill", "currentColor");
        });

        it("renders with custom fill color", () => {
            const { container } = render(<AccessibilityIcon fill="#ff0000" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("fill", "#ff0000");
        });
    });

    describe("Vertical Align", () => {
        it("renders with default vertical align", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveStyle({ verticalAlign: "baseline" });
        });

        it("renders with custom vertical align", () => {
            const { container } = render(<AccessibilityIcon verticalAlign="middle" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveStyle({ verticalAlign: "middle" });
        });
    });

    describe("Custom Props", () => {
        it("applies custom className", () => {
            const { container } = render(<AccessibilityIcon className="custom-class" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveClass("custom-class");
            expect(svg).toHaveClass("icon");
        });

        it("applies custom id", () => {
            const { container } = render(<AccessibilityIcon id="custom-id" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("id", "custom-id");
        });

        it("applies custom style", () => {
            const { container } = render(<AccessibilityIcon style={{ opacity: 0.5 }} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveStyle({ opacity: "0.5" });
        });
    });

    describe("Accessibility", () => {
        it("supports aria-label", () => {
            const { container } = render(<AccessibilityIcon aria-label="Accessibility" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("aria-label", "Accessibility");
            expect(svg).toHaveAttribute("role", "img");
            expect(svg).not.toHaveAttribute("aria-hidden");
        });

        it("has aria-hidden when no label", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("aria-hidden", "true");
            expect(svg).not.toHaveAttribute("role");
        });

        it("supports aria-labelledby", () => {
            const { container } = render(<AccessibilityIcon aria-labelledby="label-id" />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("aria-labelledby", "label-id");
            expect(svg).toHaveAttribute("role", "img");
        });

        it("supports title for tooltip", () => {
            const { container } = render(<AccessibilityIcon title="Accessibility Icon" />);
            const title = container.querySelector("title");
            expect(title).toBeInTheDocument();
            expect(title).toHaveTextContent("Accessibility Icon");
        });

        it("does not render title when not provided", () => {
            const { container } = render(<AccessibilityIcon />);
            const title = container.querySelector("title");
            expect(title).not.toBeInTheDocument();
        });

        it("supports tabIndex", () => {
            const { container } = render(<AccessibilityIcon tabIndex={0} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("tabIndex", "0");
            expect(svg).toHaveAttribute("focusable", "true");
        });

        it("sets focusable to false when tabIndex is negative", () => {
            const { container } = render(<AccessibilityIcon tabIndex={-1} />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("focusable", "false");
        });
    });

    describe("Ref Forwarding", () => {
        it("forwards ref to svg element", () => {
            const ref = React.createRef<SVGSVGElement>();
            render(<AccessibilityIcon ref={ref} />);
            expect(ref.current).toBeInstanceOf(SVGSVGElement);
            expect(ref.current?.tagName).toBe("svg");
        });
    });

    describe("SVG Attributes", () => {
        it("has correct viewBox", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("viewBox", "0 0 16 16");
        });

        it("has correct display and overflow", () => {
            const { container } = render(<AccessibilityIcon />);
            const svg = container.querySelector("svg");
            expect(svg).toHaveAttribute("display", "inline-block");
            expect(svg).toHaveAttribute("overflow", "visible");
        });
    });
});
