import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
    test("renders default h1 correctly", () => {
        render(<Heading>Hello World</Heading>);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Hello World");
        expect(heading).toHaveClass("tofu-heading");
    });

    test("renders with different levels", () => {
        render(<Heading as="h2">Heading 2</Heading>);
        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toBeInTheDocument();
    });

    test("renders with variants", () => {
        render(<Heading variant="large">Large Heading</Heading>);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveAttribute("data-variant", "large");
    });

    test("applies custom className", () => {
        render(<Heading className="custom-class">Custom Class</Heading>);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveClass("tofu-heading");
        expect(heading).toHaveClass("custom-class");
    });

    test("forwards ref", () => {
        const ref = React.createRef<HTMLHeadingElement>();
        render(<Heading ref={ref}>Ref Heading</Heading>);
        expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    });

    test("supports polymorphic behavior", () => {
        render(<Heading as="span">Span Heading</Heading>);
        const span = screen.getByText("Span Heading");
        expect(span.tagName).toBe("SPAN");
    });
});
