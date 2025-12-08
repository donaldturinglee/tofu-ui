import type { StoryFn, Meta } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
} as Meta<typeof Text>;

export const Default = () => <Text>Default Text</Text>;

export const Playground: StoryFn<typeof Text> = (args) => <Text {...args}>Playground</Text>;

Playground.args = {
    as: "span",
    size: "medium",
    weight: "normal",
};

Playground.argTypes = {
    as: {
        type: "string",
    },
    size: {
        control: {
            type: "radio",
        },
        options: ["small", "medium", "large"],
        description: "Text size variant",
    },
    weight: {
        control: {
            type: "radio",
        },
        options: ["light", "normal", "medium", "semibold", "bold"],
        description: "Font weight",
    },
    ref: {
        controls: false,
        table: {
            disable: true,
        },
    },
};

Playground.parameters = {
    layout: "centered",
};
