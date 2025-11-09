import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    webpackFinal: async (config) => {
        if (config.resolve?.extensions) {
            config.resolve.extensions.push(".ts", ".tsx");
        }

        // SASS
        if (config.module?.rules) {
            config.module.rules.push({
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: /\.module\.scss$/,
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // sourceMap: true,
                        },
                    },
                ],
            });
        }

        return config;
    },
};
export default config;
