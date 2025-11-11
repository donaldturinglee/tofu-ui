import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    "Stories",
                    ["Introduction", "*"],
                    "Components",
                    [
                        "Button",
                        ["Default", "Playground", "Features"],
                        "Icon",
                        ["Default", "Playground", "Features"],
                    ],
                ],
            },
        },
    },
};

export default preview;
