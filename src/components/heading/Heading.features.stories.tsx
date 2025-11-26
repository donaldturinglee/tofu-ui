import type { StoryFn } from "@storybook/react";
import { Heading } from "./Heading";

export default {
    title: "Components/Heading/Features",
    parameters: {
        layout: "centered",
    },
};

// Large Variant
export const Large: StoryFn<typeof Heading> = () => (
    <Heading variant="large">Large Heading Variant</Heading>
);

// Medium Variant
export const Medium: StoryFn<typeof Heading> = () => (
    <Heading variant="medium">Medium Heading Variant</Heading>
);

// Small Variant
export const Small: StoryFn<typeof Heading> = () => (
    <Heading variant="small">Small Heading Variant</Heading>
);
