import type { StoryFn } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner/Features",
};

export const Basic: StoryFn<typeof Spinner> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Spinner />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
);