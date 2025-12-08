import type { StoryFn } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Components/Text/Features",
    parameters: {
        layout: "centered",
    },
};

// Large Size
export const LargeSize: StoryFn<typeof Text> = () => <Text size="large">Large Text Variant</Text>;

// Medium Size
export const MediumSize: StoryFn<typeof Text> = () => (
    <Text size="medium">Medium Text Variant</Text>
);

// Small Size
export const SmallSize: StoryFn<typeof Text> = () => <Text size="small">Small Text Variant</Text>;

// Light Weight
export const LightWeight: StoryFn<typeof Text> = () => (
    <Text weight="light">Light Text Weight</Text>
);

// Normal Weight
export const NormalWeight: StoryFn<typeof Text> = () => (
    <Text weight="normal">Normal Text Weight</Text>
);

// Medium Weight
export const MediumWeight: StoryFn<typeof Text> = () => (
    <Text weight="medium">Medium Text Weight</Text>
);

// Semibold Weight
export const SemiboldWeight: StoryFn<typeof Text> = () => (
    <Text weight="semibold">Semibold Text Weight</Text>
);

// Bold Weight
export const BoldWeight: StoryFn<typeof Text> = () => <Text weight="bold">Bold Text Weight</Text>;
