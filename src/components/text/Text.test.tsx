import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
    test("renders default span correctly", () => {
        render(<Text>Hello World</Text>);
        const text = screen.getByText("Hello World");
        expect(text.tagName).toBe("SPAN");
        expect(text).toHaveClass("tofu-text");
    });

    test("renders as paragraph", () => {
        render(<Text as="p">Paragraph Text</Text>);
        const text = screen.getByText("Paragraph Text");
        expect(text.tagName).toBe("P");
    });

    test("renders with size", () => {
        render(<Text size="large">Large Text</Text>);
        const text = screen.getByText("Large Text");
        expect(text).toHaveAttribute("data-size", "large");
    });

    test("renders with weight", () => {
        render(<Text weight="bold">Bold Text</Text>);
        const text = screen.getByText("Bold Text");
        expect(text).toHaveAttribute("data-weight", "bold");
    });

    test("applies custom className", () => {
        render(<Text className="custom-class">Custom Class</Text>);
        const text = screen.getByText("Custom Class");
        expect(text).toHaveClass("tofu-text");
        expect(text).toHaveClass("custom-class");
    });

    test("forwards ref", () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(<Text ref={ref}>Ref Text</Text>);
        expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    test("supports polymorphic behavior with other tags", () => {
        render(<Text as="div">Div Text</Text>);
        const div = screen.getByText("Div Text");
        expect(div.tagName).toBe("DIV");
    });
});
