import type { StoryFn, Meta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
    title: "Components/Heading",
    component: Heading,
} as Meta<typeof Heading>;

export const Default = () => (
    <Heading as="h1" variant="medium">
        Default Heading
    </Heading>
);

export const Playground: StoryFn<typeof Heading> = (args) => (
    <Heading {...args}>Playground</Heading>
);

Playground.args = {
    as: "h2",
    variant: "medium",
};

Playground.argTypes = {
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
        control: false,
        table: {
            disable: true,
        },
    },
};

Playground.parameters = {
    layout: "centered",
};
