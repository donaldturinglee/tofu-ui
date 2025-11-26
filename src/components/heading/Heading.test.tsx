import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading Component", () => {
    describe("Rendering", () => {
        it("renders heading with children", () => {
            render(<Heading>Hello World</Heading>);
            expect(screen.getByRole("heading", { name: /hello world/i })).toBeInTheDocument();
        });

        it("renders with default props", () => {
            render(<Heading>Default Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-variant", "medium");
            expect(heading.tagName).toBe("H1");
        });

        it("renders heading content correctly", () => {
            render(<Heading>Test Content</Heading>);
            expect(screen.getByText("Test Content")).toBeInTheDocument();
        });
    });

    describe("Heading Levels", () => {
        it("renders h1 element", () => {
            render(<Heading as="h1">Heading 1</Heading>);
            const heading = screen.getByRole("heading", { level: 1 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H1");
        });

        it("renders h2 element", () => {
            render(<Heading as="h2">Heading 2</Heading>);
            const heading = screen.getByRole("heading", { level: 2 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H2");
        });

        it("renders h3 element", () => {
            render(<Heading as="h3">Heading 3</Heading>);
            const heading = screen.getByRole("heading", { level: 3 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H3");
        });

        it("renders h4 element", () => {
            render(<Heading as="h4">Heading 4</Heading>);
            const heading = screen.getByRole("heading", { level: 4 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H4");
        });

        it("renders h5 element", () => {
            render(<Heading as="h5">Heading 5</Heading>);
            const heading = screen.getByRole("heading", { level: 5 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H5");
        });

        it("renders h6 element", () => {
            render(<Heading as="h6">Heading 6</Heading>);
            const heading = screen.getByRole("heading", { level: 6 });
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe("H6");
        });
    });

    describe("Variants", () => {
        it("renders small variant", () => {
            render(<Heading variant="small">Small Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-variant", "small");
        });

        it("renders medium variant", () => {
            render(<Heading variant="medium">Medium Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-variant", "medium");
        });

        it("renders large variant", () => {
            render(<Heading variant="large">Large Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-variant", "large");
        });

        it("applies default medium variant when not specified", () => {
            render(<Heading>Default Variant</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-variant", "medium");
        });
    });

    describe("Combined Props", () => {
        it("renders h2 with small variant", () => {
            render(
                <Heading as="h2" variant="small">
                    H2 Small
                </Heading>,
            );
            const heading = screen.getByRole("heading", { level: 2 });
            expect(heading).toHaveAttribute("data-variant", "small");
        });

        it("renders h3 with large variant", () => {
            render(
                <Heading as="h3" variant="large">
                    H3 Large
                </Heading>,
            );
            const heading = screen.getByRole("heading", { level: 3 });
            expect(heading).toHaveAttribute("data-variant", "large");
        });

        it("renders h4 with medium variant", () => {
            render(
                <Heading as="h4" variant="medium">
                    H4 Medium
                </Heading>,
            );
            const heading = screen.getByRole("heading", { level: 4 });
            expect(heading).toHaveAttribute("data-variant", "medium");
        });
    });

    describe("Custom Props", () => {
        it("applies custom className", () => {
            render(<Heading className="custom-class">Custom Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveClass("custom-class");
        });

        it("forwards additional HTML attributes", () => {
            render(
                <Heading id="custom-id" data-testid="test-heading">
                    With Attributes
                </Heading>,
            );
            const heading = screen.getByTestId("test-heading");
            expect(heading).toHaveAttribute("id", "custom-id");
        });
    });

    describe("Ref Forwarding", () => {
        it("forwards ref to heading element", () => {
            const ref = React.createRef<HTMLHeadingElement>();
            render(<Heading ref={ref}>Heading with ref</Heading>);
            expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
            expect(ref.current?.tagName).toBe("H1");
        });

        it("forwards ref to h2 element", () => {
            const ref = React.createRef<HTMLHeadingElement>();
            render(
                <Heading as="h2" ref={ref}>
                    H2 with ref
                </Heading>,
            );
            expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
            expect(ref.current?.tagName).toBe("H2");
        });

        it("forwards ref to h3 element", () => {
            const ref = React.createRef<HTMLHeadingElement>();
            render(
                <Heading as="h3" ref={ref}>
                    H3 with ref
                </Heading>,
            );
            expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
            expect(ref.current?.tagName).toBe("H3");
        });
    });

    describe("Accessibility", () => {
        it("has correct role", () => {
            render(<Heading>Accessible Heading</Heading>);
            expect(screen.getByRole("heading")).toBeInTheDocument();
        });

        it("supports aria attributes", () => {
            render(
                <Heading aria-label="Custom label" aria-describedby="desc-1">
                    ARIA Heading
                </Heading>,
            );
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("aria-label", "Custom label");
            expect(heading).toHaveAttribute("aria-describedby", "desc-1");
        });

        it("maintains semantic heading hierarchy", () => {
            const { container } = render(
                <div>
                    <Heading as="h1">Main Title</Heading>
                    <Heading as="h2">Subtitle</Heading>
                    <Heading as="h3">Section</Heading>
                </div>,
            );
            const headings = container.querySelectorAll("h1, h2, h3");
            expect(headings).toHaveLength(3);
            expect(headings[0].tagName).toBe("H1");
            expect(headings[1].tagName).toBe("H2");
            expect(headings[2].tagName).toBe("H3");
        });
    });

    describe("Content Rendering", () => {
        it("renders text children", () => {
            render(<Heading>Simple Text</Heading>);
            expect(screen.getByText("Simple Text")).toBeInTheDocument();
        });

        it("renders React element children", () => {
            render(
                <Heading>
                    <span data-testid="child">Child Element</span>
                </Heading>,
            );
            expect(screen.getByTestId("child")).toBeInTheDocument();
        });

        it("renders multiple children", () => {
            render(
                <Heading>
                    Text <strong>Bold</strong> <em>Italic</em>
                </Heading>,
            );
            const heading = screen.getByRole("heading");
            expect(heading).toHaveTextContent("Text Bold Italic");
            expect(heading.querySelector("strong")).toBeInTheDocument();
            expect(heading.querySelector("em")).toBeInTheDocument();
        });

        it("renders long text content", () => {
            const longText =
                "This is a very long heading that demonstrates how the component handles longer text content without any issues";
            render(<Heading>{longText}</Heading>);
            expect(screen.getByText(longText)).toBeInTheDocument();
        });
    });

    describe("Display Name", () => {
        it("has correct display name", () => {
            expect(Heading.displayName).toBe("Heading");
        });
    });

    describe("Data Attributes", () => {
        it("sets data-variant attribute", () => {
            render(<Heading variant="large">Test</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading.dataset.variant).toBe("large");
        });

        it("updates data-variant based on prop", () => {
            const { rerender } = render(<Heading variant="small">Test</Heading>);
            let heading = screen.getByRole("heading");
            expect(heading.dataset.variant).toBe("small");

            rerender(<Heading variant="large">Test</Heading>);
            heading = screen.getByRole("heading");
            expect(heading.dataset.variant).toBe("large");
        });

        it("supports custom data attributes", () => {
            render(
                <Heading data-custom="value" data-test-id="123">
                    Custom Data
                </Heading>,
            );
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("data-custom", "value");
            expect(heading).toHaveAttribute("data-test-id", "123");
        });
    });

    describe("Event Handlers", () => {
        it("handles onClick event", () => {
            const handleClick = jest.fn();
            render(<Heading onClick={handleClick}>Click me</Heading>);
            const heading = screen.getByRole("heading");
            heading.click();
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it("handles onMouseEnter event", () => {
            const handleMouseEnter = jest.fn();
            render(<Heading onMouseEnter={handleMouseEnter}>Hover me</Heading>);
            const heading = screen.getByRole("heading");
            const event = new MouseEvent("mouseenter", { bubbles: true });
            heading.dispatchEvent(event);
            expect(handleMouseEnter).toHaveBeenCalledTimes(1);
        });

        it("handles onFocus event", () => {
            const handleFocus = jest.fn();
            render(
                <Heading tabIndex={0} onFocus={handleFocus}>
                    Focus me
                </Heading>,
            );
            const heading = screen.getByRole("heading");
            heading.focus();
            expect(handleFocus).toHaveBeenCalledTimes(1);
        });
    });

    describe("Additional Props", () => {
        it("applies title attribute for tooltips", () => {
            render(<Heading title="Tooltip text">Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("title", "Tooltip text");
        });

        it("supports id for anchor links", () => {
            render(<Heading id="section-1">Section Heading</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("id", "section-1");
        });

        it("supports tabIndex for focus management", () => {
            render(<Heading tabIndex={-1}>Non-focusable</Heading>);
            const heading = screen.getByRole("heading");
            expect(heading).toHaveAttribute("tabIndex", "-1");
        });
    });
});
