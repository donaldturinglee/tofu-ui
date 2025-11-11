import type { StoryFn } from "@storybook/react";
import { AccessibilityIcon } from "./Icon";

export default {
    title: "Components/Icon/Features",
};

export const Accessibility: StoryFn<typeof AccessibilityIcon> = () => (
    <AccessibilityIcon size={24} />
);
