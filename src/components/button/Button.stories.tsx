import type { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";
import { AddIcon, ArrowRightIcon } from "../icon";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: { language: "tsx" },
      canvas: { sourceState: "shown" }
    }
  }
} as Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Variants</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button size="medium" shape="round">Default</Button>
        <Button variant="primary" size="medium" shape="round">Primary</Button>
        <Button variant="solid" size="medium" shape="round">Solid</Button>
        <Button variant="soft" size="medium" shape="round">Soft</Button>
        <Button variant="surface" size="medium" shape="round">Surface</Button>
        <Button variant="outline" size="medium" shape="round">Outline</Button>
        <Button variant="ghost" size="medium" shape="round">Ghost</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Intents</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button intent="success" variant="solid" size="medium" shape="round">Success</Button>
        <Button intent="warning" variant="solid" size="medium" shape="round">Warning</Button>
        <Button intent="danger" variant="solid" size="medium" shape="round">Danger</Button>
        <Button intent="info" variant="solid" size="medium" shape="round">Info</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Sizes</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button size="small" variant="solid" shape="round">Small</Button>
        <Button size="medium" variant="solid" shape="round">Medium</Button>
        <Button size="large" variant="solid" shape="round">Large</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Disabled</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="outline" size="medium" shape="round" disabled>Disabled</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Inactive</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="outline" size="medium" shape="round" inactive>Inactive</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Loading</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="soft" size="medium" shape="round" isLoading>Loading</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Shapes</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="solid" size="medium" shape="square">Square</Button>
        <Button variant="solid" size="medium" shape="round">Round</Button>
        <Button variant="solid" size="medium" shape="circle" aria-label="Circle" />
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Block & Visuals</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button leadingVisual={<AddIcon size={16} />} variant="solid">Leading</Button>
        <Button trailingVisual={<ArrowRightIcon size={16} />} variant="outline">Trailing</Button>
        <Button
          leadingVisual={<AddIcon size={16} />}
          trailingVisual={<ArrowRightIcon size={16} />}
          variant="soft"
        >
          Both
        </Button>
        <Button leadingVisual={<AddIcon size={16} />} aria-label="Add" variant="ghost" />
      </div>

      <div style={{ display: "grid", gap: "1rem", width: 320, marginTop: "0.75rem" }}>
        <Button block variant="solid">Block Button</Button>
        <Button block variant="outline" leadingVisual={<AddIcon size={16} />}>
          Block With Icon
        </Button>
      </div>
    </div>
  </div>
);

export const Playground: StoryFn<typeof Button> = (args) => <Button {...args} />;
Playground.parameters = {
  docs: {
    source: {
      type: "code",
      code: "<Button {...args} />",
      language: "tsx",
    },
  },
};

Playground.args = {
  children: <span>Button</span>,
  variant: "default",
  intent: "info",
  size: "medium",
  shape: "round",
  className: "w-100",
  disabled: false,
  inactive: false,
  isLoading: false,
  highContrast: false,
};

Playground.argTypes = {
  children: { control: { type: "text" } },
  variant: {
    control: { type: "select" },
    options: ["default", "primary", "solid", "soft", "surface", "outline", "ghost"],
  },
  intent: {
    control: { type: "select" },
    options: ["success", "warning", "danger", "info"],
  },
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large"],
  },
  shape: {
    control: { type: "select" },
    options: ["square", "round", "circle"],
  },
  block: { control: { type: "boolean" } },
  leadingVisual: { control: false },
  trailingVisual: { control: false },
  highContrast: { control: { type: "boolean" } },
  disabled: { control: { type: "boolean" } },
  inactive: { control: { type: "boolean" } },
  isLoading: { control: { type: "boolean" } },

};

Playground.parameters = {
  layout: "centered",
};