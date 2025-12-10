import type { StoryFn, Meta } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: { language: "tsx" },
      canvas: { sourceState: "shown" }
    }
  }
} as Meta<typeof Spinner>;

export const Default: StoryFn<typeof Spinner> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Sizes</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </div>
  </div>
);

export const Playground: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

Playground.parameters = {
  docs: {
    source: {
      type: "code",
      code: "<Spinner {...args} />",
      language: "tsx",
    },
  },
};

Playground.args = {
  size: "medium",
};

Playground.argTypes = {
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large"],
  },
};

Playground.parameters = {
  layout: "centered",
};