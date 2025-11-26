import type { StoryFn, Meta } from "@storybook/react";
import { Heading } from "./Heading";
import type { HeadingProps } from "./Heading.types";

export default {
    title: "Components/Heading",
    component: Heading,
} as Meta<typeof Heading>;

export const Default: StoryFn<typeof Heading> = () => (
    <Heading as="h2" variant="medium">
        Heading
    </Heading>
);

export const Playground: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Playground.args = {
    children: "Heading",
    as: "h2",
    variant: "medium",
};

Playground.argTypes = {
    children: {
        control: "text",
        description: "Heading content",
    },
    as: {
        control: {
            type: "select",
        },
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        description: "HTML element type for the heading",
    },
    variant: {
        control: {
            type: "radio",
        },
        options: ["small", "medium", "large"],
        description: "Heading size variant",
    },
    ref: {
        table: {
            disable: true,
        },
    },
};

Playground.parameters = {
    layout: "centered",
};
